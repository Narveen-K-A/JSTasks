
function initMap(){
    const uluru = { lat: -25.344, lng: 131.031 };
    const map = new google.maps.Map(document.getElementById("map"),{
      zoom: 4,
      center: uluru,
    });
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
}
initMap();

function scrolling1(){
  window.scrollTo(0,0);
}
function scrolling2(){
  window.scrollTo(0,1000);
}
function scrolling3(){
  window.scrollTo(0,1600);
}
function scrolling4(){
  window.scrollTo(0,4100);
}
function scrolling5(){
  window.scrollTo(0,4500);
}
function changeStyle(){
  console.log('Hi')
  var element = document.getElementById("home");
  element.style.fontWeight = 600;
}

var scrollToTopBtn = document.getElementById("scrollToTopBtn");
function scrollToTop() {
    var rootElement = document.documentElement;
    rootElement.scrollTo({
      top: 0,
      behavior: "smooth"
    })
}

// window.onscroll = function() {scrollFunction()};
// function scrollFunction() {
//   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//     document.getElementById("header").style.position = "sticky";
//   } else {
//     document.getElementById("header").style.position = "sticky";
//   }
// }