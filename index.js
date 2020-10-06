var t = document.querySelectorAll(".drum");
for (var i=0;i<t.length;i++){
t[i].addEventListener("click",function(){
  var alpha = this.innerHTML;
  myfxn(alpha);
  buttonanime(alpha);

});
}
document.addEventListener("keypress",function(event){
  myfxn(event.key);
  buttonanime(event.key);

});
function myfxn(hell){
  switch (hell) {
    case "k":
      var x = new Audio("sounds/crash.mp3");
      x.play();
    break;
    case "j":
      var x = new Audio("sounds/kick-bass.mp3");
      x.play();
    break;
    case "l":
      var x = new Audio("sounds/snare.mp3");
      x.play();
    break;
    case "w":
      var x = new Audio("sounds/tom-1.mp3");
      x.play();
    break;
    case "a":
      var x = new Audio("sounds/tom-2.mp3");
      x.play();
    break;
    case "s":
      var x = new Audio("sounds/tom-3.mp3");
      x.play();
    break;
    case "d":
      var x = new Audio("sounds/tom-4.mp3");
      x.play();
    break;
    default:

}}
function buttonanime(currentkey){
  var active = document.querySelector("."+currentkey);
  active.classList.add("pressed");
  setTimeout(function(){active.classList.remove("pressed");},100);
}
// function s(int){
//   var str = yes[i];
//   var x = new Audio(str);
//   x.play();
// }
