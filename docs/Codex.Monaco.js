/**
 * @version 1.0.0.0
 * @copyright Copyright ©  2017
 * @compiler Bridge.NET 16.3.6
 */
Bridge.assembly("Codex.Monaco", function ($asm, globals) {
    "use strict";

    var monaco_editor_ignored;

    Bridge.define("Codex.Monaco.Editor", {
        statics: {
            methods: {
                Create: function (htmlElement, text) {
                    var $step = 0,
                        $task1, 
                        $jumpFromFinally, 
                        $tcs = new System.Threading.Tasks.TaskCompletionSource(), 
                        $returnValue, 
                        $async_e, 
                        $asyncBody = Bridge.fn.bind(this, function () {
                            try {
                                for (;;) {
                                    $step = System.Array.min([0,1], $step);
                                    switch ($step) {
                                        case 0: {
                                            $task1 = Codex.Monaco.MonacoLibrary.InitializeAsync();
                                            $step = 1;
                                            $task1.continueWith($asyncBody);
                                            return;
                                        }
                                        case 1: {
                                            $task1.getAwaitedResult();
                                            monaco.editor.create(htmlElement, { value: text, language: "javascript" });
                                            $tcs.setResult(null);
                                            return;
                                        }
                                        default: {
                                            $tcs.setResult(null);
                                            return;
                                        }
                                    }
                                }
                            } catch($async_e1) {
                                $async_e = System.Exception.create($async_e1);
                                $tcs.setException($async_e);
                            }
                        }, arguments);

                    $asyncBody();
                    return $tcs.task;
                }
            }
        }
    });

    /** @namespace Codex.Monaco */

    /**
     * Responsible for loading the monaco editor javascript library using the loader.js
     included with monaco
     *
     * @static
     * @abstract
     * @public
     * @class Codex.Monaco.MonacoLibrary
     */
    Bridge.define("Codex.Monaco.MonacoLibrary", {
        statics: {
            methods: {
                InitializeAsync: function () {
                    var $step = 0,
                        $task1, 
                        $jumpFromFinally, 
                        $tcs = new System.Threading.Tasks.TaskCompletionSource(), 
                        $returnValue, 
                        $async_e, 
                        $asyncBody = Bridge.fn.bind(this, function () {
                            try {
                                for (;;) {
                                    $step = System.Array.min([0,1], $step);
                                    switch ($step) {
                                        case 0: {
                                            require.config({ paths: { 'vs': 'node_modules/monaco-editor/dev/vs' } });
                                            $task1 = Bridge.loadModule({amd: ["vs/editor/editor.main"]}, function () { monaco_editor_ignored = arguments[0]; });
                                            $step = 1;
                                            $task1.continueWith($asyncBody);
                                            return;
                                        }
                                        case 1: {
                                            $task1.getAwaitedResult();
                                            $tcs.setResult(null);
                                            return;
                                        }
                                        default: {
                                            $tcs.setResult(null);
                                            return;
                                        }
                                    }
                                }
                            } catch($async_e1) {
                                $async_e = System.Exception.create($async_e1);
                                $tcs.setException($async_e);
                            }
                        }, arguments);

                    $asyncBody();
                    return $tcs.task;
                }
            }
        }
    });
});

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICJDb2RleC5Nb25hY28uanMiLAogICJzb3VyY2VSb290IjogIiIsCiAgInNvdXJjZXMiOiBbIkVkaXRvci5jcyIsImxpYi9Nb25hY29FZGl0b3IuZC5jcyJdLAogICJuYW1lcyI6IFsiIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7OztrQ0FZd0NBLGFBQXlCQTs7Ozs7Ozs7Ozs7Ozs0Q0FFckRBLFNBQU1BOzs7Ozs7OzRDQUVOQSxxQkFBcUJBLGFBQWFBLFNBRXRCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NENDSVpBOzRDQUNBQSxTQUFNQSIsCiAgInNvdXJjZXNDb250ZW50IjogWyJ1c2luZyBCcmlkZ2U7XHJcbnVzaW5nIEJyaWRnZS5IdG1sNTtcclxudXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG5cclxubmFtZXNwYWNlIENvZGV4Lk1vbmFjb1xyXG57XHJcbiAgICBwdWJsaWMgc3RhdGljIGNsYXNzIEVkaXRvclxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgVGFzayBDcmVhdGUoSFRNTEVsZW1lbnQgaHRtbEVsZW1lbnQsIHN0cmluZyB0ZXh0KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYXdhaXQgTW9uYWNvTGlicmFyeS5Jbml0aWFsaXplQXN5bmMoKTtcclxuXHJcbiAgICAgICAgICAgIG1vbmFjby5lZGl0b3IuY3JlYXRlKGh0bWxFbGVtZW50LCBuZXcgbW9uYWNvLmVkaXRvci5JRWRpdG9yQ29uc3RydWN0aW9uT3B0aW9uc1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHRleHQsXHJcbiAgICAgICAgICAgICAgICBsYW5ndWFnZSA9IFwiamF2YXNjcmlwdFwiXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsInVzaW5nIEJyaWRnZTtcclxudXNpbmcgQnJpZGdlLkh0bWw1O1xyXG51c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcblxyXG5bRXh0ZXJuYWxdXHJcbltNb2R1bGUodHJ1ZSwgTG9hZE5hbWUgPSBcInZzL2VkaXRvci9lZGl0b3IubWFpblwiLCBOYW1lID0gXCJtb25hY29fZWRpdG9yX2lnbm9yZWRcIildXHJcbnB1YmxpYyBzdGF0aWMgcGFydGlhbCBjbGFzcyBtb25hY28geyB9XHJcblxyXG5uYW1lc3BhY2UgQ29kZXguTW9uYWNvXHJcbntcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyBSZXNwb25zaWJsZSBmb3IgbG9hZGluZyB0aGUgbW9uYWNvIGVkaXRvciBqYXZhc2NyaXB0IGxpYnJhcnkgdXNpbmcgdGhlIGxvYWRlci5qc1xyXG4gICAgLy8vIGluY2x1ZGVkIHdpdGggbW9uYWNvXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgcHVibGljIHN0YXRpYyBjbGFzcyBNb25hY29MaWJyYXJ5XHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBhc3luYyBUYXNrIEluaXRpYWxpemVBc3luYygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBTY3JpcHQuV3JpdGUoXCJyZXF1aXJlLmNvbmZpZyh7IHBhdGhzOiB7ICd2cyc6ICdub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9kZXYvdnMnIH0gfSlcIik7XHJcbiAgICAgICAgICAgIGF3YWl0IEJyaWRnZS5Nb2R1bGUuTG9hZCh0eXBlb2YobW9uYWNvKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdCn0K
