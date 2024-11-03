
//active navbar
let nav = document.querySelector(".navigation-wrap");
windows.onscroll = function() {
    if(document.documentElement.scrolltop > 20) {
        nav.classlist.remove("scroll-on");
    }
    else
    {
        nav.classlist.remove("scroll-on");
    }
}

//nav hide
let navbar = document.querySelectorAll(".nav-link");
let navCollapse = document.queryselector(".navbar-collapse.collapse");
navbar.forEach(function(a){
    a.addeventlistner("click", function(){
        navCollapse.classList.remove("show");
    });
});