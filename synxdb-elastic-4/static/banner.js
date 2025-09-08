document.addEventListener('DOMContentLoaded', function() {
    var banner = document.createElement('div');
    banner.className = 'preview-banner';
    banner.innerHTML = 'Back to <a href="http://192.168.199.184/lightning.html">Home Page</a>.';
    
    // For Read the Docs theme, we want to insert the banner into the top of the content area.
    var navContent = document.querySelector('.wy-nav-content');
    if (navContent) {
        navContent.insertBefore(banner, navContent.firstChild);
    } else {
        // Fallback for other themes
        var mainContent = document.querySelector('div[role="main"]');
        if (mainContent) {
            mainContent.insertBefore(banner, mainContent.firstChild);
        } else {
            document.body.insertBefore(banner, document.body.firstChild);
        }
    }
}); 