"use client"

import Column from "./components/column";
import { getAlbums } from "@/firebase/firestore/getAlbums";
import { useEffect } from "react";

import "./page.css";

export default function Page() {
  useEffect(() => {
    const len = getAlbums().albums;
    console.log(len);
  });

  return (
    <main className="page">
      <div className="header">
        <img className="logo" src="album.png"/>
        PhonoAlbum
      </div>
      <div className="column-container">
        <Column></Column>
        <Column></Column>
        <Column></Column>
      </div>
    </main>
  );
}
