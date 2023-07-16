import * as React from "react"
import { Link } from "gatsby"
import '../styles/global.css'
import Header from "./header"
import DarkTrace from "./darkTrace"
import ScrollProgressBar from "./scrollProgressBar"
import Footer from "./footer"
import Lnk from "./lnk"

const IndexPage = () => {
    return (
        <main class="min-h-screen flex flex-col justify-between bg-gray-100">
            <div>
                <Header directory="" />
                <DarkTrace></DarkTrace>
                <ScrollProgressBar></ScrollProgressBar>
                <div class="flex flex-col items-center w-full h">
                    <p class="mt-10 text-5xl sm:text-7xl text-center">Hi, I'm Francois Vogel</p>
                    {/* <p class="max-w-md mt-20 sm:text-3xl text-xl text-center">I'm a student in the Netherlands.</p> */}
                    <Link to="/blog">
                        <p class="mb-10 mt-16 p-2 text-3xl ring-4 ring-blue-200 rounded text-white bg-blue-500 duration-500 hover:bg-blue-400">Read my blog</p>
                    </Link>
                    <p class="md-10 text-xl sm:text-3xl text-center">Let's connect!</p>
                    <div class="flex flex-col justify-center align-center text-xl text-center">
                        <Lnk to="https://www.linkedin.com/in/f-vogel/" text="LinkedIn" />
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </main>
    )
}

export default IndexPage