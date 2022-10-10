const getUl = document.querySelector('nav ul');
const getButton = document.querySelector('.setting')
const getShadow = document.querySelector('.effect-shadow');

getButton.addEventListener('click', function(){
    getUl.classList.toggle('show')
    if (getUl.classList.contains('show')) {
        getShadow.style.display = 'block';
    }

})
// document.body.addEventListener('click',function(e){
//     // if (getUl.contains('show') && (e.target.children.length == 7)) {
//     //     getUl.classList.remove('show')
//     // }
//     if (getUl.contains('show')) {
//         if (e.target.attributes['role'].value != 'navigation') {
//             getUl.classList.remove('show')
//         }

//     }
//     // console.log(e.target.attributes['role'])
// })

document.body.addEventListener('click', function(e){
    if (e.target.classList.contains('effect-shadow') ) {
        getUl.classList.remove('show')
        getShadow.style.display = 'none'
    }
})