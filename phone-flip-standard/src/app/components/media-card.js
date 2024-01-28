'use client'

import Head from "next/head";
import Image from "next/image";

import { useState } from "react";

export default function MediaCard({type, src}) {

    return <div>
        {
            type === "image" && (
                <img src={src}/>
            )
        }
    </div>
}