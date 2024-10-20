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

        // Collapse other open sub-menus
        closeOtherMenus($(this));

        // Highlight the active menu link
        setActiveMenu($(this));
    });
});

// Function to close other open sub-menus when a new one is clicked
function closeOtherMenus(clickedElement) {
    // Find all open sub-menus except the one that's being clicked
    $('.nav-item .collapse').each(function () {
        let submenu = $(this);
        
        // Check if this submenu is not the parent of the clicked element
        if (!submenu.has(clickedElement).length) {
            // Collapse the submenu
            submenu.collapse('hide');
        }
    });
}
