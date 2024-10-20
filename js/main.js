$(document).ready(function () {
    // Load default view (Home) on page load
    loadPartialView('home');
    setActiveMenu($(`a[data-view="home"]`));

    // Handle menu click events
    $('.nav-link').click(function (e) {
        e.preventDefault(); // Prevent the default link action

        const view = $(this).data('view');
        if (view) {
            loadPartialView(view); // Load the corresponding partial view
        }

        setActiveMenu($(this)); // Highlight the active menu item
    });

    // Function to load partial view
    function loadPartialView(view) {
        $('#partialViewContainer').load(`views/${view}.html`, function () {
            // Initialize DataTable when 'About' view is loaded
            if (view === 'about') {
                $('#recordsTable').DataTable();
            }
        });
    }

    // Function to highlight the active menu
    function setActiveMenu(element) {
        $('.nav-link').removeClass('active'); // Remove 'active' class from all links
        element.addClass('active'); // Add 'active' class to the clicked link
    }

    // Initialize Dropzone inside the modal window
    Dropzone.options.myDropzone = {
        url: 'https://httpbin.org/post',  // Mock POST request for testing
        maxFiles: 1,
        dictDefaultMessage: "Drag your file here or click to upload",
        init: function() {
            this.on("success", function(file, response) {
                console.log("File uploaded successfully.", response);
            });
        }
    };

    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            console.log(`Added: ${mutation.addedNodes.length}, Removed: ${mutation.removedNodes.length}`);
        });
    });
    
    observer.observe(document.body, { childList: true, subtree: true });
});

