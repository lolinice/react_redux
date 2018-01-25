/*
 1)	UI组件
 只负责 UI 的呈现，不带有任何业务逻辑
 通过props接收数据(一般数据和函数)
 不使用任何 Redux 的 API
 一般保存在components文件夹下
*/
import React,{Component} from 'react'
import PropTypes from 'prop-types'

//1、定义组件
export default class Counter extends Component {
    static propTypes = {
        count:PropTypes.number.isRequired,
        increment:PropTypes.func.isRequired,
        decrement:PropTypes.func.isRequired
    }

    //1.3 加
    increment=()=>{
        //1.得到选择增加数量
        const number = this.select.value * 1
        //todo 2.调用store的方法更新状态
        this.props.increment(number)
    }

    //1.4 减
    decrement=()=>{
        //1.得到选择减少数量
        const number = this.select.value * 1
        //todo 2.调用store的方法更新状态
        this.props.decrement(number)

    }

    //1.5 奇数才相加，偶数不变
    incrementIfOdd=()=>{
        //1.得到选择增加数量
        const number = this.select.value * 1
        //2.得到原本的count状态
        const count = this.props.count
        //判断--> 满足条件更新状态
        if(count % 2 === 1){
            this.props.increment(number)
        }
    }

    //1.6 延迟增加
    incrementAsync=()=>{
        //1.得到选择增加数量
        const number = this.select.value * 1
        //启动延迟定时器
        setTimeout(()=>{
            //3.更新状态
            this.props.increment(number)
        },1000)
    }


    //1.1
    render() {
        const {count} = this.props
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
