// 基础版面， 如有拓展可参考

const defaultInfo = {
  state: {
    // app信息
    defaultName: ''
  },
  getters: {
    getDefaultName: state => {
      return state.defaultName
    }
  },
  mutations: {
    // 设置
    setInfo: (state, defaultName) => {
        state.defaultName = defaultName;
    }
  },
  actions: {  	
  	
  }
}

export default defaultInfo