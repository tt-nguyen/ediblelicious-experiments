(function ($) { // Begin jQuery
    $(function () { // DOM ready

        // On #nav-toggle click toggle .nav-list
        // On #nav-toggle click toggle hamburger to X
        $('#nav-toggle').click(function () {
            $('.nav-list').slideToggle(); // Open and close the navigation menu
            this.classList.toggle('active'); // Hamburger to X
        });

        // If a link has a dropdown menu, clicking on it will maximise .nav-dropdown
        $('.nav-list li a:not(:only-child)').click(function (e) {
            $(this).siblings('.nav-dropdown').toggle(); // Open the dropdown menu
            $('.nav-dropdown').not($(this).siblings()).hide(); // Close all other dropdowns
            e.stopPropagation();
        });

        // Clicking on .nav-container will minimise .nav-dropdown
        $('.nav-container').click(function () {
            $('.nav-dropdown').hide();
        });

        // Clicking on #banner
        $('#banner').click(function () {
            // If #nav-toggle and .nav-list are visible, minimise .nav-list
            if ($('#nav-toggle').is(':visible') && $('.nav-list').is(':visible')) {
                $('.nav-list').slideToggle(); // Close the navigation menu
                $('#nav-toggle').toggleClass(); // X to hamburger
            }
            // If .nav-dropdown is visible, minimise .nav-dropdown
            if ($('.nav-dropdown').is(':visible')) {
                $('.nav-dropdown').hide(); // Close dropdown menu
            }
        });

        // Clicking on main
        $('main').click(function () {
            // If #nav-toggle and .nav-list are visible, minimise .nav-list
            if ($('#nav-toggle').is(':visible') && $('.nav-list').is(':visible')) {
                $('.nav-list').slideToggle(); // Close the navigation menu
                $('#nav-toggle').toggleClass(); // X to hamburger
            }
            // If .nav-dropdown is visible, minimise .nav-dropdown
            if ($('.nav-dropdown').is(':visible')) {
                $('.nav-dropdown').hide(); // Close dropdown menu
            }
        });

        // $(window).on("load resize", function () {
        //     $('.nav-list').slideToggle('', $(window).width() >= 800);
        // });

    }); // End DOM ready
})(jQuery); // End jQuery
