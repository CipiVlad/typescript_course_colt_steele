//Enums are set of named constants
//4 order statuses -- a set of constants
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["PENDING"] = 0] = "PENDING";
    OrderStatus[OrderStatus["SHIPPED"] = 1] = "SHIPPED";
    OrderStatus[OrderStatus["DELIVERED"] = 2] = "DELIVERED";
    OrderStatus[OrderStatus["RETURNED"] = 3] = "RETURNED";
})(OrderStatus || (OrderStatus = {}));
var orderStatus = OrderStatus.DELIVERED;
function isDelivered(status) {
    if (status === OrderStatus.SHIPPED) {
        return 'Product is shipped.';
    }
    return 'Product is pending.';
}
console.log(isDelivered(OrderStatus.SHIPPED));
var ArrowKeys;
(function (ArrowKeys) {
    ArrowKeys["UP"] = "up";
    ArrowKeys["DOWN"] = "down";
    ArrowKeys["LEFT"] = "left";
    ArrowKeys["RIGHT"] = "right";
})(ArrowKeys || (ArrowKeys = {}));
ArrowKeys.DOWN;
