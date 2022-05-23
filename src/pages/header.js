import * as React from "react"
import { Link } from "gatsby"
import '../styles/global.css'

function Header(props) {
    return (
        <header class="relative z-50 flex flex-row justify-between bg-white">
            <div class="flex flex-row">
                <Link to={props.directory+""}>
                    <p class="text-center text-xl p-5 h-full duration-100 hover:bg-gray-200 hover:text-blue-500">Francois Vogel</p>
                </Link>
            </div>
            <div class="flex flex-row">
                <Link to={props.directory+"blog"}>
                    <p class="text-center text-xl p-5 h-full duration-100 hover:bg-gray-200 hover:text-blue-500">Blog</p>
                </Link>
                {/* <Link to={props.directory+"about"}>
                    <p class="text-center text-xl p-5 h-full duration-100 hover:bg-gray-200 hover:text-blue-500">About</p>
                </Link> */}
            </div>
        </header>
    )
}

export default Header