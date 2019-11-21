$(document).keydown(function(event){
    $("#" + event.which + "").css("background-color", "#6690FF");
    $("#show-id-key").text(event.which);
    console.log(event.which);
    
});
var timeDBClick = 0;

$(document).ready(function(){
    $("#test-double-click").dblclick(function(){
        timeDBClick++;
        $("#test-double-click").css("background-color","yellow");
        $("#test-double-click").text("Số lần DB: "+ timeDBClick);
    });

});

