"use client"

import React, { useEffect } from 'react'

export default function Bg() {

    useEffect(() => {
        const blob = document.getElementById("blob");
        const blur = document.getElementById("blur");

        window.onpointermove = event => {
            const { clientX, clientY } = event;

            blob.animate({
                left: `${clientX}px`,
                top: `${clientY}px`
            }, { duration: 3000, fill: "forwards" });
        }
    }
    )

    return (
        <div className='overflow-hidden'>
            <div id="blob"></div>
            <div id="blur"></div>
        </div>
    )
}
