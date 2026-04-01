'use client';

import { useState, useEffect } from 'react';

const testimonials = [
  {
    company: "Bergwerk Media GmbH",
    initial: "B",
    quote: "Devmiro hat unsere Website in rekordverdächtiger Zeit abgeliefert. Das Ergebnis übertrifft unsere Erwartungen — professionell, schnell und genau das, was wir brauchten.",
    author: "Thomas M., Geschäftsführer"
  },
  {
    company: "AlpenTech AG",
    initial: "A",
    quote: "Endlich eine Agentur, die hält, was sie verspricht. Fixpreis war genau richtig für uns — keine versteckten Kosten, keine Überraschungen. Absolute Empfehlung.",
    author: "Sandra K., Leitung Marketing"
  },
  {
    company: "Vorarlberger Digitalagentur",
    initial: "V",
    quote: "Die Zusammenarbeit war von Anfang bis Ende professionell. Unsere Conversion-Rate hat sich verdreifacht seit dem Relaunch. Das nenn ich mal einen ROI.",
    author: "Michael H., Gründer"
  }
];

export function TestimonialCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="testimonial-carousel">
      {testimonials.map((t, i) => (
        <div
          key={i}
          className={`testimonial-slide ${i === active ? 'active' : ''}`}
        >
          <div className="testimonial-quote-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="var(--electric)" opacity="0.3">
              <path d="M11 7V4H4v10h7v-7h-4c0-1.1.9-2 2-2zm9 0h-4v-3h4c1.1 0 2 .9 2 2v7h-7v-7h4c0-1.1.9-2 2-2z"/>
            </svg>
          </div>
          <p className="testimonial-quote">"{t.quote}"</p>
          <div className="testimonial-author">
            <div className="testimonial-avatar">{t.initial}</div>
            <div>
              <p className="testimonial-name">{t.author}</p>
              <p className="testimonial-company">{t.company}</p>
            </div>
          </div>
        </div>
      ))}
      <div className="testimonial-dots">
        {testimonials.map((_, i) => (
          <button
            key={i}
            className={`testimonial-dot ${i === active ? 'active' : ''}`}
            onClick={() => setActive(i)}
          />
        ))}
      </div>
    </div>
  );
}
