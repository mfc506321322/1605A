// 模块中存储的数据
const state = {
  num: 10000000
}

// 模块中的同步改变
const mutations = {
  changeNum(state, action){
    console.log('state...', state, 'action...', action);
    state.num = action.payload=='+'?state.num+1: state.num-1;
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
