

/**
 * Treehouse FSJS Techdegree - Project Warm Up
 * Simple Search - JS
 * Developed by: Robert Manolis - Student Success Specialist
 *               Milwaukie, OR - 2019
 */

 "use strict";


 /* Variables to reference the `input` and search `button` elements */
 const search = document.querySelector('#search-input');
 const submit = document.querySelector('#submit');
 
 
 /* Variable to store HTMLCollection of `table` cells */
 const tableCells = document.querySelectorAll('td');
 
 // Helpful log statements
 console.log(search);
 console.log(submit);
 console.log(tableCells);
 
 
 // YOUR CODE GOES HERE!!! Do the steps below to complete this challenge
 
 // 1. Create a function to perfrom your search and give it two `parameters` — searchInput, names.  Inside the function's code block:
   // 1a. Create two `console.log` statements to log out the `parameters` — searchInput, names 
   // 1b. Loop over the `names` parameter
   // 1b. Remove the 'match' class name from each `names[i]` 
   // 1c. Create a conditional that checks two conditions:
     // 1ca. If the `searchInput.value.length` does not equal the digit zero AND `names[i].textContent.toLowerCase()` `includes` `searchInput.value.toLowerCase())`
       // 1cb. Add the class name 'match` to `names[i]` 
       const searchFunction = ((searchInput, names)=>{
         console.log(searchInput);
         console.log(names);
         names.forEach((name)=>{
           name.className = "";
           if (searchInput.value.length !==0 && name.textContent.toLowerCase().includes(searchInput.value.toLowerCase())){
             name.className="match";
           }
         });
       });
   
 // 2. Call the search function in the callbacks of the event listeners below, being sure pass in the `search` and `tableCells` arguments
 
 
 /**
  * Event listeners for buttons - Invoke your functions in the body of the callbacks in the event listneres below
  */
 
 /* submit listener */
 submit.addEventListener('click', (event) => {
   event.preventDefault();
 
   // Invoke your setAction function here - Arguments: search, tableCells
   searchFunction(search, tableCells);
  
 
   // Helpful log statement to test function
   console.log('Submit button is functional!');
 });
 
 /* submit listener */
 search.addEventListener('keyup', () => {
 
   // Invoke your setAction function here - Arguments: search, tableCells
   searchFunction(search, tableCells);
 
   // Helpful log statement to test function
   console.log('Keyup event on the Search input is functional!');
 });