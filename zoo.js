var animalPopulation=0;
var favoriteFood = "bacon";
function sleep(name){
    console.log(name + " sleeps for 8 hours");
}
function run(){

    var tigger = new Tiger("Tigger");
    tigger.eat("meat");
    //tigger.eat("kibble");

    var pooh = new Bear("Pooh");
    pooh.eat("fish");
    pooh.eat("meat");

    var rarity = new Unicorn("Rarity");
    rarity.eat("marshmallows");

    var gemma = new Giraffe("Gemma");
    gemma.eat("meat");
    gemma.eat("leaves");

    var stinger = new Bee("Stinger");
    stinger.eat("ice cream");
    stinger.eat("pollen")

    var zoebot = new Zookeeper("Zoebot");
    var animals = [tigger, pooh, rarity, gemma, stinger];
    zoebot.feedAnimals(animals, "skinny pop");

    console.log(Animal.getPopulation());
    tigger.getPopulation;
}
// function eat(name,food){
//     console.log(name + " eats " + food);
//     food == favoriteFood ? console.log("YUM!!" + name +" wants more " + food ): sleep(name);
// }


class Animal{
    constructor(name,favoriteFood){
        this.name=name;
        this.favoriteFood= favoriteFood;
        animalPopulation++;
    }
    sleep(){
        console.log(this.name + " sleeps for 8 hours");
    }
    eat(food){
        console.log(this.name + " eats " + food);
        if(food == this.favoriteFood) {
            console.log("YUM!!" + this.name + " wants more " + food);
        } else {
            this.sleep();
        }
    }
    static getPopulation(){
        return animalPopulation;
    }
}

class Tiger extends Animal{
    constructor(name){
        super(name ,"meat");
    }
}

class Bear extends Animal{
    constructor(name){
        super(name, "fish")
    }
    sleep(){
        console.log(this.name + " hibernates for 4 months")
    }
}

class Unicorn extends Animal{
    constructor(name){
        super(name,"marshmallows");
    }
    eat(food){
        console.log(this.name + " eats " + food);
        if(food == this.favoriteFood) {
            console.log("YUM!!" + this.name + " wants more " + food);
        }
    }
    sleep(){
        console.log(this.name + " sleeps in a cloud");
    }
}

class Giraffe extends Animal{
    constructor(name){
        super(name, "leaves");
    }
    eat(food){
        if(food!==this.favoriteFood){
            console.log("YUCK!" + this.name + " will not eat " + food);
            this.sleeps;
        }else{
            console.log(this.name + " eats " + food);
            console.log("YUM!!" + this.name +" wants more " + food);
        }
        this.sleeps;
    }
}

class Bee extends Animal{
    constructor(name){
        super(name,"pollen");
    }
    eat(food){
        if(food!==this.favoriteFood){
            console.log("YUCK!" + this.name + " will not eat " + food);
        }else{
            console.log(this.name + " eats " + food);
            console.log("YUM!!" + this.name +" wants more " + food);
            this.sleep();
        }
    }
    sleep(){
        console.log(this.name + " never sleeps");
    }
}

class Zookeeper{
    constructor(name){
        this.name =name;
    }
    feedAnimals(animals, food){
        console.log(this.name + " is feeding " + food + " to " + animals.length + " of " + animalPopulation + " total animals");
        for(var i=0; i<animals.length; i++){
            animals[i].eat(food);
        }

    }
}