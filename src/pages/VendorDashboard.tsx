import { 
  BarChart, 
  Wallet, 
  Upload, 
  Package, 
  Megaphone, 
  AlertTriangle,
  ArrowRight,
  RefreshCcw
} from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', sales: 4000 },
  { name: 'Tue', sales: 3000 },
  { name: 'Wed', sales: 2000 },
  { name: 'Thu', sales: 2780 },
  { name: 'Fri', sales: 1890 },
  { name: 'Sat', sales: 2390 },
  { name: 'Sun', sales: 3490 },
];

export function VendorDashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-sans font-extrabold tracking-tight text-white mt-1">Vendor Terminal</h1>
          <p className="text-slate-400 mt-1">Horology Co. • Vendor ID: V-84729</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-transparent border border-slate-700 hover:border-slate-500 text-white px-4 py-2 rounded-xl text-sm font-bold transition-colors flex items-center gap-2">
            <Upload className="w-4 h-4" />
            Bulk CSV Upload
          </button>
          <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-xl text-sm font-bold transition-colors shadow-lg shadow-indigo-500/25">
            Add Product
          </button>
        </div>
      </div>

      {/* KYC Alert */}
      <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-4 flex items-start gap-4 mb-8">
        <AlertTriangle className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
        <div className="flex-1">
          <h3 className="text-sm font-bold text-white">KYC Verification Required</h3>
          <p className="text-xs text-slate-400 mt-1">
            To ensure platform integrity and unlock automated payouts via Stripe Connect, please submit your business registration documents.
          </p>
        </div>
        <button className="text-xs font-bold uppercase tracking-widest text-indigo-400 hover:text-indigo-300 border border-indigo-500/20 px-3 py-1.5 rounded-lg flex items-center gap-1">
          Complete KYC <ArrowRight className="w-3 h-3" />
        </button>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Col: Analytics & Wallet */}
        <div className="lg:col-span-2 space-y-6">
          {/* Revenue Chart */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-500">Gross Merchandise Volume</h2>
                <div className="text-3xl font-sans font-extrabold text-white mt-1">$19,530.00</div>
              </div>
              <select className="bg-slate-800 text-white text-xs font-medium border border-slate-700 rounded-lg px-3 py-2 cursor-pointer focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none">
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
              </select>
            </div>
            <div className="h-48 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#818cf8" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#818cf8" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <Tooltip 
                    contentStyle={{ borderRadius: '12px', border: '1px solid #1e293b', backgroundColor: '#0f172a', color: '#f1f5f9' }}
                    itemStyle={{ color: '#818cf8', fontWeight: 600 }}
                  />
                  <Area type="monotone" dataKey="sales" stroke="#818cf8" strokeWidth={2} fillOpacity={1} fill="url(#colorSales)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Inventory Table (Tech Recipe 1 style) */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-3xl overflow-hidden">
            <div className="p-6 border-b border-slate-800/50 flex items-center justify-between">
              <h2 className="text-base font-bold text-white flex items-center gap-2">
                <Package className="w-4 h-4 text-indigo-400" />
                Active Inventory
              </h2>
              <button className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-white transition-colors">
                <RefreshCcw className="w-3 h-3" /> Sync Stock
              </button>
            </div>
            <div className="overflow-x-auto">
              <div className="min-w-[500px]">
                {/* Header */}
                <div className="grid grid-cols-12 gap-4 px-6 py-3 border-b border-slate-800/50 bg-slate-950/20">
                  <div className="col-span-1 text-[10px] uppercase font-bold text-slate-500">SKU</div>
                  <div className="col-span-5 text-[10px] uppercase font-bold text-slate-500">Product Name</div>
                  <div className="col-span-2 text-[10px] uppercase font-bold text-slate-500 text-right">Price</div>
                  <div className="col-span-2 text-[10px] uppercase font-bold text-slate-500 text-right">Stock</div>
                  <div className="col-span-2 text-[10px] uppercase font-bold text-slate-500 text-right">Status</div>
                </div>
                {/* Rows */}
                {[
                  { sku: "H-12A", name: "Aeronautic Chronograph", price: "$1,250", stock: 12, low: false },
                  { sku: "H-12B", name: "Diver Pro 300m", price: "$980", stock: 3, low: true },
                  { sku: "S-01", name: "Leather Watch Roll", price: "$85", stock: 45, low: false },
                ].map((item, i) => (
                  <div key={i} className="grid grid-cols-12 gap-4 px-6 py-4 border-b border-slate-800/30 hover:bg-slate-800/30 cursor-pointer transition-colors items-center text-slate-300">
                    <div className="col-span-1 text-xs font-mono text-slate-500">{item.sku}</div>
                    <div className="col-span-5 text-sm font-medium text-white">{item.name}</div>
                    <div className="col-span-2 text-sm font-mono text-right text-indigo-400">{item.price}</div>
                    <div className="col-span-2 text-sm font-mono text-right">
                      <span className={item.low ? "text-cyan-400 font-bold" : ""}>{item.stock}</span>
                    </div>
                    <div className="col-span-2 text-right">
                      {item.low 
                        ? <span className="bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-[10px] px-2 py-1 rounded-full font-bold uppercase tracking-widest inline-flex">Low Stock</span>
                        : <span className="bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-[10px] px-2 py-1 rounded-full font-bold uppercase tracking-widest inline-flex">Active</span>
                      }
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Col: Financials & Marketing */}
        <div className="space-y-6">
          {/* Financials / Escrow Card */}
          <div className="bg-gradient-to-br from-indigo-600 to-indigo-900 border border-indigo-500/20 text-white rounded-3xl p-6 relative overflow-hidden">
             {/* bg decoration */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
            
            <div className="flex items-center justify-between mb-8 relative z-10">
              <h2 className="text-sm font-bold uppercase tracking-widest text-indigo-200 flex items-center gap-2">
                <Wallet className="w-4 h-4" />
                Stripe Connect
              </h2>
              <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]"></div>
            </div>

            <div className="relative z-10">
              <p className="text-xs text-indigo-200 mb-1 font-bold">Available Payout</p>
              <h3 className="text-4xl font-sans font-extrabold tracking-tight mb-4">$4,250.80</h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-xs border-b border-white/10 pb-2">
                  <span className="text-indigo-100/80">In Escrow (Pending Delivery)</span>
                  <span className="font-mono text-white">$1,890.00</span>
                </div>
                <div className="flex justify-between text-xs border-b border-white/10 pb-2">
                  <span className="text-indigo-100/80">Commission Withheld (12%)</span>
                  <span className="font-mono text-white">-$234.00</span>
                </div>
              </div>

              <button className="w-full bg-white text-indigo-900 py-3 rounded-xl font-bold text-sm hover:bg-slate-100 transition-colors shadow-lg">
                Initiate Payout
              </button>
            </div>
          </div>

          {/* Promoted Listings Panel */}
          <div className="bg-slate-900/50 rounded-3xl border border-slate-800 p-6">
            <h2 className="text-base font-bold flex items-center gap-2 mb-2 text-white">
              <Megaphone className="w-4 h-4 text-cyan-400" />
              Marketing Engine
            </h2>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed">
              Boost your visibility. Bid for top placement in global search results.
            </p>
            
            <div className="bg-slate-800/50 rounded-2xl p-4 border border-slate-700 mb-4">
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Active Campaign</span>
                <span className="text-[10px] bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 px-2 py-0.5 rounded-full font-bold">Running</span>
              </div>
              <h4 className="font-bold text-sm text-white mt-2">Target: "Automatic Watches"</h4>
              <div className="mt-4 flex items-center justify-between">
                <div className="text-xs text-slate-400">Max Bid: <span className="font-mono text-white font-medium">$0.45/click</span></div>
                <button className="text-xs font-bold text-indigo-400 hover:text-indigo-300 transition-colors">Edit</button>
              </div>
            </div>

            <button className="w-full border border-slate-700 bg-slate-800 hover:bg-slate-700 text-white py-2.5 rounded-xl font-bold text-sm transition-colors">
              New Campaign
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
