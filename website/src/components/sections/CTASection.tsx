import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import type { BaseComponentProps, CTAButton, SectionBackground } from '@/lib/types';

interface CTASectionProps extends BaseComponentProps, SectionBackground {
  title: string;
  description?: string;
  buttons: CTAButton[];
  dark?: boolean;
}

export function CTASection({
  title,
  description,
  buttons,
  variant = 'white',
  dark = false,
}: CTASectionProps) {
  if (dark) {
    return (
      <section className="py-16 gradient-accent text-white">
        <Container size="sm" center>
          <h2 className="text-2xl md:text-3xl font-bold font-serif mb-5 text-white">
            {title}
          </h2>
          {description && (
            <p className="text-white/80 mb-8 max-w-xl mx-auto leading-relaxed">
              {description}
            </p>
          )}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {buttons.map((button, index) => (
              <Link
                key={index}
                href={button.href}
                className={
                  button.variant === 'secondary'
                    ? 'inline-flex items-center justify-center px-8 py-3 min-h-[48px] border-2 border-white/60 text-white font-semibold rounded-xl hover:bg-white/10 transition-all'
                    : 'inline-flex items-center justify-center px-8 py-3 min-h-[48px] bg-white text-accent font-semibold rounded-xl hover:bg-gray-50 transition-all hover:shadow-lg'
                }
              >
                {button.label}
              </Link>
            ))}
          </div>
        </Container>
      </section>
    );
  }

  return (
    <Section variant={variant}>
      <Container size="sm" center>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-serif mb-5">
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
