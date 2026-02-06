import Icon from '@/components/ui/AppIcon';

interface ServiceDetail {
  id: string;
  title: string;
  description: string;
}

interface ServiceCategoryProps {
  id: string;
  icon: string;
  title: string;
  description: string;
  whatItHelps: string[];
  approach: string;
  duration: string;
  details: ServiceDetail[];
}

export default function ServiceCategory({
  id,
  icon,
  title,
  description,
  whatItHelps,
  approach,
  duration,
  details,
}: ServiceCategoryProps) {
  return (
    <div id={id} className="scroll-mt-24 py-16 border-b border-border last:border-b-0">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-start gap-6 mb-8">
          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
            <Icon name={icon as any} size={32} className="text-primary" />
          </div>
          <div className="flex-1">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              {title}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>
        </div>

        {/* What It Helps */}
        <div className="mb-8 p-6 bg-secondary/30 rounded-xl">
          <h3 className="font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
            <Icon name="CheckCircleIcon" size={24} className="text-primary" />
            Τι Βοηθάει
          </h3>
          <div className="grid md:grid-cols-2 gap-3">
            {whatItHelps.map((item, idx) => (
              <div key={`${id}_help_${idx}`} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                <span className="text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Approach & Duration */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 bg-white rounded-xl border border-border">
            <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <Icon name="SparklesIcon" size={20} className="text-primary" />
              Προσέγγιση
            </h3>
            <p className="text-muted-foreground">{approach}</p>
          </div>
          <div className="p-6 bg-white rounded-xl border border-border">
            <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <Icon name="ClockIcon" size={20} className="text-primary" />
              Διάρκεια
            </h3>
            <p className="text-muted-foreground">{duration}</p>
          </div>
        </div>

        {/* Details */}
        <div className="space-y-4">
          <h3 className="font-semibold text-lg text-foreground mb-4">
            Λεπτομέρειες
          </h3>
          {details.map((detail) => (
            <div key={detail.id} className="p-6 bg-white rounded-xl border border-border">
              <h4 className="font-semibold text-foreground mb-2">{detail.title}</h4>
              <p className="text-muted-foreground leading-relaxed">{detail.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}