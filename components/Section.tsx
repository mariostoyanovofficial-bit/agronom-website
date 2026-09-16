interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  title?: string;
  subtitle?: string;
  bgColor?: 'white' | 'light' | 'dark' | 'gradient';
}

export default function Section({
  children,
  className = '',
  id,
  title,
  subtitle,
  bgColor = 'white',
}: SectionProps) {
  const bgClasses = {
    white: 'bg-white',
    light: 'bg-gray-50',
    dark: 'bg-agro-dark text-white',
    gradient: 'bg-gradient-agro text-white',
  };

  return (
    <section
      id={id}
      className={`${bgClasses[bgColor]} section-spacing ${className}`}
    >
      <div className="container-custom">
        {(title || subtitle) && (
          <div className="mb-12 text-center">
            {title && (
              <h2 className={`${bgColor === 'dark' || bgColor === 'gradient' ? 'text-white' : 'text-agro-dark'}`}>
                {title}
              </h2>
            )}
            {subtitle && (
              <p className={`mt-4 text-lg ${bgColor === 'dark' || bgColor === 'gradient' ? 'text-agro-accent' : 'text-gray-600'}`}>
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
