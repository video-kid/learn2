$(document).ready(function()
{

    let letItSticky = function(selector) {
        let element = $(selector);
        let elementPosition = element.offset().top;

        $(document).scroll(function(e){
            let position = $(e.target).scrollTop();

            if (position >= elementPosition) {
                element.addClass('sticky');
            } else {
                element.removeClass('sticky');
            };

        });
/* ^ w tym miejscu rejestruje do eventu scroll funkcję, kiedy wystąpi event to do funcji zostanie
przekazany obiekt eventu jako e */
        
    }

    letItSticky('#bookingSite #menu');
});