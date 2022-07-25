const input = document.querySelector("#color-field")
const setColor = document.querySelector('#set-color')
const brush = document.querySelector('.brush')
const body = document.querySelector('body')

setColor.addEventListener('click', () => {
    brush.style.backgroundColor = input.value
})

for (let i = 0; i < 8000; i++){
    let div = document.createElement('div')
    div.classList.add('square')
    body.appendChild(div)

    div.addEventListener('mouseover', () => { 
        div.style.backgroundColor = brush.style.backgroundColor
})

} 