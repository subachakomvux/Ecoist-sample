var one = document.getElementById('one');
var imagearray = ['img/main_3.jpg','img/main_4', 'images/main_1.jpg','img/Thomas_1.jpg'];
var x;
function slide() {
   if (x < imagearray.length) {
       x = x + 1;
   } else {
       x = 1;
   }
   one.innerHTML = "<img src=" + imagearray[x - 1] + ">";
}
setInterval(slide, 3000);