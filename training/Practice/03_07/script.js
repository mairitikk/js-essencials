/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

/**uus object */
const vihik = {
  name: "paevik",
  size: 200,
  varv: "roosa",
  big: {
    korgus: 10,
    laius: 5,
  },
};

console.log(vihik);
console.log(vihik.size.valueOf());
const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  toString: function () {
    return `Backpack: ${this.name}, Volume: ${this.volume} liters`;
  },
};

console.log(backpack.toString());
