const visor = document.querySelector("#visor")
let prevNumber
let operation

const clearVisor = () => {
    visor.textContent = ""
}

const clearQueue = () => {
    prevNumber = operation = undefined
}

const showResult = () => {
    if(operation == "add")
        visor.textContent = prevNumber + Number(visor.textContent)
    else if(operation == "subtract")
        visor.textContent = prevNumber - Number(visor.textContent)
    else if(operation == "multiply")
        visor.textContent = (prevNumber * Number(visor.textContent)).toFixed(6)
    else if(operation == "divide")
        visor.textContent = (prevNumber / Number(visor.textContent)).toFixed(6)
    else
        return

    clearQueue()
}

const addOperation = (operationToAdd) => {
    if(visor.textContent) {
        if(prevNumber) {
            showResult()
            prevNumber = Number(visor.textContent)
            clearVisor()
            operation = operationToAdd
        }
        else{
            prevNumber = Number(visor.textContent)
            clearVisor()
            operation = operationToAdd
        }
        return true
    }

    return false
}

document.querySelector("#zero").addEventListener("click", () => {
    visor.textContent += "0"
})

document.querySelector("#one").addEventListener("click", () => {
    visor.textContent += "1"
})

document.querySelector("#two").addEventListener("click", () => {
    visor.textContent += "2"
})

document.querySelector("#three").addEventListener("click", () => {
    visor.textContent += "3"
})

document.querySelector("#four").addEventListener("click", () => {
    visor.textContent += "4"
})

document.querySelector("#five").addEventListener("click", () => {
    visor.textContent += "5"
})

document.querySelector("#six").addEventListener("click", () => {
    visor.textContent += "6"
})

document.querySelector("#seven").addEventListener("click", () => {
    visor.textContent += "7"
})

document.querySelector("#eight").addEventListener("click", () => {
    visor.textContent += "8"
})

document.querySelector("#nine").addEventListener("click", () => {
    visor.textContent += "9"
})

document.querySelector("#decimal").addEventListener("click", () => {
    visor.textContent += "."
})

document.querySelector("#add").addEventListener("click", () => {
    addOperation("add")
})

document.querySelector("#subtract").addEventListener("click", () => {
    if(!addOperation("subtract") && !visor.textContent)
        visor.textContent += "-"
})

document.querySelector("#multiply").addEventListener("click", () => {
    addOperation("multiply")
})

document.querySelector("#divide").addEventListener("click", () => {
    addOperation("divide")
})

document.querySelector("#equals").addEventListener("click", () => {
    if(prevNumber && visor.textContent && operation)
        showResult()
})

document.querySelector("#clear").addEventListener("click", () => {
    clearVisor()
    clearQueue()
})

document.querySelector("#music-button").addEventListener("click", () => {
    const musicButton = document.querySelector("#music-button")
    const musicbuttonIcon = document.querySelector("#music-button img")
    const bgMusic = document.querySelector("#background-music")

    if(musicButton.dataset.on == "true") {
        bgMusic.pause()
        musicButton.dataset.on = "false"
        musicbuttonIcon.src = "assets/audio_off_icon.png"
    }
    else {
        bgMusic.play()
        bgMusic.volume = 0.1
        musicButton.dataset.on = "true"
        musicbuttonIcon.src = "assets/audio_on_icon.png"
    }
})
