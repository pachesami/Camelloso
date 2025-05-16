import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Imágenes de prueba (puedes cambiar las URLs por las que desees)
const images = [
  "https://www.shutterstock.com/image-photo/happy-diverse-different-aged-business-260nw-2012728106.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8SFDsC14s-hqcCLLmEx_2f2bJy0RPGCGCyw&s",
  "https://as1.ftcdn.net/jpg/01/96/76/90/1000_F_196769066_LorzXXRbCpROkF7zAXWsMrLKVL2qZWjk.jpg"
];

// Flechas simples para navegación con íconos
const SimplePrevArrow = (props: React.HTMLAttributes<HTMLButtonElement>) => (
  <button
    {...props}
    className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-70 rounded-full p-2 shadow hover:bg-opacity-100 transition text-2xl font-bold"
    style={{ ...props.style, display: "block" }}
    aria-label="Anterior"
  >
    {'<'}
  </button>
);
const SimpleNextArrow = (props: React.HTMLAttributes<HTMLButtonElement>) => (
  <button
    {...props}
    className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-70 rounded-full p-2 shadow hover:bg-opacity-100 transition text-2xl font-bold"
    style={{ ...props.style, display: "block" }}
    aria-label="Siguiente"
  >
    {'>'}
  </button>
);
  
const Carrusel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: <SimplePrevArrow />,
    nextArrow: <SimpleNextArrow />,
  };

  return (
    <div className="w-full py-8">
      <Slider {...settings}>
        {images.map((src, idx) => (
          <div key={idx}>
            <img
              src={src}
              alt={`Imagen de prueba ${idx + 1}`}
              className="rounded-xl w-full h-[32rem] object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carrusel;