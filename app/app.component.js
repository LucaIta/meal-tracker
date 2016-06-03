System.register(['angular2/core', './meals.display.component', './meal.model.ts'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, meals_display_component_1, meal_model_ts_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (meals_display_component_1_1) {
                meals_display_component_1 = meals_display_component_1_1;
            },
            function (meal_model_ts_1_1) {
                meal_model_ts_1 = meal_model_ts_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.mealsList = [
                        new meal_model_ts_1.Meal("Breakfast", "This is breakfast", 100),
                        new meal_model_ts_1.Meal("Lunch", "This is Lunch", 200),
                        new meal_model_ts_1.Meal("Dinner", "This is Dinner", 300),
                    ];
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        directives: [meals_display_component_1.MealsDisplayComponent],
                        template: "\n   <div class=\"container\">\n     <h1>Meal Tracker</h1>\n     <meals-display [meals]=\"mealsList\"></<meals-display>>\n   </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map