'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import type { QuestionnaireAnswers, CitizenshipStatus } from '@/lib/utils/router-logic';
import { useTranslation } from '@/lib/i18n/useTranslation';

export default function QuestionnairePage() {
  const router = useRouter();
  const { t } = useTranslation();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Partial<QuestionnaireAnswers>>({
    preferredLanguage: 'en'
  });

  const questions = [
    {
      id: 'citizenship',
      question: t('question.citizenship.title'),
      description: t('question.citizenship.description'),
      options: [
        { value: 'citizen', label: t('question.citizenship.citizen'), description: t('question.citizenship.citizen.desc') },
        { value: 'permanent_resident', label: t('question.citizenship.permanentResident'), description: t('question.citizenship.permanentResident.desc') },
        { value: 'daca', label: t('question.citizenship.daca'), description: t('question.citizenship.daca.desc') },
        { value: 'undocumented', label: t('question.citizenship.undocumented'), description: t('question.citizenship.undocumented.desc') },
        { value: 'other', label: t('question.citizenship.other'), description: t('question.citizenship.other.desc') }
      ]
    },
    {
      id: 'hasSSN',
      question: t('question.ssn.title'),
      description: t('question.ssn.description'),
      options: [
        { value: 'true', label: t('question.ssn.yes'), description: t('question.ssn.yes.desc') },
        { value: 'false', label: t('question.ssn.no'), description: t('question.ssn.no.desc') }
      ]
    },
    {
      id: 'nyHighSchool',
      question: t('question.nyHighSchool.title'),
      description: t('question.nyHighSchool.description'),
      options: [
        { value: 'true', label: t('question.nyHighSchool.yes'), description: t('question.nyHighSchool.yes.desc') },
        { value: 'false', label: t('question.nyHighSchool.no'), description: t('question.nyHighSchool.no.desc') }
      ]
    },
    {
      id: 'familySituation',
      question: t('question.familySituation.title'),
      description: t('question.familySituation.description'),
      options: [
        { value: 'parents', label: t('question.familySituation.parents'), description: t('question.familySituation.parents.desc') },
        { value: 'guardian', label: t('question.familySituation.guardian'), description: t('question.familySituation.guardian.desc') },
        { value: 'independent', label: t('question.familySituation.independent'), description: t('question.familySituation.independent.desc') },
        { value: 'homeless', label: t('question.familySituation.homeless'), description: t('question.familySituation.homeless.desc') }
      ]
    },
    {
      id: 'preferredLanguage',
      question: t('question.language.title'),
      description: t('question.language.description'),
      options: [
        { value: 'en', label: 'English' },
        { value: 'es', label: 'Español (Spanish)' },
        { value: 'zh', label: '中文 (Chinese)' },
        { value: 'bn', label: 'বাংলা (Bengali)' },
        { value: 'ar', label: 'العربية (Arabic)' },
        { value: 'ru', label: 'Русский (Russian)' },
        { value: 'ht', label: 'Kreyòl Ayisyen (Haitian Creole)' }
      ]
    }
  ];

  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswer = (value: string) => {
    const questionId = currentQ.id as keyof QuestionnaireAnswers;

    let processedValue: any = value;
    if (questionId === 'hasSSN' || questionId === 'nyHighSchool') {
      processedValue = value === 'true';
    }

    const newAnswers = {
      ...answers,
      [questionId]: processedValue
    };

    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Save to session storage and redirect to results
      sessionStorage.setItem('questionnaireAnswers', JSON.stringify(newAnswers));
      router.push('/results');
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    } else {
      router.push('/');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="mx-auto max-w-2xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-blue-700">{t('questionnaire.title')}</h1>
          <p className="mt-2 text-gray-600">{t('questionnaire.subtitle')}</p>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="mb-2 flex justify-between text-sm text-gray-600">
            <span>{t('questionnaire.question', { current: String(currentQuestion + 1), total: String(questions.length) })}</span>
            <span>{t('questionnaire.complete', { percent: String(Math.round(progress)) })}</span>
          </div>
          <Progress value={progress} />
        </div>

        {/* Question Card */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-2xl">{currentQ.question}</CardTitle>
            <CardDescription className="text-base">{currentQ.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {currentQ.options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleAnswer(option.value)}
                className="w-full rounded-lg border-2 border-gray-200 bg-white p-4 text-left transition-all hover:border-blue-500 hover:bg-blue-50 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <div className="font-semibold text-gray-900">{option.label}</div>
                {option.description && (
                  <div className="mt-1 text-sm text-gray-600">{option.description}</div>
                )}
              </button>
            ))}
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={handleBack}
          >
            {t('questionnaire.back')}
          </Button>
          <div className="text-sm text-gray-600">
            <p>{t('questionnaire.privacy')}</p>
          </div>
        </div>

        {/* Help Text */}
        <div className="mt-8 rounded-lg bg-blue-50 p-6 text-center">
          <p className="text-sm text-gray-700">
            <strong>{t('questionnaire.helpTitle')}</strong> {t('questionnaire.helpText')}
          </p>
        </div>
      </div>
    </div>
  );
}
