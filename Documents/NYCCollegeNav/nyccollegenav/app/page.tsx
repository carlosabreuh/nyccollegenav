import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Logo/Title */}
          <div className="mb-8 mt-8">
            <h1 className="text-4xl font-bold text-blue-700 sm:text-5xl">
              NYCCollegeNav
            </h1>
            <p className="mt-2 text-lg text-gray-600">
              Your guide to free money for college
            </p>
          </div>

          {/* Main Value Proposition */}
          <div className="mb-12 max-w-2xl">
            <h2 className="mb-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Need help paying for college?
            </h2>
            <p className="mb-6 text-xl text-gray-700">
              NYC students left <span className="font-bold text-orange-500">$226 million</span> in free financial aid unclaimed last year.
            </p>
            <p className="text-lg text-gray-600">
              We make it simple to get the money you deserve. No confusing forms. No stress. Just clear steps to unlock thousands in aid.
            </p>
          </div>

          {/* CTA Button */}
          <Link href="/questionnaire">
            <Button size="lg" className="mb-8 text-xl px-12 py-6">
              Get Started - It&apos;s Free!
            </Button>
          </Link>

          {/* Trust Indicators */}
          <div className="mb-12 flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-green-600" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>100% Free</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-green-600" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Private & Secure</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-green-600" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Takes 5 Minutes</span>
            </div>
          </div>

          {/* How It Works */}
          <div className="w-full mb-12">
            <h3 className="mb-8 text-2xl font-bold text-gray-900">
              How It Works
            </h3>
            <div className="grid gap-6 sm:grid-cols-3">
              <Card>
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-2xl font-bold text-blue-700">
                    1
                  </div>
                  <CardTitle className="text-xl">Answer 5 Simple Questions</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Tell us about your situation. No confusing terms or complicated forms.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-2xl font-bold text-blue-700">
                    2
                  </div>
                  <CardTitle className="text-xl">Get Your Personalized Plan</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    We&apos;ll tell you exactly which aid programs you qualify for and how much money you can get.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-2xl font-bold text-blue-700">
                    3
                  </div>
                  <CardTitle className="text-xl">Complete Your Application</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Follow clear step-by-step instructions. Get help anytime with our AI assistant.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* What You Can Get */}
          <div className="w-full mb-12">
            <h3 className="mb-8 text-2xl font-bold text-gray-900">
              What You Can Get
            </h3>
            <div className="grid gap-6 sm:grid-cols-2">
              <Card className="border-green-200 bg-green-50">
                <CardHeader>
                  <CardTitle className="text-2xl text-green-700">Up to $7,395</CardTitle>
                  <CardDescription className="text-base text-gray-700">
                    Federal Pell Grant
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Free money you never have to pay back. For US citizens and permanent residents.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-green-200 bg-green-50">
                <CardHeader>
                  <CardTitle className="text-2xl text-green-700">Up to $5,665</CardTitle>
                  <CardDescription className="text-base text-gray-700">
                    NY State TAP Grant
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Additional free money from New York State. Available through FAFSA or DREAM Act.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Who This Is For */}
          <div className="w-full mb-12 bg-blue-50 rounded-xl p-8">
            <h3 className="mb-6 text-2xl font-bold text-gray-900">
              This Is For You If...
            </h3>
            <div className="grid gap-4 text-left sm:grid-cols-2">
              <div className="flex gap-3">
                <svg className="h-6 w-6 flex-shrink-0 text-blue-700" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-700">You&apos;re a NYC high school student planning for college</span>
              </div>
              <div className="flex gap-3">
                <svg className="h-6 w-6 flex-shrink-0 text-blue-700" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-700">You need help figuring out financial aid</span>
              </div>
              <div className="flex gap-3">
                <svg className="h-6 w-6 flex-shrink-0 text-blue-700" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-700">FAFSA seems too complicated or scary</span>
              </div>
              <div className="flex gap-3">
                <svg className="h-6 w-6 flex-shrink-0 text-blue-700" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-700">You&apos;re a first-generation college student</span>
              </div>
              <div className="flex gap-3">
                <svg className="h-6 w-6 flex-shrink-0 text-blue-700" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-700">You or your family are immigrants</span>
              </div>
              <div className="flex gap-3">
                <svg className="h-6 w-6 flex-shrink-0 text-blue-700" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-700">You want to go to college but worry about cost</span>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <Link href="/questionnaire">
              <Button size="lg" className="text-xl px-12 py-6">
                Start Your Journey Now
              </Button>
            </Link>
            <p className="mt-4 text-sm text-gray-600">
              Your information is private and secure. We never share your data.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t border-gray-200 bg-white py-8">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="mb-6">
            <p className="text-sm font-semibold text-gray-700 mb-3">Quick Resources</p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link href="/css-profile" className="text-sm text-blue-700 hover:text-blue-800 underline">
                CSS Profile Checklist
              </Link>
            </div>
          </div>
          <p className="text-sm text-gray-600">NYCCollegeNav - Helping NYC students unlock financial aid</p>
          <p className="mt-2 text-sm text-gray-600">Questions? We&apos;re here to help every step of the way.</p>
        </div>
      </footer>
    </div>
  );
}
