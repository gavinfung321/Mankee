import { Founder } from "../components/home/Founder";
import { Hero } from "../components/home/Hero";
import { HowToOrder } from "../components/home/HowToOrder";
import { Locations } from "../components/home/Locations";
import { OrderSlip } from "../components/home/OrderSlip";
import { PressRail } from "../components/home/PressRail";
import { Recognition } from "../components/home/Recognition";
import { TopTen } from "../components/home/TopTen";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HowToOrder />
      <TopTen />
      <OrderSlip />
      <Founder />
      <Recognition />
      <PressRail />
      <Locations />
    </>
  );
}
