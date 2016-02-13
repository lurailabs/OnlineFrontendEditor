/**
 * Created by lurai on 13/02/2016.
 */

/**
 * Manages the HTML, CSS and JS panels and buttons state.
 * Changes panels size depending on the navbar buttons clicked.
 * Always at least one button must be active.
 *
 * @returns {{processBtn: processBtn}}
 * @constructor
 */

var CodePanel = function() {

    var activeButtons = ['html', 'css', 'js'];

    var resizeCodePanel = function() {
        switch(activeButtons.length) {
            case 1: $('.codeDiv').height('95%'); break;
            case 2: $('.codeDiv').height('47%'); break;
            case 3: $('.codeDiv').height('31%'); break;
        }
    };

    var deactivateBtn = function(btn) {
        if(activeButtons.length === 1) return;  // at least one active button
        btn.classList.remove('active');         // doesn't work in IE<10
        $('#' + btn.name + 'Code').hide();
        activeButtons.splice( activeButtons.indexOf(btn.name), 1 );
        resizeCodePanel();
    };

    var activateBtn = function(btn) {
        resizeCodePanel();
        btn.classList.add('active');            // doesn't work in IE<10
        $('#' + btn.name + 'Code').show();
        activeButtons.push(btn.name);
        resizeCodePanel();
    };

    var processBtn = function(btn) {
        var btnName = btn.name;
        if (activeButtons.indexOf(btnName) < 0)  activateBtn(btn);
        else  deactivateBtn(btn);
    };

    return {
        processBtn: processBtn
    };

};


