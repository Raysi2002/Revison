
///// Why you're not working brother ??


// const dom = document.querySelector("#container");
// dom.innerHTML = "<h1> Initial Text </h1>";

// dom.addEventListener("click", () => dom.innerHTML = "<h1>After click text</h1>");
// ^
// |
// |
// | worked fine

// -------------------------------------

// const dom = document.querySelector("#container");
// dom.innerHTML = "innerHTML hai be ye"

// dom.innerText = "Hello Guys";

// dom.textContent = "kya re kya dekh raha hai ?";

// console.log(dom.innerHTML);
// console.log(dom.innerText);
// console.log(dom.textContent);


//Styling -----> All the styling that can be done in css can also be done in js using .style.property 

//Example

// const dom = document.querySelector("#container");

// dom.style.backgroundColor = "white";
// dom.style.backgroundColor = "black";

//Different get and set method in dom

const dom = document.querySelector("#container");

const newElement = document.createElement("newElement");

newElement.innerHTML = `<h1> I am new Element </h1>`

dom.appendChild(newElement);

// dom.removeChild(newElement);

//getAttribute() method

const x = dom.getAttribute("h1");
console.log(x);