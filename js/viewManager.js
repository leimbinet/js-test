import { initializeDropzonesInCurrentView } from './dropzoneManager.js';
import { loadModal } from './modalManager.js';

// Function to load partial view from MVC controller
function loadPartialView(controller, view) {
    $.ajax({
        url: `/${controller}/${view}`,  // Dynamic URL
        type: 'GET',
        success: function (result) {
            $('#partialViewContainer').html(result);  // Inject the loaded view

            // Initialize Dropzones after loading the partial view
            initializeDropzonesInCurrentView();

            // Load the modal for editing files
            loadModal();
        },
        error: function (xhr, status, error) {
            console.error("Error loading view:", error);
        }
    });
}

// Function to highlight the active menu link
function setActiveMenu(element) {
    $('.nav-link').removeClass('active');  // Remove active class from all links
    element.addClass('active');  // Add active class to the clicked link
}

// Export functions
export { loadPartialView, setActiveMenu };
