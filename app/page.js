import Image from "next/image";
import First from "./components/First";
import Last from "./components/Last";
import ProductList from "./components/ProductList";


export default function Home() {
  return (
    <>
    
      <First />
      <ProductList />
      <Last />
     
    </>
  );
}
