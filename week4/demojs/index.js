let items = []

const info = document.getElementById('info')
const shownItems = document.getElementById('shown-items')

function clearInfo() {
    info.innerHTML = ''
    info.className = ''
}

function addItem() {
    clearInfo()

    const input = document.getElementById('item')
    const item = input.value
    input.value = ''
    
    if (item.length == 0 ) {
        info.innerHTML = 'Item cannot be empty.'
        info.className = 'warning'
        return
    }

    if (items.length >= 5) {
        info.innerHTML = 'You have reached the maximum amount of possible items.'
        info.className = 'warning'
    } else {
        items.push(item)
        info.innerHTML = 'Success.'
        info.className = 'success'
    }

    showItems()
}

function showItems() {
    shownItems.innerHTML = ''

    for (item of items) {
        console.log(items)
        shownItems.innerHTML = shownItems.innerHTML + item + '<br>'
    }
}