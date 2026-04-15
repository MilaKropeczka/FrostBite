<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Product::truncate();

        $products = [
            ['id' => 1, 'name' => 'Chocolate', 'category' => 'Flavours', 'image' => '/1.jpg', 'price' => 5.9, 'stars' => 4.3],
            ['id' => 2, 'name' => 'Strawberry', 'category' => 'Flavours', 'image' => '/2.jpg', 'price' => 4.1, 'stars' => 4.5],
            ['id' => 3, 'name' => 'Mint', 'category' => 'Flavours', 'image' => '/3.jpg', 'price' => 3.99, 'stars' => 4.78],
            ['id' => 4, 'name' => 'Banana', 'category' => 'Flavours', 'image' => '/4.jpg', 'price' => 3.99, 'stars' => 4.85],
            ['id' => 5, 'name' => 'Blueberry', 'category' => 'Flavours', 'image' => '/5.jpg', 'price' => 3.59, 'stars' => 4.2],
            ['id' => 6, 'name' => 'Waffles (6)', 'category' => 'Desserts', 'image' => '/6.jpg', 'price' => 3.99, 'stars' => 3.95],
            ['id' => 7, 'name' => 'Waffles (7)', 'category' => 'Desserts', 'image' => '/7.jpg', 'price' => 3.59, 'stars' => 4.7],
            ['id' => 8, 'name' => 'Waffles (8)', 'category' => 'Desserts', 'image' => '/8.jpg', 'price' => 2.89, 'stars' => 5.0],
            ['id' => 9, 'name' => 'Waffles (9)', 'category' => 'Desserts', 'image' => '/9.jpg', 'price' => 2.0, 'stars' => 3.75],
            ['id' => 10, 'name' => 'Coffee', 'category' => 'Drinks', 'image' => '/10.jpg', 'price' => 4.3, 'stars' => 4.95],
            ['id' => 11, 'name' => 'Orange drink', 'category' => 'Drinks', 'image' => '/11.jpg', 'price' => 3.0, 'stars' => 4.52],
        ];

        foreach ($products as $product) {
            Product::create($product);
        }
    }
}
