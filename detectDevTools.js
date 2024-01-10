var devToolsOpen = false;
function detectDevTools() {
    var threshold = 160; // Threshold for width/height difference
    var widthDiff = window.outerWidth - window.innerWidth;
    var heightDiff = window.outerHeight - window.innerHeight;

    if (widthDiff > threshold || heightDiff > threshold) {
        if (!devToolsOpen) {
            console.log('DevTools is likely open');
            devToolsOpen = true;
        }
    } else {
        if (devToolsOpen) {
            console.log('DevTools is likely closed');
            devToolsOpen = false;
        }
    }
}