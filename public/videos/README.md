# 📁 Videos Klasörü — Kullanım Rehberi

Bu klasöre kendi MP4 video dosyalarınızı ekleyebilirsiniz.

## Video Ekleme Adımları

1. **MP4 dosyanızı** bu `videos/` klasörüne kopyalayın
2. **`js/app.js`** dosyasını açın
3. `videoData` dizisine yeni bir video objesi ekleyin:

```javascript
{
    id: 10,  // Benzersiz bir numara
    src: "videos/benim-videom.mp4",  // Dosya yolu
    poster: "",  // Opsiyonel poster resmi
    category: "doga",  // doga, sehir, portre, etkinlik
    title: { tr: "Video Başlığı", en: "Video Title" },
    desc: { tr: "Türkçe açıklama", en: "English description" },
    duration: "2:30",  // Video süresi
    views: "0"  // İzlenme sayısı
},
```

## Kategori Seçenekleri

| Kategori | Anahtar | TR | EN |
|----------|---------|----|----|
| Doğa     | `doga`  | Doğa | Nature |
| Şehir    | `sehir` | Şehir | City |
| Portre   | `portre` | Portre | Portrait |
| Etkinlik | `etkinlik` | Etkinlik | Event |

## Önerilen Video Formatı

- **Format:** MP4 (H.264 codec)
- **Çözünürlük:** 1920x1080 (Full HD) veya 3840x2160 (4K)
- **Aspect Ratio:** 16:9
- **Dosya Boyutu:** Performans için 50MB altı önerilir
