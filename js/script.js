/**
 * Created by lurai on 08/02/2016.
 */


function Display() {

    var frame = $('#display').get(0);

    this.update = function() {
        updateHtml();
        updateCss();
        updateJs();
    };

    var updateHtml = function() {
        var frameDoc            = frame.contentDocument || frame.contentWindow.document;
        frameDoc.body.innerHTML = document.getElementById("htmlCode").value;
    };

    var updateCss = function() {
        var style           = frame.contentWindow.document.createElement('style');
        style.innerHTML     = document.getElementById("cssCode").value;
        frame.contentWindow.document.head.appendChild(style);
    };

    var updateJs = function() {
        var script          = frame.contentWindow.document.createElement('script');
        script.innerHTML    = document.getElementById("jsCode").value;
        frame.contentWindow.document.body.appendChild(script);
    };
}

(function() {

    var display     = new Display();
    var runButton   = $('#run');

    runButton.click(function update() {
        display.update();
    });

}());


