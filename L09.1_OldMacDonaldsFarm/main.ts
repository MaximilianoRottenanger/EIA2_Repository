let animals: Animal[];
let stock: Stock;

window.addEventListener("load", handleLoad);

function handleLoad(): void {
    let cow: Animal = new Animal("Cow", "hay", "Muh!", 7);
    animals.push(cow);

    let sheep: Animal = new Animal("Sheep", "grass", "Meeeh!", 2);
    animals.push(sheep);

    let pig: Animal = new Animal("Pig", "garbage", "Oink!", 5);
    animals.push(pig);

    let fox: Animal = new Animal("Fox", "Catfood", "bark!", 2);
    animals.push(fox);

    let pigeon: Animal = new Animal("Pigeon", "Breadcrums", "Gurru!", 10);

    let garbage: Food = new Food("garbage", "kilogram");
    stock.push(garbage)

    let hay: Food = new Food("hay", "kilogram");
    stock.push(hay);

    let grass: Food = new Food("grass", "kilogram");
    stock.push(grass);

    let catFood: Food= new Food("catfood", "kilogram");
    stock.push(catFood);

    let breadCrums: Food = new Food("breadcrums", "kilogram");
    stock.push.(grass);

    stock = new Stock() stock

    createSong();
}


export class Animal {
    animalName: string;
    food: string;
    sound: string;
    amount: number;

    constructor(_name: string, _food: string, _sound: string, _amount: number) {
        this.animalName = _name;
        this.food = _food;
        this.sound = _sound;
        this.amount = _amount;
    }
    sing(): void { }
    eat(): void { }
}

export class Food {
    foodName: string;
    amount: string;

    constructor(_name: string, _amount: string) {
        this.foodName = _name;
        this.amount = _amount;
    }
}


export class Stock {
    array: Food;

    constructor(_array: Food) {
        this.array = _array;
    }
    adjustFood(_name): void { };
}

function createSong(): void{
    
}