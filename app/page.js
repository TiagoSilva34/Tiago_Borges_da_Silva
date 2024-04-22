import Image from "next/image";
import { Header } from "./components/Header";
import { Products } from "./components/Products";

export default function Home() {
  return (
    <>
      <div className="container mx-auto my-2">
        <Products />
      </div>
    </>
  );
}
