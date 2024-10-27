// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function() {
    // Get the button and the cookie consent section
    const acceptButton = document.getElementById("acceptCookies");
    const cookieConsentSection = document.getElementById("cookieConsent");

    // Add a click event listener to the button
    acceptButton.addEventListener("click", function() {
        // Hide the cookie consent section
        cookieConsentSection.style.display = "none";

        // Optionally, you can also set a cookie to remember the user's choice
        document.cookie = "cookieConsent=accepted; path=/; max-age=" + 60 * 60 * 24 * 30; // Expires in 30 days
    });
});
