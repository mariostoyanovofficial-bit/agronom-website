import Link from 'next/link';
import { Service } from '@/lib/types';

interface ServiceCardProps extends Service {
  variant?: 'compact' | 'expanded';
}

export default function ServiceCard({
  id,
  title,
  description,
  icon,
  details,
  variant = 'compact',
}: ServiceCardProps) {
  const baseClasses =
    'rounded-xl transition-all duration-300 border border-transparent hover:border-agro-light';

  if (variant === 'expanded') {
    return (
      <div className={`${baseClasses} bg-white shadow-md hover:shadow-xl p-8`}>
        <div className="text-5xl mb-4">{icon}</div>
        <h3 className="text-2xl font-bold text-agro-dark mb-4">{title}</h3>
        <p className="text-gray-700 mb-4 leading-relaxed">{description}</p>
        {details && (
          <div className="mb-6">
            <h4 className="font-semibold text-agro-primary mb-2">Details:</h4>
            <p className="text-gray-600 text-sm leading-relaxed">{details}</p>
          </div>
        )}
        <Link
          href={`/services#${id}`}
          className="inline-flex items-center gap-2 text-agro-primary hover:text-agro-light font-semibold transition-colors"
        >
          Learn more
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </Link>
      </div>
    );
  }

  return (
    <div
      className={`${baseClasses} bg-gradient-to-br from-agro-accent/10 to-agro-light/10 p-6 cursor-pointer group`}
    >
      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-agro-dark mb-3 group-hover:text-agro-primary transition-colors">
        {title}
      </h3>
      <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
      {details && (
        <p className="text-gray-600 text-xs mt-3 italic line-clamp-2">{details}</p>
      )}
    </div>
  );
}
