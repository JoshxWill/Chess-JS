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

 insertimages()

 //Coloring the board

 function coloring(){
    const color = document.querySelectorAll('.box')

    color.forEach(color => {
        getId = color.id
        arr = Array.from(getId)
        arr.shift()
        aside = eval(arr.pop())
        aup = eval(arr.shift())
        a = aside + aup 

        if (a % 2 == 0){
            color.style.backgroundColor = 'rgb(232 235 239)'
        }

        if (a % 2 !== 0){
            color.style.backgroundColor = 'rgb(125 135 150)'
        }
            
    })
 }

 coloring()

 tog = 1

 document.querySelectorAll('.box').forEach(item=> {
    item.addEventListener('click', function(){

        if (item.style.backgroundColor == 'greenyellow' && item.innerText.length == 0) {
            tog = tog + 1
        }

        else if (item.style.backgroundColor == 'greenyellow' && item.innerText.length !== 0) {

            document.querySelectorAll('.box').forEach(i => {
                if (i.style.backgroundColor == 'blue') {
                    blueId = i.id
                    blueText = i.innerText

                    document.getElementById(blueId).innerText = ''
                    item.innerText = blueText
                    coloring()
                    insertImage()
                    tog = tog + 1

                }
            })
        }



        getId = color.id
        arr = Array.from(getId)
        arr.shift()
        aside = eval(arr.pop())
        aup = eval(arr.shift())
        a = aside + aup 

        //function to display the available paths for pieces 
        function whosTurn(toggle) {
            // PAWN

            if (item.innerText == `${toggle}pawn`) {
                item.style.backgroundColor = 'blue';

                if (tog % 2 !== 0 && aup < 800) {
                    // First move for white pawns
                    if (document.getElementById(`b${a + 100}`).innerText.length == 0) {
                        document.getElementById(`b${a + 100}`).style.backgroundColor = 'greenyellow';
                        if (document.getElementById(`b${a + 200}`).innerText.length == 0 && aup < 300) {
                            document.getElementById(`b${a + 200}`).style.backgroundColor = 'greenyellow';
                        }
                    }
                    if (aside < 8 && document.getElementById(`b${a + 100 + 1}`).innerText.length !== 0) {
                        document.getElementById(`b${a + 100 + 1}`).style.backgroundColor = 'greenyellow';
                    }
                    if (aside > 1 && document.getElementById(`b${a + 100 - 1}`).innerText.length !== 0) {
                        document.getElementById(`b${a + 100 - 1}`).style.backgroundColor = 'greenyellow';
                    }
                }

                if (tog % 2 == 0 && aup > 100) {
                    // First move for black pawns
                    if (document.getElementById(`b${a - 100}`).innerText.length == 0) {
                        document.getElementById(`b${a - 100}`).style.backgroundColor = 'greenyellow';
                        if (document.getElementById(`b${a - 200}`).innerText.length == 0 && aup > 600) {
                            document.getElementById(`b${a - 200}`).style.backgroundColor = 'greenyellow';
                        }
                    }
                    if (aside < 8 && document.getElementById(`b${a - 100 + 1}`).innerText.length !== 0) {
                        document.getElementById(`b${a - 100 + 1}`).style.backgroundColor = 'greenyellow';
                    }
                    if (aside > 1 && document.getElementById(`b${a - 100 - 1}`).innerText.length !== 0) {
                        document.getElementById(`b${a - 100 - 1}`).style.backgroundColor = 'greenyellow';
                    }
                }
                // Second move for pawns
                if (tog % 2 !== 0 && aup >= 800) {
                    if (document.getElementById(`b${a + 100}`).innerText.length == 0) {
                        document.getElementById(`b${a + 100}`).style.backgroundColor = 'greenyellow';
                    }
                    if (aside < 8 && document.getElementById(`b${a + 100 + 1}`).innerText.length !== 0) {
                        document.getElementById(`b${a + 100 + 1}`).style.backgroundColor = 'greenyellow';
                    }
                    if (aside > 1 && document.getElementById(`b${a + 100 - 1}`).innerText.length !== 0) {
                        document.getElementById(`b${a + 100 - 1}`).style.backgroundColor = 'greenyellow';
                    }
                }
                if (tog % 2 == 0 && aup <= 100) {
                    if (document.getElementById(`b${a - 100}`).innerText.length == 0) {
                        document.getElementById(`b${a - 100}`).style.backgroundColor = 'greenyellow';
                    }
                    if (aside < 8 && document.getElementById(`b${a - 100 + 1}`).innerText.length !== 0) {
                        document.getElementById(`b${a - 100 + 1}`).style.backgroundColor = 'greenyellow';
                    }
                    if (aside > 1 && document.getElementById(`b${a - 100 - 1}`).innerText.length !== 0) {
                        document.getElementById(`b${a - 100 - 1}`).style.backgroundColor = 'greenyellow';
                    }
                }
            }

            // KING

            if (item.innerText == `${toggle}king`) {


                if (aside < 8) {
                    document.getElementById(`b${a + 1}`).style.backgroundColor = 'greenyellow'

                }
                if (aside > 1) {

                    document.getElementById(`b${a - 1}`).style.backgroundColor = 'greenyellow'
                }
                if (aup < 800) {

                    document.getElementById(`b${a + 100}`).style.backgroundColor = 'greenyellow'
                }
                if (aup > 100) {

                    document.getElementById(`b${a - 100}`).style.backgroundColor = 'greenyellow'
                }

                if (aup > 100 && aside < 8) {

                    document.getElementById(`b${a - 100 + 1}`).style.backgroundColor = 'greenyellow'
                }
                if (aup > 100 && aside > 1) {

                    document.getElementById(`b${a - 100 - 1}`).style.backgroundColor = 'greenyellow'
                }
                if (aup < 800 && aside < 8) {

                    document.getElementById(`b${a + 100 + 1}`).style.backgroundColor = 'greenyellow'
                }
                if (aup < 800 && aside > 1) {

                    document.getElementById(`b${a + 100 - 1}`).style.backgroundColor = 'greenyellow'
                }

                item.style.backgroundColor = 'blue'

            }



    }

       // Toggling the turn

       if (tog % 2 !== 0) {
        document.getElementById('tog').innerText = "White's Turn"
        whosTurn('W')
    }
    if (tog % 2 == 0) {
        document.getElementById('tog').innerText = "Black's Turn"
        whosTurn('B')
    }

    reddish()
 })

})

// Moving the element
document.querySelectorAll('.box').forEach(hathiTest => {

    hathiTest.addEventListener('click', function () {

        if (hathiTest.style.backgroundColor == 'blue') {

            blueId = hathiTest.id
            blueText = hathiTest.innerText

            document.querySelectorAll('.box').forEach(hathiTest2 => {

                hathiTest2.addEventListener('click', function () {
                    if (hathiTest2.style.backgroundColor == 'greenyellow' && hathiTest2.innerText.length == 0) {
                        document.getElementById(blueId).innerText = ''
                        hathiTest2.innerText = blueText
                        coloring()
                        insertImage()

                    }

                })
            })

        }

    })

})