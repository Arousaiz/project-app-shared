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
exports.Favorites = void 0;
const typeorm_1 = require("typeorm");
const _1 = require("./");
let Favorites = class Favorites {
};
exports.Favorites = Favorites;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Favorites.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Favorites.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.User, (user) => user.favorites),
    __metadata("design:type", _1.User)
], Favorites.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.MenuItem, (menuItem) => menuItem.favorites),
    __metadata("design:type", _1.MenuItem)
], Favorites.prototype, "menuItem", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.Restaurant, (restaurant) => restaurant.favorites),
    __metadata("design:type", _1.Restaurant)
], Favorites.prototype, "restaurant", void 0);
exports.Favorites = Favorites = __decorate([
    (0, typeorm_1.Entity)('favorites')
], Favorites);
//# sourceMappingURL=favorites.entity.js.map