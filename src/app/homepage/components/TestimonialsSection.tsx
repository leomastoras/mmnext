import Icon from '@/components/ui/AppIcon';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export default function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      id: 'testimonial_1',
      name: 'Ε.Π.',
      role: 'Ατομική Θεραπεία',
      content: 'Η Μαρία με βοήθησε να κατανοήσω τα βαθύτερα αίτια του άγχους μου και να αναπτύξω πρακτικές στρατηγικές για τη διαχείρισή του. Νιώθω πιο δυνατή και αυτοπεποίθηση από ποτέ.',
      rating: 5,
    },
    {
      id: 'testimonial_2',
      name: 'Κ.Μ. & Σ.Γ.',
      role: 'Θεραπεία Ζευγαριών',
      content: 'Η επαγγελματική καθοδήγηση της Μαρίας μας βοήθησε να ξαναβρούμε την επικοινωνία και την εμπιστοσύνη στη σχέση μας. Μας έδωσε τα εργαλεία για να αντιμετωπίζουμε τις διαφορές μας με υγιή τρόπο.',
      rating: 5,
    },
    {
      id: 'testimonial_3',
      name: 'Α.Δ.',
      role: 'Επαγγελματική Συμβουλευτική',
      content: 'Με τη βοήθεια της Μαρίας κατάφερα να διαχειριστώ το επαγγελματικό στρες και να βρω ισορροπία μεταξύ προσωπικής και επαγγελματικής ζωής. Η προσέγγισή της είναι θερμή αλλά και πολύ αποτελεσματική.',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Μαρτυρίες
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Τι Λένε οι <span className="text-primary">Πελάτες Μου</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Οι εμπειρίες των πελατών μου είναι η μεγαλύτερη επιβράβευση για τη δουλειά μου. Διαβάστε τις ιστορίες τους (ανώνυμες για την προστασία της εμπιστευτικότητας).
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 rounded-2xl border border-border hover:border-primary/30 hover:shadow-soft transition-all duration-300 animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, idx) => (
                  <Icon
                    key={`${testimonial.id}_star_${idx}`}
                    name="StarIcon"
                    size={20}
                    className="text-accent"
                    variant="solid"
                  />
                ))}
              </div>

              {/* Quote Icon */}
              <Icon name="ChatBubbleLeftRightIcon" size={32} className="text-primary/20 mb-4" />

              {/* Content */}
              <p className="text-muted-foreground leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="pt-6 border-t border-border">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Confidentiality Note */}
        <div className="mt-12 text-center animate-fadeInUp delay-300">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-xl border border-border">
            <Icon name="ShieldCheckIcon" size={20} className="text-primary" />
            <p className="text-sm text-muted-foreground">
              Όλες οι μαρτυρίες είναι ανώνυμες για την προστασία της εμπιστευτικότητας των πελατών
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}