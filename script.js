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

function newTimer(){
    const hoursSelect = document.getElementById("hours-select");
    const minutesSelect = document.getElementById("minutes-select");
    const secondsSelect = document.getElementById("seconds-select");

    const hoursDisplay = document.getElementById("hours-display");
    const minutesDisplay = document.getElementById("minutes-display");
    const secondsDisplay = document.getElementById("seconds-display");

    if(hoursSelect.value < 10){
        hoursDisplay.textContent = "0"+hoursSelect.value
    }else{
        hoursDisplay.textContent = hoursSelect.value
    }

    if(minutesSelect.value < 10){
        minutesDisplay.textContent = "0"+minutesSelect.value
    }else{
        minutesDisplay.textContent = minutesSelect.value
    }
    
    if(secondsSelect.value < 10){
        secondsDisplay.textContent = "0"+secondsSelect.value
    }else{
        secondsDisplay.textContent = secondsSelect.value
    }
}

document.getElementById("edit-painel-controls-start-btn").addEventListener("click", ()=>{
    const blackScreen = document.getElementById("black-screen")

    const editPainel = document.getElementById("edit-painel")

    blackScreen.classList.remove("show-black-painel")

    editPainel.classList.remove("show-edit-painel")

    newTimer()
})

