import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';

interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  href: string;
}

export default function ServicesOverview() {
  const services: Service[] = [
    {
      id: 'service_individual',
      icon: 'UserIcon',
      title: 'Ατομική Θεραπεία',
      description: 'Εξατομικευμένη υποστήριξη για την αντιμετώπιση προσωπικών προκλήσεων και την προώθηση της ψυχικής υγείας.',
      features: ['Άγχος & Κατάθλιψη', 'Αυτοεκτίμηση', 'Διαχείριση Στρες', 'Προσωπική Ανάπτυξη'],
      href: '/services#individual',
    },
    {
      id: 'service_couples',
      icon: 'HeartIcon',
      title: 'Θεραπεία Ζευγαριών',
      description: 'Ενδυνάμωση της σχέσης σας μέσα από βελτιωμένη επικοινωνία και κατανόηση.',
      features: ['Επικοινωνιακά Ζητήματα', 'Επίλυση Συγκρούσεων', 'Οικοδόμηση Εμπιστοσύνης', 'Οικογενειακός Σχεδιασμός'],
      href: '/services#couples',
    },
    {
      id: 'service_family',
      icon: 'UserGroupIcon',
      title: 'Οικογενειακή Θεραπεία',
      description: 'Δημιουργία υγιών οικογενειακών δυναμικών και ενίσχυση των δεσμών μεταξύ των μελών.',
      features: ['Οικογενειακές Συγκρούσεις', 'Γονική Καθοδήγηση', 'Προβλήματα Εφηβείας', 'Οικογενειακή Επικοινωνία'],
      href: '/services#family',
    },
    {
      id: 'service_specialized',
      icon: 'SparklesIcon',
      title: 'Εξειδικευμένες Υπηρεσίες',
      description: 'Στοχευμένες παρεμβάσεις για συγκεκριμένες ψυχολογικές ανάγκες και προκλήσεις.',
      features: ['Αντιμετώπιση Τραύματος', 'Διαταραχές Άγχους', 'Επαγγελματική Συμβουλευτική', 'Ενσυνειδητότητα'],
      href: '/services#specialized',
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Υπηρεσίες
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Πώς Μπορώ να σας <span className="text-primary">Βοηθήσω</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Προσφέρω ένα ευρύ φάσμα ψυχολογικών υπηρεσιών προσαρμοσμένων στις μοναδικές ανάγκες σας, χρησιμοποιώντας αποδεδειγμένες θεραπευτικές μεθόδους.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Link
              key={service.id}
              href={service.href}
              className="group block animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-full p-8 bg-white rounded-2xl border border-border hover:border-primary/30 hover:shadow-soft transition-all duration-300">
                {/* Icon & Title */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Icon
                      name={service.icon as any}
                      size={32}
                      className="text-primary group-hover:text-white transition-colors"
                    />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={`${service.id}_feature_${idx}`} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Learn More Link */}
                <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all duration-300">
                  Μάθετε περισσότερα
                  <Icon name="ArrowRightIcon" size={18} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center animate-fadeInUp delay-300">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 shadow-soft hover:shadow-lg"
          >
            Δείτε Όλες τις Υπηρεσίες
            <Icon name="ArrowRightIcon" size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}