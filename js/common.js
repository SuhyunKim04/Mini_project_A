function scrollHeader () {
    const header = document.querySelector('.page_header')
    window.addEventListener('scroll', () => {
        console.log(window.pageYOffset);
        if(window.pageYOffset > 270){
            header.classList.add('sticky')
        }else{
            header.classList.remove('sticky')
        }
        
    })
}

scrollHeader();
 
const getOffset = () => {
    const section = document.querySelector('.gallery') 
    return section.offsetTop;
} 

const viewProfile = () => {
    const change = document.querySelector('.btnImage') 
    const big = document.querySelector('.bigImg');
}
  
 
const viewGallery = () => {
    const position = getOffset()
    const dimm = document.querySelector('.dimm')
    const view = document.querySelector('.view_detail')
    const gallery =document.querySelector('.gallery .list a');
    gallery.addEventListener('click',(e) => {
        // e.preventDefault();
        dimm.style.display = 'block'
        window.scrollTo(0, position);
        view.classList.add('open')
        console.log(view)
    })
    
    const close = document.querySelector('.close')
    close.addEventListener('click',(e) => {
        view.classList.remove('open')
        dimm.style.display = 'none'
    })
}

viewGallery();
window.addEventListener('resize', function() {
    viewGallery(); 
})
