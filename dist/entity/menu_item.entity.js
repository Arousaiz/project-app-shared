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
exports.MenuItem = void 0;
const typeorm_1 = require("typeorm");
const _1 = require("./");
let MenuItem = class MenuItem {
};
exports.MenuItem = MenuItem;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], MenuItem.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: false }),
    __metadata("design:type", String)
], MenuItem.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], MenuItem.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'float', nullable: false }),
    __metadata("design:type", Number)
], MenuItem.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.Category, (category) => category.menuItems),
    __metadata("design:type", _1.Category)
], MenuItem.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.Restaurant, (restaurant) => restaurant.menuItems),
    __metadata("design:type", _1.Restaurant)
], MenuItem.prototype, "restaurant", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => _1.Review, (review) => review.menuItem),
    __metadata("design:type", Array)
], MenuItem.prototype, "reviews", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => _1.Favorites, (favorites) => favorites.menuItem),
    __metadata("design:type", Array)
], MenuItem.prototype, "favorites", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => _1.OrderItem, (orderItem) => orderItem.menuItem),
    __metadata("design:type", Array)
], MenuItem.prototype, "orderItems", void 0);
exports.MenuItem = MenuItem = __decorate([
    (0, typeorm_1.Entity)('menu_item')
], MenuItem);
//# sourceMappingURL=menu_item.entity.js.map