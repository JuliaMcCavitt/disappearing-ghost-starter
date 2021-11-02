$(".hide-button").click(function(){
    $(".ghost-image").hide();
});

$(".show-button").click(function(){
    $(".ghost-image").show();
});

$(".message-button").click(function(){
    $(".message").text("Hello I am a ghost! Can you guess my name?");
});

$(".update-button").click(function(){
    $(".ghost-image").css('height', '170px');});
