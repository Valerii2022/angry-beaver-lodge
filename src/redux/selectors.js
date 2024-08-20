export const getAllProducts = state => state.products.products;
export const getImages = state => state.images.images;
export const getOrderType = state => state.orders.order.orderType;
export const getDeliveryAddress = state => state.orders.order.deliveryAddress;
export const getGuestLimit = state => state.orders.order.limitPerGuest;
export const getOrderId = state => state.orders.order._id;
export const getItems = state => state.orders.order.items;
