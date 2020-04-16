import PanelInterface from './modules/InterfacePanel.js';

let panelInterface = new PanelInterface();

// Ajax for pure JavaScript
//1. Create an ajaxRequest object:
var ajaxRequest = new XMLHttpRequest();
//Here the ajaxRequest variable name can be anything you want (may be ajax)

// 2. Create a callback function
ajaxRequest.onreadystatechange = function () {
    if (ajaxRequest.readyState === 4) {
        document.getElementById('ajax').innerHTML = ajaxRequest.responseText;
    }
};

// 3. Open a Request :
ajaxRequest.open('GET', 'sidebar.html');

// 4. Send a request:
ajaxRequest.send();


