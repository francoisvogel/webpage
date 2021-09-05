import React, { useState, useEffect } from 'react';
import '../styles/global.css'
import { useScrollPercentage } from 'react-scroll-percentage'

const ScrollProgressBar = () => {
    const [ref, percentage] = useScrollPercentage({
        /* Optional options */
        threshold: 0,
      })

    return (
        <div class="sticky top-0 h-1 z-40 bg-indigo-300" ref={ref}>
            <div class={`h-full bg-indigo-500 transition-all ease-out w-${percentage.toPrecision(2)}pc`}>
            </div>
        </div>
    )
}

export default ScrollProgressBar