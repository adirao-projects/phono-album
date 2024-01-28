"use client"
import Column from "./components/column";
import { getAlbums } from "@/firebase/firestore/getAlbums";
import { useEffect } from "react";
import Image from "next/image";
import "./page.css";
import { UserButton } from "@clerk/nextjs";

export default function Page() {
  useEffect(() => {
    const len = getAlbums().albums;
    console.log(len);
  });

  return (
    <main className="page">
      <div className="h-screen">
          <UserButton afterSignOutUrl="/"/>
      </div>
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
)};