document.addEventListener('DOMContentLoaded', function() {
    // Update the map iframe src with your actual location
    const mapIframe = document.querySelector('.map-container iframe');
    const mapLink = document.querySelector('.map-link');
    
    // Set your actual Google Maps embed URL
    const embedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.178509744292!2d51.4938!3d25.2854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDE3JzA3LjQiTiA1McKwMjknMzcuNiJF!5e0!3m2!1sen!2sqa!4v1620000000000!5m2!1sen!2sqa";
    const directUrl = "https://maps.app.goo.gl/jopyDeDBFbG9Zfco6";
    
    mapIframe.src = embedUrl;
    mapLink.href = directUrl;
    
    // Make entire map clickable
    mapIframe.addEventListener('click', function() {
        window.open(directUrl, '_blank');
    });
});