// Credit: https://www.reactbits.dev/components/rolling-gallery

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useAnimation,
  useTransform,
  PanInfo,
} from "framer-motion";

interface imgObject {
  src: string;
  category: string;
  title: string;
  description: string;
}

interface RollingGalleryProps {
    autoplay?: boolean;
    pauseOnHover?: boolean;
    images?: string[];
    openImage: (work: {src: string, category: string, title: string, description: string}) => void;
  }

const IMGS: Array<imgObject> = [
    { src: "/assets/works/work1.jpg", category: "coloring", title: "Flowing Curls", description: "Flowing curls with light blonde hair" },
    { src: "/assets/works/work2.jpg", category: "coloring", title: "Light Blonde", description: "Natural-looking sun-kissed highlights" },
    { src: "/assets/works/work3.jpg", category: "styling", title: "Color and Style", description: "Perfect color and style with flowing blowout" },
    { src: "/assets/works/work4.jpg", category: "haircuts", title: "Simple Cut", description: "Layered cut with even ends" },
    { src: "/assets/works/work6.jpg", category: "coloring", title: "Vibrant Red", description: "Bold and vibrant red color transformation" },
    { src: "/assets/works/work7.jpg", category: "styling", title: "Simple Cut with Highlights", description: "Elegant cut with highlights" }
];

const RollingGallery: React.FC<RollingGalleryProps> = ({
  autoplay = false,
  pauseOnHover = false,
  images = [],
  openImage
}) => {
  // Use default images if none are provided
  const galleryImages = images.length > 0 ? images : IMGS;

  const [isScreenSizeSm, setIsScreenSizeSm] = useState<boolean>(false);
  useEffect(() => {
    const handleResize = () => setIsScreenSizeSm(window.innerWidth <= 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 3D geometry calculations
  const cylinderWidth: number = isScreenSizeSm ? 1100 : 1800;
  const faceCount: number = galleryImages.length;
  const faceWidth: number = (cylinderWidth / faceCount) * 1.5;
  const radius: number = cylinderWidth / (2 * Math.PI);

  // Framer Motion values and controls
  const dragFactor: number = 0.05;
  const rotation = useMotionValue(0);
  const controls = useAnimation();

  // Create a 3D transform based on the rotation motion value
  const transform = useTransform(
    rotation,
    (val: number) => `rotate3d(0,1,0,${val}deg)`
  );

  const startInfiniteSpin = (startAngle: number) => {
    controls.start({
      rotateY: [startAngle, startAngle - 360],
      transition: {
        duration: 50, // Duration it takes to transition to the next transformation
        ease: "linear",
        repeat: Infinity,
      },
    });
  };

  useEffect(() => {
    if (autoplay) {
      const currentAngle = rotation.get();
      startInfiniteSpin(currentAngle);
    } else {
      controls.stop();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoplay]);
  // eslint-disable-next-line
  const handleUpdate = (latest: any) => {
    if (typeof latest.rotateY === "number") {
      rotation.set(latest.rotateY);
    }
  };
  // eslint-disable-next-line
  const handleDrag = (_: any, info: PanInfo): void => {
    controls.stop();
    rotation.set(rotation.get() + info.offset.x * dragFactor);
  };
  // eslint-disable-next-line
  const handleDragEnd = (_: any, info: PanInfo): void => {
    const finalAngle = rotation.get() + info.velocity.x * dragFactor;
    rotation.set(finalAngle);
    if (autoplay) {
      startInfiniteSpin(finalAngle);
    }
  };

  const handleMouseEnter = (): void => {
    if (autoplay && pauseOnHover) {
      controls.stop();
    }
  };

  const handleMouseLeave = (): void => {
    if (autoplay && pauseOnHover) {
      const currentAngle = rotation.get();
      startInfiniteSpin(currentAngle);
    }
  };

  return (
    <div className="relative h-[500px] md:h-[800px] w-full overflow-hidden">
      <div
        className="absolute top-0 left-0 h-full w-[48px] z-10"
      />
      <div
        className="absolute top-0 right-0 h-full w-[48px] z-10"
      />
      <div className="flex h-full items-center justify-center [perspective:1000px] [transform-style:preserve-3d]">
        <motion.div
          drag="x"
          dragElastic={0}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          animate={controls}
          onUpdate={handleUpdate}
          style={{
            transform: transform,
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: "preserve-3d",
          }}
          className="flex min-h-[200px] md:cursor-grab items-center justify-center [transform-style:preserve-3d]"
        >
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className="group absolute flex h-fit items-center justify-center p-[8%] [backface-visibility:hidden] md:p-[6%]"
              style={{
                width: `${faceWidth}px`,
                transform: `rotateY(${(360 / faceCount) * i}deg) translateZ(${radius}px)`,
              }}
              onClick={() => openImage(IMGS[i])}
            >
              <Image
                src={typeof img === "string" ? img : img.src}
                height={500}
                width={500}
                alt="gallery image"
                className="pointer-events-none h-[250px] w-[200px] sm:h-[300px] sm:w-[300px] rounded-[15px] border-[3px] border-white object-cover transition-transform duration-300 ease-out group-hover:scale-105 sm:h-[100px] sm:w-[220px]"
              />
            </div>
          ))}
        </motion.div>
        
      </div>
    </div>
  );
};

export default RollingGallery;
