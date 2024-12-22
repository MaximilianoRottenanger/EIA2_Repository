"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stock = exports.Food = exports.Animal = void 0;
let animals;
let stock;
window.addEventListener("load", handleLoad);
function handleLoad() {
    let cow = new Animal("Cow", "hay", "Muh!", 7);
    animals.push(cow);
    let sheep = new Animal("Sheep", "grass", "Meeeh!", 2);
    animals.push(sheep);
    let pig = new Animal("Pig", "garbage", "Oink!", 5);
    animals.push(pig);
    let fox = new Animal("Fox", "Catfood", "bark!", 2);
    animals.push(fox);
    let pigeon = new Animal("Pigeon", "Breadcrums", "Gurru!", 10);
    let garbage = new Food("garbage", "kilogram");
    stock.push(garbage);
    let hay = new Food("hay", "kilogram");
    stock.push(hay);
    let grass = new Food("grass", "kilogram");
    stock.push(grass);
    let catFood = new Food("catfood", "kilogram");
    stock.push(catFood);
    let breadCrums = new Food("breadcrums", "kilogram");
    stock.push.(grass);
    stock = new Stock();
    stock;
    createSong();
}
class Animal {
    animalName;
    food;
    sound;
    amount;
    constructor(_name, _food, _sound, _amount) {
        this.animalName = _name;
        this.food = _food;
        this.sound = _sound;
        this.amount = _amount;
    }
    sing() { }
    eat() { }
}
exports.Animal = Animal;
class Food {
    foodName;
    amount;
    constructor(_name, _amount) {
        this.foodName = _name;
        this.amount = _amount;
    }
}
exports.Food = Food;
class Stock {
    array;
    constructor(_array) {
        this.array = _array;
    }
    adjustFood(_name) { }
    ;
}
exports.Stock = Stock;
function createSong() {
}
//# sourceMappingURL=main.js.map