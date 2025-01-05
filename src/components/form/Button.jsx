import React from 'react'
import { Link } from 'react-router-dom'

export default function Button(props) {
    if (props.to) {
        return (
            <Link to={props.to} className={props.className}>
                {props.children}
            </Link>
        )
    } else {
        return (
            <button type={props.type} className={props.className} disabled={props.disabled} onClick={props.onClick}>
                {props.children}
            </button>
        )
    }
}
