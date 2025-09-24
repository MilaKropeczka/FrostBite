import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { randomUUID } from 'crypto';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ required: true, unique: true, default: () => randomUUID() })
  userId: string;

  @Prop({ required: true, trim: true, lowercase: true })
  login: string;

  @Prop({ required: true, trim: true, lowercase: true })
  name: string;

  @Prop({ required: true, trim: true, lowercase: true })
  surname: string;

  @Prop({ required: true, index: { unique: true }, lowercase: true })
  email: string;

  @Prop({ required: true })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
