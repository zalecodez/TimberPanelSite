
function contactMap(){
    var mapCanvas = document.getElementById("contactMap");
    var latlng = {lat: -37.821686, lng:145.31063};
    var mapOptions={
        center: latlng,
        zoom: 12
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var marker = new google.maps.Marker({position:latlng, map:map});
}
var xDown = null;                                                        
var yDown = null;                                                        

function handleTouchStart(evt) {                                         
    xDown = evt.originalEvent.touches[0].clientX;                                      
    yDown = evt.originalEvent.touches[0].clientY;                                      
};                                                

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.originalEvent.touches[0].clientX;                                    
    var yUp = evt.originalEvent.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            /* left swipe */ 
        } else {
            /* right swipe */
        }                       
    } else {
        if ( yDiff > 0 ) {
            /* up swipe */ 
        } else { 
            /* down swipe */
        }                                                                 
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
};



function search(){
}

function formSubmit(){
}

$(document).ready(function(){
    $("#timberNavbar").on('shown.bs.collapse', function(){
        var navLength = $(document).height()-110;
        $(this).height(navLength);
        $("#timberNavbar.collapse.in").css("cssText","height: "+navLength+"px!important;");
        $("#timberNavbar.collapsing").css("cssText","height: "+navLength+"px!important;");
    });

    $(".carousel").on('touchstart', handleTouchStart);        
    $(".carousel").on('touchmove', function(evt){
     if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.originalEvent.touches[0].clientX;                                    
    var yUp = evt.originalEvent.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            /* left swipe */ 
            $(this).carousel("next");
        } else {
            /* right swipe */
            $(this).carousel("prev");
        }                       
    }
    /* reset values */
    xDown = null;
    yDown = null;    
    });

/*
    $(".carousel").swipeleft(function() {
        $(this).carousel('next');
    });
    $(".carousel").swiperight(function() {
        $(this).carousel('prev');
    });
*/
    
    if($("#timberCarousel").length)
        $("#timberCarousel").carousel({interval: 4000});

    if($("#leadinCarousel").length){
        $("#leadinCarousel").carousel({interval: false});
    }
        

    if($(".productCarousel").length)
        $(".productCarousel").carousel({interval: false});

    $(".getstarted_button").click(function(){
        $(".lead-in-content_section").hide();
    });


    $("*").click(function(evt){
        if(!$(this).parents("#timberNavbar").length){
            $("#timberNavbar").removeClass("in");
        }
        else{
            evt.stopPropagation();
        }
    });

    $(".productlist_div").hover(
        function(){

            $(".unordered-list", this).show();
        },
        function(){
            $(".unordered-list", this).hide();
        }
    );

    $(".navbar-form").submit(function(){
        //EDIT SEARCH FUNCTION TO HANDLE SEARCH EVENT
        search();
        return false;
    });

    $("#email-form-2").submit(function(){
        //EDIT FORMSUBMIT FUNCTION TO HANDLE FORM EVENT
        formSubmit();
        
        $(this).hide();
        $(".form-done").show();
        
        return false;
    });

});


