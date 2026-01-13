"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const CarouselSection = () => {
  const images = [
    {
      src: "/Images/aboutimage.jpeg",
      alt: "Prince Adedotun Olateju-Jagun",
      title: "Prince Portrait",
    },
    {
      src: "/images/frame1.jpg",
      alt: "Cultural Heritage",
      title: "Cultural Traditions",
    },
    {
      src: "/images/frame3.jpg",
      alt: "Fidipote Food Market",
      title: "Food Security Initiative",
    },
    {
      src: "/images/frame2.jpg",
      alt: "Royal Ceremony",
      title: "Royal Heritage",
    },

    {
      src: "/images/frame4.jpg",
      alt: "Fidipote Royalty Limited",
      title: "Real Estate Development",
    },
  ];

  return (
    <section className="py-16 px-4 bg-[#F8F8F8]">
      <div className="container mx-auto">
        <Carousel 
          className="max-w-9xl mx-auto"
          plugins={[
            Autoplay({
              delay: 3000,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            }),
          ]}
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {images.map((image, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 w-100 ">
                  <CardContent className="p-0 cursor-pointer group ">
                    <div className="relative overflow-hidden rounded-lg w-full h-full">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-[400px] h-[550px] object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 rounded-lg"></div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="hidden md:flex left-2 md:left-4 lg:-left-16 bg-[#0F3D2E] text-white border-none hover:bg-[#0F3D2E]/80 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed w-8 h-8 md:w-10 md:h-10" />
          <CarouselNext className="hidden md:flex right-2 md:right-4 lg:-right-16 bg-[#0F3D2E] text-white border-none hover:bg-[#0F3D2E]/80 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed w-8 h-8 md:w-10 md:h-10" />
        </Carousel>
      </div>
    </section>
  );
};

export default CarouselSection;
