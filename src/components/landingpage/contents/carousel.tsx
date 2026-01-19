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
      src: "/images/aboutimage.jpeg",
      title: " Omo’ba Adedotun A. Olateju-Jagun ",
    },
    {
      src: "/images/frame1.jpg",
      title: "Cultural Heritage",
    },
    {
      src: "/images/frame3.jpg",
      title: "Fidipote Legacy",
    },
    {
      src: "/images/frame2.jpg",
      title: "Royal Heritage",
    },
    {
      src: "/images/frame4.jpg",
      title: "Fidipote Royalty Limited",
    },
  ];

  return (
    <section className="py-8 md:py-16 px-4 bg-[#F8F8F8]">
      <div className="container mx-auto">
        <Carousel
          className="w-full max-w-9xl mx-auto"
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
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden mx-2">
                  <CardContent className="p-0 cursor-pointer group">
                    <div className="relative overflow-hidden">
                      {/* Image container with responsive aspect ratio */}
                      <div className="relative w-full h-[450px] sm:h-[400px] md:h-[500px] lg:h-[660px] 2xl:h-[660px]">
                        <img
                          src={image.src}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          // Using object-position to ensure faces/bodies aren't cropped
                          style={{ objectPosition: "center 30%" }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>

                      {/* Optional caption overlay */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-lg font-semibold">{image.title}</h3>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Optional: Show navigation on mobile if needed */}
          {/* <CarouselPrevious className="hidden sm:flex left-2 md:left-4 lg:-left-16 bg-[#0F3D2E] text-white border-none hover:bg-[#0F3D2E]/80 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed w-8 h-8 md:w-10 md:h-10" /> */}
          {/* <CarouselNext className="hidden sm:flex right-2 md:right-4 lg:-right-16 bg-[#0F3D2E] text-white border-none hover:bg-[#0F3D2E]/80 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed w-8 h-8 md:w-10 md:h-10" /> */}
        </Carousel>
      </div>
    </section>
  );
};

export default CarouselSection;
