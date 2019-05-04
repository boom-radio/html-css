$(document).foundation()


$(document).ready(function () {
    // body...
    var n = 12;
    while (n > 0) {
        $(".animation-container").append($(".animation-container").children().first().clone());
        n -= 1;
    }
});