let display = document.getElementById("display");

function clearDisplay() {
    display.innerText = "0";
}

function deleteLast() {
    display.innerText = display.innerText.slice(0, -1) || "0";
}

function appendNumber(number) {
    if (display.innerText === "0") {
        display.innerText = number;
    } else {
        display.innerText += number;
    }
}

function appendOperator(operator) {
    if (!isNaN(display.innerText.slice(-1))) {
        display.innerText += " " + operator + " ";
    }
}

function calculate() {
    try {
        display.innerText = eval(display.innerText.replace(/×/g, "*").replace(/÷/g, "/"));
    } catch {
        display.innerText = "Erro";
    }
}

function toggleTheme() {
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");
}

function sqrt() {
    display.innerText = Math.sqrt(parseFloat(display.innerText)).toFixed(2);
}

function square() {
    display.innerText = Math.pow(parseFloat(display.innerText), 2).toFixed(2);
}

function toggleSign() {
    display.innerText = parseFloat(display.innerText) * -1;
}
