import {getUrl, getDetail} from '../services/index';

export default {
  namespace: 'play',
  state: {
    id: 0,
    url: '',
    info: {},
    detail: {}
  },

  effects: {
    *getUrl({payload}, {call, put}){
      // 获取歌曲可播放文件
      let response = yield call(getUrl, payload);
      // 获取歌曲详情
      let detail = yield call(getDetail, payload);
      console.log('url response...', response);
      console.log('url detail...', detail);
      let obj = {info:response.data.data[0]};
      obj.id = payload;
      obj.url = response.data.data[0].url;
      obj.detail = detail.data.songs[0];
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
