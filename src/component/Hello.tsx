import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { add, lessen } from '../store/actions'


interface IProps {
    value?: number,
    onadd: () => void
    onlesen: () => void
}

// interface IProps {
//     value?: number,
//     value2?: number
//     onadd: () => void
//     onlesen: () => void
// }

class Hello extends Component<IProps> {
    public render () {
        // const { value, value2, onadd, onlesen } = this.props
        const { value, onadd, onlesen } = this.props
        return (<div>
            <h2>Hello 组件 --- {value}</h2>
            {/*<h2>Hello 组件value2 --- {value2}</h2>*/}
            <button onClick={onadd}>++</button>
            <button onClick={onlesen}>--</button>
        </div>)
    }
}

// 使用一个reducer的写法
const mapStateToProps = (state: number): {value: number} => ({
    value: state
})

// const mapStateToProps = (state: number | string | undefined): {value: number, value2:number} => {
//     // @ts-ignore
//     const {countReducer, testReducer} = state
//         return {
//             value: countReducer,
//             value2: testReducer
//         }
// }

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onadd: () => dispatch(add()),
    onlesen: () => dispatch(lessen('focusdroid'))
})

export default connect(mapStateToProps, mapDispatchToProps)(Hello)