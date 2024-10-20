import { loadPartialView, setActiveMenu } from './viewManager.js';

$(document).ready(function () {

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