// 模块中存储的数据
const state = {
  num: 10000000
}

// 模块中派生的数据,可以缓存数据
const getters = {
  formatNum: (state)=>{
    const re=/(?=(?!(\b))(\d{3})+$)/g;
    let str = state.num.toString().replace(re,",");
    return str;
  }
}


// 模块中的同步改变
const mutations = {
  changeNum(state, action){
    console.log('state...', state, 'action...', action);
    // setTimeout(()=>{
      state.num = action=='+'?state.num+1: state.num-1;
    // }, 100);
  }
}

// 模块中的异步改变
const actions = {
  changeNumAsync({commit}, action){
    return new Promise((resolve, reject)=>{
       // console.log('context...', context, action);
      setTimeout(()=>{
        commit({
          type: 'changeNum',
          payload: action.payload
        });
        resolve();
      }, 500);
    })
  }
}

export default {
  // 命名空间，做模块化
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
