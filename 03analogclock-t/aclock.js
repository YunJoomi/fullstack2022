var hourHands = document.querySelector('[data-hour-hand')
var minuteHand = document.querySelector('[data-minute-hand]')
var secondHand = document.querySelector('[data-second-hand]')

function setClock(){
    const currentDate = new Date();
    const seondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = currentDate.getMinutes() / 60
    const hoursRatio = currentDate.getHours() / 12

    SetRotation(hourHand, hoursRatio)
    SetRotation(minuteHand, minutesRatio)
    SetRotation(seondand, seondsRatio)
}

function SetRotation(element, rotationRatio){
    element.style.setProperty('--rotation', rotationRatio)
}

setClock()
setInterval(setClock, 1000)