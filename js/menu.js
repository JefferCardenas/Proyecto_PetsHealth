$(function(){
<<<<<<< HEAD
=======

>>>>>>> master
    //se asigna un evento de scroll a todo el documento para ativar la clase sticky cuando el scroll sea mayor que 0
    $(window).on('scroll', function(){
        var menu = document.querySelector('.menu');
        menu.classList.toggle('sticky', window.scrollY > 0);
    });

    //se asigna un evento click a las etiquetas li que contengan un ul dentro, para activar la animacion
    $('.sub_menu').click(function(e){

<<<<<<< HEAD
        e.preventDefault();

=======
>>>>>>> master
        if($(this).hasClass('activado')){

            $(this).removeClass('activado');
            $(this).children('ul').slideUp();

        }else{

            $(this).addClass('activado');
            $(this).children('ul').slideDown();

        }

    });

    //efecto de fade en circulo para menu resposive 
    $('#btn_menu').click(function(){

        if($('.menu-items').hasClass('uno')){

            $('.menu-items').removeClass('uno');
            $('.menu-items').addClass('dos');

        }else{
            $('.menu-items').removeClass('dos');
            $('.menu-items').addClass('uno');
        }
    });


});