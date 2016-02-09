/**
 * Created by lurai on 08/02/2016.
 */




// HTML

function updateHtml() {

    var frame               = $('#display').get(0);
    var frameDoc            = frame.contentDocument || frame.contentWindow.document;
    frameDoc.body.innerHTML = document.getElementById("htmlCode").value;
}


// CSS

function updateCss() {

    var frame           = $('#display').get(0);
    var style           = frame.contentWindow.document.createElement('style');
    style.innerHTML     = document.getElementById("cssCode").value;
    frame.contentWindow.document.head.appendChild(style);

}

// JavaScript

function updateJs() {

    var frame           = $('#display').get(0);
    var script          = frame.contentWindow.document.createElement('script');
    script.innerHTML    = document.getElementById("jsCode").value;
    frame.contentWindow.document.body.appendChild(script);
}

