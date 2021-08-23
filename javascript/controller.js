$(()=>{

    $('#menu').on('click', function(){

        const imgMenu = `<img src="img/cabeçalho/hamburger.gif" alt="Menu">`;
        const imgClose = `<img src="img/cabeçalho/close.png" alt="Menu">`;
        let icon = $('#menu');

        if(icon.hasClass('menu')){
            setTimeout(() => {
            icon.removeClass('menu');
            icon.addClass('close');
            $('.list-unstyled-font-weight-bold').toggleClass('open');
            $(this).html(imgClose);
            $('#backdrop').addClass('backdrop');
            }, 300);
        }else if (icon.hasClass('close')){
            setTimeout(() => {
                icon.removeClass('close');
                icon.addClass('menu');
                $('.list-unstyled-font-weight-bold').toggleClass('open');
                $(this).html(imgMenu);
                $('#backdrop').removeClass('backdrop');
            }, 300);
        }
        
    });

});

         
  


