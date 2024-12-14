import Feature from "@/components/Home/Feature";
import News from "@/components/Home/News";
import Offer from "@/components/Home/Offer";
import Products from "@/components/Home/Products";
import Testimonial from "@/components/Home/Testimonial";

export default function Home() {
  return (
    <div>
      <Products />
      <Feature />
      <Offer />
      {/* <About /> */}
      <Testimonial />
      <News />
    </div>
  );
}
