const header = document.querySelector('.page_header')
window.addEventListener('scroll', () => {
    if(window.pageYOffset > 270){
        header.classList.add('sticky')
    }else{
        header.classList.remove('sticky')
    }
    
})



// const btn = document.querySelector(".btnScroll")

// btn.addEventListener('click', ()=> {
//     console.log(window.pageYOffset)
// })

// const add = document.querySelector('.add')
// add.addEventListener('click', ()=>{
//     header.classList.add("sticky")
// })

// const remove = document.querySelector('.remove')
// remove.addEventListener('click', ()=>{
//     header.classList.remove("sticky")
// })


// const btnClass = document.querySelectorAll('.btnClass');
// btnClass.addEventListener('click',(e) => {

// })

const change = document.querySelector('.btnImage')
const big = document.querySelector('.bigImg');
const test = document.querySelector('.test')
 

// change.addEventListener('click', ()=> {
//     big.setAttribute('src', './images/profile_${i}_big.jpg')
// })

test.addEventListener('click', (e)=> {
    console.log(e.target)
    const src = test.getAttribute('src')
    
}) 

const pets = ['puppy','cat','lion','tiger','wale','rabbit']
for(let i = 0; i < pets.length; i++){
    console.log(pets[i])
}

for(const pet of pets) {
    console.log(pet)
}
for(const i in pets) {
    console.log(i)
}

pets.forEach( (e,idx) => {
    console.log(e, idx)
})

const dimm = document.querySelector('.dimm')
const view = document.querySelector('.view_detail')
const gallery =document.querySelector('.gallery .list a');
gallery.addEventListener('click',(e) => {
    // e.preventDefault();
    dimm.style.display = 'block'
    
    view.classList.add('open')
    console.log(view)
})

const close = document.querySelector('.close')
close.addEventListener('click',(e) => {
    view.classList.remove('open')
    dimm.style.display = 'none'
})


// sum(5,10)

// function sum(a,b) {
//    console.log(a+b);
// }
 

const sum = (a,b) => {
    console.log(a+b)
}

sum(3,4);