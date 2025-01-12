'use strict'
const cart = document.getElementById("cart")


function createCounter(name: string) {
    const rootElement = document.createElement("div");

    const title = document.createElement("h2");
    title.innerText = name;
    rootElement.appendChild(title)

    const counterElement = document.createElement("p");
    counterElement.className = "counter";
    counterElement.innerText = "0"
    rootElement.appendChild(counterElement)

    const minus = document.createElement("button");
    minus.className = "minus"
    minus.innerText = "-"
    rootElement.appendChild(minus)

    const plus = document.createElement("button");
    plus.className = "plus"
    plus.innerText = "+"
    rootElement.appendChild(plus)

    let counter = 0;

    plus.addEventListener("click", () => {
        counter = counter + 1;
        counterElement.innerHTML = String(counter);
    })

    minus.addEventListener("click", () => {
        counter = counter - 1;
        counterElement.innerHTML = String(counter);
    })

    return rootElement;   
}

const burger = createCounter("Burger");
cart?.appendChild(burger);

const cocain = createCounter("Coca-Cola");
cart?.appendChild(cocain);




document.querySelector("#submit").onclick = myClick;

function myClick() {
    let a = document.querySelector("#cartname").value;

    const newcart = createCounter(a);
    cart?.appendChild(newcart);
}

