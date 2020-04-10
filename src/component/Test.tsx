import React from 'react'

interface IProps {
    temp: string
}

const Test = ({temp}:IProps) => {
    return (<div>
        Test--{temp}
    </div>)
}

export default Test