import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import type { BaseComponentProps, CTAButton, SectionBackground } from '@/lib/types';

interface CTASectionProps extends BaseComponentProps, SectionBackground {
  title: string;
  description?: string;
  buttons: CTAButton[];
}

export function CTASection({
  title,
  description,
  buttons,
  variant = 'white',
}: CTASectionProps) {
  return (
    <Section variant={variant}>
      <Container size="sm" center>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-serif mb-6">
          {title}
        </h2>
        {description && (
          <p className="text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed">
            {description}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {buttons.map((button, index) => (
            <Link
              key={index}
              href={button.href}
              className={button.variant === 'secondary' ? 'btn-secondary' : 'btn-primary'}
            >
              {button.label}
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
