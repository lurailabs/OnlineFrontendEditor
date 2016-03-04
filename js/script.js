/**
 * Created by lurai on 08/02/2016.
 */

(function () {

    /** Create Layout **/

    $('body').layout({
        north__size:                    65
        , north__enableCursorHotkey:    false
        , north__closable:              false
        , north__resizable:             false
        , north__spacing_open:          0
        , north__spacing_close:         0
        , west__size:                   400
        , west__spacing_closed:         20
        , west__togglerLength_closed:   100
        , west__togglerAlign_closed:    "center"
        , west__togglerContent_closed:  "S<BR>H<BR>O<BR>W"
        , west__togglerTip_closed:      "show code"
        , west__sliderTip:              "slide open code"
        , west__slideTrigger_open:      "mouseover"
        , center__maskContents: true // IMPORTANT - enable iframe masking
    });

    /** tart editor **/

    var compiler     = new Compiler();
    var codePanel   = new CodePanel();

    loadCode("1_box-shadow");

    /** Events **/

    $('#runBtn').click(function () {
        compiler.run();
    });

    $('.code-navbar-btn').click(function(event) {
        codePanel.processBtn(event.target);

    });

}());


