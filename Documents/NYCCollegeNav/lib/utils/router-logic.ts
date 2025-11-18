// Decision tree logic for determining which financial aid application to recommend

export type CitizenshipStatus = 'citizen' | 'permanent_resident' | 'daca' | 'undocumented' | 'other';
export type HousingStatus = 'stable' | 'temporary' | 'shelter' | 'doubled_up';

export interface QuestionnaireAnswers {
  citizenship: CitizenshipStatus;
  hasSSN: boolean;
  nyHighSchool: boolean;
  familySituation: 'parents' | 'guardian' | 'independent' | 'homeless';
  preferredLanguage: string;
  familyIncome?: number;
}

export interface ApplicationRecommendation {
  type: 'FAFSA' | 'DREAM_ACT' | 'TAP' | 'EXCELSIOR';
  title: string;
  description: string;
  estimatedAid: number;
  timeline: string;
  nextSteps: string[];
  additionalPrograms?: string[];
}

export function determineApplication(answers: QuestionnaireAnswers): ApplicationRecommendation {
  // Undocumented students with NY high school diploma -> DREAM Act
  if (answers.citizenship === 'undocumented' && answers.nyHighSchool) {
    return {
      type: 'DREAM_ACT',
      title: 'NYS DREAM Act Application',
      description: 'You qualify for the New York State DREAM Act! This program provides state financial aid to students regardless of immigration status who attended a NY high school.',
      estimatedAid: 5665,
      timeline: '30-45 minutes to complete',
      nextSteps: [
        'Gather your NY high school transcripts',
        'Prepare proof of NY residency (utility bill, lease, etc.)',
        'Complete the affidavit form',
        'Submit your application online'
      ],
      additionalPrograms: ['NYS TAP', 'Excelsior Scholarship']
    };
  }

  // Citizens or permanent residents -> FAFSA
  if (answers.citizenship === 'citizen' || answers.citizenship === 'permanent_resident') {
    const estimatedPell = answers.familyIncome && answers.familyIncome < 30000 ? 7395 : 5000;
    const estimatedTap = 5665;
    const totalAid = estimatedPell + estimatedTap;

    return {
      type: 'FAFSA',
      title: 'FAFSA (Free Application for Federal Student Aid)',
      description: 'You qualify for federal financial aid! FAFSA is the main application for federal grants, work-study, and loans. Completing FAFSA also qualifies you for New York State aid.',
      estimatedAid: totalAid,
      timeline: '45-60 minutes to complete',
      nextSteps: [
        'Create your FSA ID (like a username and password)',
        'Gather your Social Security Number',
        'Get your parents\' or your tax returns',
        'Collect W-2 forms and bank statements',
        'Complete the online application'
      ],
      additionalPrograms: ['NYS TAP', 'Federal Pell Grant', 'Work-Study Programs']
    };
  }

  // DACA students
  if (answers.citizenship === 'daca') {
    return {
      type: 'DREAM_ACT',
      title: 'NYS DREAM Act Application',
      description: 'As a DACA recipient, you qualify for the NYS DREAM Act! This provides access to state financial aid for college.',
      estimatedAid: 5665,
      timeline: '30-45 minutes to complete',
      nextSteps: [
        'Prepare your DACA documentation',
        'Gather NY residency proof',
        'Complete the DREAM Act application',
        'Apply for additional scholarships'
      ],
      additionalPrograms: ['NYS TAP', 'Private Scholarships']
    };
  }

  // Default fallback
  return {
    type: 'FAFSA',
    title: 'Financial Aid Application',
    description: 'Based on your situation, we recommend starting with FAFSA. You may also qualify for state aid programs.',
    estimatedAid: 8000,
    timeline: '45-60 minutes to complete',
    nextSteps: [
      'Talk to your school counselor',
      'Review your documentation',
      'Explore all available options',
      'Start your application'
    ]
  };
}

export function calculatePotentialAid(userData: {
  citizenship: CitizenshipStatus;
  familyIncome?: number;
  nyResident: boolean;
  firstGeneration?: boolean;
}): number {
  let totalAid = 0;

  // Federal Pell Grant estimate
  if (userData.citizenship === 'citizen' || userData.citizenship === 'permanent_resident') {
    if (userData.familyIncome && userData.familyIncome < 30000) {
      totalAid += 7395; // Max Pell
    } else if (userData.familyIncome && userData.familyIncome < 60000) {
      totalAid += 4000; // Partial Pell
    }
  }

  // NYS TAP estimate
  if (userData.nyResident) {
    totalAid += 5665; // Max TAP
  }

  // First-generation bonus
  if (userData.firstGeneration) {
    totalAid += 1000; // Typical first-gen scholarships
  }

  return totalAid;
}
