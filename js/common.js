function scrollHeader () {
    const header = document.querySelector('.page_header')
    window.addEventListener('scroll', () => {
        // console.log(window.pageYOffset);
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
    {
        id:5,
        title : 'aurora',
        date : '2022-09-08',
        category : 'Artworks',
        type : 'Photo',
        description :`<p class="contents_text">이른아침문득, 이런 생각이 들었다</p>
        <p class="contents_text2">외로워보이지만 외롭지 않은 혼자만의 싸움</p>
        <div class="contents_small">
            <img src="./images/pics5.jpg" alt="pics5">
            <img src="./images/pics15.jpg" alt="pics15">
        </div>`,
        image : './images/pics5.jpg'

    },
    {
        id:6,
        title : 'mountain',
        date : '2022-09-08',
        category : 'Artworks',
        type : 'Photo',
        description :`<p class="contents_text">이른아침문득, 이런 생각이 들었다</p>
        <p class="contents_text2">외로워보이지만 외롭지 않은 혼자만의 싸움</p>
        <div class="contents_small">
            <img src="./images/pics6.jpg" alt="pics6">
            <img src="./images/pics15.jpg" alt="pics15">
        </div>`,
        image : './images/pics6.jpg'

    },
    {
        id:7,
        title : 'ottawa',
        date : '2022-09-08',
        category : 'Artworks',
        type : 'Photo',
        description :`<p class="contents_text">이른아침문득, 이런 생각이 들었다</p>
        <p class="contents_text2">외로워보이지만 외롭지 않은 혼자만의 싸움</p>
        <div class="contents_small">
            <img src="./images/pics7.jpg" alt="pics7">
            <img src="./images/pics15.jpg" alt="pics15">
        </div>`,
        image : './images/pics7.jpg'

    },
    {
        id:8,
        title : 'sky',
        date : '2022-09-08',
        category : 'Artworks',
        type : 'Photo',
        description :`<p class="contents_text">이른아침문득, 이런 생각이 들었다</p>
        <p class="contents_text2">외로워보이지만 외롭지 않은 혼자만의 싸움</p>
        <div class="contents_small">
            <img src="./images/pics8.jpg" alt="pics8">
            <img src="./images/pics15.jpg" alt="pics15">
        </div>`,
        image : './images/pics8.jpg'

    },
    {
        id:9,
        title : 'snow fields',
        date : '2022-09-08',
        category : 'Artworks',
        type : 'Photo',
        description :`<p class="contents_text">이른아침문득, 이런 생각이 들었다</p>
        <p class="contents_text2">외로워보이지만 외롭지 않은 혼자만의 싸움</p>
        <div class="contents_small">
            <img src="./images/pics9.jpg" alt="pics9">
            <img src="./images/pics15.jpg" alt="pics15">
        </div>`,
        image : './images/pics9.jpg'

    },
    {
        id:10,
        title : 'star',
        date : '2022-09-08',
        category : 'Artworks',
        type : 'Photo',
        description :`<p class="contents_text">이른아침문득, 이런 생각이 들었다</p>
        <p class="contents_text2">외로워보이지만 외롭지 않은 혼자만의 싸움</p>
        <div class="contents_small">
            <img src="./images/pics10.jpg" alt="pics9">
            <img src="./images/pics15.jpg" alt="pics15">
        </div>`,
        image : './images/pics10.jpg'

    },
    {
        id:11,
        title : 'fall',
        date : '2022-09-08',
        category : 'Artworks',
        type : 'Photo',
        description :`<p class="contents_text">이른아침문득, 이런 생각이 들었다</p>
        <p class="contents_text2">외로워보이지만 외롭지 않은 혼자만의 싸움</p>
        <div class="contents_small">
            <img src="./images/pics11.jpg" alt="pics1">
            <img src="./images/pics15.jpg" alt="pics15">
        </div>`,
        image : './images/pics11.jpg'

    },
    {
        id:12,
        title : 'glow',
        date : '2022-09-08',
        category : 'Artworks',
        type : 'Photo',
        description :`<p class="contents_text">이른아침문득, 이런 생각이 들었다</p>
        <p class="contents_text2">외로워보이지만 외롭지 않은 혼자만의 싸움</p>
        <div class="contents_small">
            <img src="./images/pics12.jpg" alt="pics1">
            <img src="./images/pics15.jpg" alt="pics15">
        </div>`,
        image : './images/pics12.jpg'

    },
    {
        id:13,
        title : 'tulip',
        date : '2022-09-08',
        category : 'Artworks',
        type : 'Photo',
        description :`<p class="contents_text">이른아침문득, 이런 생각이 들었다</p>
        <p class="contents_text2">외로워보이지만 외롭지 않은 혼자만의 싸움</p>
        <div class="contents_small">
            <img src="./images/pics13.jpg" alt="pics1">
            <img src="./images/pics15.jpg" alt="pics15">
        </div>`,
        image : './images/pics13.jpg'

    },
    {
        id:14,
        title : 'wooyoo',
        date : '2022-09-08',
        category : 'Artworks',
        type : 'Photo',
        description :`<p class="contents_text">이른아침문득, 이런 생각이 들었다</p>
        <p class="contents_text2">외로워보이지만 외롭지 않은 혼자만의 싸움</p>
        <div class="contents_small">
            <img src="./images/pics14.jpg" alt="pics1">
            <img src="./images/pics15.jpg" alt="pics15">
        </div>`,
        image : './images/pics14.jpg'

    },
]
// gallery.forEach((list) => console.log(list))


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

const setSkillsValue = () => {
    const bars = document.querySelectorAll('.pro')
    const btn = document.querySelector('.show-value')

    const showValues = () => {
        bars.forEach((e, idx) => {
            e.value = e.nextElementSibling.innerHTML 
            console.log(idx, e.value)
        })
    }
    btn.addEventListener('click', showValues)

}

setSkillsValue();