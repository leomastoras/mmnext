import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface ContactMethod {
  id: string;
  icon: string;
  label: string;
  value: string;
  href: string;
}

export default function ContactCTA() {
  const contactMethods: ContactMethod[] = [
    {
      id: 'contact_phone',
      icon: 'PhoneIcon',
      label: 'Τηλέφωνο',
      value: '+30 694 543 5347',
      href: 'tel:+306945435347',
    },
    {
      id: 'contact_email',
      icon: 'EnvelopeIcon',
      label: 'Email',
      value: 'info@psychmaria.gr',
      href: 'mailto:info@psychmaria.gr',
    },
    {
      id: 'contact_location',
      icon: 'MapPinIcon',
      label: 'Τοποθεσία',
      value: 'Αθήνα, Ιλίσια',
      href: '/contact#location',
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Header */}
        <div className="mb-12 animate-fadeInUp">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Ας Ξεκινήσουμε
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Είστε Έτοιμοι για το Πρώτο <span className="text-primary">Βήμα</span>;
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Το πιο δύσκολο βήμα είναι να ζητήσετε βοήθεια. Είμαι εδώ για να σας υποστηρίξω σε αυτή την πορεία. Επικοινωνήστε μαζί μου σήμερα για να κλείσουμε το πρώτο σας ραντεβού.
          </p>
        </div>

        {/* Primary CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fadeInUp delay-100">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 shadow-soft hover:shadow-lg group"
          >
            Κλείστε Ραντεβού Τώρα
            <Icon name="CalendarIcon" size={20} className="group-hover:scale-110 transition-transform" />
          </Link>
          <a
            href="tel:+306945435347"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-primary text-primary rounded-xl font-semibold hover:bg-primary/5 transition-all duration-300"
          >
            <Icon name="PhoneIcon" size={20} />
            Καλέστε Τώρα
          </a>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-6 animate-fadeInUp delay-200">
          {contactMethods.map((method) => (
            <a
              key={method.id}
              href={method.href}
              className="group p-6 bg-white rounded-xl border border-border hover:border-primary/30 hover:shadow-soft transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <Icon
                  name={method.icon as any}
                  size={24}
                  className="text-primary group-hover:text-white transition-colors"
                />
              </div>
              <p className="text-sm font-medium text-muted-foreground mb-1">{method.label}</p>
              <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                {method.value}
              </p>
            </a>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 p-6 bg-white rounded-xl border border-border animate-fadeInUp delay-300">
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Icon name="ClockIcon" size={20} className="text-primary" />
            <p className="text-sm">
              <span className="font-semibold text-foreground">Ωράριο:</span> Δευτέρα - Παρασκευή, 9:00 - 20:00
            </p>306945435347
          </div>
        </div>
      </div>
    </section>
  );
}