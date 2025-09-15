/**
 * Use template literals to output HTML
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 *
 */
import Backpack from "./Backpack.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST"
);
const content = `
 <main>
      <article>
        <h1>${everydayPack.name}</h1>
        <ul>
          <li>${everydayPack.volume}/li>
          <li>${everydayPack.color}</li>
          <li>${everydayPack.pocketNum}</li>
          <li>${everydayPack.strapLengthL}</li>
          <li>${everydayPack.strapLengthR}</li>
          <li>${everydayPack.lidOpen}/li>
          <li>${everydayPack.dateAcquired}</li>
        </ul>
      </article>
    </main>`;

document.body.innerHTML = content;

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);
console.log("Days since aquired:", everydayPack.backpackAge());
