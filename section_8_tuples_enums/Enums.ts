//Enums are set of named constants

//4 order statuses -- a set of constants
enum OrderStatus {
    PENDING,
    SHIPPED,
    DELIVERED,
    RETURNED
}


const orderStatus = OrderStatus.DELIVERED;

function isDelivered(status: OrderStatus) {
    if (status === OrderStatus.SHIPPED) {
        return 'Product is shipped.'
    }
    return 'Product is pending.'
}

console.log(isDelivered(OrderStatus.SHIPPED));


enum ArrowKeys {
    UP = "up",
    DOWN = "down"
    LEFT = "left",
    RIGHT = "right"
}

ArrowKeys.DOWN