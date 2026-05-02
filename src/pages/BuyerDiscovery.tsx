import { ScanLine, Box, Leaf, ChevronRight, Star, ShoppingCart } from "lucide-react";
import { cn } from "../lib/utils";

const MOCK_PRODUCTS = [
  {
    id: 1,
    name: "Aeronautic Chronograph",
    vendor: "Horology Co.",
    price: "$1,250",
    rating: 4.9,
    reviews: 128,
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=600&auto=format&fit=crop",
    tags: ["AR Try-on"],
    eco: false,
  },
  {
    id: 2,
    name: "Reclaimed Teak Credenza",
    vendor: "Nordic Atelier",
    price: "$895",
    rating: 4.8,
    reviews: 42,
    image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=600&auto=format&fit=crop",
    tags: ["Place in Room"],
    eco: true,
  },
  {
    id: 3,
    name: "Minimalist Linen Overshirt",
    vendor: "Thread & Form",
    price: "$120",
    rating: 4.7,
    reviews: 315,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=600&auto=format&fit=crop",
    tags: ["AR Try-on"],
    eco: true,
  },
  {
    id: 4,
    name: "Matte Ceramic Pour-over Set",
    vendor: "Earth & Fire Studio",
    price: "$85",
    rating: 5.0,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1523456382-74af1770ea0c?q=80&w=600&auto=format&fit=crop",
    tags: [],
    eco: false,
  }
];

export function BuyerDiscovery() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-slate-800/50 bg-slate-950 pt-16 pb-24 md:pt-32 md:pb-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center gap-12">
          
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-widest">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              <ScanLine className="w-3 h-3" />
              <span>AI-Powered Discovery</span>
            </div>
            
            <h1 className="font-sans text-6xl md:text-8xl font-extrabold tracking-tight leading-[1.1] text-white">
              Find anything.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Instantly.</span>
            </h1>
            
            <p className="max-w-xl text-lg text-slate-400 font-sans leading-relaxed">
              Upload an image to visually search our multi-vendor catalog, or let our AI recommendation engine find exactly what you are looking for based on your intent.
            </p>
            
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/25 px-8 py-4 rounded-xl font-bold transition-all">
                <ScanLine className="w-5 h-5" />
                Visual Search
              </button>
              <button className="flex items-center gap-2 bg-transparent text-white border border-slate-700 hover:border-slate-500 px-8 py-4 rounded-xl font-bold transition-colors">
                Explore AI Picks
              </button>
            </div>
          </div>
          
          {/* Visual Search Demo UI */}
          <div className="flex-1 w-full max-w-md">
            <div className="aspect-[4/5] bg-slate-900/50 rounded-[2rem] p-4 shadow-2xl relative transform rotate-[-2deg] border border-slate-800">
              <div className="w-full h-full rounded-[1.5rem] bg-slate-950 overflow-hidden relative group">
                <img src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" alt="Nike shoe search" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent flex flex-col justify-end p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-white/20 backdrop-blur-md text-white text-xs px-2 py-1 rounded-full border border-white/20 uppercase tracking-widest">
                      Processing Image
                    </span>
                  </div>
                  <h3 className="text-white font-display text-xl font-medium">Scanning for "Minimalist Sneakers"</h3>
                  <div className="mt-4 h-1 w-full bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full bg-white w-2/3 animate-pulse"></div>
                  </div>
                </div>
                {/* Scanner line effect */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-cyan-400 shadow-[0_0_15px_#22d3ee] opacity-70 animate-[scan_3s_ease-in-out_infinite]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Products */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="font-sans text-4xl font-extrabold mb-2 text-white">Recommended for You</h2>
            <p className="text-slate-400">Curated from across our global vendor network.</p>
          </div>
          <button className="hidden sm:flex items-center gap-1 text-sm font-semibold uppercase tracking-wider text-indigo-400 hover:text-indigo-300">
            View All <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {MOCK_PRODUCTS.map((product) => (
            <div key={product.id} className="group flex flex-col bg-slate-900/50 border border-slate-800 p-4 rounded-3xl transition-colors hover:border-slate-700">
              <div className="relative aspect-[4/5] object-cover bg-slate-950 rounded-2xl overflow-hidden mb-4 border border-slate-800/50 shadow-sm">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {product.eco && (
                    <div className="flex items-center gap-1 bg-cyan-500/20 text-cyan-400 backdrop-blur-sm px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-cyan-500/30">
                      <Leaf className="w-3 h-3" />
                      Eco-Certified
                    </div>
                  )}
                </div>

                {/* AR Actions Overlay */}
                <div className="absolute bottom-3 left-3 right-3 flex gap-2 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  {product.tags.includes("AR Try-on") || product.tags.includes("Place in Room") ? (
                    <button className="flex-1 flex items-center justify-center gap-1.5 bg-slate-900/90 backdrop-blur-md text-slate-200 py-2 rounded-xl text-xs font-semibold shadow-sm hover:bg-slate-800 border border-slate-700">
                      <Box className="w-3.5 h-3.5" />
                      {product.tags[0]}
                    </button>
                  ) : null}
                  <button className="w-10 h-10 flex items-center justify-center bg-indigo-600/90 backdrop-blur-md text-white rounded-xl shadow-sm hover:bg-indigo-500">
                    <ShoppingCart className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <div className="flex flex-col gap-1 px-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
                    {product.vendor}
                  </span>
                  <div className="flex items-center gap-1 text-sm font-medium text-slate-300">
                    <Star className="w-3.5 h-3.5 fill-current text-indigo-400" />
                    {product.rating} <span className="text-slate-500 font-normal">({product.reviews})</span>
                  </div>
                </div>
                <h3 className="font-bold text-lg leading-tight mt-1 text-white">{product.name}</h3>
                <p className="font-mono font-medium text-xl mt-1 text-indigo-400">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Banner / Value Prop */}
      <section className="border-t border-slate-800/50 bg-gradient-to-br from-indigo-600 to-indigo-900 p-8 rounded-[3rem] mx-4 sm:mx-6 lg:mx-8 mb-24 relative overflow-hidden">
        <div className="absolute -right-4 -bottom-4 w-64 h-64 bg-white/10 rounded-full blur-3xl z-0"></div>
        <div className="relative z-10 text-center flex flex-col items-center py-16">
           <h2 className="font-sans text-4xl md:text-5xl font-extrabold mb-6 text-white leading-tight">
            Multiple vendors.<br/>One unified checkout.
           </h2>
           <p className="text-indigo-100 opacity-80 max-w-xl text-lg mb-8">
            Our multi-tenant infrastructure handles split shipping, tax calculation, and automated escrow protection. Shop without the friction.
           </p>
           <button className="bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition-all shadow-lg">
            Learn about Trust & Safety
           </button>
        </div>
      </section>

    </div>
  );
}
