import Icon from '@/components/ui/AppIcon';

interface ContactDetail {
  id: string;
  icon: string;
  label: string;
  value: string;
  subvalue?: string;
}

export default function ContactInfo() {
  const contactDetails: ContactDetail[] = [
    {
      id: 'contact_phone',
      icon: 'PhoneIcon',
      label: 'Τηλέφωνο',
      value: '+30 694 543 5347',
      subvalue: 'Δευτέρα - Παρασκευή, 9:00 - 20:00',
    },
    {
      id: 'contact_email',
      icon: 'EnvelopeIcon',
      label: 'Email',
      value: 'info@psychmaria.gr',
      subvalue: 'Απαντώ εντός 24 ωρών',
    },
    {
      id: 'contact_address',
      icon: 'MapPinIcon',
      label: 'Διεύθυνση',
      value: 'Αλκμάνος 2, Ιλίσια',
      subvalue: 'Αθήνα 115 28, Ελλάδα',
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
          Στοιχεία Επικοινωνίας
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          Επικοινωνήστε μαζί μου με οποιονδήποτε τρόπο σας εξυπηρετεί καλύτερα. Είμαι εδώ για να απαντήσω στις ερωτήσεις σας και να σας βοηθήσω να κάνετε το πρώτο βήμα.
        </p>
      </div>

      <div className="space-y-4">
        {contactDetails.map((detail) => (
          <div
            key={detail.id}
            className="p-6 bg-white rounded-xl border border-border hover:border-primary/30 hover:shadow-soft transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Icon name={detail.icon as any} size={24} className="text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">{detail.label}</p>
                <p className="font-semibold text-lg text-foreground mb-1">{detail.value}</p>
                {detail.subvalue && (
                  <p className="text-sm text-muted-foreground">{detail.subvalue}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Office Hours */}
      <div className="p-6 bg-secondary/30 rounded-xl border border-border">
        <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
          <Icon name="ClockIcon" size={20} className="text-primary" />
          Ωράριο Λειτουργίας
        </h4>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Δευτέρα - Πέμπτη:</span>
            <span className="font-medium text-foreground">9:00 - 20:00</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Παρασκευή:</span>
            <span className="font-medium text-foreground">9:00 - 18:00</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Σαββατοκύριακο:</span>
            <span className="font-medium text-foreground">Κλειστά</span>
          </div>
        </div>
      </div>

      {/* Emergency Note */}
      <div className="p-6 bg-error/5 border border-error/20 rounded-xl">
        <div className="flex items-start gap-3">
          <Icon name="ExclamationTriangleIcon" size={24} className="text-error flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-semibold text-foreground mb-2">Επείγουσα Κατάσταση;</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Αν αντιμετωπίζετε επείγουσα ψυχολογική κρίση, παρακαλώ καλέστε την Γραμμή Ψυχολογικής Υποστήριξης 1018 ή το ΕΚΑΒ 166.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}