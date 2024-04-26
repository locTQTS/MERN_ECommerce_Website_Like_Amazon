import { User } from "./models/userModel";
import { Product } from "./models/productModel";
import bcrypt from 'bcryptjs'
export const sampleProduct: Product[] = [
    {
        name: 'Nike slim shirt',
        slug: 'Nike-slim-shirt',
        image: "../public/images/p1.jpg",
        category: 'shirt',
        brand: "Nike",
        price: 129,
        countInStock: 10,
        description: "Good shirt",
        rating: 4.5,
        numReviews: 10,
    },
    {
        name: 'Adias slim shirt',
        slug: 'Adias-slim-shirt',
        image: "../public/images/p2.jpg",
        category: 'shirt',
        brand: "Nike",
        price: 100,
        countInStock: 20,
        description: "inseat make shose they make shirt",
        rating: 4.0,
        numReviews: 10,
    },
    {
        name: 'lacoste free paint',
        slug: 'lacoste-free-paint',
        image: "../public/images/p3.jpg",
        category: 'Pants',
        brand: "lacoste",
        price: 220,
        countInStock: 0,
        description: "inseat make shose they make pant",
        rating: 4.8,
        numReviews: 17,
    },
    {
        name: 'Nike free paint',
        slug: 'Nike-free-paint',
        image: "../public/images/p4.jpg",
        category: 'Pants',
        brand: "Nike",
        price: 78,
        countInStock: 15,
        description: "inseat make shose they make pant",
        rating: 4.8,
        numReviews: 14,
    },
]
export const sampleUsers: User[] = [
    {
        name: 'Joe',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456'),
        isAdmin: true,
    },
    {
        name: 'John',
        email: 'user@example.com',
        password: bcrypt.hashSync('123456'),
        isAdmin: false,
    },
]