import { loadPartialView, setActiveMenu } from './viewManager.js';
import { initializeDropzonesInCurrentView, cleanupActiveDropzones } from './dropzoneManager.js';

$(document).ready(function () {
    // Load default view (Home) on page load
    loadPartialView('Home', 'Home');
    setActiveMenu($(`a[data-view="Home"]`));

    // Handle menu click events
    $('.nav-link').click(function (e) {
        e.preventDefault();

        const controller = $(this).data('controller');
        const view = $(this).data('view');

        if (controller && view) {
            loadPartialView(controller, view);
        }

        setActiveMenu($(this));
    });
});
