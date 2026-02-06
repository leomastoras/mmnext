import Icon from '@/components/ui/AppIcon';

interface Interest {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export default function PersonalSection() {
  const interests: Interest[] = [
    {
      id: 'interest_reading',
      icon: 'BookOpenIcon',
      title: 'Ανάγνωση',
      description: 'Λάτρης των βιβλίων ψυχολογίας, φιλοσοφίας και λογοτεχνίας. Η ανάγνωση με βοηθά να παραμένω ενημερωμένη και εμπνευσμένη.',
    },
    {
      id: 'interest_yoga',
      icon: 'SparklesIcon',
      title: 'Γιόγκα & Διαλογισμός',
      description: 'Πρακτικάρω γιόγκα και διαλογισμό καθημερινά. Με βοηθούν να διατηρώ την εσωτερική μου ισορροπία και να είμαι παρούσα για τους πελάτες μου.',
    },
    {
      id: 'interest_nature',
      icon: 'SunIcon',
      title: 'Φύση',
      description: 'Απολαμβάνω τον περίπατο στη φύση και την πεζοπορία. Πιστεύω στη θεραπευτική δύναμη του φυσικού περιβάλλοντος.',
    },
    {
      id: 'interest_community',
      icon: 'HeartIcon',
      title: 'Κοινωνική Προσφορά',
      description: 'Συμμετέχω σε προγράμματα ψυχολογικής υποστήριξης για ευάλωτες ομάδες και παρέχω δωρεάν συμβουλές σε ΜΚΟ.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Πέρα από τη Θεραπεία
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Η Προσωπική μου <span className="text-primary">Πλευρά</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Πιστεύω ότι η προσωπική μου ευημερία και ισορροπία με κάνει καλύτερη θεραπεύτρια. Εδώ είναι μερικά πράγματα που με εμπνέουν και με γεμίζουν.
          </p>
        </div>

        {/* Interests Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {interests.map((interest, index) => (
            <div
              key={interest.id}
              className="text-center p-8 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-soft transition-all duration-300 animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name={interest.icon as any} size={32} className="text-primary" />
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-3">{interest.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {interest.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-16 max-w-3xl mx-auto text-center p-8 bg-secondary/30 rounded-2xl border border-border animate-fadeInUp delay-300">
          <Icon name="ChatBubbleBottomCenterTextIcon" size={48} className="text-primary mx-auto mb-6" />
          <blockquote className="text-2xl font-serif italic text-foreground mb-4">
            "Η ψυχολογία δεν είναι απλώς η δουλειά μου - είναι το πάθος μου. Κάθε μέρα νιώθω ευγνώμων που μπορώ να συνοδεύω ανθρώπους στην πορεία τους προς την ψυχική ευημερία."
          </blockquote>
          <p className="font-semibold text-foreground">— Μαρία Μανωλά</p>
        </div>
      </div>
    </section>
  );
}