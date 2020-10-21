import React from 'react'

interface Prop {
    condition: boolean
    wrapper: Function
    fail?: Function
    children?: React.ReactNode
}
export default function ConditionalWrapper(props: Prop): React.ReactElement {
    if (props.fail) {
        return props.condition
            ? props.wrapper(props.children)
            : props.fail(props.children)
    }
    return props.condition ? props.wrapper(props.children) : props.children
}
