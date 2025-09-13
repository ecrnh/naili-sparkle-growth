import { Star, Quote } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Elif Demir",
    role: "Nail Art Studio Sahibi",
    location: "İstanbul",
    content: "Naily sayesinde randevu yönetimim çok kolaylaştı. Müşterilerim online randevu almayı çok seviyor. Gelirlerimde %35 artış oldu!",
    rating: 5,
    initials: "ED"
  },
  {
    name: "Ayşe Kaya",
    role: "Freelance Nail Artist",
    location: "Ankara",
    content: "AI asistan özelliği muhteşem! Gece gelen randevu taleplerini bile karşılıyor. Artık hiç müşteri kaybetmiyorum.",
    rating: 5,
    initials: "AK"
  },
  {
    name: "Zeynep Yılmaz",
    role: "Beauty Center Müdürü",
    location: "İzmir",
    content: "3 şubemizi tek platformdan yönetiyoruz. Raporlama özellikleri sayesinde hangi hizmetlerin daha çok talep gördüğünü anlık görebiliyorum.",
    rating: 5,
    initials: "ZY"
  },
  {
    name: "Merve Öztürk",
    role: "Güzellik Salonu Sahibi",
    location: "Bursa",
    content: "SMS hatırlatmalar sayesinde randevuya gelmeme oranı %80 azaldı. Müşteri memnuniyeti arttı, işlerim düzene girdi.",
    rating: 5,
    initials: "MÖ"
  },
  {
    name: "Selin Arslan",
    role: "Nail Designer",
    location: "Antalya",
    content: "Paket satışı özelliği harika! Müşterilerime özel paketler sunarak sadakat programı oluşturdum. Gelirlerim katlandı.",
    rating: 5,
    initials: "SA"
  },
  {
    name: "Fatma Çelik",
    role: "Tırnak Stüdyosu Sahibi",
    location: "Eskişehir",
    content: "Personel yönetimi ve prim sistemi çok başarılı. Ekibimin motivasyonu arttı, hizmet kalitemiz yükseldi.",
    rating: 5,
    initials: "FÇ"
  }
];

export function Testimonials() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-gradient">Müşterilerimiz Ne Diyor?</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            1000+ tırnak stüdyosu Naily ile büyüyor
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm group"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-primary/20 mb-4 group-hover:text-primary/30 transition-colors" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <Avatar className="h-12 w-12 border-2 border-primary/20">
                  <AvatarFallback className="gradient-primary text-primary-foreground font-semibold">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.location}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-16 text-center">
          <div>
            <div className="text-3xl font-bold text-primary mb-1">%99</div>
            <div className="text-sm text-muted-foreground">Müşteri Memnuniyeti</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-1">4.9/5</div>
            <div className="text-sm text-muted-foreground">Ortalama Puan</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-1">%40</div>
            <div className="text-sm text-muted-foreground">Gelir Artışı</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-1">7/24</div>
            <div className="text-sm text-muted-foreground">Destek</div>
          </div>
        </div>
      </div>
    </section>
  );
}