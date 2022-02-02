// jquery adding css
$("h1").addClass("big-title margin")

// jquery adding text
$("button").text("Don't Click Me")

// jquery adding html element
$("button").html("<em>Click me</em>")

// jquery adding html element attribute
$("a").attr("href", "https://yahoo.com")

// jquery adding event listner
$("h1").click(function() {
    $("h1").css("color", "purple")
})

$("button").click(function() {
    $("h1").css("color", "purple")
})

$(document).keypress(function (event) {
    $("h1").text(event.key)
})

$("h1").on("mouseover", function() {
    $("h1").css("color", "yellow")
})

// $("button").on("click", function() {
//     $("h1").toggle()
// })

$("button").on("click", function() {
    $("h1").animate({opacity : 0.5})
})