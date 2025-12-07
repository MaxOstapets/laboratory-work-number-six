let userNumber = document.querySelector(".input")
let title = document.querySelector(".title")
let list = document.querySelector(".list")
let button = document.querySelector(".button")

button.addEventListener("click", () => {
    const number = userNumber.value
    title.innerText = `Your number: ${number}`
    list.innerHTML = ""
    for (let i = 1; i < 11; i++) {
        const item = document.createElement("li")
        item.classList.add("item")
        item.innerText = `${number} x ${i} = ${number * i}`
        list.append(item)
    }
})