/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */
class Sofa {
  //propertis
  constructor(name, size, color, softness, weight) {
    this.name = name;
    this.size = size;
    this.color = color;
    this.softness = softness;
    this.weight = weight;
    this.isClean = true;
  }

  //methods
  sit() {
    console.log(`Estas ahora sentando en la Sofa ${this.name}`);
    this.isClean = false; // sentarse hace sucio
  }

  //method to clean the sofa
  clean() {
    this.isClean = true;
    console.log(`The ${this.name} esta limpiado`);
  }
  //cambiar color
  recolor(newColor) {
    this.color = newColor;
    console.log(`The ${this.name} sofa esta en otro color ${newColor}`);
  }
}

// hasiendo nuevos objectos
const sofaSala = new Sofa("Mairi", "pequena", "azul", "duro");

// Testing
console.log(sofaSala);
console.log(sofaSala.sit);
sofaSala.sit();
