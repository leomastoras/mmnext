import Icon from '@/components/ui/AppIcon';

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export default function FAQSection() {
  const faqs: FAQ[] = [
    {
      id: 'faq_booking',
      question: 'Πώς μπορώ να κλείσω ραντεβού;',
      answer: 'Μπορείτε να με καλέσετε τηλεφωνικά στο +30 694 543 5347 ή να μου στείλετε email στο info@psychmaria.gr. Επίσης, μπορείτε να συμπληρώσετε τη φόρμα επικοινωνίας και θα επικοινωνήσω μαζί σας το συντομότερο δυνατό για να κανονίσουμε το πρώτο σας ραντεβού.',
    },
    {
      id: 'faq_first_session',
      question: 'Τι να περιμένω από την πρώτη συνεδρία;',
      answer: 'Η πρώτη συνεδρία είναι μια ευκαιρία να γνωριστούμε και να συζητήσουμε τις ανάγκες σας. Θα μου πείτε για τον λόγο που αναζητάτε θεραπεία, θα συζητήσουμε το ιστορικό σας και θα θέσουμε μαζί τους στόχους της θεραπείας. Είναι επίσης μια ευκαιρία για εσάς να δείτε αν νιώθετε άνετα να εργαστείτε μαζί μου.',
    },
    {
      id: 'faq_insurance',
      question: 'Δέχεστε ασφάλεια;',
      answer: 'Παρέχω απόδειξη για τις συνεδρίες που μπορείτε να την υποβάλλετε στην ασφαλιστική σας εταιρεία για αποζημίωση. Οι όροι κάλυψης εξαρτώνται από το συγκεκριμένο ασφαλιστήριο συμβόλαιο. Συνιστώ να επικοινωνήσετε με την ασφαλιστική σας για να διευκρινίσετε τους όρους κάλυψης ψυχολογικών υπηρεσιών.',
    },
    {
      id: 'faq_confidentiality',
      question: 'Είναι εμπιστευτική η θεραπεία;',
      answer: 'Απόλυτα. Η εμπιστευτικότητα είναι θεμελιώδης αρχή της θεραπείας. Όλα όσα συζητάμε στις συνεδρίες μας παραμένουν εμπιστευτικά, εκτός από περιπτώσεις που ο νόμος απαιτεί αποκάλυψη (π.χ. κίνδυνος βλάβης για τον εαυτό σας ή άλλους). Θα συζητήσουμε αναλυτικά τα όρια εμπιστευτικότητας στην πρώτη μας συνάντηση.',
    },
    {
      id: 'faq_duration',
      question: 'Πόσο διαρκεί η θεραπεία;',
      answer: 'Η διάρκεια της θεραπείας εξαρτάται από τις ατομικές σας ανάγκες και στόχους. Μερικοί άνθρωποι επωφελούνται από βραχυπρόθεσμη θεραπεία (8-12 συνεδρίες), ενώ άλλοι προτιμούν μακροπρόθεσμη υποστήριξη. Θα αξιολογούμε τακτικά την πρόοδό σας και θα προσαρμόζουμε το θεραπευτικό σχέδιο ανάλογα.',
    },
    {
      id: 'faq_online',
      question: 'Προσφέρετε online συνεδρίες;',
      answer: 'Ναι, προσφέρω online συνεδρίες μέσω ασφαλούς πλατφόρμας βιντεοκλήσης για όσους προτιμούν αυτή την επιλογή ή δεν μπορούν να έρθουν στο γραφείο. Οι online συνεδρίες είναι εξίσου αποτελεσματικές με τις δια ζώσης συνεδρίες για πολλούς ανθρώπους.',
    },
    {
      id: 'faq_cancel',
      question: 'Ποια είναι η πολιτική ακύρωσης;',
      answer: 'Παρακαλώ ειδοποιήστε με τουλάχιστον 24 ώρες πριν αν χρειαστεί να ακυρώσετε ή να αναβάλλετε το ραντεβού σας. Ακυρώσεις που γίνονται με λιγότερη προειδοποίηση ενδέχεται να χρεωθούν με το πλήρες ποσό της συνεδρίας, καθώς δεν μπορώ να προγραμματίσω άλλον πελάτη σε τόσο σύντομο χρόνο.',
    },
    {
      id: 'faq_emergency',
      question: 'Τι κάνω σε περίπτωση κρίσης;',
      answer: 'Αν αντιμετωπίζετε επείγουσα ψυχολογική κρίση εκτός των ωρών συνεδρίας, παρακαλώ καλέστε την Γραμμή Ψυχολογικής Υποστήριξης 1018 (διαθέσιμη 24/7) ή το ΕΚΑΒ 166. Σε περίπτωση άμεσου κινδύνου, μεταβείτε στο πλησιέστερο νοσοκομείο. Είμαι εδώ για να σας υποστηρίξω κατά τη διάρκεια των προγραμματισμένων συνεδριών μας.',
    },
  ];

  return (
    <section id="faq" className="scroll-mt-24 py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Συχνές Ερωτήσεις
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Απαντήσεις στις <span className="text-primary">Ερωτήσεις</span> σας
          </h2>
          <p className="text-lg text-muted-foreground">
            Βρείτε απαντήσεις στις πιο συχνές ερωτήσεις σχετικά με τη θεραπεία και τις υπηρεσίες μου.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className="p-6 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-soft transition-all duration-300 animate-fadeInUp"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="QuestionMarkCircleIcon" size={24} className="text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-foreground mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still Have Questions */}
        <div className="mt-16 text-center p-8 bg-secondary/30 rounded-2xl border border-border">
          <Icon name="ChatBubbleLeftRightIcon" size={48} className="text-primary mx-auto mb-4" />
          <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
            Έχετε Άλλες Ερωτήσεις;
          </h3>
          <p className="text-muted-foreground mb-6">
            Μη διστάσετε να επικοινωνήσετε μαζί μου. Είμαι εδώ για να απαντήσω σε οποιαδήποτε απορία έχετε.
          </p>
          <a
            href="#form"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300"
          >
            Στείλτε Ερώτηση
            <Icon name="ArrowRightIcon" size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}