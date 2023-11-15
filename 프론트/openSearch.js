function openSearch(button){
    let searchArea = button.nextElementSibling;
    searchArea.style.top = '70px';
    searchArea.style.opacity= '1';
}

function closeSearch(button){
    let searchArea = button.parentElement;
    searchArea.style.opacity= '0';
    setTimeout(function(){
        searchArea.style.top = '-130px';
    },300);
}