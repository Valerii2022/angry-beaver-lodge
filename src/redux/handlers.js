export const handleRejected = (state, { payload }) => {
  state.order = {
    id: '',
    deliveryAddress: 'none',
    orderType: '',
    items: [],
    limitPerGuest: 'none',
    total: '0',
  };
};
