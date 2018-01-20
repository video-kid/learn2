$(document).ready(function()
{

    let letItSticky = function(selector) {
        let element = $(selector);
        
        $(document).scroll(function(e){
            let position = $(e.target).scrollTop();
            let elementPosition = element.offset();
            console.log(position);
        });
/* ^ w tym miejscu rejestruje do eventu scroll funkcję, kiedy wystąpi event to do funcji zostanie
przekazany obiekt eventu jako e */
        
    }

    letItSticky('#bookingSite #menu');
    letItSticky('footer');
});