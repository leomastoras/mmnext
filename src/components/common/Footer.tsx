import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

export default function Footer() {
  const currentYear = (new Date()).getFullYear();

  const servicesLinks = [
    { id: 'footer_service_individual', label: 'Ατομική Θεραπεία', href: '/services#individual' },
    { id: 'footer_service_couples', label: 'Θεραπεία Ζευγαριών', href: '/services#couples' },
    { id: 'footer_service_family', label: 'Οικογενειακή Θεραπεία', href: '/services#family' },
    { id: 'footer_service_specialized', label: 'Εξειδικευμένες Υπηρεσίες', href: '/services#specialized' },
  ];

  const aboutLinks = [
    { id: 'footer_about_bio', label: 'Βιογραφικό', href: '/about#bio' },
    { id: 'footer_about_education', label: 'Εκπαίδευση', href: '/about#education' },
    { id: 'footer_about_approach', label: 'Θεραπευτική Προσέγγιση', href: '/about#approach' },
  ];

  const contactLinks = [
    { id: 'footer_contact_form', label: 'Φόρμα Επικοινωνίας', href: '/contact#form' },
    { id: 'footer_contact_location', label: 'Τοποθεσία', href: '/contact#location' },
    { id: 'footer_contact_faq', label: 'Συχνές Ερωτήσεις', href: '/contact#faq' },
  ];

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Icon name="HeartIcon" size={24} className="text-white" variant="solid" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-semibold text-foreground">
                  Μαρία Μανωλά
                </span>
                <span className="text-xs text-muted-foreground">Ψυχολόγος</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Ψυχολογική υποστήριξη με ενσυναίσθηση και επαγγελματισμό. Δημιουργώντας έναν ασφαλή χώρο για την προσωπική σας ανάπτυξη.
            </p>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Υπηρεσίες</h4>
            <ul className="space-y-3">
              {servicesLinks?.map((link) => (
                <li key={link?.id}>
                  <Link
                    href={link?.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Σχετικά</h4>
            <ul className="space-y-3">
              {aboutLinks?.map((link) => (
                <li key={link?.id}>
                  <Link
                    href={link?.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Επικοινωνία</h4>
            <ul className="space-y-3">
              {contactLinks?.map((link) => (
                <li key={link?.id}>
                  <Link
                    href={link?.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link?.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex gap-3">
              <a
                href="mailto:info@psychmaria.gr"
                className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
                aria-label="Email"
              >
                <Icon name="EnvelopeIcon" size={18} />
              </a>
              <a
                href="tel:+306945435347"
                className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
                aria-label="Phone"
              >
                <Icon name="PhoneIcon" size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Μαρία Μανωλά. Με αγάπη και επαγγελματισμό.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Πολιτική Απορρήτου
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors">
              Όροι Χρήσης
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}