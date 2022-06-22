$(function () {

    $('.burger').click(function (e) { 

        $('.navbar-sections.mobile').show();
        $('.navbar-sections.mobile').addClass("active");
    });

    $(document).on("click", function (event) {
        if ($(event.target).closest(".burger").length === 0) {
            $('.navbar-sections.mobile').hide();
        }
      });
});