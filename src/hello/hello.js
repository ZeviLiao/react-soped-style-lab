

import React, { Component } from 'react'
import './hello.scoped.scss'
export default class hello extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                hello, zevi
            </div>
        )
    }
}

