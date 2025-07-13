import { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronUp, Grid, Eye } from "lucide-react";

// Using the provided gallery data
const galleryData = [
  {
    title: "Kitchen",
    images: [
      "https://i.postimg.cc/GtYR5XWD/27ecb8ca-abe0-461a-a060-89cda3b1e271.jpg",
      "https://i.postimg.cc/13bH9M2X/fc21014b-0347-46bb-885c-013cff98610c.jpg",
      "https://i.postimg.cc/fb4c4yS0/1a2577dc-dfd7-421e-9346-31baaec20f0f.jpg",
      "https://i.postimg.cc/XqvFKymt/2b8c12e1-0d5e-42c0-a3fc-c7f5fde4c25f.jpg",
      "https://i.postimg.cc/7Yf0f0g2/c0d5af15-4e14-442e-af3e-b05b471a093f.jpg",
      "https://i.postimg.cc/cJNn9zPR/c6737856-ca84-4dc8-9780-fb9eafa4b19d.jpg",
      "https://i.postimg.cc/KYwvp31d/c68717bb-2075-4cec-b1b7-4c9dc923b0ca.jpg",
      "https://i.postimg.cc/k58k921r/kitchen.jpg",
      "https://i.postimg.cc/MpthGkx5/kitchen-4.jpg",
      "https://i.postimg.cc/DfsHX4n8/kitchen-5.jpg",
    ],
  },
  {
    title: "Bedroom",
    images: [
      "https://i.postimg.cc/zXXppyTz/0c815962-019c-4c8f-8ce8-fe9a0248ffa9.jpg",
      "https://i.postimg.cc/RhC1PY6s/4e326d9c-f478-480a-aaee-3524c7fc58d1.jpg",
      "https://i.postimg.cc/3JVppNBb/c2710ba7-0868-4004-b455-dd10f37ba8cb.jpg",
      "https://i.postimg.cc/mkhz1WFs/cc914c34-1bf2-4e06-923b-aa8ad2177f39.jpg",
      "https://i.postimg.cc/HsqcnKYq/664f514e-f8f3-41a4-8303-d336b42dc95f.jpg",
      "https://i.postimg.cc/Bnfb4KNs/2d864f8d-d274-4753-8ebe-269f240a1408.jpg",
      "https://i.postimg.cc/cCJ9KCmL/1st-floor-1st-bedroom.jpg",
      "https://i.postimg.cc/MT6t4Hgm/1st-floor-2nd-view-bedroom.jpg",
      "https://i.postimg.cc/Mp1Dp1SY/bedrm1.jpg",
      "https://i.postimg.cc/SKqG2jQb/bedroom1-2nd-view.jpg",
      "https://i.postimg.cc/XJrx3m7r/bedroom1.jpg",
      "https://i.postimg.cc/k5cLD0mw/ms-1.jpg",
      "https://i.postimg.cc/wjYr2qx0/ms-2.jpg",
    ],
  },
  {
    title: "Exterior",
    images: [
      "https://i.postimg.cc/mDdnb7sr/613e9d45-8d6d-4c56-a9cc-3a19db0efc78.jpg",
      "https://i.postimg.cc/SxYFKTTz/524a07d5-423d-4d7e-83f1-6bcd93d780a4.jpg",
      "https://i.postimg.cc/q7ff6sSD/74940b57-a922-43a2-a71a-be7035f22517.jpg",
      "https://i.postimg.cc/PJ7VshkV/6a2c37fc-c24b-441e-91da-86ff3a67e536.jpg",
      "https://i.postimg.cc/43GLTBrG/2e8ac942-4bf5-4058-b8c3-4d80fb24e12d.jpg"
    ],
  },
  {
    title: "Living Room",
    images: [
      "https://i.postimg.cc/cJTmGZR7/baec6230-102d-425d-be0e-49c08f51375b.jpg",
      "https://i.postimg.cc/N0MccGhB/10559413-cfc6-4234-965d-4a88eaff3ef4.jpg",
      "https://i.postimg.cc/RVBx0LrP/d4a718f6-1404-4e94-a5da-e5d2d5853e9e.jpg",
      "https://i.postimg.cc/8zz3FyZb/9e5697ba-d9a7-4f06-9072-00515c294054.jpg",
      "https://i.postimg.cc/gc4HwGQf/9662b99d-5458-4a05-a858-a73d2ba1ff46.jpg",
      "https://i.postimg.cc/65mV0Y9c/f3c6725e-42e0-4240-9ad1-5d2bbe4c9b56.jpg",
      "https://i.postimg.cc/76zPFP7b/ab5070da-8480-4717-8f55-054a523d4f0e.jpg",
      "https://i.postimg.cc/zXcMgC4Z/new-living-2-nd-view-copy.jpg",
      "https://i.postimg.cc/3wMcLKKt/new-living-copy.jpg",
      "https://i.postimg.cc/8zWSkXcn/foyer-and-family-living.jpg",
      "https://i.postimg.cc/MGmJVcy7/living-3rd-view.jpg",
      "https://i.postimg.cc/nc98TS4c/living.jpg",
      "https://i.postimg.cc/FsXtWgDy/foyer.jpg",
      "https://i.postimg.cc/7ZPWdB72/living-1.jpg",
    ],
  },
  {
    title: "Interior",
    images: [
      "https://i.postimg.cc/t4zqbmYt/64d00b6a-630f-451d-b865-2e70142f862a.jpg",
      "https://i.postimg.cc/DzmtNCsz/6137ae80-b6fa-40ca-af47-daace886ed53.jpg",
      "https://i.postimg.cc/DzDt3qdP/e6f6060d-b1c8-44b3-a1f1-27fdd05588ce.jpg",
      "https://i.postimg.cc/QxbwdLJt/c024c6a8-12df-464c-95ab-5c47ca30c07b.jpg",
      "https://i.postimg.cc/L6NQMtmg/2d1a72d7-7792-49a7-b977-2d7efece28c3.jpg",
      "https://i.postimg.cc/N0rdTZmR/3d39c817-275c-4c47-acdb-3893688be292.jpg",
      "https://i.postimg.cc/26D7Wyzf/afba6193-b8fe-4f13-809e-295ec29a1d62.jpg",
      "https://i.postimg.cc/85ZfCzc4/eb4d3330-fc44-4b2e-aea5-a1acc70aca1d.jpg",
      "https://i.postimg.cc/Rh3hV1jC/fb3425d4-84eb-4546-86de-5fc395618290.jpg",
      "https://i.postimg.cc/hGft01tL/131df958-93b6-4a56-8cca-ce1a31cec8c4.jpg",
      "https://i.postimg.cc/MK1wqrv3/5.jpg",
      "https://i.postimg.cc/rpw2GVg7/17.jpg",
    ],
  },
  {
    title: "Dining Room",
    images: [
      "https://i.postimg.cc/zXz5jFdy/dining-new-copy.jpg",
      "https://i.postimg.cc/7PXjx8VL/new-dng-2nd-copy.jpg",
      "https://i.postimg.cc/Y9LNTFbg/dining.jpg",
      "https://i.postimg.cc/DwfrnHx7/dining-and-kitchen.jpg",
      "https://i.postimg.cc/Dz2MVxXG/1.jpg",
    ],
  },
];

export default function GallerySection() {
  const [expanded, setExpanded] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageLoading, setImageLoading] = useState({});
  const sectionRef = useRef(null);

  const toggleCategory = (title) => {
    const isExpanding = expanded !== title;
    setExpanded(isExpanding ? title : null);

    if (isExpanding && sectionRef.current) {
      setTimeout(() => {
        sectionRef.current.scrollIntoView({ 
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-16">
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

        {/* Image Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-[90vh] w-full">
              <img
                src={selectedImage.img}
                alt={`${selectedImage.title} design ${selectedImage.index + 1}`}
                className="w-full h-full object-contain rounded-2xl"
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