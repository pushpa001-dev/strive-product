import Collection from "@/components/collection";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Order from "@/components/order";
import Review from "@/components/review";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <Collection />
      <Review />
      <Order />
      <Footer />
    </div>
  );
}
