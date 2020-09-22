let first = true
let capslock = false

const field = document.getElementById('display')

function clearDisplay() {
    field.innerHTML = 'Click on the button below.'
    first = true
}

function toggleCaps() {
    capslock = !capslock

    if (capslock) {
        str = 'CAPS LOCK'
    } else {
        str = 'Caps lock'
    }

    document.getElementById('capslock').innerHTML = str
}

function display(token) {
    if (first) {
        field.innerHTML = ''
        first = false
    }

    field.innerHTML += capslock ? token.toUpperCase() : token
}