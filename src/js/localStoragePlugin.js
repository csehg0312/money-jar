const serializationKeys = ['inHandMoney', 'savingAmount', 'spendingAmount', 'givingAmount', 'earnedBadges'];

export const localStoragePlugin = store => {
  const existingStore = window.localStorage.getItem('myStore');

  if (existingStore) {
    try {
      const parsedStore = JSON.parse(existingStore);
      const isValidStore = serializationKeys.every(key => Object.prototype.hasOwnProperty.call(parsedStore, key));

      if (isValidStore) {
        store.replaceState(parsedStore);
      }
    } catch (e) {
      console.error(`Failed to load existing store: ${e}`);
    }
  }

  store.subscribe((mutation, state) => {
    const serializedStore = serializationKeys.reduce((acc, key) => {
      acc[key] = state[key];
      return acc;
    }, {});

    window.localStorage.setItem('myStore', JSON.stringify(serializedStore));
  });
};