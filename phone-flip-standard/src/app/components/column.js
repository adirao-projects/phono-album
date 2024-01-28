'use client'

import MediaCard from "./mediaCard";
import "./column.css";

import { useState } from "react";
import { Button, Popover } from 'antd';

export default function Column(id) {
    const id_val = id.id;
    console.log(id_val);
    const [addContentOpen, setAddContentOpen] = useState(false);

    const hideAddContentOptions = () => {
        setAddContentOpen(false);
    };

    const handleAddContentOptionsChange = (newOpen) => {
        setAddContentOpen(newOpen);
    };
    let initialMedia = [];
    // const [media, setMedia] = useState(initialMedia);
    console.log(id);
    if (id_val==0) {
        initialMedia=
            [
            {type: "image", src: "https://firebasestorage.googleapis.com/v0/b/phone-flip.appspot.com/o/user_media_bucket%2Fcassette-tape.png?alt=media&token=0f2cb275-a0ee-46d9-b421-9776d1ab2fea"},
            {type: "text", text: "text text text"},
            {type: "audio", src: "https://media.geeksforgeeks.org/wp-content/uploads/20230524142525/gfg_offline_classes_en.mp3"},
            {type: "video", src: "https://assets.codepen.io/6093409/hubspot-video-example.mp4"}
            ];
    } else if (id_val==1) {
        initialMedia=
            [
            {type: "text", text: "Bob Ross event!"},
            {type: "image", src: "https://firebasestorage.googleapis.com/v0/b/phone-flip.appspot.com/o/user_media_bucket%2F20240126_234432.jpg?alt=media&token=121ec0cf-6c7b-4164-9da0-5d219433e764"},
            {type: "audio", src: "https://media.geeksforgeeks.org/wp-content/uploads/20230524142525/gfg_offline_classes_en.mp3"},
            {type: "image", src: "https://firebasestorage.googleapis.com/v0/b/phone-flip.appspot.com/o/user_media_bucket%2F20240127_221255.jpg?alt=media&token=bd8e3872-062b-48e0-a91f-f129b75a477c"}
            ];
    } else if (id_val==2) {
        initialMedia= [
                {type: "video", src: "https://firebasestorage.googleapis.com/v0/b/phone-flip.appspot.com/o/user_media_bucket%2F20240127_023332.mp4?alt=media&token=5f4e5158-4739-4d93-a000-baa14f59c925"},
                //{type: "image", src: "https://console.firebase.google.com/u/0/project/phone-flip/storage/phone-flip.appspot.com/files/~2Fuser_media_bucket"},
                {type: "text", text: "UofT Hacks 11"},
                //{type: "image", src: "https://firebasestorage.googleapis.com/v0/b/phone-flip.appspot.com/o/user_media_bucket%2F20240128_015148.jpg?alt=media&token=801f3cf8-d8a0-4532-bc88-40df0f421dfa"}
            ];

        } else {
            console.log('nah');
        };

    const mediaElements = initialMedia?.map((mediaElement) =>
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