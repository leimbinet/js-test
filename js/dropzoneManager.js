// General Dropzone configuration function
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

    // Merge default options with specific overrides
    let dropzoneConfig = $.extend({}, defaultOptions, options);

    // Initialize the Dropzone
    return new Dropzone(element, dropzoneConfig);
}

// Function to clean up all active Dropzones
function cleanupActiveDropzones() {
    Dropzone.instances.forEach(function (dz) {
        dz.destroy();  // Destroy each Dropzone instance
    });
    Dropzone.instances = [];  // Clear the active Dropzones array
}

// Function to initialize Dropzones in the current view
function initializeDropzonesInCurrentView() {
    // Deallocate previous Dropzone instances (if necessary)
    cleanupActiveDropzones();

    // Find Dropzone forms by class and initialize
    $(".dropzone").each(function () {
        let dropzoneElement = $(this)[0];
        let id = $(this).attr("id");

        // Example of custom behavior per ID
        if (id === "myDropzoneSpecial") {
            initializeDropzone(dropzoneElement, {
                maxFiles: 5,  // Custom config for this view
                dictDefaultMessage: "Drop multiple files here or click to upload",
                acceptedFiles: ".jpg,.png,.gif"
            });
        } else {
            // Use default Dropzone config for other views
            initializeDropzone(dropzoneElement);
        }
    });
}

// Export functions (if using ES6 modules)
export { initializeDropzone, cleanupActiveDropzones, initializeDropzonesInCurrentView };