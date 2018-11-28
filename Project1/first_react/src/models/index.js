export default {
  namespace: 'index',

  state: {
    num: 1000
  },

  reducers: {
    changeNum(state, {payload}){
      console.log('payload...', payload);
      return {...state,  num: payload=='+'?state.num+1: state.num-1}
    }
  }
}
