window.onscroll = function showHeader() {
    var header = document.querySelector('.input2');
    if(window.pageYOffset >600){
        header.classList.add('header_fixed3');
    } else{
        header.classList.remove('header_fixed3');
    }
}