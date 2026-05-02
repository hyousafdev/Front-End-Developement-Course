"use strict";
// 🔥 CLASSES + ACCESS MODIFIERS IN TYPESCRIPT (ONE SHOT PRACTICE FILE)
// 1️⃣ BASIC CLASS
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello ${this.name}`);
    }
}
const user1 = new User("Hassan", 22);
user1.greet();
// 👉 INTERVIEW QUESTION:
// Q: What is class?
// A: Blueprint for creating objects
// 2️⃣ PUBLIC ACCESS MODIFIER
class PublicExample {
    constructor(name) {
        this.name = name;
    }
}
const pub = new PublicExample("Ali");
console.log(pub.name); // ✅ accessible everywhere
// 👉 NOTE:
// public is default (you can skip writing it)
// 3️⃣ PRIVATE ACCESS MODIFIER
class PrivateExample {
    constructor(secret) {
        this.secret = secret;
    }
    getSecret() {
        return this.secret;
    }
}
const priv = new PrivateExample("hidden");
// console.log(priv.secret); ❌ ERROR (private)
console.log(priv.getSecret()); // ✅ access via method
// 👉 INTERVIEW QUESTION:
// Q: What is private?
// A: Accessible only inside the class
// 4️⃣ PROTECTED ACCESS MODIFIER
class Parent {
    constructor(value) {
        this.value = value;
    }
}
class Child extends Parent {
    showValue() {
        console.log(this.value); // ✅ accessible in child
    }
}
const child = new Child(100);
child.showValue();
// console.log(child.value); ❌ ERROR (not accessible outside)
// 👉 INTERVIEW QUESTION:
// Q: protected vs private?
// A:
// private → only inside class
// protected → class + child classes
// 5️⃣ SHORTCUT PROPERTY DECLARATION
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getPrice() {
        return this.price;
    }
}
const prod = new Product("Laptop", 1000);
console.log(prod.name);
// console.log(prod.price); ❌ ERROR
console.log(prod.getPrice());
// 👉 REAL WORLD:
// cleaner class code
// 6️⃣ INHERITANCE (VERY IMPORTANT)
class Animal {
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        console.log("Animal makes sound");
    }
}
class Dog extends Animal {
    bark() {
        console.log(`${this.name} is barking`);
    }
}
const dog = new Dog("Tommy");
dog.makeSound();
dog.bark();
// 👉 REAL WORLD:
// base class → extended features
// 7️⃣ REAL WORLD EXAMPLE (USER SYSTEM)
class Account {
    constructor(username, password, role) {
        this.username = username;
        this.password = password;
        this.role = role;
    }
    checkPassword(pass) {
        return this.password === pass;
    }
}
class Admin extends Account {
    showRole() {
        console.log(this.role); // ✅ protected access
    }
}
const admin = new Admin("Hassan", "1234", "ADMIN");
console.log(admin.username);
// console.log(admin.password); ❌ ERROR
admin.showRole();
// 👉 REAL WORLD:
// authentication system
// 🧠 INTERVIEW QUESTIONS SUMMARY
// Q: public vs private vs protected?
// A:
// public → accessible everywhere
// private → only inside class
// protected → class + subclasses
// 🚀 END OF FILE
