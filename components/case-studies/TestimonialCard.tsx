interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

interface Props {
  testimonial: Testimonial;
  starRating?: number;
}

export default function TestimonialCard({ testimonial, starRating }: Props) {
  return (
    <div className="bg-[#f8f9fc] border border-[#e5e7eb] rounded-2xl p-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full" />
      <svg width="32" height="24" viewBox="0 0 32 24" fill="none" className="mb-4 text-accent/30 relative">
        <path d="M0 24V14.4C0 10.4 1.06667 7.06667 3.2 4.4C5.33333 1.6 8.4 0 12.4 0V4C10.5333 4 9.06667 4.66667 8 6C6.93333 7.2 6.4 8.93333 6.4 11.2V12H12.4V24H0ZM19.6 24V14.4C19.6 10.4 20.6667 7.06667 22.8 4.4C24.9333 1.6 28 0 32 0V4C30.1333 4 28.6667 4.66667 27.6 6C26.5333 7.2 26 8.93333 26 11.2V12H32V24H19.6Z" fill="currentColor"/>
      </svg>
      <p className="text-[16px] text-dark leading-relaxed italic relative mb-5">&ldquo;{testimonial.quote}&rdquo;</p>
      {starRating && (
        <div className="flex gap-1 mb-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill={i < starRating ? '#f59e0b' : '#e5e7eb'} stroke={i < starRating ? '#f59e0b' : '#e5e7eb'} strokeWidth="1">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          ))}
        </div>
      )}
      <div className="flex items-center gap-3 relative">
        <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-[14px] font-bold text-accent">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <p className="text-[13px] font-bold text-dark">{testimonial.name}</p>
          <p className="text-[12px] text-muted">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}
