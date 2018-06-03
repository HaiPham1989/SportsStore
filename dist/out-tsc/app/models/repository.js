"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var configClasses_repository_1 = require("./configClasses.repository");
var productsUrl = "api/products";
var Repository = /** @class */ (function () {
    function Repository(http) {
        this.http = http;
        this.filterObject = new configClasses_repository_1.Filter();
        this.filter.category = "soccer";
        this.filter.related = true;
        this.getProducts();
    }
    Repository.prototype.getProduct = function (id) {
        var _this = this;
        this.sendRequest(http_1.RequestMethod.Get, productsUrl + "/" + id).subscribe(function (response) {
            _this.product = response;
        });
    };
    Repository.prototype.getProducts = function () {
        var _this = this;
        var url = productsUrl + "?related=" + this.filter.related;
        if (this.filter.category) {
            url += "&category=" + this.filter.category;
        }
        if (this.filter.search) {
            url += "&search=" + this.filter.search;
        }
        this.sendRequest(http_1.RequestMethod.Get, url).subscribe(function (response) { return _this.products = response; });
    };
    Repository.prototype.sendRequest = function (verb, url, data) {
        return this.http.request(new http_1.Request({ method: verb, url: url, body: data })).map(function (response) { return response.json(); });
    };
    Object.defineProperty(Repository.prototype, "filter", {
        get: function () {
            return this.filterObject;
        },
        enumerable: true,
        configurable: true
    });
    Repository = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], Repository);
    return Repository;
}());
exports.Repository = Repository;
//# sourceMappingURL=repository.js.map