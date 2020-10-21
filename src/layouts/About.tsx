import React from 'react'
import Container from '@material-ui/core/Container'
import Divider from '@material-ui/core/Divider'

import Common from '@/styles'
import Style from '@/styles/About'

interface Prop {
    id?: string
}

export default function About(props: Prop): React.ReactElement {
    const common = Common()
    const classes = Style()
    return (
        <>
            <Container maxWidth="lg">
                <section id={props.id} className={`${common.section} ${common.textCenter}`}>
                    <div className={ classes.profile } />
                    <h1>Kyoungjun Min</h1>
                </section>
            </Container>
        </>
    )
}
