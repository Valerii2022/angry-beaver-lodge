export const getAllProducts = state => state.products.products;
export const getImages = state => state.images.images;
export const getOrderDetails = state => state.orders.orderDetails;
export const getOrderType = state => state.orders.orderDetails.orderType;
export const getDeliveryAddress = state =>
  state.orders.orderDetails.deliveryAddress;
export const getGuestLimit = state => state.orders.orderDetails.limitPerGuest;
export const getOrderId = state => state.orders.orderDetails._id;
export const getItems = state => state.orders.orderDetails.items;
export const getTotalPrice = state => state.orders.orderDetails.total;
export const getCurrentGuest = state => state.orders.currentGuestId;
export const getCurrentGuestName = state => state.orders.currentGuestName;
