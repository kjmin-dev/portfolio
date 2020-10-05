import React from 'react'
import Style from '@/styles'

interface Prop {
    id?: string
}

export default function About(props: Prop): React.ReactElement {
    const classes = Style()
    return (
        <section id={props.id} className={classes.section}>
            <h1>About</h1>
        </section>
    )
}
