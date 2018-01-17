$(document).ready(function()
{
    /* let stickyMenu = $('#bookingSite #menu');
    

    let majonez = function() {
        stickyMenu.toggleClass('sticky');
    };

    stickyMenu.click(majonez); */

    let letItSticky = function(selector) {
        let element = $(selector);

        let toggleHandler = function() {
            element.toggleClass('sticky');
        }

        element.click(toggleHandler);
    }

    letItSticky('#bookingSite #menu');
    letItSticky('footer');
});