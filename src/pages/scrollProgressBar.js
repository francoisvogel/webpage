import React, { useState, useEffect } from 'react';
import '../styles/global.css'
import { Helmet } from 'react-helmet';
import { withPrefix, Link } from 'gatsby';

function run() {
    console.log(window.innerHeight);
}

const ScrollProgressBar = () => {
    // const [ref, percentage] = useScrollPercentage({
    //     /* Optional options */
    //     threshold: 0,
    // })

    return (
        <div class="sticky top-0 h-1 z-40 bg-indigo-300">
            <Helmet>
                <title>Francois Vogel</title>
                {/* <script src="https://ajax.googleapis.com/ajax/libs/cesiumjs/1.78/Build/Cesium/Cesium.js"></script>
                <script src="localhost:8000/static/update.js"></script>
                <script src="https://raw.githubusercontent.com/francoisvogel/francoisvogel.github.io/master/update.js"></script> */}
                {/* <script> */}
                {/* console.log('works'); */}
                {/* var scrollTop = window.scrollTop(); */}
                {/* var docHeight = $(document).height(); */}
                {/* var winHeight = window.innerHeight; */}
                {/* var scrollPercent = (scrollTop) / (docHeight - winHeight); */}
                {/* var scrollPercentRounded = Math.round(scrollPercent*100); */}
                {/* document.getElementById('scrollProgressBar').style.width = 'scrollPercentRounded'+'%'; */}
                {/* setInterval(run, 200); */}
                {/* </script> */}
            </Helmet>
            {/* <div id="scrollProgressBar" class={`h-full bg-indigo-500 transition-all ease-out`}> */}
            {/* w-${percentage.val}pc */}
            {/* </div> */}
        </div>
    )
}

export default ScrollProgressBar