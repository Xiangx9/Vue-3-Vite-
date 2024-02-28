import { defineStore } from "pinia";
const tokenStore = defineStore("tokenId", {
  state: () => {
    return {
        token: 1,
    };
  },
  getters: {
  },
  actions: {
  },
  persist: {
    enabled: true, 
    key: 'tokenId',
    storage: window.sessionStorage,
    paths: ['token'],
  },
});

export default tokenStore;
