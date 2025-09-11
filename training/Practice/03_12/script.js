/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */
class Sofa {
  constructor(name, size, color, softnes) {
    this.name = name;
    this.size = size;
    this.color = color;
    this.softnes = softnes;
  }
}

export default Sofa;
