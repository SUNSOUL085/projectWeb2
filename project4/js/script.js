$(document).ready(function(){
    $('#ls').lightSlider({
        autoWidth:true, speed: 400, //ms'
        auto: true,
        loop: true,
        pause: 5000,
        mode : 'lg-fade',
        speed: 3000,
        onSliderLoad: function() {
            $('#ls').removeClass('cS-hidden');
        } 
    });  
    
    $('.promo-container').lightSlider({
        item: 1,
        autoWidth:true,
        loop:true,
        adaptiveHeight:true,
        vThumbWidth:660,
        slideMargin: 50,
        onSliderLoad: function() {
            $('.promo-container').removeClass('cS-hidden');
        } 
    }); 
    $('.blue').on("click",function () {
        $('#promo1').attr('src', 'img/vader3.png');
    });
    $('.yellow').on("click",function () {
        $('#promo1').attr('src', 'img/vader22.png');
        
    }); 
});