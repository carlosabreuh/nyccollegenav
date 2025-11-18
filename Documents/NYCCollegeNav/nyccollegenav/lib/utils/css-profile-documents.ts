// CSS Profile Document Checklist
// Simplified guide for students applying to private colleges

export interface DocumentItem {
  id: string;
  name: string;
  description: string;
  required: boolean;
  applicableIf?: string;
}

export interface DocumentCategory {
  category: string;
  description: string;
  documents: DocumentItem[];
}

export const cssProfileDocuments: DocumentCategory[] = [
  {
    category: 'Tax Documents',
    description: 'Federal tax returns and related forms',
    documents: [
      {
        id: 'parent_tax_returns',
        name: 'Parent(s) Federal Tax Returns',
        description: 'Complete tax return with ALL schedules from most recent year',
        required: true
      },
      {
        id: 'student_tax_returns',
        name: 'Student Tax Returns',
        description: 'Your tax return if you filed one',
        required: false,
        applicableIf: 'You filed taxes'
      },
      {
        id: 'parent_w2',
        name: 'Parent(s) W-2 Forms',
        description: 'All W-2 forms showing wages and taxes withheld',
        required: true
      },
      {
        id: 'student_w2',
        name: 'Student W-2 Forms',
        description: 'Your W-2 if you worked',
        required: false,
        applicableIf: 'You have a job'
      },
      {
        id: 'business_tax_returns',
        name: 'Business Tax Returns',
        description: 'Forms 1065, 1120, or 1120S if family owns a business',
        required: false,
        applicableIf: 'Family owns a business'
      },
      {
        id: 'schedule_k1',
        name: 'Schedule K-1',
        description: 'Partnership or S Corporation income',
        required: false,
        applicableIf: 'Receive partnership income'
      }
    ]
  },
  {
    category: 'Income & Benefits',
    description: 'Records of all income including untaxed benefits',
    documents: [
      {
        id: 'pay_stubs',
        name: 'Recent Pay Stubs',
        description: 'Year-to-date earnings for current year',
        required: true
      },
      {
        id: 'social_security',
        name: 'Social Security Benefits',
        description: 'SSA-1099 or benefit statements',
        required: false,
        applicableIf: 'Receive Social Security'
      },
      {
        id: 'veterans_benefits',
        name: 'Veterans Benefits',
        description: 'VA benefit statements',
        required: false,
        applicableIf: 'Receive VA benefits'
      },
      {
        id: 'child_support',
        name: 'Child Support Records',
        description: 'Documentation of child support received',
        required: false,
        applicableIf: 'Receive child support'
      },
      {
        id: 'disability',
        name: 'Disability Benefits',
        description: 'Disability income statements',
        required: false,
        applicableIf: 'Receive disability benefits'
      }
    ]
  },
  {
    category: 'Bank & Asset Records',
    description: 'Current balances and statements',
    documents: [
      {
        id: 'checking_savings',
        name: 'Bank Statements',
        description: 'Checking and savings account statements (most recent)',
        required: true
      },
      {
        id: 'investments',
        name: 'Investment Statements',
        description: 'Stocks, bonds, mutual funds statements',
        required: false,
        applicableIf: 'Have investments'
      },
      {
        id: '529_plans',
        name: '529 College Savings Plans',
        description: 'Current value of any college savings plans',
        required: false,
        applicableIf: 'Have college savings'
      },
      {
        id: 'retirement_accounts',
        name: 'Retirement Account Statements',
        description: '401(k), IRA, pension current values',
        required: false,
        applicableIf: 'Have retirement accounts'
      },
      {
        id: 'home_value',
        name: 'Home Value Information',
        description: 'Current market value and mortgage balance',
        required: false,
        applicableIf: 'Own a home'
      },
      {
        id: 'business_assets',
        name: 'Business Assets',
        description: 'Business ownership records and value',
        required: false,
        applicableIf: 'Own a business'
      }
    ]
  },
  {
    category: 'Personal Information',
    description: 'Required ID and family details',
    documents: [
      {
        id: 'ssn',
        name: 'Social Security Numbers',
        description: 'For student and both parents',
        required: true
      },
      {
        id: 'drivers_license',
        name: 'Driver License Numbers',
        description: 'State ID for parents',
        required: true
      },
      {
        id: 'birth_dates',
        name: 'Birth Dates',
        description: 'For all family members',
        required: true
      },
      {
        id: 'family_size',
        name: 'Family Information',
        description: 'Number of people in household and in college',
        required: true
      }
    ]
  },
  {
    category: 'Special Circumstances',
    description: 'Additional documents if applicable',
    documents: [
      {
        id: 'divorce_decree',
        name: 'Divorce Decree',
        description: 'Legal separation or divorce documents',
        required: false,
        applicableIf: 'Parents are divorced or separated'
      },
      {
        id: 'noncustodial_parent',
        name: 'Noncustodial Parent Profile',
        description: 'Separate CSS Profile may be required',
        required: false,
        applicableIf: 'Parents are divorced'
      },
      {
        id: 'translated_documents',
        name: 'Document Translations',
        description: 'All non-English documents translated',
        required: false,
        applicableIf: 'International student'
      }
    ]
  }
];

export const cssProfileInfo = {
  cost: {
    firstSchool: 25,
    additionalSchools: 16
  },
  timeline: '45-60 minutes to complete',
  requirements: [
    'College Board account (same as SAT if you have one)',
    'Credit or debit card for application fee',
    'Parent email addresses',
    'All documents listed in checklist'
  ],
  importantNotes: [
    'Use tax information from 2 years ago (e.g., 2024 taxes for 2026-27 aid)',
    'CSS Profile is for PRIVATE colleges - public schools use FAFSA only',
    'After submission, you may need to upload documents through IDOC',
    'Tax returns must be signed with pen (not electronic signature)',
    'Both parents must complete if divorced/separated'
  ],
  helpfulTips: [
    'Gather all documents before starting - you cannot save and return easily',
    'Have a parent with you while completing',
    'Use estimates if you don\'t have exact figures (you can correct later)',
    'Take your time - accuracy is important',
    'Keep a copy of your completed profile for your records'
  ]
};

// Helper function to get documents by family situation
export function getApplicableDocuments(
  situation: {
    hasJob?: boolean;
    parentsDivorced?: boolean;
    ownsBusiness?: boolean;
    ownsHome?: boolean;
    hasInvestments?: boolean;
    receivesChildSupport?: boolean;
    international?: boolean;
  }
): DocumentCategory[] {
  return cssProfileDocuments.map(category => ({
    ...category,
    documents: category.documents.filter(doc => {
      if (doc.required) return true;

      // Check if document applies to student's situation
      if (doc.applicableIf) {
        if (doc.applicableIf.includes('job') && situation.hasJob) return true;
        if (doc.applicableIf.includes('divorced') && situation.parentsDivorced) return true;
        if (doc.applicableIf.includes('business') && situation.ownsBusiness) return true;
        if (doc.applicableIf.includes('home') && situation.ownsHome) return true;
        if (doc.applicableIf.includes('investments') && situation.hasInvestments) return true;
        if (doc.applicableIf.includes('child support') && situation.receivesChildSupport) return true;
        if (doc.applicableIf.includes('International') && situation.international) return true;
      }

      return false;
    })
  })).filter(category => category.documents.length > 0);
}
