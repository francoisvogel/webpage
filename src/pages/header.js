import * as React from "react"
import '../styles/global.css'
import { Link } from "gatsby"

const Header = () => {
    return (
        <header class="relative z-50 flex flex-row justify-between bg-white">
            <div class="flex flex-row">
                <Link to="./">
                    <p class="text-center text-xl p-5 h-full duration-100 hover:bg-gray-200 hover:text-blue-500">Francois Vogel</p>
                </Link>
            </div>
            <div class="flex flex-row">
                <Link to="./blog">
                    <p class="text-center text-xl p-5 h-full duration-100 hover:bg-gray-200 hover:text-blue-500">Blog</p>
                </Link>
                <Link to="./blog">
                    <p class="text-center text-xl p-5 h-full duration-100 hover:bg-gray-200 hover:text-blue-500">About</p>
                </Link>
            </div>
        </header>
    )
}

export default Header