const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
 
  if (!dividend || !divider) {   //if statement to check if inputs are empty 
    result.innerText = 'Division not performed. Both values are required in inputs. Try again'; 
    return;
  }

  try {   // the try statement throws an error if the divider is equal to zero. 
    if (divider == 0) {  
      throw new Error('');
      
    }
    const divisionResult = dividend / divider; // declared the divisionResult to handle the calculation
    result.innerText = Math.trunc(divisionResult); //called the Match.trunc which truncates the fractionalpart and assigned the divisionResult variable in its parameters. 
    } 

  catch (error) {   // the catch statement sets the innerText to the indicate an invalid number and logs the error to the console. 
    result.innerText = 'Division not performed. Invalid number provided. Try again.';
    console.error(error);
  }
});



     
