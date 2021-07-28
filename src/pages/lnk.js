import * as React from "react"
import { Link } from "gatsby"
import '../styles/global.css'

function Lnk(props) {
    return (
        <Link to={props.to}>
            <p class="inline-block text-blue-400 duration-100 hover:text-blue-500">{props.text}</p>
        </Link>
    )
}

export default Lnk