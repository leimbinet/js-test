import { initializeDropzone, cleanupActiveDropzones } from './dropzoneManager.js';

// Load modal dynamically from a separate HTML file
function loadModal() {
    $.ajax({
        url: '/path/to/modal.html',
        type: 'GET',
        success: function (result) {
            if ($('#editModal').length === 0) {
                $('body').append(result);
                initializeDropzoneForModal();

                // Clean up Dropzone when modal is closed
                $('#editModal').on('hidden.bs.modal', function () {
                    cleanupActiveDropzones();  // Clean up Dropzone on modal close
                });
            }
        },
        error: function (xhr, status, error) {
            console.error("Error loading modal:", error);
        }
    });
}

// Initialize Dropzone inside the modal after loading
function initializeDropzoneForModal() {
    let dropzoneElement = $('#myDropzone')[0];
    if (dropzoneElement && !Dropzone.instances.length) {
        initializeDropzone(dropzoneElement);  // Initialize Dropzone in the modal
    }
}

// Export functions
export { loadModal, initializeDropzoneForModal };
