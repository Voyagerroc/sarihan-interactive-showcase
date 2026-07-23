import { Mail, MapPin, Phone, Globe } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-900 text-white px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form Side */}
          <div>
            <span className="text-amber-500 font-semibold uppercase tracking-widest text-sm">İletişim</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6">Bize Ulaşın</h2>
            <p className="text-slate-400 mb-8 text-lg">Projelerimiz hakkında detaylı bilgi almak veya satış ofisimizi ziyaret etmek için bize mesaj gönderin.</p>
            
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="Adınız" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-amber-500 transition-colors" />
                <input type="email" placeholder="E-posta" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-amber-500 transition-colors" />
              </div>
              <input type="text" placeholder="Konu" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-amber-500 transition-colors" />
              <textarea placeholder="Mesajınız" rows={5} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-amber-500 transition-colors"></textarea>
              <button className="w-full py-4 bg-amber-500 text-slate-900 font-bold rounded-lg hover:bg-amber-400 transition-colors text-lg shadow-lg shadow-amber-500/20">Mesaj Gönder</button>
            </form>
          </div>

          {/* Contact Info Side */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 flex items-start gap-4 hover:bg-white/10 transition-colors">
              <div className="bg-amber-500/20 p-3 rounded-full text-amber-500"><Phone /></div>
              <div>
                <h4 className="font-bold text-lg">WhatsApp / Telefon</h4>
                <a href="https://wa.me/905447277268" className="text-slate-400 hover:text-amber-500">0 544 727 72 68</a>
              </div>
            </div>

            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 flex items-start gap-4 hover:bg-white/10 transition-colors">
              <div className="bg-blue-500/20 p-3 rounded-full text-blue-500"><Mail /></div>
              <div>
                <h4 className="font-bold text-lg">E-posta</h4>
                <a href="mailto:sarihanyapifatsa52@gmail.com" className="text-slate-400 hover:text-blue-500">sarihanyapifatsa52@gmail.com</a>
              </div>
            </div>

            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 flex items-start gap-4 hover:bg-white/10 transition-colors">
              <div className="bg-emerald-500/20 p-3 rounded-full text-emerald-500"><MapPin /></div>
              <div>
                <h4 className="font-bold text-lg">Şantiye Alanı</h4>
                <a href="https://www.google.com/maps?q=41.0618769,37.4645948" target="_blank" className="text-slate-400 hover:text-emerald-500">Haritada Görüntüle</a>
              </div>
            </div>
            
            <div className="flex gap-4 mt-4">
              <a href="https://www.instagram.com/adn_an5252" target="_blank" className="bg-white/10 p-4 rounded-full hover:bg-pink-600 transition-colors text-white font-bold text-sm flex items-center justify-center w-12 h-12">
                IG
              </a>
              <a href="http://www.sarihaninsaat.com" target="_blank" className="bg-white/10 p-4 rounded-full hover:bg-indigo-600 transition-colors text-white">
                <Globe />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
