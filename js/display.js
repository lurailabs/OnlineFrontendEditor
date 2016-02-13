/**
 * Created by lurai on 12/02/2016.
 */

function Display() {

    var frame = $('#output').get(0);

    this.update = function () {
        updateHtml();
        updateCss();
        updateJs();
    };

    var updateHtml = function () {
        var htmlCode            = $("#htmlCode > textarea").val();
        var frameDoc            = frame.contentDocument || frame.contentWindow.document;
        frameDoc.body.innerHTML = htmlCode;
    };

    var updateCss = function () {
        var cssCode     = $("#cssCode > textarea").val();
        var style       = frame.contentWindow.document.createElement('style');
        style.innerHTML = cssCode;
        frame.contentWindow.document.head.appendChild(style);
    };

    var updateJs = function () {
        var jsCode          = $("#jsCode > textarea").val();
        var script          = frame.contentWindow.document.createElement('script');
        script.innerHTML    = jsCode;
        frame.contentWindow.document.body.appendChild(script);
    };
}