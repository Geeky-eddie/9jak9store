import Collections from "@/components/Collections";
import ProductList from "@/components/ProductList";
// import DogList from "@/components/DogList";

import Image from "next/image";
import PictureGrid from '@/components/PictureGrid';
import Secondsection from "@/components/Secondsection";
// import Carousel from "@/components/Carousel";
import Carousels from "@/components/Carousels";
import Slider from "@/components/Slider";
import "../cursor.css";
// import EmblaCarousel from "@/components/EmblaCarousel";
// import { EmblaOptionsType } from 'embla-carousel'
import Graphics from "@/components/Graphics";
import Link from "next/link";
import Thirdsection from "@/components/Thirdsection";
import Testimonial from "@/components/Testimonial";
import ScrollToTopButton from "@/components/ScrollToTopButton";


// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';


  

export default function Home() {
  const imageUrls = [
    '/pic1.webp',
    '/pic2.jpg',
    '/pic1.webp',
    '/pic3.jpg',
    '/pic1.webp',
    
  ];
  const images = [
    '/pic1.webp',
    '/pic2.jpg',
    '/pic3.jpg',
    '/pic3.jpg',
    '/pic3.jpg',
    
  ];
  const imagess = [
    '/pic1.webp',
    '/pic2.jpg',
    '/pic3.jpg',
    '/pic3.jpg',
    
  ];
  return (
    <>
      <Image src="/banner.png" alt="banner" width={2000} height={1000} className="w-screen" />
      <Collections />
      <PictureGrid imageUrls={imageUrls}  />
      <div className="items-center py-8 px-5 text-center">
      <p className="text-heading1-bold">Our Products</p>
      </div>
      <ProductList />
      <div className="items-center py-8 px-5 text-center">
        <Link href={"/shop"}>
        <p className="text-heading4 hover:underline">View more</p>
        </Link>
      
      </div>
      <Secondsection />
     <Graphics />
      <Slider />
      <Carousels imagess={imagess} />
      <Thirdsection />
      <Testimonial />
      <ScrollToTopButton />
    </>
  );
}

export const dynamic = "force-dynamic";

