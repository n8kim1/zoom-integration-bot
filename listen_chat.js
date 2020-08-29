// Adapted from eveloper.mozilla.org/en-US/docs/Web/API/MutationObserver.
let chatContainerNode = document.getElementsByClassName('chat-container__chat-list')[0];

let config = { 
    childList: true,
    attributes: true,
    characterData: false,
    subtree: true 
};

let callback = function(mutationsList, observer) {
    // Use traditional 'for loops' for IE 11
    for(let mutation of mutationsList) {
        if (mutation.type === 'childList') {
            console.log('A child node has been added or removed.');
        }
        else if (mutation.type === 'attributes') {
            console.log('The ' + mutation.attributeName + ' attribute was modified.');
        }
        else {
            console.log('Another mutation detected. Type ' + mutation.type);
        }
    }
};

let observer = new MutationObserver(callback);
observer.observe(chatContainerNode, config);
