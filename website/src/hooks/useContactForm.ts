import { useState } from 'react';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function useContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [error, setError] = useState<string | null>(null);

  const submit = async (data: FormData) => {
    setStatus('submitting');
    setError(null);

    const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

    // If no Formspree ID is set, simulate success for development
    if (!formspreeId) {
      console.log('Form data (Formspree not configured):', data);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus('success');
      return;
    }

    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        throw new Error('Submission failed');
      }
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'An error occurred');
    }
  };

  const reset = () => {
    setStatus('idle');
    setError(null);
  };

  return { status, error, submit, reset };
}
