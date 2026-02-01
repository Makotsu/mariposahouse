"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from 'next-intl';
import { useContactForm } from '@/hooks/useContactForm';

export default function ContactPage() {
  const t = useTranslations('Contact');

  const { status, submit, reset } = useContactForm();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submit(formData);
  };

  // Success State
  if (status === 'success') {
    return (
      <div className="min-h-screen pt-20 bg-white flex items-center justify-center">
        <div className="text-center p-8 max-w-md mx-auto">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 font-serif mb-4">
            {t('success.title')}
          </h2>
          <p className="text-gray-600 mb-8">
            {t('success.message')}
          </p>
          <button
            onClick={() => {
              reset();
              setFormData({ name: "", email: "", subject: "", message: "" });
            }}
            className="btn-secondary"
          >
            {t('success.sendAnother')}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16 bg-white">
      {/* Hero */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Image
            src="/butterfly.png"
            alt="Mariposa"
            width={100}
            height={100}
            className="mx-auto mb-5"
          />
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif mb-3">
            {t('pageTitle')}
          </h1>
          <p className="text-lg text-gray-500">{t('pageSubtitle')}</p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-lg mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-600 text-base mb-6 text-center">
            {t('intro')}
          </p>

          {/* Error Message */}
          {status === 'error' && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600 text-base">{t('error.message')}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-base font-medium text-gray-700 mb-1">
                {t('form.name')} <span className="text-red-500">{t('form.required')}</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-200 focus:border-gray-400 transition-colors text-base"
                placeholder={t('form.namePlaceholder')}
                disabled={status === 'submitting'}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-base font-medium text-gray-700 mb-1">
                {t('form.email')} <span className="text-red-500">{t('form.required')}</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-200 focus:border-gray-400 transition-colors text-base"
                placeholder={t('form.emailPlaceholder')}
                disabled={status === 'submitting'}
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-base font-medium text-gray-700 mb-1">
                {t('form.subject')}
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-200 focus:border-gray-400 transition-colors text-base"
                disabled={status === 'submitting'}
              >
                <option value="">{t('form.subjectOptions.select')}</option>
                <option value="visit">{t('form.subjectOptions.worship')}</option>
                <option value="question">{t('form.subjectOptions.question')}</option>
                <option value="prayer">{t('form.subjectOptions.prayer')}</option>
                <option value="other">{t('form.subjectOptions.other')}</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-base font-medium text-gray-700 mb-1">
                {t('form.message')} <span className="text-red-500">{t('form.required')}</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-200 focus:border-gray-400 transition-colors resize-none text-base"
                placeholder={t('form.messagePlaceholder')}
                disabled={status === 'submitting'}
              />
            </div>

            <button
              type="submit"
              className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={status === 'submitting'}
            >
              {status === 'submitting' ? t('form.sending') : t('form.submit')}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
