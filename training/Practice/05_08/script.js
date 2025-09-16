/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at adding, removing, or modifying
 * attributes, classes, and inline styles on elements.
 */
// Function to handle lid toggle
const lidToggle = (e) => {
  const button = e.target;
  const backpack = button.closest(".backpack");
  const lidStatus = backpack.querySelector(".backpack__lid span");

  if (lidStatus.textContent === "closed") {
    lidStatus.textContent = "open";
    button.textContent = "Close lid";
  } else {
    lidStatus.textContent = "closed";
    button.textContent = "Open lid";
  }
};

// Function to handle strap length updates
const updateStrapLength = (e) => {
  e.preventDefault(); // Prevent the default form submission behavior

  const form = e.target;
  const input = form.querySelector("input");
  const strapSpan = form.closest(".backpack__strap").querySelector("span");
  const newLength = input.value;

  if (newLength) {
    strapSpan.textContent = `${newLength} inches`;
    input.value = ""; // Clear the input field after updating
  }
};

// Select all buttons with the class 'lid-toggle'
const lidButtons = document.querySelectorAll(".lid-toggle");

// Add a click event listener to each lid button
lidButtons.forEach((button) => {
  button.addEventListener("click", lidToggle);
});

// Select all forms for strap length updates
const strapForms = document.querySelectorAll(".backpack__strap form");

// Add a submit event listener to each strap form
strapForms.forEach((form) => {
  form.addEventListener("submit", updateStrapLength);
});
