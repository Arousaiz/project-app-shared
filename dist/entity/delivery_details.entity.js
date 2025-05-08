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
exports.DeliveryDetails = void 0;
const typeorm_1 = require("typeorm");
const _1 = require("./");
const enums_1 = require("../enums");
let DeliveryDetails = class DeliveryDetails {
};
exports.DeliveryDetails = DeliveryDetails;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], DeliveryDetails.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: enums_1.DeliveryStatus,
    }),
    __metadata("design:type", String)
], DeliveryDetails.prototype, "deliveryStatus", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamptz', nullable: true }),
    __metadata("design:type", Date)
], DeliveryDetails.prototype, "deliveryTime", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.Address, (address) => address.deliveryDetails, {
        cascade: true,
    }),
    __metadata("design:type", _1.Address)
], DeliveryDetails.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => _1.Order, (order) => order.deliveryDetails),
    __metadata("design:type", _1.Order)
], DeliveryDetails.prototype, "order", void 0);
exports.DeliveryDetails = DeliveryDetails = __decorate([
    (0, typeorm_1.Entity)('delivery_details')
], DeliveryDetails);
//# sourceMappingURL=delivery_details.entity.js.map