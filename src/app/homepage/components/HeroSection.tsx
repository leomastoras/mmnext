import AppImage from '@/components/ui/AppImage';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fadeInUp">
            <div className="space-y-4">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Πιστοποιημένη Ψυχολόγος
              </span>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                Ψυχολογική Υποστήριξη με{' '}
                <span className="text-gradient">Ενσυναίσθηση</span> και{' '}
                <span className="text-primary">Επαγγελματισμό</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                Δημιουργώ έναν ασφαλή και υποστηρικτικό χώρο όπου μπορείτε να εξερευνήσετε τις σκέψεις και τα συναισθήματά σας, να αναπτύξετε αυτογνωσία και να βρείτε το δρόμο προς την προσωπική σας ευημερία.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 shadow-soft hover:shadow-lg group">
                
                Κλείστε Ραντεβού
                <Icon name="ArrowRightIcon" size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-primary text-primary rounded-xl font-semibold hover:bg-primary/5 transition-all duration-300">
                
                Μάθετε Περισσότερα
                <Icon name="InformationCircleIcon" size={20} />
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-8 pt-8 border-t border-border">
              <div className="flex items-center gap-2">
                <Icon name="AcademicCapIcon" size={24} className="text-primary" />
                <div>
                  <p className="text-sm font-semibold text-foreground">15+ Χρόνια</p>
                  <p className="text-xs text-muted-foreground">Εμπειρίας</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="UserGroupIcon" size={24} className="text-primary" />
                <div>
                  <p className="text-sm font-semibold text-foreground">500+</p>
                  <p className="text-xs text-muted-foreground">Ικανοποιημένοι Πελάτες</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="ShieldCheckIcon" size={24} className="text-primary" />
                <div>
                  <p className="text-sm font-semibold text-foreground">100%</p>
                  <p className="text-xs text-muted-foreground">Εμπιστευτικότητα</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-fadeInUp delay-200">
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
              <AppImage
                src="assets/images/1.png"
                alt="Μαρία Μανωλά, επαγγελματίας ψυχολόγος με χαμόγελο σε επαγγελματικό χώρο γραφείου"
                className="w-full h-full object-cover" />
              
              {/* Floating Card */}
              <div className="absolute bottom-8 left-8 right-8 glass p-6 rounded-2xl backdrop-blur-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Icon name="StarIcon" size={24} className="text-white" variant="solid" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Πιστοποιημένη από</p>
                    <p className="text-sm text-muted-foreground">Ελληνική Ψυχολογική Εταιρεία</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>);

}