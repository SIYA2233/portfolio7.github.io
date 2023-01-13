$(document).ready(function(){
  $(window).scroll(function(){
    if(this.scrollY > 20) 
      $(".navbar").addClass("sticky");
    else
      $(".navbar").removeClass("sticky");
  });

  $('.menu-toggler').click(function(){
    $(this).toggleClass("active");
    $(".navbar-menu").toggleClass("active");
  });

  $(".works").magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery:{enabled:true}
  });

});
let docTitle = document.title;
window.addEventListener("blur",() =>{
  document.title = "come back besidlala boi"
})
window.addEventListener("focus",() =>{
  document.tittle = docTitle;
})