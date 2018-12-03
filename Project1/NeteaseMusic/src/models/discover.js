import { routerRedux } from 'dva/router';
import {getBanner} from '../services/index';

export default {
  namespace: 'discover',
  state: {
    banners: []
  },

  effects: {
    * getBanner({payload}, {call, put}){
      let response = yield call(getBanner);
      console.log('banner response...', response);
      yield put({
        type: 'updateState',
        payload: response.data
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
