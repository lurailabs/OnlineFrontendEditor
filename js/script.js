/**
 * Created by lurai on 08/02/2016.
 */


function Display() {

    var frame = $('#output').get(0);

    this.update = function () {
        updateHtml();
        updateCss();
        updateJs();
    };

    var updateHtml = function () {
        var frameDoc = frame.contentDocument || frame.contentWindow.document;
        frameDoc.body.innerHTML = document.getElementById("htmlCode").value;
    };

    var updateCss = function () {
        var style = frame.contentWindow.document.createElement('style');
        style.innerHTML = document.getElementById("cssCode").value;
        frame.contentWindow.document.head.appendChild(style);
    };

    var updateJs = function () {
        var script = frame.contentWindow.document.createElement('script');
        script.innerHTML = document.getElementById("jsCode").value;
        frame.contentWindow.document.body.appendChild(script);
    };
}


var libraries = {
    jquery: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.0/jquery.min.js',

    addJs: function (cdn) {
        var frame = $('#output').get(0);
        var script = frame.contentWindow.document.createElement('script');
        script.setAttribute('src', cdn);
        frame.contentWindow.document.head.appendChild(script);
    },

    addCss: function (cdn) {
        var frame = $('#output').get(0);
        var linkNode = frame.contentWindow.document.createElement('link');
        linkNode.setAttribute('rel', 'stylesheet');
        linkNode.setAttribute('href', cdn);
        frame.contentWindow.document.head.appendChild(linkNode);
    }
};


(function () {

    var display = new Display();
    var $runBtn = $('#runBtn');
    /*
     var $addJqueryBtn       = $('#addJquery');
     var $addJsLibraryBtn    = $('#addJsLibrary');
     var $addCssLibraryBtn   = $('#addCssLibrary');
     var span                = '<span class="label label-success pull-right">added</span>';
     */

    $runBtn.click(function () {
        console.log('click on button');
        display.update();
    });

    /*
     $addJqueryBtn.click(function() {
     libraries.addJs( libraries.jquery);
     $addJqueryBtn.css('display', 'none');
     $('#addJquery_success').css('display', 'inline');
     });

     $addJsLibraryBtn.click(function() {
     var libraryUrl = $('#JsLibraryUrl').val();
     libraries.addJs(libraryUrl);
     var libraryName =  libraryUrl.substring(libraryUrl.lastIndexOf('/') + 1);
     var newLibraryNode = $('<li class="list-group-item">' + span + libraryName + '</li>');
     newLibraryNode.insertBefore($('#JslibraryLi'));
     });

     $addCssLibraryBtn.click(function() {
     var libraryUrl = $('#CssLibraryUrl').val();
     libraries.addCss(libraryUrl);
     var libraryName =  libraryUrl.substring(libraryUrl.lastIndexOf('/') + 1);
     var newLibraryNode = $('<li class="list-group-item">' + span + libraryName + '</li>');
     newLibraryNode.insertAfter($('#CsslibraryLi'));
     });
     */

}());


