import Image from "next/image";
import { categoryItems } from "./lib/categoryItems";
import { MapFilterItems } from "./components/MapFilterItems";

export default function Home() {
  return (
    <main className="container">
      <MapFilterItems />
    </main>
  );
}
