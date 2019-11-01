let nav = document.getElementById('navigation');


var prevScroll = window.pageYOffset;

window.addEventListener('scroll', function(){
  var wScroll = window.pageYOffset;

  if(wScroll > 70){
    if(prevScroll > wScroll){
      nav.classList.remove('nav-hide');
      nav.classList.add('nav-show');
    }else{
      nav.classList.remove('nav-show');
      nav.classList.add('nav-hide');
    }
  }
  prevScroll = wScroll;
  //console.log(wScroll)
});
