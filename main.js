//And Now, Some Warmup Challenges
//1. Change the span with the class mess-with-me to have a font size of 40px. (A span is an inline element tag, typically used inside a block of text)

let MWM = document.querySelector('.mess-with-me');
MWM.style.fontSize = '40px'

//2 Change the paragraph with the class mess-with-me to have a background color of green.

let paraMessWithMe = document.querySelector('p.mess-with-me')
paraMessWithMe.style.background = "green"

//3 Hide the second dinosaur's image so that it's no longer visible, and so that the area below it moves up to take the space. If you're not sure of how to do this, look up the CSS rule for that!

let hiddenDino = document.querySelector('#hide-me');
hiddenDino.style.display = 'none'


//4 Change the first dinosaur image so that the image's dimensions are 324 pixels wide.

let firstDino = document.querySelector('#triceratops')
firstDino.style.width = '324px'

// Event Listener Challenges
//1 Add an event listener to the span with the class mess-with-me so that when it is clicked, the font color changes to orange.

let clickcolor = document.querySelector('.mess-with-me')

clickcolor.addEventListener('click', function(){
    clickcolor.style.color = 'orange'
})

//2 Add an event listener to the first dinosaur so that when they are clicked, they receive a red border.

let firstDinoBorder = document.querySelector('#triceratops');

firstDinoBorder.addEventListener('click', function(){
    firstDinoBorder.style.border = 'red solid 5px'
} )

//3 Add an event listener to the feathered dinosaur, so that when they are clicked, they become 50% transparent.

let featheredDino = document.querySelector('#feathers');

featheredDino.addEventListener('click', function(){
    featheredDino.style.opacity = '.5'
})

//4 Add an event listener to the "Switch Background Color" button so that when it is clicked, we switch the background color of the row of dinosaurs to a color of your choice.

let switchColor = document.querySelector('#toggle');


switchColor.addEventListener('click', function(){
    let row = document.querySelector('#row');
    row.style.background = 'blue'
})

//5 Add an event listener to the dinosaur with the id biggify that, when HOVERED, grows the image to 200 pixels wide. Note that this is a different event, and you'll likely need to do some research on what different string you'll need to pass. It's not gonna be click!

let grow = document.querySelector('#biggify');

grow.addEventListener('mouseenter', function(){
    grow.style.width = '200px'
})

//Stretch Goals
//1

//2 
grow.addEventListener('mouseleave', function(){
    grow.style.width = '175px'
})