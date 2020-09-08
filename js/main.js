jQuery(document).ready(function() {
  
  "use strict";

    // Using custom configuration
    $('#slider-corosel').carouFredSel({
        responsive:true,
        width:'100%',
        circuler:true,
        scroll : {
            items         : 1,
            duration      : 500,
            pauseOnHover  : true
        },
        auto:true,
        items:{
            visible:{
                min:1,
                max:1
            },
            height:"variable"
        }
    });
});