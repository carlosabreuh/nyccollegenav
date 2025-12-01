'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { determineApplication, type QuestionnaireAnswers, type ApplicationRecommendation } from '@/lib/utils/router-logic';
import { useTranslation } from '@/lib/i18n/useTranslation';

export default function ResultsPage() {
  const router = useRouter();
  const { t } = useTranslation();
  const [recommendation, setRecommendation] = useState<ApplicationRecommendation | null>(null);
  const [answers, setAnswers] = useState<QuestionnaireAnswers | null>(null);

  useEffect(() => {
    const savedAnswers = sessionStorage.getItem('questionnaireAnswers');
    if (!savedAnswers) {
      router.push('/questionnaire');
      return;
    }

    const parsedAnswers = JSON.parse(savedAnswers) as QuestionnaireAnswers;
    setAnswers(parsedAnswers);
    const result = determineApplication(parsedAnswers);
    setRecommendation(result);
  }, [router]);

  if (!recommendation || !answers) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-700 border-t-transparent mx-auto"></div>
          <p className="mt-4 text-gray-600">{t('results.loading')}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-blue-700">{t('results.title')}</h1>
        </div>

        {/* Success Message */}
        <div className="mb-8 rounded-xl bg-green-50 border-2 border-green-200 p-6 text-center">
          <div className="mb-2 text-4xl">✓</div>
          <h2 className="text-2xl font-bold text-gray-900">{t('results.success')}</h2>
          <p className="mt-2 text-lg text-gray-700">
            {t('results.foundProgram')}
          </p>
        </div>

        {/* Main Recommendation Card */}
        <Card className="mb-8 border-2 border-blue-200">
          <CardHeader className="bg-blue-50">
            <CardTitle className="text-3xl text-blue-700">{recommendation.title}</CardTitle>
            <CardDescription className="text-lg text-gray-700 mt-2">
              {recommendation.description}
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            {/* Estimated Aid */}
            <div className="mb-6 text-center rounded-lg bg-green-50 p-6">
              <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                {t('results.youCouldReceive')}
              </p>
              <p className="text-5xl font-bold text-green-600 mt-2">
                ${recommendation.estimatedAid.toLocaleString()}
              </p>
              <p className="text-gray-600 mt-2">{t('results.inFreeAid')}</p>
            </div>

            {/* Timeline */}
            <div className="mb-6 flex items-center gap-3 rounded-lg bg-blue-50 p-4">
              <svg className="h-6 w-6 flex-shrink-0 text-blue-700" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <p className="font-semibold text-gray-900">{t('results.timeToComplete')}</p>
                <p className="text-gray-600">{recommendation.timeline}</p>
              </div>
            </div>

            {/* Next Steps */}
            <div className="mb-6">
              <h3 className="mb-4 text-xl font-bold text-gray-900">{t('results.nextSteps')}</h3>
              <div className="space-y-3">
                {recommendation.nextSteps.map((step, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-700 leading-relaxed">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Programs */}
            {recommendation.additionalPrograms && recommendation.additionalPrograms.length > 0 && (
              <div className="rounded-lg border-2 border-yellow-200 bg-yellow-50 p-4">
                <p className="font-semibold text-gray-900 mb-2">
                  {t('results.alsoQualify')}
                </p>
                <ul className="space-y-2">
                  {recommendation.additionalPrograms.map((program, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <svg className="h-4 w-4 flex-shrink-0 text-yellow-600" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <a
                        href={program.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 hover:text-blue-800 underline decoration-1 hover:decoration-2 transition-all flex items-center gap-1"
                      >
                        {program.name}
                        <svg className="h-3 w-3" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="space-y-4 mb-8">
          <Link href="/dashboard" className="block">
            <Button size="lg" className="w-full text-lg py-6">
              {t('results.startApplication')}
            </Button>
          </Link>
          <div className="flex gap-4">
            <Link href="/chat" className="flex-1">
              <Button variant="outline" className="w-full">
                {t('results.getHelp')}
              </Button>
            </Link>
            <Link href="/questionnaire">
              <Button variant="ghost">
                {t('results.startOver')}
              </Button>
            </Link>
          </div>
        </div>

        {/* Important Information */}
        <Card className="bg-white">
          <CardHeader>
            <CardTitle className="text-xl">{t('results.importantInfo')}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-gray-600">
            <div className="flex gap-3">
              <svg className="h-5 w-5 flex-shrink-0 text-blue-700" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p>
                <strong>{t('results.privacy.title')}</strong> {t('results.privacy.text')}
              </p>
            </div>
            <div className="flex gap-3">
              <svg className="h-5 w-5 flex-shrink-0 text-blue-700" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p>
                <strong>{t('results.freeMoney.title')}</strong> {t('results.freeMoney.text')}
              </p>
            </div>
            <div className="flex gap-3">
              <svg className="h-5 w-5 flex-shrink-0 text-blue-700" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p>
                <strong>{t('results.support.title')}</strong> {t('results.support.text')}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-gray-600">
          <p>{t('results.footer')}</p>
        </div>
      </div>
    </div>
  );
}
