const header = document.querySelector('.page_header')
window.addEventListener('scroll', () => {
    if(window.pageYOffset > 270){
        header.classList.add('sticky')
    }else{
        header.classList.remove('sticky')
    }
    
})



const btn = document.querySelector(".btnScroll")

btn.addEventListener('click', ()=> {
    console.log(window.pageYOffset)
})

const add = document.querySelector('.add')
add.addEventListener('click', ()=>{
    header.classList.add("sticky")
})

const remove = document.querySelector('.remove')
remove.addEventListener('click', ()=>{
    header.classList.remove("sticky")
})


// const btnClass = document.querySelectorAll('.btnClass');
// btnClass.addEventListener('click',(e) => {

// })

const change = document.querySelector('.btnImage')
const big = document.querySelector('.bigImg');
const test = document.querySelector('.test')
big.setAttribute('src','a.jpg')

change.addEventListener('click', ()=> {
    big.setAttribute('src', './images/profile_${i}_big.jpg')
})

test.addEventListener('click', ()=> {
    big.getAttribute('src')
})
console.