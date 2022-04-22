//CODIGO MENU HAMBURGUESA DESPLEGABLE
let  contador = 0

$('#btn-menu').on("click",()=>{
    if (contador == 0){
      $('.menu-navbar').slideDown("slow");
        contador =1;
    } else{
      $('.menu-navbar').slideUp("slow");
      contador= 0;
    }
  });

//CODIGO NAVBAR FIXED

$(document).ready(function (){
  var altura = $('.navbar-nav').offset().top;
  $(window).on('scroll', function(){
    if(( $(window).scrollTop() > altura) && (screen.width > 976)) {
      $('.navbar-nav').addClass ('navbar-fixed');
    } else {
      $('.navbar-nav').removeClass('navbar-fixed');
    }
  })
})
