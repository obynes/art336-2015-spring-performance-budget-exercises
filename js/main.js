// init jellyfish.js
jellyfish.init({
    icon: 'img/loading.svg', // Image to display when image is loading
    offset: 0, // How far below fold to begin loading images
    type: 'img', // Type of content to load ('img' or 'iframe')
    callbackBeforeIcons: function ( wrappers ) {}, // Function to run before icon is loaded
    callbackAfterIcons: function ( wrappers ) {}, // Function to run after icon is loaded
    callbackBeforeContent: function ( wrapper ) {}, // Function to run before content is loaded
    callbackAfterContent: function ( wrapper ) {} // Function to run after content is loaded
});