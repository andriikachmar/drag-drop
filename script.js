const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', () => {
    item.classList.add('hold')

    setTimeout(function(){
        item.classList.add('hide')
    }, 0)
})

item.addEventListener('dragend', () =>{
    item.classList.remove('hold', 'hide')
})

placeholders.forEach(placeholder => {
    placeholder.addEventListener('dragover', (e) => {
        e.preventDefault()
    })
    placeholder.addEventListener('dragenter', () => {
        placeholder.classList.add('hovered')
    })
    placeholder.addEventListener('dragleave', () => {
        placeholder.classList.remove('hovered')
    })
    placeholder.addEventListener('drop', () => {
        placeholder.append(item)
        placeholder.classList.remove('hovered')
    })
})