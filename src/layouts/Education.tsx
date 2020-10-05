import React from 'react'
import Style from '@/styles'

interface Prop {
    id?: string
}

export default function Education(props: Prop): React.ReactElement {
    const classes = Style()
    return (
        <section id={props.id} className={classes.section}>
            <h1>Education</h1>
        </section>
    )
}
