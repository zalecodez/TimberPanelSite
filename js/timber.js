
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

    
    if($("#timberCarousel").length)
        $("#timberCarousel").carousel({interval: 4000});

    if($("#leadinCarousel").length){
        $("#leadinCarousel").carousel({interval: false});

        $("#leadinCarousel").swipeleft(function() {
            $(this).carousel('next');
        });
        $("#leadinCarousel").swiperight(function() {
            $(this).carousel('prev');
        });
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


