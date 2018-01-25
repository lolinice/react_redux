/*
 组件的组合使用
 - 1.拆分组件
 - 2.实现静态组件
 - 3.实现动态组件
 - 动态显示初始化数据
 - 交互功能(从绑定事件监听开始)

 2)	容器组件
 负责管理数据和业务逻辑，不负责UI的呈现
 使用 Redux 的 API
 一般保存在containers文件夹下

*/
import React from 'react'
import {connect} from 'react-redux'

import {increment,decrement} from '../redux/actions'
import Counter from '../components/counter'

export default connect(
    state => ({count:state}), {increment,decrement}
)(Counter)




