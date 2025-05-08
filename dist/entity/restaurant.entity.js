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
exports.Restaurant = void 0;
const typeorm_1 = require("typeorm");
const _1 = require("./");
let Restaurant = class Restaurant {
};
exports.Restaurant = Restaurant;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Restaurant.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: false, unique: true }),
    __metadata("design:type", String)
], Restaurant.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    __metadata("design:type", String)
], Restaurant.prototype, "cuisine", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 13, nullable: false }),
    __metadata("design:type", String)
], Restaurant.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: false }),
    __metadata("design:type", String)
], Restaurant.prototype, "operatingHours", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], Restaurant.prototype, "rating", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => _1.MenuItem, (menuItem) => menuItem.restaurant),
    __metadata("design:type", Array)
], Restaurant.prototype, "menuItems", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.Address, (address) => address.restaurants),
    __metadata("design:type", _1.Address)
], Restaurant.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => _1.Favorites, (favorites) => favorites.restaurant),
    __metadata("design:type", Array)
], Restaurant.prototype, "favorites", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => _1.Order, (order) => order.restaurant),
    __metadata("design:type", Array)
], Restaurant.prototype, "orders", void 0);
exports.Restaurant = Restaurant = __decorate([
    (0, typeorm_1.Entity)('restaurant')
], Restaurant);
//# sourceMappingURL=restaurant.entity.js.map