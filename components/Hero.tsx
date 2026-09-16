import Link from 'next/link';

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  ctaButton?: {
    label: string;
    href: string;
  };
  secondaryButton?: {
    label: string;
    href: string;
  };
}

export default function Hero({
  title,
  subtitle,
  description,
  backgroundImage,
  ctaButton,
  secondaryButton,
}: HeroProps) {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center pt-20 overflow-hidden"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10" />

      {/* Content */}
      <div className="container-custom relative z-20 text-center text-white">
        {subtitle && (
          <p className="text-lg md:text-xl text-agro-accent font-semibold mb-4 uppercase tracking-widest">
            {subtitle}
          </p>
        )}

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
          {title}
        </h1>

        {description && (
          <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto mb-8 leading-relaxed">
            {description}
          </p>
        )}

        {/* CTA Buttons */}
        {(ctaButton || secondaryButton) && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            {ctaButton && (
              <Link
                href={ctaButton.href}
                className="px-8 py-4 bg-agro-primary hover:bg-agro-light text-white font-bold rounded-lg transition-colors inline-flex items-center justify-center"
              >
                {ctaButton.label}
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            )}
            {secondaryButton && (
              <Link
                href={secondaryButton.href}
                className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-agro-primary text-white font-bold rounded-lg transition-all inline-flex items-center justify-center"
              >
                {secondaryButton.label}
              </Link>
            )}
          </div>
        )}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
