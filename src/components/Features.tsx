import { Target, Eye, Cloud } from "lucide-react";
import { motion } from "framer-motion";

function AnimatedClouds() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Cloud 1 */}
      <motion.div
        className="absolute top-[10%] text-white/40"
        initial={{ x: "-10%" }}
        animate={{ x: "110vw" }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        <Cloud size={120} fill="currentColor" />
      </motion.div>
      
      {/* Cloud 2 */}
      <motion.div
        className="absolute top-[30%] text-white/30"
        initial={{ x: "-20%" }}
        animate={{ x: "110vw" }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear", delay: 10 }}
      >
        <Cloud size={180} fill="currentColor" />
      </motion.div>

      {/* Cloud 3 */}
      <motion.div
        className="absolute top-[50%] text-white/50"
        initial={{ x: "-15%" }}
        animate={{ x: "110vw" }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear", delay: 5 }}
      >
        <Cloud size={90} fill="currentColor" />
      </motion.div>

      {/* Cloud 4 */}
      <motion.div
        className="absolute top-[70%] text-white/20"
        initial={{ x: "-30%" }}
        animate={{ x: "110vw" }}
        transition={{ duration: 75, repeat: Infinity, ease: "linear", delay: 20 }}
      >
        <Cloud size={150} fill="currentColor" />
      </motion.div>
    </div>
  );
}

export default function Features() {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-sky-300 via-sky-100 to-white px-4 md:px-12 overflow-hidden relative">
      <AnimatedClouds />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16">
          <span className="text-sky-800 font-semibold uppercase tracking-widest text-sm">Hakkımızda</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2 mb-4 tracking-tight">Sarıhan İnşaat</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mb-12">
          {/* Adnan Sarıhan Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 flex flex-col items-center text-center bg-white/80 backdrop-blur-md p-6 rounded-3xl border border-white/50 shadow-sm"
          >
            <div className="w-full h-[600px] mb-6 rounded-2xl overflow-hidden border-4 border-white shadow-lg">
              <img 
                src="/images/adnan-sarihan-3.png" 
                alt="Adnan Sarıhan" 
                className="w-full h-full object-cover object-center hover:scale-110 transition-transform duration-700 cursor-pointer" 
              />
            </div>
            <h4 className="text-2xl font-bold text-slate-900 mb-2 uppercase tracking-wide">Adnan Sarıhan</h4>
            <p className="text-sky-700 font-bold text-base leading-relaxed">MÜTEAHHİT VE <br/> YAPI MARKET SAHİBİ</p>
          </motion.div>

          {/* Main Text Block */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-8 space-y-6 text-lg text-slate-700 leading-relaxed bg-white/40 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/50 shadow-sm flex flex-col justify-center"
          >
            <p className="text-2xl md:text-3xl font-medium text-slate-900 leading-snug mb-4">
              Yılların emeği ve sarsılmaz bir tecrübeyle inşa ettiğimiz <strong className="text-sky-900">Sarıhan İnşaat Ltd. Şti.</strong> olarak, sektördeki yolculuğumuz bir azim ve başarı hikayesidir.
            </p>
            <p>
              <strong className="text-sky-800">2000 - Temellerin Atılması:</strong> İş hayatına Fatsa Beton'da başlanarak inşaat sektörünün temel dinamikleri sahada öğrenildi ve ilk profesyonel deneyim kazanıldı.
            </p>
            <p>
              <strong className="text-sky-800">2004 - Uzmanlığa İlk Adım:</strong> 15 aylık askerlik sürecinin ardından çatı izolasyon sektörüne giriş yapıldı. Bu adım, günümüzde <strong className="text-slate-900">22 yıla ulaşan köklü bir yalıtım tecrübesinin</strong> başlangıcı oldu.
            </p>
            <p>
              <strong className="text-sky-800">Yapı ve Hırdavat Marketi:</strong> İzolasyon ve çatı sistemlerindeki uygulama tecrübemiz, <strong className="text-slate-900">11 yıl önce</strong> faaliyete geçirdiğimiz yapı ve hırdavat marketi ticaretiyle birleşerek kusursuz bir ürün tedarik ağına dönüştü. Bugüne kadar bilfiil uygulama yaparak eksiksiz teslim ettiğimiz <strong className="text-slate-900">4.500'ün üzerinde çatı uygulamasıyla</strong> yalıtım sektöründeki iddiamızı sürdürüyoruz. Yaşadığımız şehrin tüm büyük projelerinde emeği ve deneyimi bulunan köklü bir kuruluş olarak sektörde değer yaratmaya devam ediyoruz.
            </p>
            <p>
              <strong className="text-sky-800">Güçlü İş Birlikleri:</strong> Bu başarı dolu yolculuğumuzda, sektördeki gücümüzü pekiştiren en önemli unsurlardan biri de <strong className="text-slate-900">Fatsa'nın en değerli ve güvenilir esnaflarıyla</strong> omuz omuza kurduğumuz sarsılmaz iş birlikleridir.
            </p>
            <p>
              <strong className="text-sky-800">Müteahhitlik ve Bugün:</strong> Çeyrek asra yaklaşan bilgi birikimimizle, <strong className="text-slate-900">son 3 yılda</strong> ana yüklenici sıfatıyla <strong className="text-slate-900">3 büyük inşaat projesine</strong> imza attık.
            </p>
          </motion.div>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/80 backdrop-blur-md p-10 rounded-3xl border border-white/50 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="bg-sky-100 w-16 h-16 rounded-2xl flex items-center justify-center text-sky-600 mb-8">
              <Target size={32} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Misyonumuz</h3>
            <p className="text-slate-600 leading-relaxed text-lg">
              Modern yaşamın ihtiyaçlarına uygun, güvenli, estetik ve uzun ömürlü yapılar üreterek müşteri memnuniyetini en üst düzeyde tutmak.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-slate-900/90 backdrop-blur-md text-white p-10 rounded-3xl shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Eye size={160} />
            </div>
            <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center text-sky-400 mb-8 relative z-10 backdrop-blur-sm">
              <Eye size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Vizyonumuz</h3>
            <p className="text-slate-300 leading-relaxed text-lg relative z-10">
              Geçmişten gelen ustalık birikimimizi günümüz teknolojileriyle birleştirerek inşaat sektöründe kalite standartlarını belirleyen öncü bir marka olmak. İnsanlara daha konforlu yaşam alanları ve ayrıcalıklı bir tatil deneyimi sunabilmek amacıyla bungolov ev projeleri geliştirmek de gelecek vizyonumuzun ayrılmaz bir parçasıdır.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
