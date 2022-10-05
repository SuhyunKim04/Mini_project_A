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
    const thumbs = document.querySelector('.thumbs') 
    const big = document.querySelector('.bigImg');

    thumbs.addEventListener('click', (e) => {
        big.setAttribute('src', './images/profile_2_big.jpg');
    })

}

viewProfile();


// for(let i = 0; i < 15; i++) {

// }
 
const datas = [
    {
        id:0,
        title : 'newyork',
        date : '2022-09-08',
        category : 'Artworks',
        type : 'Photograph',
        description :`<p class="contents_text">이른아침문득, 이런 생각이 들었다</p>
        <p class="contents_text2">외로워보이지만 외롭지 않은 혼자만의 싸움</p>
        <div class="contents_small">
            <img src="./images/pics0.jpg" alt="pics0">
            <img src="./images/pics15.jpg" alt="pics15">
        </div>`,
        image : './images/pics0.jpg'

    },
    {
        id:1,
        title : 'Christmas',
        date : '2022-09-08',
        category : 'Artworks',
        type : 'Photograph',
        description :`<p class="contents_text">이른아침문득, 이런 생각이 들었다</p>
        <p class="contents_text2">외로워보이지만 외롭지 않은 혼자만의 싸움</p>
        <div class="contents_small">
            <img src="./images/pics1.jpg" alt="pics1">
            <img src="./images/pics15.jpg" alt="pics15">
        </div>`,
        image : './images/pics1.jpg'

    },
    {
        id:2,
        title : 'Poodldle',
        date : '2022-09-08',
        category : 'Artworks',
        type : 'Digital Art',
        description :`<p class="contents_text">이른아침문득, 이런 생각이 들었다</p>
        <p class="contents_text2">외로워보이지만 외롭지 않은 혼자만의 싸움</p>
        <div class="contents_small">
            <img src="./images/pics2.jpg" alt="pics2">
            <img src="./images/pics15.jpg" alt="pics15">
        </div>`,
        image : './images/pics2.jpg'

    },
    {
        id:3,
        title : 'Palace',
        date : '2022-09-08',
        category : 'Artworks',
        type : 'Photo',
        description :`<p class="contents_text">이른아침문득, 이런 생각이 들었다</p>
        <p class="contents_text2">외로워보이지만 외롭지 않은 혼자만의 싸움</p>
        <div class="contents_small">
            <img src="./images/pics3.jpg" alt="pics3">
            <img src="./images/pics15.jpg" alt="pics15">
        </div>`,
        image : './images/pics3.jpg'

    },
    {
        id:4,
        title : 'fox',
        date : '2022-09-08',
        category : 'Artworks',
        type : 'Photo',
        description :`<p class="contents_text">이른아침문득, 이런 생각이 들었다</p>
        <p class="contents_text2">외로워보이지만 외롭지 않은 혼자만의 싸움</p>
        <div class="contents_small">
            <img src="./images/pics4.jpg" alt="pics4">
            <img src="./images/pics15.jpg" alt="pics15">
        </div>`,
        image : './images/pics4.jpg'

    },
]
// gallery.forEach((list) => console.log(list))

/*
<img class="contents_photo" src="./images/pics15.jpg" alt="pics0">
<h3 class="title">WooYoo in Toronto</h3>
<strong class="date">2022-09-08</strong>
<strong class="category">Artworks</strong>
<strong class="type">사진</strong>
<div class="description">
*/

const viewDetail = () => {
    const view = document.querySelector('.view_detail')
    const lists = document.querySelectorAll('.gallery .list li');
    
    function setDetail(index) {
        const title = view.querySelector('.title');
        const photo = view.querySelector('.contents_photo');
        const date = view.querySelector('.date');
        const category = view.querySelector('.category')
        const design = view.querySelector('.design')
        const description = view.querySelector('.description')
        title.innerHTML = datas[index].title
        let imgURL = `./images/pics${index}.jpg`;
        photo.setAttribute('src', imgURL);
        // photo.setAttribute('src', datas[index].image)
        date.innerHTML = datas[index].date
        category.innerHTML = datas[index].category 
        design.innerHTML = datas[index].type
        description.innerHTML = datas[index].description
    }

    const getOffset = () => {
        const section = document.querySelector('.gallery') 
        return section.offsetTop;
    } 
    const dimm = document.querySelector('.dimm')
    const position = getOffset()

    lists.forEach( (e,idx) => { 
        e.addEventListener('click', (event) => { 
             const target = event.target; 
             if( target.nodeName == 'A') {
                window.scrollTo(0, position);
                view.classList.add('open')
                dimm.style.display = 'block'
                
                setDetail(idx);


             }  
        })
        
    })
    
    const close = document.querySelector('.close')
    close.addEventListener('click',(e) => {
        view.classList.remove('open')
        dimm.style.display = 'none'
    })
}



viewDetail();
// for (let data of datas){
//     console.log(data.title)
// }
/*
datas.forEach( function(data,index) {

})

datas.forEach( (data,index) => {

})
*/
// datas.forEach((data,index) => {
//     console.log(data.title)
// })
// const a = data[0].title
// console.log(a)


/* const viewGallery = () => {
    const position = getOffset()
    const dimm = document.querySelector('.dimm')
    const view = document.querySelector('.view_detail')
    const gallery =document.querySelector('.gallery .list a')
   
    gallery.addEventListener('click',(e) => {
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
*/

// viewGallery();
window.addEventListener('resize', function() {
    // viewGallery(); 
    viewDetail();
})
