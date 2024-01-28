'use client'

import Head from "next/head";
import Image from "next/image";
import MediaCard from "./media-card";

import { useState } from "react";

export default function Column() {

    const media = useState([
        {type: "image", src: "https://media.geeksforgeeks.org/wp-content/uploads/20190506164011/logo3.png"},
    ]);

    return <div>
        <MediaCard type={"image"} src={"https://media.geeksforgeeks.org/wp-content/uploads/20190506164011/logo3.png"}/>
        <button> ADD +</button>
    </div>
}