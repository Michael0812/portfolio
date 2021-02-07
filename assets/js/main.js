$(document).ready(function() {
    $(document).click(function(event) {
        let click = $(event.target);
        let _open = $(".navbar-collapse").hasClass("show");
        if (_open === true && !click.hasClass("navbar-toggler")) {
            $(".navbar-toggler").click();
        }
    });
    $(document).on('mousemove', function(e) {
        $('#cursor').css({
            left: e.pageX,
            top: e.pageY
        });
    })
});