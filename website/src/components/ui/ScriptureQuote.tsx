import { cn } from '@/lib/utils';

interface ScriptureQuoteProps {
  text: string;
  reference: string;
  className?: string;
  centered?: boolean;
}

export function ScriptureQuote({
  text,
  reference,
  className,
  centered = false,
}: ScriptureQuoteProps) {
  return (
    <blockquote
      className={cn(
        'scripture-quote',
        centered && 'text-center border-l-0 pl-0',
        className
      )}
    >
      <p className="text-gray-700 leading-relaxed italic">{text}</p>
      <cite className="text-gray-500 mt-2 block not-italic">— {reference}</cite>
    </blockquote>
  );
}
