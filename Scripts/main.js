var Vontobel = Vontobel || {};  // Initialize the main namespace if it doesn't exist

Vontobel.Utilities = {
    showMessage: function(message) {
        console.log(message);
    }
};

$(document).ready(function () {
    // Load default view (Home) on page load
    loadPartialView('home');
    setActiveMenu($(`a[data-view="home"]`));

    // Handle menu click events
    $('.nav-link').click(function (e) {
        e.preventDefault(); // Prevent the default link action

        const view = $(this).data('view');
        loadPartialView(view); // Load the corresponding partial view

        setActiveMenu($(this)); // Highlight the active menu item
    });

    // Function to load partial view
    function loadPartialView(view) {
        $('#partialViewContainer').load(`views/${view}.html`);
        console.log(view);
    }

    // Function to highlight the active menu
    function setActiveMenu(element) {
        $('.nav-link').removeClass('active'); // Remove 'active' class from all links
        element.addClass('active'); // Add 'active' class to the clicked link
    }
});
