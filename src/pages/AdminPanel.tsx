import { 
  Users, 
  Activity, 
  Flag,
  Settings,
  TrendingUp,
  ShieldCheck,
  AlertOctagon
} from "lucide-react";

export function AdminPanel() {
  return (
    <div className="w-full flex-1 min-h-[calc(100vh-80px)] bg-slate-950 text-slate-200 overflow-y-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Command Center Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4 border-b border-slate-800/50 pb-6">
          <div>
            <h1 className="text-3xl font-sans font-extrabold tracking-tight text-white">Central Administrative Panel</h1>
            <p className="font-mono text-[11px] text-slate-500 mt-2 tracking-widest uppercase">System Status: Nominal • Active Nodes: 42 • Redis Cache: Opt</p>
          </div>
          <div className="flex gap-3">
            <button className="bg-transparent hover:bg-slate-900 border border-slate-700 text-slate-200 px-4 py-2 rounded-lg text-xs font-mono transition-colors">
              [ Export Logs ]
            </button>
            <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg text-xs font-mono font-bold transition-colors shadow-lg shadow-indigo-500/25 border border-indigo-500/20">
              [ Global Override ]
            </button>
          </div>
        </div>

        {/* Global Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Platform GMV (Mtd)", value: "$4.2M", diff: "+12.4%", icon: TrendingUp },
            { label: "Active Vendors", value: "1,248", diff: "+3", icon: Users },
            { label: "AI Scans / Min", value: "24.5k", diff: "Nominal", icon: Activity },
            { label: "Active Disputes", value: "14", diff: "-2.1%", icon: AlertOctagon, alert: true },
          ].map((stat, i) => (
            <div key={i} className="bg-slate-900/50 border border-slate-800 rounded-2xl p-5 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[10px] uppercase text-slate-500 tracking-widest">{stat.label}</span>
                <stat.icon className={`w-4 h-4 ${stat.alert ? 'text-indigo-400' : 'text-slate-600'}`} />
              </div>
              <div className="text-3xl font-sans font-extrabold text-white">{stat.value}</div>
              <div className={`mt-2 font-mono text-[10px] ${stat.alert ? 'text-indigo-400' : 'text-cyan-400'}`}>{stat.diff} vs Last Month</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left/Main Col: Governance / Moderation Queue */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold flex items-center gap-2 text-white">
                  <Flag className="w-4 h-4 text-indigo-400" /> 
                  AI Content Flagging Queue
                </h3>
                <span className="bg-indigo-500/20 text-indigo-400 px-2 py-0.5 rounded text-[10px] font-mono border border-indigo-500/30 font-bold uppercase tracking-widest">
                  4 High Priority
                </span>
              </div>

              <div className="space-y-4">
                {[
                  { id: "R-992", vendor: "TechGear Pro", issue: "Suspected Counterfeit", confidence: "94%", detail: "Logo mismatch detected via computer vision in image 3." },
                  { id: "R-993", vendor: "HealthNut", issue: "Prohibited Claim", confidence: "88%", detail: "NLP flagged medical claims in description text." }
                ].map((item, i) => (
                  <div key={i} className="bg-slate-950 border border-slate-800 p-4 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-1 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[10px] text-slate-500">#{item.id}</span>
                        <span className="text-sm font-bold text-white">{item.vendor}</span>
                        <span className="bg-indigo-500/10 text-indigo-400 px-1.5 py-0.5 rounded-[4px] text-[9px] uppercase tracking-wider border border-indigo-500/20 font-bold">
                          {item.issue}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400">{item.detail}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <div className="font-mono text-[10px] text-slate-500">AI Confidence</div>
                        <div className="font-mono text-xs text-indigo-400">{item.confidence}</div>
                      </div>
                      <div className="flex gap-2">
                        <button className="bg-slate-800 hover:bg-slate-700 p-2 rounded-lg text-slate-300 transition-colors border border-slate-700" title="Approve Listing">
                          <ShieldCheck className="w-4 h-4" />
                        </button>
                        <button className="bg-indigo-500/20 hover:bg-indigo-500/40 p-2 rounded-lg text-indigo-400 transition-colors border border-indigo-500/20" title="Take down">
                          <AlertOctagon className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Vendor Onboarding / KYC */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-6">
              <h3 className="font-bold flex items-center gap-2 mb-6 text-white">
                <Users className="w-4 h-4 text-slate-400" /> 
                Vendor KYC Approvals
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-800/50 text-[10px] uppercase tracking-widest text-slate-500 font-mono bg-slate-950/50">
                      <th className="p-3 font-bold">Business Name</th>
                      <th className="p-3 font-bold">Region</th>
                      <th className="p-3 font-bold">Documents</th>
                      <th className="p-3 font-bold">Risk Score</th>
                      <th className="p-3 font-bold">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: "Urban Artifacts", region: "NA / US", docs: "3/3 Verified", risk: "Low", score: "12" },
                      { name: "Global Traders LLC", region: "EMEA / UK", docs: "2/3 Pending", risk: "Med", score: "45" },
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-slate-800/30 text-sm hover:bg-slate-800/20 transition-colors text-slate-300">
                        <td className="p-3 font-medium text-white">{row.name}</td>
                        <td className="p-3 text-xs text-slate-400">{row.region}</td>
                        <td className="p-3 font-mono text-xs text-cyan-400">{row.docs}</td>
                        <td className="p-3 font-mono text-xs text-slate-500">
                          {row.score} {row.risk === 'Low' ? <span className="text-cyan-400">✓</span> : <span className="text-indigo-400">!</span>}
                        </td>
                        <td className="p-3">
                          <button className="bg-slate-800 text-white px-3 py-1 rounded-lg text-xs font-bold hover:bg-slate-700 border border-slate-700">Review</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right Col: Configuration */}
          <div className="space-y-6">
            <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-6">
              <h3 className="font-bold flex items-center gap-2 mb-6 text-white">
                <Settings className="w-4 h-4 text-slate-400" /> 
                Dynamic Commission Engine
              </h3>
              <div className="space-y-5">
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">Standard Physical Goods</span>
                    <span className="font-mono text-slate-300">12.0%</span>
                  </div>
                  <div className="w-full bg-slate-950 rounded-full h-1.5 align-middle border border-slate-800">
                    <div className="bg-indigo-500 h-full rounded-full" style={{ width: "60%" }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                   <div className="flex justify-between text-xs">
                    <span className="text-slate-400">Eco-Certified (Sustainable)</span>
                    <span className="font-mono text-cyan-400">8.5%</span>
                  </div>
                  <div className="w-full bg-slate-950 rounded-full h-1.5 align-middle border border-slate-800">
                    <div className="bg-cyan-400 shadow-[0_0_8px_#22d3ee] h-full rounded-full" style={{ width: "42.5%" }}></div>
                  </div>
                  <p className="text-[10px] text-slate-500 mt-1 italic">Discount applied programmatically to vendors passing carbon footprint criteria.</p>
                </div>
                <div className="space-y-2 pt-2">
                  <button className="w-full border border-dashed border-slate-700 text-slate-400 hover:text-white hover:border-slate-500 py-2.5 rounded-xl text-xs font-bold transition-colors">
                    + Add Category Override
                  </button>
                </div>
              </div>
            </div>
            
            {/* System logs minimal */}
            <div className="bg-slate-950 border border-slate-800 rounded-3xl p-5 font-mono text-[10px] text-slate-500 space-y-1.5 h-48 overflow-hidden relative shadow-inner">
              <div className="absolute top-0 w-full h-8 bg-gradient-to-b from-slate-950 to-transparent z-10 left-0"></div>
              <div className="absolute bottom-0 w-full h-12 bg-gradient-to-t from-slate-950 to-transparent z-10 left-0"></div>
              <p className="text-cyan-400">[SYS] Starting K8s rolling update...</p>
              <p className="text-slate-400">[AUTH] Node 42 joined cluster</p>
              <p className="text-slate-400">[PAY] Escrow release #829141 SUCCESS</p>
              <p className="text-slate-400">[PAY] Escrow release #829142 SUCCESS</p>
              <p className="text-indigo-400">[WARN] Elasticsearch latency spike detected in eu-west-1</p>
               <p className="text-slate-400">[API] Request tracing enabled</p>
               <p className="text-slate-400">[CDN] Invalidating asset cache /assets/img/*</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
