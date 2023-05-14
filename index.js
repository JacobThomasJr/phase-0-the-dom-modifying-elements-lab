// Remove the DOM node 'main#main'
const mainNode = document.querySelector('main#main');
mainNode.remove();

// Create a new <h1> element and assign it to the 'newHeader' variable
const newHeader = document.createElement('h1');

// Set the id of the 'newHeader' element to 'victory'
newHeader.id = 'victory';

// Set the text content of the 'newHeader' element to "YOUR-NAME is the champion"
newHeader.textContent = "Jacob Thomas is the champion";

// Append the 'newHeader' element to the document body
document.body.appendChild(newHeader);
