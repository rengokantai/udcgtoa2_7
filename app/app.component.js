System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            //pass [myname] from parent component to child component.child component receive data from [input]
            AppComponent = (function () {
                function AppComponent() {
                    this.today = new Date();
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <section class=\"main\">\n    date\n    <p>today is {{today | date: 'short'}} {{today | date: 'ymd'}}</p>\n    </section>\n        <section class=\"main\">\n        uppercase\n    <p><input type=\"text\" #case (keyup)=\"0\"> {{case.value|uppercase}}</p>\n    </section>\n    <section class=\"main\">\n    slice\n    <input type=\"text\" #slicepipe (keyup)=\"0\"> -from <input type=\"text\" #start (keyup)=\"0\">-to <input type=\"text\" #end (keyup)=\"0\">\n    output:{{slicepipe.value|slice:start.value:end.value}}\n    </section>\n    <section class=\"main\">\n    numbers\n    <input type=\"text\" #numberpipe (keyup)=\"0\">\n    <input type=\"text\" #currency value=\"EUR\" (change)=\"0\">\n    decimal:{{1.0 * numberpipe.value |number:'1.1-2'}}\n    currency:{{1.0 * numberpipe.value |currency:currency.value}}\n    <input type=\"checkbox\" #currencyshort checked (change)=\"0\">short\n    </section>\n    <section class=\"pipe\">\n    multiple pipes\n    <input type=\"text\" #multipipe (keyup)=\"0\">\n    </section>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiQXBwQ29tcG9uZW50IiwiQXBwQ29tcG9uZW50LmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFDQSxrR0FBa0c7WUFDbEc7Z0JBQUFBO29CQStCQUMsVUFBS0EsR0FBQ0EsSUFBSUEsSUFBSUEsRUFBRUEsQ0FBQ0E7Z0JBQ2pCQSxDQUFDQTtnQkFoQ0REO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1BBLFFBQVFBLEVBQUVBLFFBQVFBO3dCQUNsQkEsUUFBUUEsRUFBQ0EsdWdDQXlCRUE7cUJBRWRBLENBQUNBOztpQ0FHREE7Z0JBQURBLG1CQUFDQTtZQUFEQSxDQWhDQSxBQWdDQ0EsSUFBQTtZQWhDRCx1Q0FnQ0MsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG4vL3Bhc3MgW215bmFtZV0gZnJvbSBwYXJlbnQgY29tcG9uZW50IHRvIGNoaWxkIGNvbXBvbmVudC5jaGlsZCBjb21wb25lbnQgcmVjZWl2ZSBkYXRhIGZyb20gW2lucHV0XVxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcclxuICAgIHRlbXBsYXRlOmBcclxuICAgIDxzZWN0aW9uIGNsYXNzPVwibWFpblwiPlxyXG4gICAgZGF0ZVxyXG4gICAgPHA+dG9kYXkgaXMge3t0b2RheSB8IGRhdGU6ICdzaG9ydCd9fSB7e3RvZGF5IHwgZGF0ZTogJ3ltZCd9fTwvcD5cclxuICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cIm1haW5cIj5cclxuICAgICAgICB1cHBlcmNhc2VcclxuICAgIDxwPjxpbnB1dCB0eXBlPVwidGV4dFwiICNjYXNlIChrZXl1cCk9XCIwXCI+IHt7Y2FzZS52YWx1ZXx1cHBlcmNhc2V9fTwvcD5cclxuICAgIDwvc2VjdGlvbj5cclxuICAgIDxzZWN0aW9uIGNsYXNzPVwibWFpblwiPlxyXG4gICAgc2xpY2VcclxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICNzbGljZXBpcGUgKGtleXVwKT1cIjBcIj4gLWZyb20gPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI3N0YXJ0IChrZXl1cCk9XCIwXCI+LXRvIDxpbnB1dCB0eXBlPVwidGV4dFwiICNlbmQgKGtleXVwKT1cIjBcIj5cclxuICAgIG91dHB1dDp7e3NsaWNlcGlwZS52YWx1ZXxzbGljZTpzdGFydC52YWx1ZTplbmQudmFsdWV9fVxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJtYWluXCI+XHJcbiAgICBudW1iZXJzXHJcbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjbnVtYmVycGlwZSAoa2V5dXApPVwiMFwiPlxyXG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI2N1cnJlbmN5IHZhbHVlPVwiRVVSXCIgKGNoYW5nZSk9XCIwXCI+XHJcbiAgICBkZWNpbWFsOnt7MS4wICogbnVtYmVycGlwZS52YWx1ZSB8bnVtYmVyOicxLjEtMid9fVxyXG4gICAgY3VycmVuY3k6e3sxLjAgKiBudW1iZXJwaXBlLnZhbHVlIHxjdXJyZW5jeTpjdXJyZW5jeS52YWx1ZX19XHJcbiAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgI2N1cnJlbmN5c2hvcnQgY2hlY2tlZCAoY2hhbmdlKT1cIjBcIj5zaG9ydFxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJwaXBlXCI+XHJcbiAgICBtdWx0aXBsZSBwaXBlc1xyXG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI211bHRpcGlwZSAoa2V5dXApPVwiMFwiPlxyXG4gICAgPC9zZWN0aW9uPmBcclxuXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xyXG50b2RheT1uZXcgRGF0ZSgpO1xyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
