export const localData = {
  getItem(k) {
    return JSON.parse(localStorage.getItem(k));
  },
  setItem(k, v) {
    localStorage.setItem(k, JSON.stringify(v));
  },
  remove(k) {
    localStorage.removeItem(k);
  },
  clear() {
    localStorage.clear();
  },
};
