import { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronUp, Grid, Eye } from "lucide-react";
import galleryData from "@/data/galleryData";

export default function GallerySection() {
  const [expanded, setExpanded] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageLoading, setImageLoading] = useState({});
  const sectionRef = useRef(null);
  const galleryRef = useRef(null);

  const toggleCategory = (title) => {
    const isExpanding = expanded !== title;
    setExpanded(isExpanding ? title : null);

    if (isExpanding && galleryRef.current) {
      setTimeout(() => {
        galleryRef.current.scrollIntoView({ 
          behavior: "smooth", 
          block: "start",
          inline: "nearest"
        });
      }, 200);
    }
  };

  const handleImageLoad = (imageIndex) => {
    setImageLoading(prev => ({ ...prev, [imageIndex]: false }));
  };

  const handleImageError = (imageIndex) => {
    setImageLoading(prev => ({ ...prev, [imageIndex]: false }));
  };

  return (
    <section
      ref={sectionRef}
      className="py-24 px-4 bg-gradient-to-br from-slate-50 via-gray-50 to-stone-50"
      aria-label="Professional Gallery Section"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full text-sm font-medium text-slate-600 mb-6">
            <Grid className="w-4 h-4" />
            Portfolio Gallery
          </div>
          <h2 className="text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Our Project Gallery
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Explore our comprehensive collection of interior design projects, showcasing exceptional craftsmanship and innovative solutions across diverse spaces.
          </p>
        </div>

        {/* Category Selection */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
          {galleryData.map(({ title, images }, idx) => (
            <button
              key={title}
              onClick={() => toggleCategory(title)}
              className={`group relative overflow-hidden rounded-2xl p-6 text-center transition-all duration-500 transform hover:scale-105 ${
                expanded === title 
                  ? "bg-gradient-to-r from-slate-900 to-slate-800 text-white shadow-2xl" 
                  : "bg-white hover:bg-slate-50 text-slate-700 shadow-lg hover:shadow-xl"
              }`}
              style={{
                animationDelay: `${idx * 100}ms`
              }}
            >
              <div className="relative z-10">
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <div className="flex items-center justify-center gap-2 text-sm opacity-75">
                  <span>{images.length} images</span>
                  {expanded === title ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </div>
              </div>
              
              {/* Animated background effect */}
              <div className={`absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-800 transform transition-transform duration-500 ${
                expanded === title ? 'scale-100' : 'scale-0'
              }`} />
            </button>
          ))}
        </div>

        {/* Image Gallery */}
        <div ref={galleryRef}>
          {galleryData.map(({ title, images }) =>
            expanded === title && (
              <div
                key={title}
                className="animate-in fade-in duration-700 slide-in-from-bottom-8"
              >
                <div className="mb-8 p-6 bg-white rounded-2xl shadow-sm border border-slate-200">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{title} Collection</h3>
                  <p className="text-slate-600">
                    Discover our {title.toLowerCase()} designs featuring {images.length} carefully curated images
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {images.map((img, i) => (
                    <div
                      key={i}
                      className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
                      style={{
                        animationDelay: `${i * 50}ms`
                      }}
                    >
                      {/* Loading placeholder */}
                      {imageLoading[`${title}-${i}`] !== false && (
                        <div className="absolute inset-0 bg-slate-200 animate-pulse rounded-2xl" />
                      )}
                      
                      <img
                        src={img}
                        alt={`${title} design ${i + 1}`}
                        loading="lazy"
                        onLoad={() => handleImageLoad(`${title}-${i}`)}
                        onError={() => handleImageError(`${title}-${i}`)}
                        className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="text-white">
                            <p className="font-semibold">{title} Design</p>
                            <p className="text-sm opacity-90">Image {i + 1} of {images.length}</p>
                          </div>
                        </div>
                        
                        <button
                          onClick={() => setSelectedImage({ img, title, index: i })}
                          className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-colors"
                        >
                          <Eye className="w-5 h-5 text-white" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          )}
        </div>

        {/* Image Modal - Fixed for different aspect ratios */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative w-full h-full max-w-6xl max-h-[90vh] flex items-center justify-center">
              <img
                src={selectedImage.img}
                alt={`${selectedImage.title} design ${selectedImage.index + 1}`}
                className="max-w-full max-h-full object-contain rounded-2xl"
                style={{ 
                  width: 'auto', 
                  height: 'auto' 
                }}
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-colors"
              >
                <ChevronUp className="w-6 h-6 text-white rotate-45" />
              </button>
              <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-xl p-4">
                <h4 className="text-white font-semibold text-lg">{selectedImage.title}</h4>
                <p className="text-white/80">Image {selectedImage.index + 1}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}