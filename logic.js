//inserting the images
 function insertimages() {
    document.querySelectorAll('.box').forEach(image=> {
        if(image.innerText == 'Wpawn' || image.innerText == 'Bpawn'){
            image.innerHTML = `${image.innerText} <img class='all-img all-pawn' src="${image.innerText}.png" alt="">`
            image.style.cursor = 'pointer'
        }

        else {
            image.innerHTML = `${image.innerText} <img class='all-img all-' src="${image.innerText}.png" alt="">`
            image.style.cursor = 'pointer'
        }
    })
 }