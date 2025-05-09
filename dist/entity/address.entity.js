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
exports.Address = void 0;
const typeorm_1 = require("typeorm");
const _1 = require("./");
let Address = class Address {
};
exports.Address = Address;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Address.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: false }),
    __metadata("design:type", String)
], Address.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: false }),
    __metadata("design:type", String)
], Address.prototype, "street", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', width: 4, nullable: false }),
    __metadata("design:type", Number)
], Address.prototype, "house", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => _1.DeliveryDetails, (deliveryDetails) => deliveryDetails.address),
    __metadata("design:type", Array)
], Address.prototype, "deliveryDetails", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => _1.Restaurant, (restaurant) => restaurant.address),
    __metadata("design:type", Array)
], Address.prototype, "restaurants", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => _1.User, (user) => user.address),
    __metadata("design:type", Array)
], Address.prototype, "users", void 0);
exports.Address = Address = __decorate([
    (0, typeorm_1.Entity)('address')
], Address);
//# sourceMappingURL=address.entity.js.map