import {getUrl} from '../services/index';

export default {
  namespace: 'play',
  state: {
    id: 0,
    url: '',
    info: {}
  },

  effects: {
    *getUrl({payload}, {call, put}){
      let response = yield call(getUrl, payload);
      console.log('url response...', response);
      let obj = {info:response.data.data[0]};
      obj.id = payload;
      obj.url = response.data.data[0].url;
      yield put({
        type: 'updateState',
        payload: obj
      })
    }
  },

  reducers: {
    updateState(state, action){
      console.log('action...', action);
      return {...state, ...action.payload}
    }
  }

}
