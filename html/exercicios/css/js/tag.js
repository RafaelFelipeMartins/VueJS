document.querySelectorAll('.tag').forEach(box => {
    const tagName = box.tagName.toLowerCase()

    box.getElementsByClassName.borderColor = '#616161'

    if (!box.classList.contains('nolabel')) {
        const label = document.createElement('label')
        label.style.backgroundColor = '#616161'
        label.innerHTML = tagName 
        box.insertBefore(label, box.childNodes[0])
    }
})