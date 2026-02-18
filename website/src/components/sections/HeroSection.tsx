import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { IMAGES } from '@/lib/constants';
import { cn } from '@/lib/utils';
import type { BaseComponentProps } from '@/lib/types';

interface HeroSectionProps extends BaseComponentProps {
  title: string;
  subtitle?: string;
  showButterfly?: boolean;
  butterflySize?: number;
  fullHeight?: boolean;
  priority?: boolean;
}

export function HeroSection({
  title,
  subtitle,
  showButterfly = true,
  butterflySize = 120,
  fullHeight = false,
  priority = false,
  children,
  className,
}: HeroSectionProps) {
  return (
    <Section
      variant="white"
      className={cn(
        fullHeight ? 'gradient-hero min-h-[80vh] flex items-center justify-center pt-16' : 'pt-28 pb-12',
        className
      )}
    >
      <Container size="md" center>
        <div className="animate-fade-in-up">
          {showButterfly && (
            <Image
              src={IMAGES.butterfly}
              alt="Mariposa"
              width={butterflySize}
              height={butterflySize}
              className="mx-auto mb-6 animate-gentle-float"
              priority={priority}
            />
          )}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl text-gray-500 leading-relaxed">{subtitle}</p>
          )}
          {children}
        </div>
      </Container>
    </Section>
  );
}
