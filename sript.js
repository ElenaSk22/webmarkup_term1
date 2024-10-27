
document.addEventListener("DOMContentLoaded", function() {
    
    const acceptButton = document.getElementById("acceptCookies");
    
    const cookieConsentSection = document.getElementById("cookieConsent");

    
    acceptButton.addEventListener("click", function() {
       
        cookieConsentSection.style.display = "none";

        
        document.cookie = "cookieConsent=accepted; path=/; max-age=" + 60 * 60 * 24 * 30; 
    });
});
