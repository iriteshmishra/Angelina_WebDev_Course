// $("h1").addClass("big-title margin-50");

// $("button");

// $("h1").attr("class");
//If you have single property in it than you are getting the value of it and if you have two property in it then 
// you are setting the value


// addClass removeClass hasClass text html all this are called as methods.

//$("h1").addClass("big-title");
//$("h1").removeClass("big-title");
//$("h1").hasClass("big-title"); true or false


// $("h1").text("bye"); //selected element and then dot text parenthesis and new text which you want to say.

// $("button").text("Don't click me");

// $("button").html("<em>Hey</em>");

// console.log(${"img"}.attr("src"));

// $("a").attr("href", "https://www.cricbuzz.com");


/*
$("h1").click(function() {
 $("h1").css("color", "purple");
});

*/


/*
for (var i =0; i<5; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function() {
        document.querySelector("h1").style.color = "purple";
    });
}
*/

/*
$("button").click(function() {
    $("h1").css("color", "purple");
});

*/

/*


/*
$("input").keypress(function(event){
    console.log(event.key);
  }); 

  OR 
  $("document").keypress(function(event){
    console.log(event.key);
  });

*/


/*
$(document).keypress(function(event){
    $("h1").text(event.key);                 manipulating the h1 text to keybutton
  });
*/


/*
 $("h1").on("mouseover", function(){
    $("h1").css("color", "purple");
 })

 $("h1").on("click", function(){
    $("h1").css("color", "purple");
 })
*/


/*
creating new button
$("h1").before("<button>New</button>");
$("h1").after("<button>New</button>");
$("h1").prepend("<button>New</button>");
$("h1").append("<button>New</button>");
*/

// $("button").remove();

/*
$("button").on("click", function() {
    $("h1").hide();
});

$("button").on("click", function() {
    $("h1").toggle();
});

$("button").on("click", function() {
    $("h1").fadeOut();
});

$("button").on("click", function() {
    $("h1").fadeToggle();
});

$("button").on("click", function() {
    $("h1").slideUp();
});

$("button").on("click", function() {
    $("h1").slideToggle();
});

$("button").on("click", function() {
    $("h1").animate({opacity:0.5});
});
*/

 $("button").on("click", function() {
    $("h1").slideUp().slideDown().animate({opacity:0.5});
});
