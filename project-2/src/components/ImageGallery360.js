import React, { useState, useEffect, useRef } from 'react';

const ImageGallery360 = () => {
  const images = [
    "https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0J1upHWipYIkKhaEN0eCX7zGogwrU3sn8TcHm", // Nueva imagen 2
    "https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc06PPORQVFtni9pklCcebwvoumN4D1UEQ3aHWZ" // Nueva imagen 3
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const galleryRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
    galleryRef.current.style.cursor = 'grabbing';
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const diffX = e.clientX - startX;
    if (Math.abs(diffX) > 20) { // Threshold for changing image
      if (diffX > 0) {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
      } else {
        setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
      }
      setStartX(e.clientX); // Reset startX to avoid rapid changes
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    galleryRef.current.style.cursor = 'grab';
  };

  useEffect(() => {
    const galleryElement = galleryRef.current;
    if (galleryElement) {
      galleryElement.addEventListener('mousemove', handleMouseMove);
      galleryElement.addEventListener('mouseup', handleMouseUp);
      galleryElement.addEventListener('mouseleave', handleMouseUp); // Stop dragging if mouse leaves
    }
    return () => {
      if (galleryElement) {
        galleryElement.removeEventListener('mousemove', handleMouseMove);
        galleryElement.removeEventListener('mouseup', handleMouseUp);
        galleryElement.removeEventListener('mouseleave', handleMouseUp);
      }
    };
  }, [isDragging, startX, handleMouseMove, handleMouseUp]);

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Explora cada ángulo del Focus Titanium</h2>
        <div 
          ref={galleryRef}
          className="relative h-96 bg-gray-200 rounded-xl overflow-hidden flex items-center justify-center cursor-grab"
          onMouseDown={handleMouseDown}
        >
          <img 
            src={images[currentImageIndex]} 
            alt={`Ford Focus Titanium ${currentImageIndex}`} 
            className="object-contain w-full h-full transition-opacity duration-300"
          />
          <div className="absolute bottom-4 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${currentImageIndex === index ? 'bg-ford-blue' : 'bg-gray-400'}`}
                onClick={() => setCurrentImageIndex(index)}
              ></button>
            ))}
          </div>
        </div>
        <p className="text-center text-gray-600 mt-4">Arrastra para girar el vehículo</p>
      </div>
    </div>
  );
};

export default ImageGallery360;