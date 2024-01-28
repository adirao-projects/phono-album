import Image from "next/image";
import Column from "./components/column";

import "./page.css";

export default function Page() {

  return (
    <main className="page">
      <Column></Column>
      <Column></Column>
      <Column></Column>
    </main>
  );
}
