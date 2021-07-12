let menu = document.getElementById('menu');
menu.addEventListener('click', function() {
    if(menu.innerHTML == "arrow_forward"){
        document.querySelector('.sidebar-options').style.display = 'flex';
        menu.innerHTML = "arrow_back";
    } else{
        document.querySelector('.sidebar-options').style.display = 'none';
        menu.innerHTML = "arrow_forward";
    }
});
let searchBar = document.getElementById("search");
function dropSearch(){
    if (searchBar.style.display === "block") {
        searchBar.style.display = "none";
    } else {
        searchBar.style.display = "block";
        navBar.style.display = "none";
    }
}
let searchBarMobile = document.getElementById("search-mobile");
function dropSearchMobile(){
    if (searchBarMobile.style.display === "block") {
        searchBarMobile.style.display = "none";
    } else {
        searchBarMobile.style.display = "block";
        navBar.style.display = "none";
    }
}
let openSearch = document.getElementById("openSearch");
openSearch.addEventListener('click', function() {
    if(openSearch.innerHTML == "search"){
        openSearch.innerHTML = "close";
    } else{
        openSearch.innerHTML = "search";
    }
});
let item = document.getElementsByClassName('item');
item.addEventListener("mouseover", function(){
    document.querySelector('.dropdown').style.display= 'block';
});