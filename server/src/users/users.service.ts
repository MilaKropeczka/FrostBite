import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { InjectModel, HydratedDocument } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { hash } from 'bcrypt';
import { randomUUID } from 'crypto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userModel.find().lean();
  }

  async findById(userId: string): Promise<User> {
    const user = await this.userModel.findOne({ userId }).lean();
    if (!user) throw new NotFoundException(`User ${userId} does not exist`);
    return user;
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.userModel.findOne({ email }).lean();
    if (!user) throw new NotFoundException(`User ${email} does not exist`);
    return user;
  }
  async findByLogin(login: string): Promise<User> {
    const user = await this.userModel.findOne({ login }).lean();
    if (!user) throw new NotFoundException(`User ${login} does not exist`);
    return user;
  }

  async create(user: User): Promise<HydratedDocument<User>> {
    const alreadyExists = await this.userModel.exists({ email: user.email });

    if (alreadyExists) {
      throw new ConflictException('User with that email already exists');
    }
    const passwordHash = await hash(user.password, 10);
    const userToCreate: User = {
      ...user,
      userId: randomUUID(),
      password: passwordHash,
    };
    return this.userModel.create(userToCreate);
  }

  async updateById(
    userId: string,
    userUpdates: UpdateUserDto,
  ): Promise<HydratedDocument<User>> {
    return this.userModel.findOneAndUpdate({ userId }, userUpdates, {
      new: true,
    });
  }

  async removeById(userId: string): Promise<HydratedDocument<User>> {
    return this.userModel.findOneAndDelete({ userId });
  }
}
