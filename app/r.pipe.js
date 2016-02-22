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
    var RPipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            //import {PipeTransform} from "../node_modules/angular2/src/core/change_detection/pipe_transform";
            RPipe = (function () {
                function RPipe() {
                }
                RPipe.prototype.transform = function (value, args) {
                    var lg = value.length;
                    var res = '';
                    for (var i = 0; i < lg; i++) {
                        res = value[i] + res;
                    }
                    return res;
                };
                RPipe = __decorate([
                    core_1.Pipe({
                        name: 'mr'
                    }), 
                    __metadata('design:paramtypes', [])
                ], RPipe);
                return RPipe;
            })();
            exports_1("RPipe", RPipe);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInIucGlwZS50cyJdLCJuYW1lcyI6WyJSUGlwZSIsIlJQaXBlLmNvbnN0cnVjdG9yIiwiUlBpcGUudHJhbnNmb3JtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFJQSxrR0FBa0c7WUFDbEc7Z0JBQUFBO2dCQVlBQyxDQUFDQTtnQkFSR0QseUJBQVNBLEdBQVRBLFVBQVVBLEtBQVlBLEVBQUVBLElBQVVBO29CQUM5QkUsSUFBTUEsRUFBRUEsR0FBRUEsS0FBS0EsQ0FBQ0EsTUFBTUEsQ0FBQ0E7b0JBQ3ZCQSxJQUFJQSxHQUFHQSxHQUFFQSxFQUFFQSxDQUFDQTtvQkFDWkEsR0FBR0EsQ0FBQUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsR0FBRUEsQ0FBQ0EsRUFBQ0EsQ0FBQ0EsR0FBQ0EsRUFBRUEsRUFBQ0EsQ0FBQ0EsRUFBRUEsRUFBQ0EsQ0FBQ0E7d0JBQ25CQSxHQUFHQSxHQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQSxHQUFDQSxHQUFHQSxDQUFDQTtvQkFDckJBLENBQUNBO29CQUNEQSxNQUFNQSxDQUFDQSxHQUFHQSxDQUFDQTtnQkFDZkEsQ0FBQ0E7Z0JBWExGO29CQUFDQSxXQUFJQSxDQUFDQTt3QkFDRkEsSUFBSUEsRUFBQ0EsSUFBSUE7cUJBQ1pBLENBQUNBOzswQkFVREE7Z0JBQURBLFlBQUNBO1lBQURBLENBWkEsQUFZQ0EsSUFBQTtZQVpELHlCQVlDLENBQUEiLCJmaWxlIjoici5waXBlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgSGVybmFuIFkuS2Ugb24gMjAxNi8yLzIyLlxyXG4gKi9cclxuICAgIGltcG9ydCB7UGlwZSxQaXBlVHJhbnNmb3JtfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuLy9pbXBvcnQge1BpcGVUcmFuc2Zvcm19IGZyb20gXCIuLi9ub2RlX21vZHVsZXMvYW5ndWxhcjIvc3JjL2NvcmUvY2hhbmdlX2RldGVjdGlvbi9waXBlX3RyYW5zZm9ybVwiO1xyXG5AUGlwZSh7XHJcbiAgICBuYW1lOidtcidcclxufSlcclxuZXhwb3J0IGNsYXNzIFJQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybXtcclxuICAgIHRyYW5zZm9ybSh2YWx1ZTpzdHJpbmcsIGFyZ3M6YW55W10pe1xyXG4gICAgICAgIGNvbnN0IGxnID12YWx1ZS5sZW5ndGg7XHJcbiAgICAgICAgbGV0IHJlcyA9Jyc7XHJcbiAgICAgICAgZm9yKGxldCBpID0wO2k8bGc7aSsrKXtcclxuICAgICAgICAgICAgcmVzPXZhbHVlW2ldK3JlcztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlcztcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
