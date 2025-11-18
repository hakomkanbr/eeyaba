interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  centered = true,
  className = '',
}: SectionHeaderProps) {
  return (
    <div
      className={`${centered ? 'text-center' : ''} mb-12 ${className}`}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
      {centered && (
        <div className="flex justify-center mt-6">
          <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600"></div>
        </div>
      )}
    </div>
  );
}
