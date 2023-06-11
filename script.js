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
    console.log(sum(array))
    // console.log(sum(sub(div(mult(string))))) 
    return 
}
function sum(string) {
    indice = string.indexOf("+")

    if (indice !== -1) {
        let newString = `${string.slice(0, indice-1).join("")}${Number(string[indice-1])+Number(string[indice+1])}${string.slice(indice+2).join("")}`
        newString = sum(newString.match(/[/x+-]|[^/x+-]+/g))
        return newString
    }
    return string.join("")
}
