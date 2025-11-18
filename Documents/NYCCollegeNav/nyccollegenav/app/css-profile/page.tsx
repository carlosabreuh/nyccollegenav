'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cssProfileDocuments, cssProfileInfo } from '@/lib/utils/css-profile-documents';

export default function CSSProfilePage() {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const newChecked = new Set(checkedItems);
    if (newChecked.has(id)) {
      newChecked.delete(id);
    } else {
      newChecked.add(id);
    }
    setCheckedItems(newChecked);
  };

  const totalDocs = cssProfileDocuments.reduce(
    (sum, category) => sum + category.documents.length,
    0
  );
  const checkedCount = checkedItems.size;
  const progress = (checkedCount / totalDocs) * 100;

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <Link href="/" className="text-blue-700 hover:text-blue-800 flex items-center gap-2 mb-4">
            <svg className="h-5 w-5" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-blue-700 mb-2">CSS Profile Document Checklist</h1>
          <p className="text-lg text-gray-600">
            Everything you need to complete the CSS Profile for private college financial aid
          </p>
        </div>

        {/* Progress Card */}
        <Card className="mb-8 border-2 border-blue-200">
          <CardHeader className="bg-blue-50">
            <CardTitle className="text-2xl">Your Progress</CardTitle>
            <CardDescription className="text-base">
              Check off items as you gather them
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="mb-4">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>{checkedCount} of {totalDocs} documents collected</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div className="h-4 w-full overflow-hidden rounded-full bg-gray-200">
                <div
                  className="h-full bg-green-600 transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
            {progress === 100 && (
              <div className="mt-4 rounded-lg bg-green-50 border-2 border-green-200 p-4">
                <p className="text-green-800 font-semibold flex items-center gap-2">
                  <svg className="h-5 w-5" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Great! You have everything you need to start your CSS Profile!
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Important Info */}
        <Card className="mb-8 bg-yellow-50 border-2 border-yellow-200">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <svg className="h-6 w-6 text-yellow-600" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
              </svg>
              Important Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-gray-900">Application Fee:</p>
                <p className="text-gray-700">${cssProfileInfo.cost.firstSchool} for first school, ${cssProfileInfo.cost.additionalSchools} for each additional school</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Time Needed:</p>
                <p className="text-gray-700">{cssProfileInfo.timeline}</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">Key Notes:</p>
                <ul className="space-y-1">
                  {cssProfileInfo.importantNotes.map((note, index) => (
                    <li key={index} className="flex gap-2 text-gray-700">
                      <span className="text-yellow-600 flex-shrink-0">•</span>
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Document Checklist */}
        <div className="space-y-6 mb-8">
          {cssProfileDocuments.map((category, categoryIndex) => (
            <Card key={categoryIndex}>
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">{category.category}</CardTitle>
                <CardDescription className="text-base">{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {category.documents.map((doc) => (
                    <div key={doc.id} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <input
                        type="checkbox"
                        id={doc.id}
                        checked={checkedItems.has(doc.id)}
                        onChange={() => toggleItem(doc.id)}
                        className="mt-1 h-5 w-5 rounded border-gray-300 text-blue-700 focus:ring-2 focus:ring-blue-700 cursor-pointer"
                      />
                      <label htmlFor={doc.id} className="flex-1 cursor-pointer">
                        <div className="flex items-center gap-2">
                          <p className="font-semibold text-gray-900">{doc.name}</p>
                          {doc.required && (
                            <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full font-medium">
                              Required
                            </span>
                          )}
                          {doc.applicableIf && (
                            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-medium">
                              If applicable
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{doc.description}</p>
                        {doc.applicableIf && (
                          <p className="text-xs text-gray-500 mt-1 italic">
                            Needed if: {doc.applicableIf}
                          </p>
                        )}
                      </label>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Helpful Tips */}
        <Card className="mb-8 bg-blue-50 border-2 border-blue-200">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <svg className="h-6 w-6 text-blue-700" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
              </svg>
              Helpful Tips
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {cssProfileInfo.helpfulTips.map((tip, index) => (
                <li key={index} className="flex gap-3">
                  <svg className="h-5 w-5 flex-shrink-0 text-blue-700 mt-0.5" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">{tip}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex gap-4 mb-8">
          <a
            href="https://cssprofile.collegeboard.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
          >
            <Button size="lg" className="w-full">
              Start CSS Profile Application
              <svg className="h-4 w-4 ml-2" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </Button>
          </a>
          <Button variant="outline" onClick={() => window.print()}>
            Print Checklist
          </Button>
        </div>

        {/* Footer Info */}
        <Card className="bg-white">
          <CardContent className="pt-6">
            <p className="text-sm text-gray-600 text-center">
              Need help? Contact your school counselor or use our{' '}
              <Link href="/chat" className="text-blue-700 hover:text-blue-800 underline">
                AI Assistant
              </Link>
              {' '}for questions about CSS Profile.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
