/**
 * @version 1.0.0.0
 * @copyright Copyright ©  2017
 * @compiler Bridge.NET 16.3.2
 */
Bridge.assembly("Codex.View.Web", function ($asm, globals) {
    "use strict";

    /** @namespace Codex.View */

    /**
     * Interaction logic for App.xaml
     *
     * @public
     * @class Codex.View.App
     * @augments System.Windows.Application
     */
    Bridge.define("Codex.View.App", {
        inherits: [System.Windows.Application],
        main: function Main () {
            System.Windows.ApplicationHost.Current.System$Windows$IApplicationHost$Run($asm.$.Codex.View.App.f1);
        },
        methods: {
            InitializeComponent: function () {
                System.Windows.Application.LoadComponent$1(this, Granular.Compatibility.Uri.CreateAbsoluteUri("pack://application:,,,/Codex.View.Web;component/App.xaml"));
            }
        }
    });

    Bridge.ns("Codex.View.App", $asm.$);

    Bridge.apply($asm.$.Codex.View.App, {
        f1: function () {
            var application = new Codex.View.App();
            application.InitializeComponent();
            application.Run();
        }
    });

    /**
     * Interaction logic for MainWindow.xaml
     *
     * @public
     * @class Codex.View.MainWindow
     * @augments System.Windows.Window
     */
    Bridge.define("Codex.View.MainWindow", {
        inherits: [System.Windows.Window],
        fields: {
            SearchBoxAndImagesColumn: null,
            HeaderMenuColumn: null
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                System.Windows.Window.ctor.call(this);
                this.InitializeComponent();
            }
        },
        methods: {
            Button_Click: function (sender, e) { },
            Grid_Loaded: function (sender, e) {
                System.Console.WriteLine("Hello world");
            },
            InitializeComponent: function () {
                System.Windows.Application.LoadComponent$1(this, Granular.Compatibility.Uri.CreateAbsoluteUri("pack://application:,,,/Codex.View.Web;component/MainWindow.xaml"));
            }
        }
    });

    Bridge.define("Codex.View.Web.Compatibility.Reference", {
        statics: {
            fields: {
                GranularPresentationGenericReference: null
            }
        }
    });
});

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICJDb2RleC5WaWV3LldlYi5qcyIsCiAgInNvdXJjZVJvb3QiOiAiIiwKICAic291cmNlcyI6IFsiLi4vQ29kZXguVmlldy9BcHAueGFtbC5jcyIsIi4uL0NvZGV4LlZpZXcvTWFpbldpbmRvdy54YW1sLmNzIl0sCiAgIm5hbWVzIjogWyIiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQTJCWUEsMkVBQTJDQSxBQUF3QkE7Ozs7Z0JBTm5FQSwyQ0FBeUNBLE1BQU1BOzs7Ozs7Ozs7WUFRL0NBLGtCQUFrQkEsSUFBSUE7WUFDdEJBO1lBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JDUEFBOzs7O29DQUdzQkEsUUFBZUE7bUNBSWhCQSxRQUFlQTtnQkFFcENBOzs7Z0JBUkFBLDJDQUF5Q0EsTUFBTUEiLAogICJzb3VyY2VzQ29udGVudCI6IFsidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkNvbmZpZ3VyYXRpb247XHJcbnVzaW5nIFN5c3RlbS5EYXRhO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRocmVhZGluZy5UYXNrcztcclxudXNpbmcgU3lzdGVtLldpbmRvd3M7XHJcblxyXG5uYW1lc3BhY2UgQ29kZXguVmlld1xyXG57XHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8gSW50ZXJhY3Rpb24gbG9naWMgZm9yIEFwcC54YW1sXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgQXBwIDogQXBwbGljYXRpb25cclxuICAgIHtcclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcbnVzaW5nIFN5c3RlbS5XaW5kb3dzO1xyXG51c2luZyBTeXN0ZW0uV2luZG93cy5Db250cm9scztcclxudXNpbmcgU3lzdGVtLldpbmRvd3MuRGF0YTtcclxudXNpbmcgU3lzdGVtLldpbmRvd3MuRG9jdW1lbnRzO1xyXG51c2luZyBTeXN0ZW0uV2luZG93cy5JbnB1dDtcclxudXNpbmcgU3lzdGVtLldpbmRvd3MuTWVkaWE7XHJcbnVzaW5nIFN5c3RlbS5XaW5kb3dzLk1lZGlhLkltYWdpbmc7XHJcbnVzaW5nIFN5c3RlbS5XaW5kb3dzLk5hdmlnYXRpb247XHJcbnVzaW5nIFN5c3RlbS5XaW5kb3dzLlNoYXBlcztcclxuXHJcbm5hbWVzcGFjZSBDb2RleC5WaWV3XHJcbntcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyBJbnRlcmFjdGlvbiBsb2dpYyBmb3IgTWFpbldpbmRvdy54YW1sXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgTWFpbldpbmRvdyA6IFdpbmRvd1xyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBNYWluV2luZG93KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemVDb21wb25lbnQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgdm9pZCBCdXR0b25fQ2xpY2sob2JqZWN0IHNlbmRlciwgUm91dGVkRXZlbnRBcmdzIGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIEdyaWRfTG9hZGVkKG9iamVjdCBzZW5kZXIsIFJvdXRlZEV2ZW50QXJncyBlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQ29uc29sZS5Xcml0ZUxpbmUoXCJIZWxsbyB3b3JsZFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vcHJpdmF0ZSB2b2lkIEJvcmRlcl9TaXplQ2hhbmdlZChvYmplY3Qgc2VuZGVyLCBTaXplQ2hhbmdlZEV2ZW50QXJncyBlKVxyXG4gICAgICAgIC8ve1xyXG4gICAgICAgIC8vfVxyXG5cclxuICAgICAgICAvL3ByaXZhdGUgdm9pZCBXaW5kb3dfTG9hZGVkKG9iamVjdCBzZW5kZXIsIFJvdXRlZEV2ZW50QXJncyBlKVxyXG4gICAgICAgIC8ve1xyXG4gICAgICAgIC8vfVxyXG5cclxuICAgICAgICAvL3ByaXZhdGUgdm9pZCBXaW5kb3dfSW5pdGlhbGl6ZWQob2JqZWN0IHNlbmRlciwgRXZlbnRBcmdzIGUpXHJcbiAgICAgICAgLy97XHJcbiAgICAgICAgLy99XHJcblxyXG4gICAgICAgIC8vcHJvdGVjdGVkIG92ZXJyaWRlIFNpemUgQXJyYW5nZU92ZXJyaWRlKFNpemUgYXJyYW5nZUJvdW5kcylcclxuICAgICAgICAvL3tcclxuICAgICAgICAvLyAgICB2YXIgcmVzdWx0ID0gYmFzZS5BcnJhbmdlT3ZlcnJpZGUoYXJyYW5nZUJvdW5kcyk7XHJcbiAgICAgICAgLy8gICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAvL31cclxuICAgIH1cclxufVxyXG4iXQp9Cg==
