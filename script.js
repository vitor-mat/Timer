function createInputs(){
    const hoursSelect = document.getElementById("hours-select");
    const minutesSelect = document.getElementById("minutes-select");
    const secondsSelect = document.getElementById("seconds-select");

    for(let i = 0; i<=99; i++){
        const optionElement = document.createElement("option")
        optionElement.textContent = i.toString()
        optionElement.setAttribute("value", i.toString())
        hoursSelect.appendChild(optionElement)
    }
    for(let i = 0; i<=59; i++){
        const optionElement = document.createElement("option")
        optionElement.textContent = i.toString()
        optionElement.setAttribute("value", i.toString())
        minutesSelect.appendChild(optionElement)
    }
    for(let i = 0; i<=59; i++){
        const optionElement = document.createElement("option")
        optionElement.textContent = i.toString()
        optionElement.setAttribute("value", i.toString())
        secondsSelect.appendChild(optionElement)
    }
}

createInputs()

document.getElementById("btn-edit").addEventListener("click", () => {
    const blackScreen = document.getElementById("black-screen")

    const editPainel = document.getElementById("edit-painel")

    blackScreen.classList.add("show-black-painel")

    editPainel.classList.add("show-edit-painel")
})

document.getElementById("edit-painel-controls-cancel-btn").addEventListener("click", ()=>{
    const blackScreen = document.getElementById("black-screen")

    const editPainel = document.getElementById("edit-painel")

    blackScreen.classList.remove("show-black-painel")

    editPainel.classList.remove("show-edit-painel")
})

document.getElementById("edit-painel-controls-start-btn").addEventListener("click", ()=>{
    const blackScreen = document.getElementById("black-screen")

    const editPainel = document.getElementById("edit-painel")

    blackScreen.classList.remove("show-black-painel")

    editPainel.classList.remove("show-edit-painel")
})