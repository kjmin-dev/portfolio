import React from 'react'
import { Helmet } from 'react-helmet'

function NotFound(): React.ReactElement {
    return (
        <main>
            <Helmet>
                <title>Kyoungjun Min(kjmin)/404 Error</title>
            </Helmet>
            <h2>404 Page Not Found</h2>
        </main>
    )
}

export default NotFound
