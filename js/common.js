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
 

change.addEventListener('click', ()=> {
    big.setAttribute('src', './images/profile_${i}_big.jpg')
})

test.addEventListener('click', (e)=> {
    console.log(e.target)
    const src = test.getAttribute('src')
    console.log(src);
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

const view = document.querySelector('.contents_detail')
const gallery =document.querySelector('.gallery .list a');
gallery.addEventListener('click',(e) => {
    // e.preventDefault();
    gallery.classList.add('contents_detail')
    console.log(view)
})