import { loadPartialView, setActiveMenu } from './viewManager.js';

$(document).ready(function () {
    // Handle menu click events
    $('.nav-link').click(function (e) {
        e.preventDefault();  // Prevent default link behavior

        const controller = $(this).data('controller');
        const view = $(this).data('view');

        if (controller && view) {
            // Load the corresponding partial view
            loadPartialView(controller, view);
        }

        // Highlight the active menu link
        setActiveMenu($(this));
    });
});
