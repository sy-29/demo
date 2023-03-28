import { defineStore } from 'pinia';

const useStore = defineStore("global", {
  state: () => {
    return { modal: false }
  },
  // 也可以这样定义
  // state: () => ({ count: 0 })
  actions: {
    showModal() {
      this.modal = true;
    },
    hideModal() {
      this.modal = false;
    }
  },
})
export default useStore