/**
 * Created by lurai on 13/02/2016.
 */

/**************** HTML CODE ***********************************/
/*
<div id="libraries" role="tabpanel" class="tab-pane">
    <div class="textarea">
    <h4>Add libraries:</h4>
<ul class="list-group">
    <li class="list-group-item">
    <span id="addJquery_success" class="label label-success pull-right">added</span>
    <button id="addJquery" type="button" class="btn btn-primary btn-xs pull-right">add</button>
    jQuery v1.12.0
</li>

<li id="JslibraryLi" class="list-group-item">
    <h4>Other JavaScript libraries:</h4>
<div class="input-group">
    <span class="input-group-addon">url</span>
    <input id="JsLibraryUrl" type="text" class="form-control" placeholder="paste library CDN url" aria-describedby="basic-addon1">
    <span class="input-group-btn">
    <button id="addJsLibrary" class="btn btn-default" type="button">Add</button>
    </span>
    </div>
    </li>

    <li id="CsslibraryLi" class="list-group-item">
    <h4>CSS libraries:</h4>
<div class="input-group">
    <span class="input-group-addon">url</span>
    <input id="CssLibraryUrl" type="text" class="form-control" placeholder="paste library CDN url" aria-describedby="basic-addon1">
    <span class="input-group-btn">
    <button id="addCssLibrary" class="btn btn-default" type="button">Add</button>
    </span>
    </div>
    </li>
    </ul>
    </div>
    </div>
*/


/******************   JavaSCript *************************************/


/*
 var $addJqueryBtn       = $('#addJquery');
 var $addJsLibraryBtn    = $('#addJsLibrary');
 var $addCssLibraryBtn   = $('#addCssLibrary');
 var span                = '<span class="label label-success pull-right">added</span>';
 */


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

/*

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

 */