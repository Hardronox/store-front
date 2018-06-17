export const loadState = (field) => {
  try {
    const serializedState = localStorage.getItem(field);
    if (serializedState === undefined) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
};

export const saveState = (field, state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(field, serializedState);
  } catch (e) {
    // return undefined;
  }
};
