/*
 组件的组合使用
 - 1.拆分组件
 - 2.实现静态组件
 - 3.实现动态组件
 - 动态显示初始化数据
 - 交互功能(从绑定事件监听开始)
*/
import React,{Component} from 'react'
import * as actions from '../redux/actions'



//1、定义组件
export default class App extends Component {

    //1.3 加
    increment=()=>{
        //1.得到选择增加数量
        const number = this.select.value * 1
        //todo 2.调用store的方法更新状态
        this.props.store.dispatch(actions.increment(number))
    }

    //1.4 减
    decrement=()=>{
        //1.得到选择减少数量
        const number = this.select.value * 1
        //todo 2.调用store的方法更新状态
        this.props.store.dispatch(actions.decrement(number))

    }

    //1.5 奇数才相加，偶数不变
    incrementIfOdd=()=>{
        //1.得到选择增加数量
        const number = this.select.value * 1
        //2.得到原本的count状态
        const count = this.props.store.getState()
        //判断--> 满足条件更新状态
        if(count % 2 === 1){
            this.props.store.dispatch(actions.increment(number))
        }
    }

    //1.6 延迟增加
    incrementAsync=()=>{
        //1.得到选择增加数量
        const number = this.select.value * 1
        //启动延迟定时器
        setTimeout(()=>{
            //3.更新状态
            this.props.store.dispatch(actions.increment(number))
        },1000)
    }


    //1.1
    render() {
        const count = this.props.store.getState()
        return (
            <div>
                <p>click {count} times</p>
                <div>
                    <select ref={select=>this.select=select}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>&nbsp;
                    <button onClick={this.increment}>+</button>
                    &nbsp;
                    <button onClick={this.decrement}>-</button>
                    &nbsp;
                    <button onClick={this.incrementIfOdd}>increment if odd</button>
                    &nbsp;
                    <button onClick={this.incrementAsync}>increment async</button>
                    &nbsp;
                </div>
            </div>
        )

    }
}

