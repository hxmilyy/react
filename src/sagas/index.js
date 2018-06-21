import { all, fork, call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import services from '../services'

export function* fetchData(action) {
  try {
    const list = yield call(services.address.getAllAddress);
    // console.log(list.data.addressInfos);
    yield put({ type: "ADDRESS_GET_ALL_SUCCESSED", payload: list.data.addressInfos });
  } catch (e) {
    yield put({ type: "ADDRESS_GET_ALL_FAILED", message: e.message });
  }
}

function* rootSaga() {
  yield takeEvery("ADDRESS_GET_ALL", fetchData);
}

export default function* root(){
  yield all([fork(rootSaga)])
};