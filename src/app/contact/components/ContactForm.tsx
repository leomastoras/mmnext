'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FormData {
  name: string;
  email: string;
  phone: string;
  preferredContact: 'email' | 'phone';
  urgency: 'low' | 'medium' | 'high';
  message: string;
}

export default function ContactForm() {
  const [isHydrated, setIsHydrated] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    preferredContact: 'email',
    urgency: 'medium',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitStatus('success');

    // Reset form after success
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        preferredContact: 'email',
        urgency: 'medium',
        message: '',
      });
      setSubmitStatus('idle');
    }, 3000);
  };

  if (!isHydrated) {
    return (
      <form className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Όνομα *</label>
            <input type="text" disabled className="w-full px-4 py-3 rounded-xl border border-border bg-white" />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
            <input type="email" disabled className="w-full px-4 py-3 rounded-xl border border-border bg-white" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Μήνυμα *</label>
          <textarea disabled rows={6} className="w-full px-4 py-3 rounded-xl border border-border bg-white resize-none" />
        </div>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name & Email */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
            Όνομα *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white text-foreground"
            placeholder="Το όνομά σας"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white text-foreground"
            placeholder="email@example.com"
          />
        </div>
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
          Τηλέφωνο
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white text-foreground"
          placeholder="+30 123 456 7890"
        />
      </div>

      {/* Preferred Contact & Urgency */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="preferredContact" className="block text-sm font-medium text-foreground mb-2">
            Προτιμώμενος Τρόπος Επικοινωνίας
          </label>
          <select
            id="preferredContact"
            name="preferredContact"
            value={formData.preferredContact}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white text-foreground"
          >
            <option value="email">Email</option>
            <option value="phone">Τηλέφωνο</option>
          </select>
        </div>
        <div>
          <label htmlFor="urgency" className="block text-sm font-medium text-foreground mb-2">
            Επείγον
          </label>
          <select
            id="urgency"
            name="urgency"
            value={formData.urgency}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white text-foreground"
          >
            <option value="low">Χαμηλό</option>
            <option value="medium">Μεσαίο</option>
            <option value="high">Υψηλό</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
          Μήνυμα *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none bg-white text-foreground"
          placeholder="Πείτε μου λίγα λόγια για τον λόγο που επικοινωνείτε..."
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-8 py-4 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 shadow-soft hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <Icon name="ArrowPathIcon" size={20} className="animate-spin" />
            Αποστολή...
          </>
        ) : submitStatus === 'success' ? (
          <>
            <Icon name="CheckCircleIcon" size={20} />
            Απεστάλη!
          </>
        ) : (
          <>
            Αποστολή Μηνύματος
            <Icon name="PaperAirplaneIcon" size={20} />
          </>
        )}
      </button>

      {/* Success Message */}
      {submitStatus === 'success' && (
        <div className="p-4 bg-success/10 border border-success/20 rounded-xl flex items-center gap-3 animate-fadeIn">
          <Icon name="CheckCircleIcon" size={24} className="text-success" />
          <p className="text-success font-medium">
            Το μήνυμά σας απεστάλη επιτυχώς! Θα επικοινωνήσω μαζί σας σύντομα.
          </p>
        </div>
      )}

      {/* Privacy Note */}
      <p className="text-sm text-muted-foreground text-center">
        <Icon name="ShieldCheckIcon" size={16} className="inline mr-1" />
        Όλες οι πληροφορίες σας είναι εμπιστευτικές και προστατεύονται σύμφωνα με τον GDPR.
      </p>
    </form>
  );
}