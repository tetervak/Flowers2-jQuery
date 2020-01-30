/* Alex Tetervak, Sheridan College, Ontario */
class Flower{

    constructor(name){
        this.name = name;
        this.label = Flower.capitalizeFirstLetter(name);
    }

    // make the first letter capital
    static capitalizeFirstLetter( /* string */ str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
}
export {Flower}
