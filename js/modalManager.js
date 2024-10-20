import { cleanupActiveDropzones } from './dropzoneManager.js';

// Function to load modal dynamically from a separate HTML file
function loadModal() {
    $.ajax({
        url: '/modals/modal.html',
        type: 'GET',
        success: function (result) {
            if ($('#editModal').length === 0) {
                $('body').append(result);
                initializeDropzoneForModal();

                // Clean up Dropzone when modal is closed
                $('#editModal').on('hidden.bs.modal', function () {
                    cleanupActiveDropzones();  // Clean up Dropzone when modal closes
                });
            }
        },
        error: function (xhr, status, error) {
            console.error("Error loading modal:", error);
        }
    });
}

// Function to initialize Dropzone in the modal after loading
function initializeDropzoneForModal() {
    let dropzoneElement = $('#myDropzone')[0];
    if (dropzoneElement && !Dropzone.instances.length) {
        initializeDropzone(dropzoneElement);  // Reuse base config for modal Dropzone
    }
}

// Export functions
export { loadModal, initializeDropzoneForModal };
