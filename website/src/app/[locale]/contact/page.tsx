"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from 'next-intl';
import { useContactForm } from '@/hooks/useContactForm';

export default function ContactPage() {
  const locale = useLocale();
  const t = useTranslations('Contact');
  const isJa = locale === 'ja';

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
    <div className="min-h-screen pt-20 bg-white">
      {/* Hero */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Image
            src="/butterfly.png"
            alt="Mariposa"
            width={120}
            height={120}
            className="mx-auto mb-8"
          />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 font-serif mb-4">
            {t('pageTitle')}
          </h1>
          <p className="text-xl text-gray-500">{t('pageSubtitle')}</p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 font-serif mb-4">
                {t('form.title')}
              </h2>
              <p className="text-gray-600 text-sm mb-6">
                {t('intro')}
              </p>

              {/* Error Message */}
              {status === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-600 text-sm">{t('error.message')}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('form.name')} <span className="text-red-500">{t('form.required')}</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-200 focus:border-gray-400 transition-colors text-sm"
                    placeholder={t('form.namePlaceholder')}
                    disabled={status === 'submitting'}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('form.email')} <span className="text-red-500">{t('form.required')}</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-200 focus:border-gray-400 transition-colors text-sm"
                    placeholder={t('form.emailPlaceholder')}
                    disabled={status === 'submitting'}
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('form.subject')}
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-200 focus:border-gray-400 transition-colors text-sm"
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
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('form.message')} <span className="text-red-500">{t('form.required')}</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-200 focus:border-gray-400 transition-colors resize-none text-sm"
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

            {/* Contact Info */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 font-serif mb-6">
                {t('info.title')}
              </h2>

              <div className="space-y-4 mb-8">
                <div className="card p-4">
                  <h3 className="font-bold text-gray-900 mb-1">{t('info.email')}</h3>
                  <p className="text-gray-600 text-sm">info@mariposahouse.church</p>
                </div>

                <div className="card p-4">
                  <h3 className="font-bold text-gray-900 mb-1">{t('info.worshipTime')}</h3>
                  <p className="text-gray-600 text-sm">{t('info.worshipSchedule')}</p>
                </div>
              </div>

              {/* Access Info */}
              <div className="card p-6" id="access">
                <h3 className="font-bold text-gray-900 mb-4">{t('access.title')}</h3>
                <div className="bg-gray-100 rounded-lg h-40 flex items-center justify-center mb-4">
                  <span className="text-gray-500 text-sm">
                    {isJa ? '地図はお問い合わせ後にご案内します' : 'Location details provided after contact'}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">
                  {t('access.onlineDescription')}
                </p>
              </div>

              {/* Scripture */}
              <blockquote className="scripture-quote mt-8">
                <p className="text-gray-600 text-sm">
                  {t('scripture')}
                </p>
                <cite className="text-gray-500 text-sm not-italic mt-2 block">
                  — {t('scriptureRef')}
                </cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
