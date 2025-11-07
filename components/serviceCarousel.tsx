"use client";

import React, { useCallback } from "react";
import { EmblaOptionsType, EmblaCarouselType } from "embla-carousel";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const ServiceCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop;

    resetOrStop();
  }, []);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick
  );

    const services = [
      {
        title: "Review",
        description:
          "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
        icon: "/assets/icons/review.jpg",
      },
      {
        title: "Software Testing Service",
        description:
          "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
        icon: "/assets/icons/testing.gif",
      },
      {
        title: "Web Design & Development",
        description:
          "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
        icon: "/assets/icons/web.gif",
      },
      {
        title: "Mobile App Development",
        description:
          "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
        icon: "/assets/icons/mobile.gif",
      },
      {
        title: "UI/UX Design",
        description:
          "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
        icon: "/assets/icons/ui.gif",
      },
    ];

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {services.map((service, index) => (
            <div className="embla__slide" key={index}>
              <div
                className="flex flex-col justify border-[#17CDCA] border rounded-lg p-3 gap-4"
              >
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={40}
                  height={40}
                />
                <p className="text-[26px] font-semibold text-[#17CDCA]">
                  {service.title}
                </p>
                <p className="text-[22px]">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCarousel;
