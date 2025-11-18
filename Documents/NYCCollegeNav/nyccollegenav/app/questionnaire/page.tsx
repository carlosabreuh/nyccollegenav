'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import type { QuestionnaireAnswers, CitizenshipStatus } from '@/lib/utils/router-logic';

export default function QuestionnairePage() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Partial<QuestionnaireAnswers>>({
    preferredLanguage: 'en'
  });

  const questions = [
    {
      id: 'citizenship',
      question: 'What is your citizenship or immigration status?',
      description: 'This helps us find the right financial aid programs for you. Your information is private.',
      options: [
        { value: 'citizen', label: 'US Citizen', description: 'Born in the US or naturalized citizen' },
        { value: 'permanent_resident', label: 'Permanent Resident', description: 'Have a Green Card' },
        { value: 'daca', label: 'DACA Recipient', description: 'Deferred Action for Childhood Arrivals' },
        { value: 'undocumented', label: 'Undocumented', description: 'No current legal status' },
        { value: 'other', label: 'Other Status', description: 'Visa holder or other status' }
      ]
    },
    {
      id: 'hasSSN',
      question: 'Do you have a Social Security Number?',
      description: 'Some aid programs require this, but not all.',
      options: [
        { value: 'true', label: 'Yes', description: 'I have a Social Security Number' },
        { value: 'false', label: 'No', description: 'I do not have a Social Security Number' }
      ]
    },
    {
      id: 'nyHighSchool',
      question: 'Did you attend or are you currently attending a New York high school?',
      description: 'NY State offers special programs for NY high school students.',
      options: [
        { value: 'true', label: 'Yes', description: 'I attend or graduated from a NY high school' },
        { value: 'false', label: 'No', description: 'I attend or graduated from a school outside NY' }
      ]
    },
    {
      id: 'familySituation',
      question: 'What is your current living situation?',
      description: 'This helps us understand what documents you might need.',
      options: [
        { value: 'parents', label: 'Living with Parents', description: 'I live with one or both parents' },
        { value: 'guardian', label: 'Living with Guardian', description: 'I live with a legal guardian' },
        { value: 'independent', label: 'Living Independently', description: 'I live on my own or with roommates' },
        { value: 'homeless', label: 'Experiencing Homelessness', description: 'Shelter, temporary housing, or unstable housing' }
      ]
    },
    {
      id: 'preferredLanguage',
      question: 'What language do you prefer?',
      description: 'We can provide help in your preferred language.',
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
          <h1 className="text-3xl font-bold text-blue-700">NYCCollegeNav</h1>
          <p className="mt-2 text-gray-600">Find your path to financial aid</p>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="mb-2 flex justify-between text-sm text-gray-600">
            <span>Question {currentQuestion + 1} of {questions.length}</span>
            <span>{Math.round(progress)}% Complete</span>
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
            Back
          </Button>
          <div className="text-sm text-gray-600">
            <p>Your data is private and secure</p>
          </div>
        </div>

        {/* Help Text */}
        <div className="mt-8 rounded-lg bg-blue-50 p-6 text-center">
          <p className="text-sm text-gray-700">
            <strong>Need help?</strong> These questions help us match you with the right financial aid programs.
            There are no wrong answers - just choose what fits your situation best.
          </p>
        </div>
      </div>
    </div>
  );
}
