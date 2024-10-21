addItem: (state, action) => {
  const { name, image, cost } = action.payload;
  const existingItem = state.items.find(item => item.name === name);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    state.items.push({ name, image, cost, quantity: 1 });
  }
},
