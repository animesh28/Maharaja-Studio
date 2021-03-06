const hamburger = document.querySelector('.hamburger')
const silder_nav = document.querySelector('.silder-nav')
const logo = document.querySelector('.slider-menu_logo')
const close = document.querySelector('.close-button')
const cover = document.querySelector('#carouselExampleControls')
const navbar = document.querySelector('.navbar')
const mobileHamburger = document.querySelector('.navbar-toggler-icon')
const navbarCollapse = document.querySelector('.navbar-collapse')


hamburger.addEventListener('click', () => {
    silder_nav.style.zIndex = '5';
    logo.style.display = 'flex';
    logo.style.zIndex = '6';
    silder_nav.style.transform = 'scale(1)'
})

mobileHamburger.addEventListener('click', () => {
    silder_nav.style.zIndex = '5';
    logo.style.display = 'flex';
    logo.style.zIndex = '6';
    silder_nav.style.transform = 'scale(1)'
    setTimeout(function(){
        navbarCollapse.classList.remove('show')
   }, 1000);
    
})

close.addEventListener('click', () => {
    silder_nav.style.zIndex = '-2';
    logo.style.display = 'none';
    logo.style.zIndex = '-2';
    silder_nav.style.transform = 'scale(0)'
})

window.addEventListener('scroll',function(e) {
    document.querySelector('.navbar-brand').classList.add('d-none')
    document.querySelectorAll('.nav-link').forEach(item => {
        item.classList.add('d-none')
    })
    hamburger.style.margin = '1rem 1.5rem'
});

window.onscroll = function(ev)
{
	var body= document.body; //IE 'quirks'
    var doc= document.documentElement; //IE with doctype
    doc= (doc.clientHeight)? doc: body;
	
	if (doc.scrollTop == 0)
	{
        document.querySelector('.navbar-brand').classList.remove('d-none')
        document.querySelectorAll('.nav-link').forEach(item => {
            item.classList.remove('d-none')
        })
	}       
    
    if (doc.scrollTop == window.screen.height-10) {
        alert('test');
    }

};

const divs = document.querySelectorAll("div");
const body = document.body;
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

checkPrev = () =>
  document.querySelector("div:first-child").classList.contains("show")
    ? (prev.style.display = "none")
    : (prev.style.display = "flex");

checkNext = () =>
  document.querySelector("div:last-child").classList.contains("show")
    ? (next.style.display = "none")
    : (next.style.display = "flex");

Array.prototype.slice.call(divs).forEach(function (el) {
  el.addEventListener("click", function () {
    this.classList.toggle("show");
    body.classList.toggle("active");
    checkNext();
    checkPrev();
  });
});

prev.addEventListener("click", function () {
  const show = document.querySelector(".show");
  const event = document.createEvent("HTMLEvents");
  event.initEvent("click", true, false);

  show.previousElementSibling.dispatchEvent(event);
  show.classList.remove("show");
  body.classList.toggle("active");
  checkNext();
});

next.addEventListener("click", function () {
  const show = document.querySelector(".show");
  const event = document.createEvent("HTMLEvents");
  event.initEvent("click", true, false);

  show.nextElementSibling.dispatchEvent(event);
  show.classList.remove("show");
  body.classList.toggle("active");
  checkPrev();
});

