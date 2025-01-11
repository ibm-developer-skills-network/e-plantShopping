// src/redux/actions/cartActions.js

export const addItem = (item) => ({
    type: 'ADD_ITEM',
    payload: item
});

export const updateQuantity = (item) => ({
    type: 'UPDATE_QUANTITY',
    payload: item
});

export const removeItem = (id) => ({
    type: 'REMOVE_ITEM',
    payload: id
});
