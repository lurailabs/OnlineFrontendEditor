/**
 * Created by lurai on 12/02/2016.
 */

/**
 * Takes the input from the HTML, CSS and JS textareas
 * and executes the code in the iframe.
 *
 * @returns {{run: run}}
 * @constructor
 */

function Compiler() {

    var frame = $('#output').get(0);

    var runHtml = function () {
        var htmlCode            = $("#htmlCode > textarea").val();
        var frameDoc            = frame.contentDocument || frame.contentWindow.document;
        frameDoc.body.innerHTML = htmlCode;
    };

    var runCss = function () {
        var cssCode     = $("#cssCode > textarea").val();
        var style       = frame.contentWindow.document.createElement('style');
        style.innerHTML = cssCode;
        frame.contentWindow.document.head.appendChild(style);
    };

    var runJs = function () {
        var jsCode          = $("#jsCode > textarea").val();
        var script          = frame.contentWindow.document.createElement('script');
        script.innerHTML    = jsCode;
        frame.contentWindow.document.body.appendChild(script);
    };

    var run = function () {
        runHtml();
        runCss();
        runJs();
    };

    return {
        run: run
    };
}