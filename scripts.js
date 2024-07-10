const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  const divisionResult = dividend / divider; // declared the divisionResult to handle the calculation
  result.innerText = Math.trunc(divisionResult); //called the Match.trunc which truncates the fractionalpart and assigned the divisionResult variable in its parameters. 
});