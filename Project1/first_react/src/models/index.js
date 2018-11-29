export default {
  namespace: 'index',

  state: {
    num: 1000,
    list: []
  },

  effects: {
    * getList(action, {call, put}){
      let res = yield call(()=>{
        return fetch('https://www.easy-mock.com/mock/5af661177138d57c901e916b/request1/popular')
        .then(res=>res.json())
        .then(body=>body)
      })
      console.log('res...', res);
      yield put({
        type: 'updateList',
        payload: res.songlist
      })
    }
  },

  reducers: {
    changeNum(state, {payload}){
      console.log('payload...', payload);
      return {...state,  num: payload=='+'?state.num+1: state.num-1}
    },
    updateList(state, {payload}){
      return {...state, list: payload}
    }
  }
}
