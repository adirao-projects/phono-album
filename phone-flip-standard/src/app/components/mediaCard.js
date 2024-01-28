'use client'

import Head from "next/head";
import Image from "next/image";

import { useState } from "react";
import "./mediaCard.css";

export default function MediaCard({type, src, text}) {

    return <div className="media-card">
        {
            type === "image" ?  (
                <img className="image-media-card" src={src}/>
            ) : type === "text" ? (
                <p className="text-media-card">{text}</p>
            ) : type === "audio" ? (
                <audio className="audio-media-card" controls src={src}>
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