import { useState, type ChangeEvent, type FormEvent } from "react";
import { CONTACT_EMAIL } from "@/utils/env";
import { CONTACT_ITEMS } from "@/utils/portfolioData";

interface ContactSectionProps {
  onNotification: (message: string, type?: "info" | "success" | "error") => void;
}

interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const INITIAL_FORM_VALUES: ContactFormValues = {
  name: "",
  email: "",
  subject: "",
  message: ""
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactSection({ onNotification }: ContactSectionProps) {
  const [formValues, setFormValues] = useState<ContactFormValues>(INITIAL_FORM_VALUES);

  const onFieldChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const fieldName = event.target.name as keyof ContactFormValues;
    const { value } = event.target;
    setFormValues((previous) => ({ ...previous, [fieldName]: value }));
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { name, email, subject, message } = formValues;

    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      onNotification("Please fill in all fields.", "error");
      return;
    }

    if (!emailPattern.test(email)) {
      onNotification("Please enter a valid email address.", "error");
      return;
    }

    const mailtoLink = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;

    window.location.href = mailtoLink;
    onNotification("Email client opened! Please send the email to complete your message.", "success");
    setFormValues(INITIAL_FORM_VALUES);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let&apos;s Connect</h3>
            <p>
              I&apos;m always open to discussing new opportunities, interesting projects, or just connecting with fellow data
              enthusiasts.
            </p>
            <div className="contact-details">
              {CONTACT_ITEMS.map((item) => (
                <div className="contact-item" key={item.label}>
                  <i className={item.iconClass} />
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span>{item.label}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <form className="contact-form" id="contact-form" onSubmit={onSubmit}>
            <div className="form-group">
              <input type="text" id="name" name="name" required value={formValues.name} onChange={onFieldChange} />
              <label htmlFor="name">Your Name</label>
            </div>

            <div className="form-group">
              <input type="email" id="email" name="email" required value={formValues.email} onChange={onFieldChange} />
              <label htmlFor="email">Your Email</label>
            </div>

            <div className="form-group">
              <input
                type="text"
                id="subject"
                name="subject"
                required
                value={formValues.subject}
                onChange={onFieldChange}
              />
              <label htmlFor="subject">Subject</label>
            </div>

            <div className="form-group">
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={formValues.message}
                onChange={onFieldChange}
              />
              <label htmlFor="message">Your Message</label>
            </div>

            <button type="submit" className="btn btn-primary">
              <i className="fas fa-paper-plane" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
