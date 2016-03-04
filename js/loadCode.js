/**
 * Created by belen on 4/03/16.
 */


var loadCode = function(file) {

    var $htmlTextArea  = $('#htmlCode > textarea');
    var $cssTextArea = $('#cssCode > textarea');
    var $jsTextArea = $('#jsCode > textarea');

    $.getJSON( 'examples/' + file + '.json',
        function( data ) {
            console.log(data);
            $htmlTextArea.append(data.html);
            $cssTextArea.append(data.css);
            $jsTextArea.append(data.js);
        }
    );

    console.log('fin');

};
