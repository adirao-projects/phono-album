'use client'

import Head from "next/head";
import Image from "next/image";

import { useState } from "react";

export default function MediaCard({type, src, text}) {

    return <div>
        {
            type === "image" ?  (
                <img src={src}/>
            ) : type === "text" ? (
                <p>{text}</p>
            ) : type === "audio" ? (
                <audio controls src={src}>
                    <source 
                        src={src}
                        type="audio/mp3"
                    />
                </audio>
            ) : (
                <video controls>
                    <source 
                        src={src}
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
            )
        }
    </div>
}