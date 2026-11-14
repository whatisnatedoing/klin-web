import { Hero } from '@/components/sections/Hero';
import { World, ProductTour, Daily, Letters, Assistant, How } from '@/components/sections/Body';
import { Faqs, Download } from '@/components/sections/Closing';

export default function Home() {
  return (
    <>
      <Hero />
      <World />
      <ProductTour />
      <Daily />
      <Letters />
      <Assistant />
      <How />
      <Faqs />
      <Download />
    </>
  );
}
