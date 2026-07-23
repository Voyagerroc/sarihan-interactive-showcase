import { motion } from "framer-motion";
import { FileText, FileImage, Download, Eye, Ruler } from "lucide-react";

export default function ProjectFiles() {
  const categories = [
    {
      title: "Mimari Planlar & Dosyalar",
      files: [
        { name: "Mimari Proje Çizimleri", format: "AutoCAD dosyası", path: "/docs/ADNAN SARIHAN MİMARİ 24.04.2026 (1).dwg", action: "DWG İndir", icon: <Ruler className="text-amber-500" size={32} />, isDownload: true },
        { name: "Mimari Model Sunumu", format: "PDF", path: "/docs/ADNAN SARIHAN MİMARİ 24.04.2026-Model (1).pdf", action: "PDF Görüntüle", icon: <FileImage className="text-rose-500" size={32} /> },
        { name: "Mimari 1. Kısım", format: "PDF", path: "/docs/MIMARI-1.KISIM (2).pdf", action: "PDF Görüntüle", icon: <FileText className="text-blue-500" size={32} /> },
        { name: "Mimari 2. Kısım", format: "PDF", path: "/docs/MIMARI-2KISIM (4) (1).pdf", action: "PDF Görüntüle", icon: <FileText className="text-blue-500" size={32} /> },
        { name: "Numara Sıralaması", format: "PDF", path: "/docs/numara sıralama (2).pdf", action: "PDF Görüntüle", icon: <FileText className="text-indigo-500" size={32} /> },
      ]
    },
    {
      title: "Resmi Evraklar",
      files: [
        { name: "TKGM Parsel Sorgu Belgesi", format: "PDF", path: "/docs/parsel.pdf", action: "Görüntüle", icon: <FileText className="text-emerald-500" size={32} /> },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-24 px-4 md:px-12">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">Proje Dosyaları</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Sarıhan İnşaat projesine ait teknik detayları, çizimleri ve yasal evrakları bu sayfa üzerinden inceleyebilir veya bilgisayarınıza indirebilirsiniz.
          </p>
        </motion.div>

        <div className="space-y-16">
          {categories.map((cat, idx) => (
            <div key={idx}>
              <h2 className="text-2xl font-bold text-slate-900 mb-8 pb-4 border-b border-gray-200">
                {cat.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cat.files.map((file, fIdx) => (
                  <motion.a
                    key={fIdx}
                    href={file.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    download={file.isDownload ? file.name : undefined}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: fIdx * 0.1 }}
                    className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-amber-200 transition-all duration-300 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-5">
                      <div className="bg-slate-50 p-3 rounded-xl group-hover:bg-amber-50 group-hover:scale-110 transition-transform">
                        {file.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 text-lg group-hover:text-amber-600 transition-colors">
                          {file.name}
                        </h3>
                        <p className="text-sm text-slate-500 mt-1">{file.format}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-center justify-center text-slate-400 group-hover:text-amber-500 transition-colors">
                      {file.isDownload ? <Download size={24} /> : <Eye size={24} />}
                      <span className="text-[10px] font-bold uppercase tracking-wider mt-2">
                        {file.action}
                      </span>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
