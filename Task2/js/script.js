
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
  var element = document.getElementById("home");
  element.style.fontWeight = 600;
}