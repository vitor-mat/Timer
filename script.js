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
    
    runTime.editPainel = false
})

let hours,
    minutes,
    seconds = -1

function showHours(startTimer = true){
    const hoursSelect = document.getElementById("hours-select");

    const hoursDisplay = document.getElementById("hours-display");

    if(startTimer){
        hours = Number(hoursSelect.value)
    }

    if(hours < 10){
        hoursDisplay.textContent = "0"+hours
    }else{
        hoursDisplay.textContent = hours
    }
}

function showMinutes(startTimer = true){
    const minutesSelect = document.getElementById("minutes-select");

    const minutesDisplay = document.getElementById("minutes-display");

    if(startTimer){
        minutes = Number(minutesSelect.value)
    }

    if(minutes < 10){
        minutesDisplay.textContent = "0"+minutes
    }else{
        minutesDisplay.textContent = minutes
    }
}

function showSeconds(startTimer = true){
    const secondsSelect = document.getElementById("seconds-select");

    const secondsDisplay = document.getElementById("seconds-display");

    if(startTimer){
        seconds = Number(secondsSelect.value)
    }
    
    if(seconds < 10){
        secondsDisplay.textContent = "0"+seconds
    }else{
        secondsDisplay.textContent = seconds
    }
}

function timerFunction(){
    const startBtn = document.getElementById("btn-start")

   
        const timerAction = setInterval(async () => {

            if(runTime.aplication && runTime.editPainel){
                startBtn.textContent = "Parar"
                startBtn.style.background = "#fd6b6b"
            }else{
                startBtn.textContent = "Iniciar"
                startBtn.style.background = "#28b964"
                clearInterval(timerAction)
                return;
            }

            if(seconds > 0){
                seconds--
                showSeconds(false)
            }else if(seconds === 0){
    
                if(minutes > 0){
                    minutes--
                    showMinutes(false)
                    seconds = 59
                    showSeconds(false)
                    return;
                }
    
                if(hours > 0){
                    minutes = 59
                    showMinutes(false)
                    seconds = 59
                    showSeconds(false)
                    hours--
                    showHours(false)
    
                    return;
                }
    
                showSeconds(false)
                seconds--
            }
         
            if(seconds < 0){
                setTimeout(() => alert("Timer encerrado!"), 1000)
                clearInterval(timerAction)
            }
    
        }, 1000)
}

document.getElementById("btn-start").addEventListener("click", () => {
    timerFunction()
    runTime.aplication = !runTime.aplication
})

document.getElementById("edit-painel-controls-start-btn").addEventListener("click", ()=>{
    const blackScreen = document.getElementById("black-screen")

    const editPainel = document.getElementById("edit-painel")

    blackScreen.classList.remove("show-black-painel")

    editPainel.classList.remove("show-edit-painel")

    showHours()
    showMinutes()
    showSeconds()
    runTime.aplication = true
    runTime.editPainel = true
    timerFunction()
})

document.getElementById("edit-painel-controls-cancel-btn").addEventListener("click", ()=>{
    const blackScreen = document.getElementById("black-screen")

    const editPainel = document.getElementById("edit-painel")

    blackScreen.classList.remove("show-black-painel")

    editPainel.classList.remove("show-edit-painel")

    runTime.editPainel = true

    if(runTime.aplication){
        timerFunction()
    }
})

let runTime= {
    aplication: false,
    editPainel: true
}