import React from 'react'
import { PageProps } from 'gatsby'

import 'normalize.css'
import '@/styles/css/global.css'

export default function _App({
    Component,
    pageProps,
}: {
    Component: any
    pageProps: PageProps
}): React.ReactElement {
    return <Component {...pageProps}></Component>
}
