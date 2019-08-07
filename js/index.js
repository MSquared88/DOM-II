// Your code goes here

let body = document.querySelector('body')

body.addEventListener('keydown', (e) => {
    e.target.style.background = `rgb(${e.keyCode + Math.floor(Math.random()* 165)}, ${e.keyCode + Math.floor(Math.random()* 165)}, ${e.keyCode + Math.floor(Math.random()* 165)}`

});

// let home = document.querySelector('.home')

// home.addEventListener('scroll', (e) => {
//     h2.style.fontSize = "8rem"
//     console.log(e)
// })

let h2 = document.querySelectorAll('h2')

h2.forEach((element) =>{
    element.addEventListener('mouseover', (e) =>{
        if(e.target.style.color === 'red'){
            e.target.style.color = 'black'
        } else{e.target.style.color = 'red'}

        
    });
    
})

let logo = document.querySelector('.logo-heading')

logo.addEventListener('dblclick', (e) => {
    e.target.style.fontSize = '8rem'

})

window.addEventListener('scroll', (e) => {
    logo.style.color = `rgb(${Math.floor(Math.random()* 255)},${Math.floor(Math.random()* 255)},${Math.floor(Math.random()* 255)}`
})

let img = document.querySelectorAll('img')

img.forEach((element) => {
    element.addEventListener('dragend', (e) => {
        e.target.remove()

    })

})

let pTags = document.querySelectorAll('p')

pTags.forEach((element) =>{
    addEventListener('wheel', (e) => {
        let num = 1.6
        if(e.target.tagName === 'P'){
            if(e.deltaY === -100){
                e.target.style.fontSize = `${num += 1.5}rem`
            }else{e.target.style.fontSize = `${num}rem`}
        }

    })
})

let btns = document.querySelectorAll('.btn')

let firstDestination = document.querySelector(".destination")

firstDestination.addEventListener('click', (e) => {
    alert('Fun In the Sun')
})


// propagation example
for(let i = 0; i < btns.length; i++){
    btns[i].addEventListener('click', (e) => {
        
        alert('You Are Signed Up')
        e.stopPropagation()
})
}

let links = document.querySelectorAll('a')

for(let i = 0; i < links.length; i++){
    links[i].addEventListener('mouseout', (e) => {
        links[i].style.border = '1px dashed gray'
        console.log(e)
    })
}

let footer = document.querySelector("footer")
window.addEventListener('load', (e) => {
    footer.style.background = 'green'
})


let header = document.querySelector("header")
window.addEventListener('resize', (e) => {
    header.style.background = 'cyan'
})

