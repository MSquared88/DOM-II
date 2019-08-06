// Your code goes here

let body = document.querySelector('body')

body.addEventListener('keydown', (e) => {
    e.target.style.background = `rgb(${e.keyCode + Math.floor(Math.random()* 165)}, ${e.keyCode + Math.floor(Math.random()* 165)}, ${e.keyCode + Math.floor(Math.random()* 165)}`
    e.stopPropagation()
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
        e.stopPropagation()
        
    });
    
})

let logo = document.querySelector('.logo-heading')

logo.addEventListener('dblclick', (e) => {
    e.target.style.fontSize = '8rem'
    e.stopPropagation()
})

let img = document.querySelectorAll('img')

img.forEach((element) => {
    element.addEventListener('dragend', (e) => {
        e.target.remove()
        e.stopPropagation()
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
        e.stopPropagation()
        console.log(e.tagName)
    })
})

let btns = document.querySelectorAll('.btn')

btns.forEach((element) => {
    addEventListener('click', (e) => {
       if(e.target.textContent === 'Sign Me Up!'){
           alert('You Are Signed Up')
    }
        e.stopPropagation()
    })
})

