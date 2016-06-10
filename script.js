$(document).ready(function() {
    $('.bottom-half a').on('click', function(event) {

        event.preventDefault();

        var hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function(){

            window.location.hash = hash;
        });
    });

});
