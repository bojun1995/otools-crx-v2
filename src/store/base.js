export default {
  state: {
    THEME: 'light-v1'
  },
  mutations: {
    /**
     * @description : 变更主题
     * @param {*} state
     * @param {*} newTheme
     * @result theme to window.document
     */
    CHANGE_THEME(state, newTheme) {
      state.THEME = newTheme
      window.document.documentElement.setAttribute('theme', newTheme)
    }
  },
}