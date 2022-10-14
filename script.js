const container = document.querySelector("#container");
const p = document.createElement("p");
p.textContent = "Hey I'm red!";
p.style.color = "red";

const h3 = document.createElement("h3");
h3.textContent = "I'm a blue h3";
h3.style.color = "blue";

const div = document.createElement("div");
div.style.borderColor = "black";
div.style.backgroundColor = "pink";
const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";
const p2 = document.createElement("p");
p2.textContent = "ME TOO!";
container.appendChild(p);
container.appendChild(h3);

div.appendChild(h1);
div.appendChild(p2);
container.appendChild(div);

function alertFunction() {
  alert("YAY! YOU DID IT!");
}

const btn = document.querySelector("#btn");
btn.onclick = alertFunction;

const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", function (e) {
  e.target.style.background = "blue";
});

//next section

//buttons is a nodelist, not an array.
const buttons = document.querySelectorAll("button");

//we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  //for each one we add a click event listener
  button.addEventListener("click", () => {
    alert(button.id);
  });
});
