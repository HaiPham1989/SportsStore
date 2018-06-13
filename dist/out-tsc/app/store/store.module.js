"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
//import { CartSummaryComponent } from "./cartSummary.component";
//import { CategoryFilterComponent } from "./categoryFilter.component";
//import { PaginationComponent } from "./pagination.component";
//import { ProductListComponent } from "./productList.component";
//import { RatingsComponent } from "./ratings.component";
var productSelection_component_1 = require("./productSelection.component");
var StoreModule = /** @class */ (function () {
    function StoreModule() {
    }
    StoreModule = __decorate([
        core_1.NgModule({
            //declarations: [CartSummaryComponent, CategoryFilterComponent, PaginationComponent, ProductListComponent, RatingsComponent, ProductSelectionComponent],
            declarations: [productSelection_component_1.ProductSelectionComponent],
            imports: [platform_browser_1.BrowserModule],
            exports: [productSelection_component_1.ProductSelectionComponent]
        })
    ], StoreModule);
    return StoreModule;
}());
exports.StoreModule = StoreModule;
//# sourceMappingURL=store.module.js.map