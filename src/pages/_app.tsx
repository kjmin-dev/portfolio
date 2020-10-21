import React from 'react'
import config from 'react-reveal/globals'

import 'normalize.css'
import '@/styles/css/global.css'

config({ ssrFadeout: true })

export default class _App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { Component, pageProps } = this.props
        return <Component {...pageProps}></Component>
    }
}
