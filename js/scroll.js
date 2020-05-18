window.onscroll = function showHeader() {
    var header = document.querySelector('.menu');
    if(window.pageYOffset > 200){
        header.classList.add('header_fixed');
    } else{
        header.classList.remove('header_fixed');
    }

    var header = document.querySelector('.input');
    if(window.pageYOffset > 200){
        header.classList.add('header_fixed2');
    } else{
        header.classList.remove('header_fixed2');
    }
}