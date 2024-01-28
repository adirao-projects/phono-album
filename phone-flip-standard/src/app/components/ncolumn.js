'use client'

import Head from "next/head";
import Image from "next/image";
import MediaCard from "./media-card";
import { useState } from "react";

export default function Ncolumn() {

    const media = useState([
        {type: "image", src: "https://media.geeksforgeeks.org/wp-content/uploads/20190506164011/logo3.png"},
    ]);

    return <div>
        <MediaCard type={"image"} src={"https://media.geeksforgeeks.org/wp-content/uploads/20190506164011/logo3.png"}/>
        <MediaCard type={"text"} text={"meow meow meow"}/>
        <MediaCard type={"audio"} src={"https://media.geeksforgeeks.org/wp-content/uploads/20230524142525/gfg_offline_classes_en.mp3"}/>
        <button> ADD +</button>
    </div>
}