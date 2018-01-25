import {createStore} from 'redux'
import {counter} from './reducers'


/*
 createStore接受 Reducer 作为参数，生成一个新的 Store。
 以后每当store.dispatch发送过来一个新的 Action，就会自动调用 Reducer，得到新的 State。
*/
//生成一个store对象
const store = createStore(counter)//内部会第一次调用reduer函数得到初始state
export default store