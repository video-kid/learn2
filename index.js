$(document).ready(function()
{
    let stickyMenu = $('#bookingSite #menu');
    

    let majonez = function() {
        stickyMenu.toggleClass('sticky');
    };

    
    stickyMenu.click(majonez);
});

