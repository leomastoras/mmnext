import Icon from '@/components/ui/AppIcon';

export default function LocationMap() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
          Τοποθεσία Γραφείου
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          Το γραφείο μου βρίσκεται στο κέντρο της Αθήνας, στην περιοχή των Ιλισίων, με εύκολη πρόσβαση από όλα τα μέσα μαζικής μεταφοράς.
        </p>
      </div>

      {/* Map Placeholder */}
      <div className="aspect-video rounded-2xl overflow-hidden border border-border bg-secondary/30">
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-center">
            <Icon name="MapIcon" size={64} className="text-primary/30 mx-auto mb-4" />
            <p className="text-muted-foreground font-medium">
              Χάρτης Τοποθεσίας
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Αλκμάνος 2, Ιλίσια, Αθήνα
            </p>
          </div>
        </div>
      </div>

      {/* Access Info */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-6 bg-white rounded-xl border border-border">
          <div className="flex items-start gap-3">
            <Icon name="MapPinIcon" size={24} className="text-primary flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold text-foreground mb-2">Πάρκινγκ</h4>
              <p className="text-sm text-muted-foreground">
                Διαθέσιμο πάρκινγκ στην περιοχή 100μ από το γραφείο.
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 bg-white rounded-xl border border-border">
          <div className="flex items-start gap-3">
            <Icon name="MapIcon" size={24} className="text-primary flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold text-foreground mb-2">Μέσα Μεταφοράς</h4>
              <p className="text-sm text-muted-foreground">
                Μετρό Mέγαρο Μουσικής (5 λεπτά περπάτημα). Πολλές γραμμές λεωφορείων.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Accessibility */}
      <div className="p-6 bg-secondary/30 rounded-xl border border-border">
        <div className="flex items-start gap-3">
          <Icon name="UserIcon" size={24} className="text-primary flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-semibold text-foreground mb-2">Προσβασιμότητα</h4>
            <p className="text-sm text-muted-foreground">
              Το γραφείο βρίσκεται στον 1ο όροφο με ανελκυστήρα. Πλήρης πρόσβαση για άτομα με κινητικά προβλήματα.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}