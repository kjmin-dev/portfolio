import React from 'react'

interface Prop {
    condition: boolean
    wrapper: (children) => JSX.Element
    fail?: (children) => JSX.Element
    children?: React.ReactNode
}

export default function ConditionalWrapper(
    props: Prop,
): React.ReactNode | JSX.Element {
    if (props.fail) {
        return props.condition
            ? props.wrapper(props.children)
            : props.fail(props.children)
    }
    return props.condition ? props.wrapper(props.children) : props.children
}
