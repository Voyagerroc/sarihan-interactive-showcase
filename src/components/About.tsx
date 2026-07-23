import { Target, Eye } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50 px-4 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-amber-600 font-semibold uppercase tracking-widest text-sm">Hakkımızda</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2 mb-4 tracking-tight">Sarıhan İnşaat</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Text Block */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-8 space-y-6 text-lg text-slate-600 leading-relaxed"
          >
            <p className="text-2xl md:text-3xl font-medium text-slate-900 leading-snug mb-8">
              Her başarılı yapının ardında sağlam bir temel, her güçlü markanın ardında ise yılların emeği vardır.
            </p>
            <p>
              Adnan Sarıhan'ın iş hayatındaki yolculuğu, çatı izolasyonu alanında sunduğu kaliteli işçilik ve müşteri memnuniyeti odaklı hizmet anlayışıyla başlamıştır. Kısa sürede edindiği tecrübe ve güven sayesinde faaliyet alanını genişleterek yapı sektörünün farklı branşlarında çalışmalar yürütmüş, zaman içerisinde müteahhitlik alanına adım atarak kendi projelerini hayata geçirmeye başlamıştır.
            </p>
            <p>
              Bugün Sarıhan İnşaat olarak; modern yaşamın ihtiyaçlarına uygun, güvenli, estetik ve uzun ömürlü yapılar üretmeyi temel hedefimiz olarak görüyoruz. Her projede kaliteli malzeme kullanımı, mühendislik esaslarına bağlılık, şeffaf çalışma anlayışı ve zamanında teslim ilkelerinden ödün vermeden ilerliyoruz.
            </p>
            <p>
              Yalnızca binalar inşa etmiyor, insanların huzurla yaşayacağı ve güvenle yatırım yapabileceği yaşam alanları oluşturuyoruz. Geçmişten gelen ustalık birikimimizi günümüz teknolojileriyle birleştirerek, her yeni projede kalite standartlarımızı daha da ileri taşımayı amaçlıyoruz.
            </p>
            <p>
              Müşterilerimizle kurduğumuz güvene dayalı ilişkiler, en değerli referansımızdır. Bu anlayışla çıktığımız yolda, dürüstlük, kaliteli işçilik ve sürdürülebilir başarı ilkeleri doğrultusunda çalışmalarımıza kararlılıkla devam ediyoruz.
            </p>
          </motion.div>

          {/* Mission & Vision Cards */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="bg-amber-100 w-12 h-12 rounded-2xl flex items-center justify-center text-amber-600 mb-6">
                <Target size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Misyonumuz</h3>
              <p className="text-slate-600 leading-relaxed">
                Modern yaşamın ihtiyaçlarına uygun, güvenli, estetik ve uzun ömürlü yapılar üreterek müşteri memnuniyetini en üst düzeyde tutmak.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Eye size={100} />
              </div>
              <div className="bg-white/10 w-12 h-12 rounded-2xl flex items-center justify-center text-amber-400 mb-6 relative z-10 backdrop-blur-sm">
                <Eye size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 relative z-10">Vizyonumuz</h3>
              <p className="text-slate-300 leading-relaxed relative z-10">
                Geçmişten gelen ustalık birikimimizi günümüz teknolojileriyle birleştirerek, inşaat sektöründe kalite standartlarını belirleyen öncü marka olmak.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
