$(document).ready(function() {
    var currentGfgstep, nextGfgstep, previousGfgstep;
    var opacity;
    var current=1;
    var steps=$("fieldset").length;

    setProgressBar(current);

    $(".next-step").click(function() {
        currentGfgstep=$(this).parent();
        nextGfgstep=$(this).parent().next();

        $("#progressbar li").eq($("fieldset").index(nextGfgstep)).addClass("active");

        nextGfgstep.show();
        currentGfgstep.animate({opacity:0}, {
            step:function(now) {
                opacity=1-now;
                currentGfgstep.css({
                    'display':'none',
                    'position':'relative'
                });
                nextGfgstep.css({'opacity':opacity});
            },
            duration: 500
        });
        setProgressBar(++current);
    });

    $(".previous-step").click(function() {
        currentGfgstep=$(this).parent();
        previousGfgstep = $(this).parent().prev();

        $("#progressbar li").eq($("fieldset").index(currentGfgstep)).removeClass("active");
        previousGfgstep.show();
        currentGfgstep.animate({opacity:0}, {
            step:function(now) {
                opacity=1-now;
                currentGfgstep.css({
                    'display':'none',
                    'position':'relative',
                });
                previousGfgstep.css({'opacity':opacity});
            },
            duration:500
        });
        setProgressBar(--current);
    })

    function setProgressBar(current) {
        var percent=parseFloat(100/steps)*current;
        percent=percent.toFixed();
        $(".progress-bar").css("width", percent+"%")
    }

    $(".submit").click(function(){
        return false;
    })
});