'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useTranslation } from '@/lib/i18n/useTranslation';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen relative overflow-hidden bg-white">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-6000"></div>
      </div>

      {/* Hero Section */}
      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Main Value Proposition */}
          <section className="mb-12 max-w-3xl mt-8" aria-labelledby="hero-heading">
            <div className="mb-6 inline-block rounded-full bg-gradient-to-r from-blue-600/10 to-purple-600/10 px-4 py-2 text-sm font-medium text-blue-700" role="text">
              {t('home.hero.badge')}
            </div>
            <h1 id="hero-heading" className="mb-6 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
              {t('home.hero.title')} <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{t('home.hero.titleHighlight')}</span>
            </h1>
            <p className="mb-6 text-xl text-gray-700 sm:text-2xl">
              {t('home.hero.subtitle', { amount: t('home.hero.statistic') })}
            </p>
            <p className="text-lg text-gray-600 mb-10">
              {t('home.hero.description')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8" role="group" aria-label="Primary actions">
              <Link href="/questionnaire">
                <Button
                  size="lg"
                  className="text-lg px-10 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300"
                  aria-label="Get started with free financial aid questionnaire"
                >
                  {t('home.cta.getStarted')}
                  <svg className="ml-2 h-5 w-5" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Button>
              </Link>
              <Link href="/css-profile">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-10 py-6 border-2 hover:bg-gray-50 transition-all duration-300"
                  aria-label="View CSS Profile document guide"
                >
                  {t('home.cta.cssProfileGuide')}
                </Button>
              </Link>
            </div>
          </section>

          {/* Trust Indicators */}
          <section className="mb-12 flex flex-wrap justify-center gap-6 text-sm text-gray-600" aria-label="Key benefits">
            <div className="flex items-center gap-2" role="text">
              <svg className="h-5 w-5 text-green-600" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{t('home.trust.free')}</span>
            </div>
            <div className="flex items-center gap-2" role="text">
              <svg className="h-5 w-5 text-green-600" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{t('home.trust.secure')}</span>
            </div>
            <div className="flex items-center gap-2" role="text">
              <svg className="h-5 w-5 text-green-600" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{t('home.trust.time')}</span>
            </div>
          </section>

          {/* How It Works */}
          <section className="w-full mb-16" aria-labelledby="how-it-works-heading">
            <h2 className="mb-4 text-sm font-semibold text-blue-600 uppercase tracking-wide" aria-label="How it works section">
              {t('home.howItWorks.title')}
            </h2>
            <h3 id="how-it-works-heading" className="mb-12 text-3xl font-bold text-gray-900 sm:text-4xl">
              {t('home.howItWorks.subtitle')}
            </h3>
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur">
                <CardHeader>
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 text-2xl font-bold text-white shadow-lg">
                    1
                  </div>
                  <CardTitle className="text-xl">{t('home.howItWorks.step1.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-600">
                    {t('home.howItWorks.step1.description')}
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur">
                <CardHeader>
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 text-2xl font-bold text-white shadow-lg">
                    2
                  </div>
                  <CardTitle className="text-xl">{t('home.howItWorks.step2.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-600">
                    {t('home.howItWorks.step2.description')}
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur">
                <CardHeader>
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-600 to-orange-600 text-2xl font-bold text-white shadow-lg">
                    3
                  </div>
                  <CardTitle className="text-xl">{t('home.howItWorks.step3.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-600">
                    {t('home.howItWorks.step3.description')}
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* What You Can Get */}
          <section className="w-full mb-16" aria-labelledby="opportunities-heading">
            <h2 className="mb-4 text-sm font-semibold text-blue-600 uppercase tracking-wide" aria-label="Financial aid opportunities section">
              {t('home.opportunities.title')}
            </h2>
            <h3 id="opportunities-heading" className="mb-12 text-3xl font-bold text-gray-900 sm:text-4xl">
              {t('home.opportunities.subtitle')}
            </h3>
            <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
              <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-emerald-50">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    {t('home.opportunities.pell.amount')}
                  </CardTitle>
                  <CardDescription className="text-lg font-semibold text-gray-900">
                    {t('home.opportunities.pell.title')}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    {t('home.opportunities.pell.description')}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    {t('home.opportunities.tap.amount')}
                  </CardTitle>
                  <CardDescription className="text-lg font-semibold text-gray-900">
                    {t('home.opportunities.tap.title')}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    {t('home.opportunities.tap.description')}
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Who This Is For */}
          <section className="w-full mb-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 sm:p-12 text-white shadow-2xl" aria-labelledby="who-we-help-heading">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide opacity-90" aria-label="Who we help section">
              {t('home.whoWeHelp.title')}
            </h2>
            <h3 id="who-we-help-heading" className="mb-8 text-3xl font-bold sm:text-4xl">
              {t('home.whoWeHelp.subtitle')}
            </h3>
            <div className="grid gap-4 text-left sm:grid-cols-2">
              <div className="flex gap-3">
                <svg className="h-6 w-6 flex-shrink-0 mt-1" fill="none" strokeWidth="2.5" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-lg">{t('home.whoWeHelp.item1')}</span>
              </div>
              <div className="flex gap-3">
                <svg className="h-6 w-6 flex-shrink-0 mt-1" fill="none" strokeWidth="2.5" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-lg">{t('home.whoWeHelp.item2')}</span>
              </div>
              <div className="flex gap-3">
                <svg className="h-6 w-6 flex-shrink-0 mt-1" fill="none" strokeWidth="2.5" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-lg">{t('home.whoWeHelp.item3')}</span>
              </div>
              <div className="flex gap-3">
                <svg className="h-6 w-6 flex-shrink-0 mt-1" fill="none" strokeWidth="2.5" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-lg">{t('home.whoWeHelp.item4')}</span>
              </div>
              <div className="flex gap-3">
                <svg className="h-6 w-6 flex-shrink-0 mt-1" fill="none" strokeWidth="2.5" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-lg">{t('home.whoWeHelp.item5')}</span>
              </div>
              <div className="flex gap-3">
                <svg className="h-6 w-6 flex-shrink-0 mt-1" fill="none" strokeWidth="2.5" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-lg">{t('home.whoWeHelp.item6')}</span>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="text-center" aria-labelledby="final-cta-heading">
            <h3 id="final-cta-heading" className="mb-6 text-3xl font-bold text-gray-900">
              {t('home.finalCTA.title')}
            </h3>
            <Link href="/questionnaire">
              <Button size="lg" className="text-xl px-16 py-7 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-xl hover:shadow-2xl transition-all duration-300">
                {t('home.finalCTA.button')}
                <svg className="ml-2 h-6 w-6" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Button>
            </Link>
            <p className="mt-4 text-sm text-gray-600">
              {t('home.finalCTA.privacy')}
            </p>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative mt-24 border-t border-gray-200 bg-white/80 backdrop-blur py-12" role="contentinfo">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 sm:grid-cols-3 mb-8">
            <div>
              <h4 className="font-bold text-gray-900 mb-4">NYCCollegeNav</h4>
              <p className="text-sm text-gray-600">
                {t('footer.description')}
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">{t('footer.quickLinks')}</h4>
              <div className="flex flex-col gap-2">
                <Link href="/questionnaire" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                  {t('header.getStarted')}
                </Link>
                <Link href="/css-profile" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                  {t('home.cta.cssProfileGuide')}
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">{t('footer.resources')}</h4>
              <div className="flex flex-col gap-2">
                <a href="https://studentaid.gov/h/apply-for-aid/fafsa" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                  {t('footer.fafsa')}
                </a>
                <a href="https://www.hesc.ny.gov/dream/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                  {t('footer.dreamAct')}
                </a>
              </div>
            </div>
          </div>
          <div className="text-center pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              {t('footer.copyright')}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
