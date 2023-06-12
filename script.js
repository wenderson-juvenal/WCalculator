let buttons = document.querySelectorAll("#buttons button:not(#clear, #equal)"),
    result = document.querySelector("#result"),
    equal = document.querySelector("#equal"),
    clear = document.querySelector("#clear"),
    operators = document.querySelectorAll(".operator"),
    numbers = document.querySelectorAll(".number")

// clicar no botão adiciona texto no result
buttons.forEach(button => {
    button.addEventListener("click", () => {
        result.textContent += button.textContent
    })
})

// botao apagar
clear.addEventListener("click", () => {
    result.textContent = ""
})

equal.addEventListener("click", () => {
    Calculator(result.textContent)
})
function Calculator(string) {
    let array = string.match(/[/x+-]|[^/x+-]+/g)
    console.log(mult(array))
    // console.log(sum(sub(div(mult(string))))) 
    return 
}
function sumSub(string) {
    const addIndex = string.indexOf("+");
    const subIndex = string.indexOf("-");
  
    if (addIndex !== -1 && (addIndex < subIndex || subIndex === -1)) {
        const newString =
            string.slice(0, addIndex-1).join("")+
            (Number(string[addIndex - 1]) +
            Number(string[addIndex + 1]))+
            string.slice(addIndex + 2).join("");
        return sumSub(newString.match(/[/x+-]|[^/x+-]+/g));
    } else if (subIndex !== -1) {
        const newString =
            string.slice(0, subIndex-1).join("")+
            (Number(string[subIndex - 1]) -
            Number(string[subIndex + 1]))+
            string.slice(subIndex + 2).join("");

        return sumSub(newString.match(/[/x+-]|[^/x+-]+/g));
    } else {
        return string;
    }  
}
function multDiv(string) {
    const multIndex = string.indexOf("x");
    const divIndex = string.indexOf("/");
  
    if (multIndex !== -1 && (multIndex < divIndex || divIndex === -1)) {
        const newString =
            string.slice(0, multIndex-1).join("")+
            (Number(string[multIndex - 1]) *
            Number(string[multIndex + 1]))+
            string.slice(multIndex + 2).join("");
        return multDiv(newString.match(/[/x+-]|[^/x+-]+/g));
    } else if (divIndex !== -1) {
        const newString =
            string.slice(0, divIndex-1).join("")+
            (Number(string[divIndex - 1]) /
            Number(string[divIndex + 1]))+
            string.slice(divIndex + 2).join("");

        return multDiv(newString.match(/[/x+-]|[^/x+-]+/g));
    } else {
        return string;
    }  
}