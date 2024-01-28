'use client'

import MediaCard from "./mediaCard";
import "./column.css";

import { useState } from "react";
import { Button, Popover } from 'antd';

export default function Column() {
    const [addContentOpen, setAddContentOpen] = useState(false);

    const hideAddContentOptions = () => {
        setAddContentOpen(false);
    };

    const handleAddContentOptionsChange = (newOpen) => {
        setAddContentOpen(newOpen);
    };

    const [media, setMedia] = useState([
        {type: "image", src: "https://media.geeksforgeeks.org/wp-content/uploads/20190506164011/logo3.png"},
        {type: "text", text: "text text text"},
        {type: "audio", src: "https://media.geeksforgeeks.org/wp-content/uploads/20230524142525/gfg_offline_classes_en.mp3"},
        {type: "video", src: "https://assets.codepen.io/6093409/hubspot-video-example.mp4"}
    ]);

    const mediaElements = media.map((mediaElement) =>
        <MediaCard type= {mediaElement['type']} src={mediaElement['src']} text={mediaElement['text']} ></MediaCard>
    );

    return <div className="column">
        {mediaElements}
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