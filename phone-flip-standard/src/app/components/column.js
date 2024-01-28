'use client'

import Head from "next/head";
import Image from "next/image";
import MediaCard from "./mediaCard";
import "./column.css";

import { useState } from "react";
import { Button, Popover } from 'antd';

export default function Column() {
    const [addContentOpen, setAddContentOpen] = useState(false);
    const [open, setOpen] = useState(false);

    const hideAddContentOptions = () => {
        setAddContentOpen(false);
    };

    const handleAddContentOptionsChange = (newOpen) => {
        setAddContentOpen(newOpen);
    };

    const media = useState([
        {type: "image", src: "https://media.geeksforgeeks.org/wp-content/uploads/20190506164011/logo3.png"},
    ]);

    return <div className="column">
        <MediaCard type={"image"} src={"https://media.geeksforgeeks.org/wp-content/uploads/20190506164011/logo3.png"}/>
        <MediaCard type={"text"} text={"text text text"}/>
        <MediaCard type={"audio"} src={"https://media.geeksforgeeks.org/wp-content/uploads/20230524142525/gfg_offline_classes_en.mp3"}/>
        <MediaCard type={"video"} src={"https://assets.codepen.io/6093409/hubspot-video-example.mp4"}/>
        <Popover
            content={
                <>
                    <div className="add-content-button"><a onClick={()=>{}}>Add an Image</a></div>
                    <div className="add-content-button"><a onClick={()=>{}}>Add an Audio Clip</a></div>
                    <a onClick={hideAddContentOptions}>Cancel</a>
                </>
            }
            placement="bottom"
            trigger="click"
            open={addContentOpen}
            onOpenChange={handleAddContentOptionsChange}
        >
            <Button>ADD +</Button>
        </Popover>
        
        {/* <button> ADD +</button> */}
    </div>
}