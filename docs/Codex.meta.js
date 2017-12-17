Bridge.assembly("Codex.Monaco", function ($asm, globals) {
    "use strict";


    var $m = Bridge.setMetadata,
        $n = [System.Threading.Tasks,System,Codex.Monaco];
    $m($n[2].MonacoLibrary, function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"InitializeAsync","is":true,"t":8,"sn":"InitializeAsync","rt":$n[0].Task}]}; });
    $m($n[2].Editor, function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"Create","is":true,"t":8,"pi":[{"n":"htmlElement","pt":HTMLElement,"ps":0},{"n":"text","pt":$n[1].String,"ps":1}],"sn":"Create","rt":$n[0].Task,"p":[HTMLElement,$n[1].String]}]}; });
});
