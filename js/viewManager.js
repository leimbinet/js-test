import { initializeDropzonesInCurrentView, cleanupActiveDropzones } from './dropzoneManager.js';
import { loadModal } from './modalManager.js';

// Function to load partial view from MVC controller
function loadPartialView(controller, view) {
    $.ajax({
        url: `views/${controller}/${view}`,  // Dynamic URL
        type: 'GET',
        success: function (result) {
            $('#partialViewContainer').html(result);  // Load new view

            // After the new partial is loaded, initialize Dropzones in the view
            initializeDropzonesInCurrentView();

            // Load the modal from the separate HTML file
            loadModal();
        },
        error: function (xhr, status, error) {
            console.error("Error loading view:", error);
        }
    });
}

// Function to handle active menu highlighting
function setActiveMenu(element) {
    $('.nav-link').removeClass('active');
    element.addClass('active');
}

// Export functions
export { loadPartialView, setActiveMenu };