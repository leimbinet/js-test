// Initialize Dropzone with optional custom configurations
function initializeDropzone(element, options = {}) {
    let defaultOptions = {
        url: $(element).attr("action"),
        maxFiles: 1,
        dictDefaultMessage: "Drag your file here or click to upload",
        init: function () {
            this.on("success", function (file, response) {
                console.log("File uploaded successfully.");
            });
        }
    };

    // Merge default options with custom options
    let dropzoneConfig = $.extend({}, defaultOptions, options);

    // Initialize Dropzone instance
    return new Dropzone(element, dropzoneConfig);
}

// Clean up all active Dropzone instances
function cleanupActiveDropzones() {
    Dropzone.instances.forEach(function (dz) {
        dz.destroy();  // Destroy each Dropzone instance
    });
    Dropzone.instances = [];  // Clear the Dropzone instances array
}

// Initialize Dropzones in the current view
function initializeDropzonesInCurrentView() {
    // Clean up previous Dropzone instances
    cleanupActiveDropzones();

    // Find Dropzone forms and initialize
    $(".dropzone").each(function () {
        let dropzoneElement = $(this)[0];
        let id = $(this).attr("id");

        if (id === "myDropzoneSpecial") {
            // Custom configuration for specific Dropzone
            initializeDropzone(dropzoneElement, {
                maxFiles: 5,
                dictDefaultMessage: "Drop multiple files here or click to upload",
                acceptedFiles: ".jpg,.png,.gif"
            });
        } else {
            // Default Dropzone configuration
            initializeDropzone(dropzoneElement);
        }
    });
}

// Export functions to be used in other modules
export { initializeDropzone, cleanupActiveDropzones, initializeDropzonesInCurrentView };
