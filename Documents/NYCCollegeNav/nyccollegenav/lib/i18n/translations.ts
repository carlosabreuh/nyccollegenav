import { Language } from './LanguageContext';

export type TranslationKey = keyof typeof translations.en;

export const translations = {
  en: {
    // Header
    'header.home': 'Home',
    'header.getStarted': 'Get Started',
    'header.cssProfile': 'CSS Profile',
    'header.resources': 'Resources',
    'header.skipToMain': 'Skip to main content',

    // Home Page - Hero
    'home.hero.badge': 'Helping NYC Students Access Financial Aid',
    'home.hero.title': 'Need help paying for',
    'home.hero.titleHighlight': 'college?',
    'home.hero.statistic': '$226 million',
    'home.hero.subtitle': 'NYC students left {amount} in free financial aid unclaimed last year.',
    'home.hero.description': 'We make it simple to get the money you deserve. No confusing forms. No stress. Just clear steps to unlock thousands in aid.',

    // Home Page - CTA
    'home.cta.getStarted': "Get Started - It's Free!",
    'home.cta.cssProfileGuide': 'CSS Profile Guide',

    // Home Page - Trust Indicators
    'home.trust.free': '100% Free',
    'home.trust.secure': 'Private & Secure',
    'home.trust.time': 'Takes 5 Minutes',

    // Home Page - How It Works
    'home.howItWorks.title': 'How It Works',
    'home.howItWorks.subtitle': 'Three Simple Steps to Your Financial Aid',
    'home.howItWorks.step1.title': 'Answer 5 Simple Questions',
    'home.howItWorks.step1.description': 'Tell us about your situation. No confusing terms or complicated forms.',
    'home.howItWorks.step2.title': 'Get Your Personalized Plan',
    'home.howItWorks.step2.description': "We'll tell you exactly which aid programs you qualify for and how much money you can get.",
    'home.howItWorks.step3.title': 'Complete Your Application',
    'home.howItWorks.step3.description': 'Follow clear step-by-step instructions. Get help anytime with our AI assistant.',

    // Home Page - Financial Aid Opportunities
    'home.opportunities.title': 'Financial Aid Opportunities',
    'home.opportunities.subtitle': 'Unlock Thousands in Free Money',
    'home.opportunities.pell.amount': 'Up to $7,395',
    'home.opportunities.pell.title': 'Federal Pell Grant',
    'home.opportunities.pell.description': 'Free money you never have to pay back. For US citizens and permanent residents.',
    'home.opportunities.tap.amount': 'Up to $5,665',
    'home.opportunities.tap.title': 'NY State TAP Grant',
    'home.opportunities.tap.description': 'Additional free money from New York State. Available through FAFSA or DREAM Act.',

    // Home Page - Who We Help
    'home.whoWeHelp.title': 'Who We Help',
    'home.whoWeHelp.subtitle': 'This Is For You If...',
    'home.whoWeHelp.item1': "You're a NYC high school student planning for college",
    'home.whoWeHelp.item2': 'You need help figuring out financial aid',
    'home.whoWeHelp.item3': 'FAFSA seems too complicated or scary',
    'home.whoWeHelp.item4': "You're a first-generation college student",
    'home.whoWeHelp.item5': 'You or your family are immigrants',
    'home.whoWeHelp.item6': 'You want to go to college but worry about cost',

    // Home Page - Final CTA
    'home.finalCTA.title': 'Ready to Get Started?',
    'home.finalCTA.button': 'Start Your Journey Now',
    'home.finalCTA.privacy': 'Your information is private and secure. We never share your data.',

    // Footer
    'footer.description': 'Helping NYC students unlock financial aid and make college affordable.',
    'footer.quickLinks': 'Quick Links',
    'footer.resources': 'Resources',
    'footer.fafsa': 'FAFSA Website',
    'footer.dreamAct': 'NYS DREAM Act',
    'footer.copyright': '© 2025 NYCCollegeNav. Empowering students to access financial aid.',

    // CSS Profile Page
    'cssProfile.title': 'CSS Profile Document Checklist',
    'cssProfile.subtitle': 'Everything you need to complete the CSS Profile for private college financial aid',
    'cssProfile.progress.title': 'Your Progress',
    'cssProfile.progress.description': 'Check off items as you gather them',
    'cssProfile.progress.documentsCollected': '{checked} of {total} documents collected',
    'cssProfile.progress.complete': 'Great! You have everything you need to start your CSS Profile!',
    'cssProfile.button.start': 'Start CSS Profile Application',
    'cssProfile.button.print': 'Print Checklist',
    'cssProfile.help': 'Need help? Contact your school counselor or use our',
    'cssProfile.aiAssistant': 'AI Assistant',
    'cssProfile.helpSuffix': 'for questions about CSS Profile.',

    // Questionnaire Page
    'questionnaire.title': 'NYCCollegeNav',
    'questionnaire.subtitle': 'Find your path to financial aid',
    'questionnaire.question': 'Question {current} of {total}',
    'questionnaire.complete': '{percent}% Complete',
    'questionnaire.back': 'Back',
    'questionnaire.privacy': 'Your data is private and secure',
    'questionnaire.helpTitle': 'Need help?',
    'questionnaire.helpText': 'These questions help us match you with the right financial aid programs. There are no wrong answers - just choose what fits your situation best.',

    // Questionnaire Questions
    'question.citizenship.title': 'What is your citizenship or immigration status?',
    'question.citizenship.description': 'This helps us find the right financial aid programs for you. Your information is private.',
    'question.citizenship.citizen': 'US Citizen',
    'question.citizenship.citizen.desc': 'Born in the US or naturalized citizen',
    'question.citizenship.permanent': 'Permanent Resident',
    'question.citizenship.permanent.desc': 'Have a Green Card',
    'question.citizenship.daca': 'DACA Recipient',
    'question.citizenship.daca.desc': 'Deferred Action for Childhood Arrivals',
    'question.citizenship.undocumented': 'Undocumented',
    'question.citizenship.undocumented.desc': 'No current legal status',
    'question.citizenship.other': 'Other Status',
    'question.citizenship.other.desc': 'Visa holder or other status',

    'question.ssn.title': 'Do you have a Social Security Number?',
    'question.ssn.description': 'Some aid programs require this, but not all.',
    'question.ssn.yes': 'Yes',
    'question.ssn.yes.desc': 'I have a Social Security Number',
    'question.ssn.no': 'No',
    'question.ssn.no.desc': 'I do not have a Social Security Number',

    'question.nyHighSchool.title': 'Did you attend or are you currently attending a New York high school?',
    'question.nyHighSchool.description': 'NY State offers special programs for NY high school students.',
    'question.nyHighSchool.yes': 'Yes',
    'question.nyHighSchool.yes.desc': 'I attend or graduated from a NY high school',
    'question.nyHighSchool.no': 'No',
    'question.nyHighSchool.no.desc': 'I attend or graduated from a school outside NY',

    'question.familySituation.title': 'What is your current living situation?',
    'question.familySituation.description': 'This helps us understand what documents you might need.',
    'question.familySituation.parents': 'Living with Parents',
    'question.familySituation.parents.desc': 'I live with one or both parents',
    'question.familySituation.guardian': 'Living with Guardian',
    'question.familySituation.guardian.desc': 'I live with a legal guardian',
    'question.familySituation.independent': 'Living Independently',
    'question.familySituation.independent.desc': 'I live on my own or with roommates',
    'question.familySituation.homeless': 'Experiencing Homelessness',
    'question.familySituation.homeless.desc': 'Shelter, temporary housing, or unstable housing',

    'question.preferredLanguage.title': 'What language do you prefer?',
    'question.preferredLanguage.description': 'We can provide help in your preferred language.',

    // Results Page
    'results.title': 'NYCCollegeNav',
    'results.success': 'Great News!',
    'results.successMessage': 'We found the perfect financial aid program for you.',
    'results.youCouldReceive': 'You Could Receive',
    'results.inFreeAid': 'in FREE financial aid',
    'results.timeToComplete': 'Time to Complete',
    'results.nextSteps': 'Your Next Steps',
    'results.mayQualifyFor': 'You may also qualify for:',
    'results.startApplication': 'Start My Application',
    'results.getHelp': 'Get Help from AI Assistant',
    'results.startOver': 'Start Over',
    'results.importantInfo': 'Important Information',
    'results.privateData': 'Your data is private.',
    'results.privateDataDesc': 'We never store your Social Security Number or share your information.',
    'results.freeMoney': 'This is FREE money.',
    'results.freeMoneyDesc': "Grants don't need to be paid back, unlike loans.",
    'results.hereToHelp': "We're here to help.",
    'results.hereToHelpDesc': 'Get assistance anytime from our AI assistant or reach out to a school counselor.',
    'results.questions': "Questions? Need help? We're here for you every step of the way.",
    'results.loading': 'Loading your personalized plan...',
  },

  es: {
    // Header
    'header.home': 'Inicio',
    'header.getStarted': 'Comenzar',
    'header.cssProfile': 'Perfil CSS',
    'header.resources': 'Recursos',
    'header.skipToMain': 'Saltar al contenido principal',

    // Home Page - Hero
    'home.hero.badge': 'Ayudando a Estudiantes de NYC a Acceder a Ayuda Financiera',
    'home.hero.title': '¿Necesitas ayuda para pagar la',
    'home.hero.titleHighlight': 'universidad?',
    'home.hero.statistic': '$226 millones',
    'home.hero.subtitle': 'Los estudiantes de NYC dejaron {amount} en ayuda financiera gratuita sin reclamar el año pasado.',
    'home.hero.description': 'Lo hacemos simple para obtener el dinero que mereces. Sin formularios confusos. Sin estrés. Solo pasos claros para desbloquear miles en ayuda.',

    // Home Page - CTA
    'home.cta.getStarted': '¡Comienza - Es Gratis!',
    'home.cta.cssProfileGuide': 'Guía del Perfil CSS',

    // Home Page - Trust Indicators
    'home.trust.free': '100% Gratis',
    'home.trust.secure': 'Privado y Seguro',
    'home.trust.time': 'Toma 5 Minutos',

    // Home Page - How It Works
    'home.howItWorks.title': 'Cómo Funciona',
    'home.howItWorks.subtitle': 'Tres Pasos Simples para Tu Ayuda Financiera',
    'home.howItWorks.step1.title': 'Responde 5 Preguntas Simples',
    'home.howItWorks.step1.description': 'Cuéntanos sobre tu situación. Sin términos confusos ni formularios complicados.',
    'home.howItWorks.step2.title': 'Obtén Tu Plan Personalizado',
    'home.howItWorks.step2.description': 'Te diremos exactamente para qué programas de ayuda calificas y cuánto dinero puedes obtener.',
    'home.howItWorks.step3.title': 'Completa Tu Solicitud',
    'home.howItWorks.step3.description': 'Sigue instrucciones claras paso a paso. Obtén ayuda en cualquier momento con nuestro asistente de IA.',

    // Home Page - Financial Aid Opportunities
    'home.opportunities.title': 'Oportunidades de Ayuda Financiera',
    'home.opportunities.subtitle': 'Desbloquea Miles en Dinero Gratis',
    'home.opportunities.pell.amount': 'Hasta $7,395',
    'home.opportunities.pell.title': 'Beca Federal Pell',
    'home.opportunities.pell.description': 'Dinero gratis que nunca tienes que devolver. Para ciudadanos estadounidenses y residentes permanentes.',
    'home.opportunities.tap.amount': 'Hasta $5,665',
    'home.opportunities.tap.title': 'Beca TAP del Estado de NY',
    'home.opportunities.tap.description': 'Dinero gratis adicional del Estado de Nueva York. Disponible a través de FAFSA o DREAM Act.',

    // Home Page - Who We Help
    'home.whoWeHelp.title': 'A Quién Ayudamos',
    'home.whoWeHelp.subtitle': 'Esto Es Para Ti Si...',
    'home.whoWeHelp.item1': 'Eres un estudiante de secundaria de NYC planeando ir a la universidad',
    'home.whoWeHelp.item2': 'Necesitas ayuda para entender la ayuda financiera',
    'home.whoWeHelp.item3': 'FAFSA parece demasiado complicado o aterrador',
    'home.whoWeHelp.item4': 'Eres un estudiante universitario de primera generación',
    'home.whoWeHelp.item5': 'Tú o tu familia son inmigrantes',
    'home.whoWeHelp.item6': 'Quieres ir a la universidad pero te preocupa el costo',

    // Home Page - Final CTA
    'home.finalCTA.title': '¿Listo para Comenzar?',
    'home.finalCTA.button': 'Comienza Tu Viaje Ahora',
    'home.finalCTA.privacy': 'Tu información es privada y segura. Nunca compartimos tus datos.',

    // Footer
    'footer.description': 'Ayudando a los estudiantes de NYC a desbloquear ayuda financiera y hacer la universidad asequible.',
    'footer.quickLinks': 'Enlaces Rápidos',
    'footer.resources': 'Recursos',
    'footer.fafsa': 'Sitio Web de FAFSA',
    'footer.dreamAct': 'Ley DREAM de NYS',
    'footer.copyright': '© 2025 NYCCollegeNav. Empoderando a los estudiantes para acceder a ayuda financiera.',

    // CSS Profile Page
    'cssProfile.title': 'Lista de Documentos del Perfil CSS',
    'cssProfile.subtitle': 'Todo lo que necesitas para completar el Perfil CSS para ayuda financiera universitaria privada',
    'cssProfile.progress.title': 'Tu Progreso',
    'cssProfile.progress.description': 'Marca los elementos a medida que los reúnes',
    'cssProfile.progress.documentsCollected': '{checked} de {total} documentos recopilados',
    'cssProfile.progress.complete': '¡Genial! ¡Tienes todo lo que necesitas para comenzar tu Perfil CSS!',
    'cssProfile.button.start': 'Iniciar Solicitud del Perfil CSS',
    'cssProfile.button.print': 'Imprimir Lista',
    'cssProfile.help': '¿Necesitas ayuda? Contacta a tu consejero escolar o usa nuestro',
    'cssProfile.aiAssistant': 'Asistente de IA',
    'cssProfile.helpSuffix': 'para preguntas sobre el Perfil CSS.',

    // Questionnaire Page
    'questionnaire.title': 'NYCCollegeNav',
    'questionnaire.subtitle': 'Encuentra tu camino hacia la ayuda financiera',
    'questionnaire.question': 'Pregunta {current} de {total}',
    'questionnaire.complete': '{percent}% Completo',
    'questionnaire.back': 'Atrás',
    'questionnaire.privacy': 'Tus datos son privados y seguros',
    'questionnaire.helpTitle': '¿Necesitas ayuda?',
    'questionnaire.helpText': 'Estas preguntas nos ayudan a encontrar los programas de ayuda financiera adecuados para ti. No hay respuestas incorrectas, solo elige lo que mejor se adapte a tu situación.',

    // Questionnaire Questions
    'question.citizenship.title': '¿Cuál es tu ciudadanía o estatus migratorio?',
    'question.citizenship.description': 'Esto nos ayuda a encontrar los programas de ayuda financiera adecuados para ti. Tu información es privada.',
    'question.citizenship.citizen': 'Ciudadano de EE.UU.',
    'question.citizenship.citizen.desc': 'Nacido en EE.UU. o ciudadano naturalizado',
    'question.citizenship.permanent': 'Residente Permanente',
    'question.citizenship.permanent.desc': 'Tienes una Green Card',
    'question.citizenship.daca': 'Recipiente de DACA',
    'question.citizenship.daca.desc': 'Acción Diferida para los Llegados en la Infancia',
    'question.citizenship.undocumented': 'Indocumentado',
    'question.citizenship.undocumented.desc': 'Sin estatus legal actual',
    'question.citizenship.other': 'Otro Estatus',
    'question.citizenship.other.desc': 'Titular de visa u otro estatus',

    'question.ssn.title': '¿Tienes un Número de Seguro Social?',
    'question.ssn.description': 'Algunos programas de ayuda requieren esto, pero no todos.',
    'question.ssn.yes': 'Sí',
    'question.ssn.yes.desc': 'Tengo un Número de Seguro Social',
    'question.ssn.no': 'No',
    'question.ssn.no.desc': 'No tengo un Número de Seguro Social',

    'question.nyHighSchool.title': '¿Asististe o estás asistiendo actualmente a una escuela secundaria de Nueva York?',
    'question.nyHighSchool.description': 'El Estado de NY ofrece programas especiales para estudiantes de secundaria de NY.',
    'question.nyHighSchool.yes': 'Sí',
    'question.nyHighSchool.yes.desc': 'Asisto o me gradué de una escuela secundaria de NY',
    'question.nyHighSchool.no': 'No',
    'question.nyHighSchool.no.desc': 'Asisto o me gradué de una escuela fuera de NY',

    'question.familySituation.title': '¿Cuál es tu situación de vivienda actual?',
    'question.familySituation.description': 'Esto nos ayuda a entender qué documentos podrías necesitar.',
    'question.familySituation.parents': 'Viviendo con Padres',
    'question.familySituation.parents.desc': 'Vivo con uno o ambos padres',
    'question.familySituation.guardian': 'Viviendo con Tutor',
    'question.familySituation.guardian.desc': 'Vivo con un tutor legal',
    'question.familySituation.independent': 'Viviendo Independientemente',
    'question.familySituation.independent.desc': 'Vivo solo o con compañeros de cuarto',
    'question.familySituation.homeless': 'Experimentando Falta de Vivienda',
    'question.familySituation.homeless.desc': 'Refugio, vivienda temporal o vivienda inestable',

    'question.preferredLanguage.title': '¿Qué idioma prefieres?',
    'question.preferredLanguage.description': 'Podemos proporcionar ayuda en tu idioma preferido.',

    // Results Page
    'results.title': 'NYCCollegeNav',
    'results.success': '¡Buenas Noticias!',
    'results.successMessage': 'Encontramos el programa de ayuda financiera perfecto para ti.',
    'results.youCouldReceive': 'Podrías Recibir',
    'results.inFreeAid': 'en ayuda financiera GRATUITA',
    'results.timeToComplete': 'Tiempo para Completar',
    'results.nextSteps': 'Tus Próximos Pasos',
    'results.mayQualifyFor': 'También podrías calificar para:',
    'results.startApplication': 'Comenzar Mi Solicitud',
    'results.getHelp': 'Obtener Ayuda del Asistente de IA',
    'results.startOver': 'Comenzar de Nuevo',
    'results.importantInfo': 'Información Importante',
    'results.privateData': 'Tus datos son privados.',
    'results.privateDataDesc': 'Nunca almacenamos tu Número de Seguro Social ni compartimos tu información.',
    'results.freeMoney': 'Esto es dinero GRATIS.',
    'results.freeMoneyDesc': 'Las becas no necesitan ser devueltas, a diferencia de los préstamos.',
    'results.hereToHelp': 'Estamos aquí para ayudar.',
    'results.hereToHelpDesc': 'Obtén asistencia en cualquier momento de nuestro asistente de IA o comunícate con un consejero escolar.',
    'results.questions': '¿Preguntas? ¿Necesitas ayuda? Estamos aquí para ti en cada paso del camino.',
    'results.loading': 'Cargando tu plan personalizado...',
  },

  zh: {
    // Header
    'header.home': '首页',
    'header.getStarted': '开始',
    'header.cssProfile': 'CSS档案',
    'header.resources': '资源',
    'header.skipToMain': '跳到主要内容',

    // Home Page - Hero
    'home.hero.badge': '帮助纽约市学生获得经济援助',
    'home.hero.title': '需要帮助支付',
    'home.hero.titleHighlight': '大学费用？',
    'home.hero.statistic': '2.26亿美元',
    'home.hero.subtitle': '去年纽约市学生有{amount}的免费经济援助未被领取。',
    'home.hero.description': '我们让您轻松获得应得的资金。没有复杂的表格。没有压力。只有明确的步骤来解锁数千美元的援助。',

    // Home Page - CTA
    'home.cta.getStarted': '开始 - 免费！',
    'home.cta.cssProfileGuide': 'CSS档案指南',

    // Home Page - Trust Indicators
    'home.trust.free': '100%免费',
    'home.trust.secure': '私密安全',
    'home.trust.time': '只需5分钟',

    // Home Page - How It Works
    'home.howItWorks.title': '如何运作',
    'home.howItWorks.subtitle': '获得经济援助的三个简单步骤',
    'home.howItWorks.step1.title': '回答5个简单问题',
    'home.howItWorks.step1.description': '告诉我们您的情况。没有令人困惑的术语或复杂的表格。',
    'home.howItWorks.step2.title': '获得您的个性化计划',
    'home.howItWorks.step2.description': '我们会准确告诉您有资格获得哪些援助项目以及可以获得多少钱。',
    'home.howItWorks.step3.title': '完成您的申请',
    'home.howItWorks.step3.description': '遵循清晰的分步说明。随时通过我们的AI助手获得帮助。',

    // Home Page - Financial Aid Opportunities
    'home.opportunities.title': '经济援助机会',
    'home.opportunities.subtitle': '解锁数千美元的免费资金',
    'home.opportunities.pell.amount': '最高$7,395',
    'home.opportunities.pell.title': '联邦佩尔助学金',
    'home.opportunities.pell.description': '您永远不必偿还的免费资金。适用于美国公民和永久居民。',
    'home.opportunities.tap.amount': '最高$5,665',
    'home.opportunities.tap.title': '纽约州TAP助学金',
    'home.opportunities.tap.description': '来自纽约州的额外免费资金。可通过FAFSA或DREAM Act获得。',

    // Home Page - Who We Help
    'home.whoWeHelp.title': '我们帮助谁',
    'home.whoWeHelp.subtitle': '如果您是以下情况，这适合您...',
    'home.whoWeHelp.item1': '您是计划上大学的纽约市高中生',
    'home.whoWeHelp.item2': '您需要帮助了解经济援助',
    'home.whoWeHelp.item3': 'FAFSA似乎太复杂或可怕',
    'home.whoWeHelp.item4': '您是第一代大学生',
    'home.whoWeHelp.item5': '您或您的家人是移民',
    'home.whoWeHelp.item6': '您想上大学但担心费用',

    // Home Page - Final CTA
    'home.finalCTA.title': '准备好开始了吗？',
    'home.finalCTA.button': '现在开始您的旅程',
    'home.finalCTA.privacy': '您的信息是私密和安全的。我们从不分享您的数据。',

    // Footer
    'footer.description': '帮助纽约市学生解锁经济援助，使大学负担得起。',
    'footer.quickLinks': '快速链接',
    'footer.resources': '资源',
    'footer.fafsa': 'FAFSA网站',
    'footer.dreamAct': '纽约州DREAM法案',
    'footer.copyright': '© 2025 NYCCollegeNav。赋能学生获得经济援助。',

    // CSS Profile Page
    'cssProfile.title': 'CSS档案文件清单',
    'cssProfile.subtitle': '完成私立大学经济援助CSS档案所需的一切',
    'cssProfile.progress.title': '您的进度',
    'cssProfile.progress.description': '在收集项目时勾选它们',
    'cssProfile.progress.documentsCollected': '已收集{checked}个文件，共{total}个',
    'cssProfile.progress.complete': '太好了！您已经拥有开始CSS档案所需的一切！',
    'cssProfile.button.start': '开始CSS档案申请',
    'cssProfile.button.print': '打印清单',
    'cssProfile.help': '需要帮助？联系您的学校辅导员或使用我们的',
    'cssProfile.aiAssistant': 'AI助手',
    'cssProfile.helpSuffix': '了解有关CSS档案的问题。',

    // Questionnaire Page
    'questionnaire.title': 'NYCCollegeNav',
    'questionnaire.subtitle': '找到您的经济援助之路',
    'questionnaire.question': '第{current}题，共{total}题',
    'questionnaire.complete': '完成{percent}%',
    'questionnaire.back': '返回',
    'questionnaire.privacy': '您的数据是私密和安全的',
    'questionnaire.helpTitle': '需要帮助？',
    'questionnaire.helpText': '这些问题帮助我们为您匹配合适的经济援助项目。没有错误答案 - 只需选择最适合您情况的选项。',

    // Questionnaire Questions
    'question.citizenship.title': '您的公民身份或移民身份是什么？',
    'question.citizenship.description': '这帮助我们为您找到合适的经济援助项目。您的信息是私密的。',
    'question.citizenship.citizen': '美国公民',
    'question.citizenship.citizen.desc': '在美国出生或归化公民',
    'question.citizenship.permanent': '永久居民',
    'question.citizenship.permanent.desc': '拥有绿卡',
    'question.citizenship.daca': 'DACA接受者',
    'question.citizenship.daca.desc': '童年入境暂缓遣返',
    'question.citizenship.undocumented': '无证',
    'question.citizenship.undocumented.desc': '目前没有合法身份',
    'question.citizenship.other': '其他身份',
    'question.citizenship.other.desc': '签证持有者或其他身份',

    'question.ssn.title': '您有社会安全号码吗？',
    'question.ssn.description': '一些援助项目需要这个，但不是全部。',
    'question.ssn.yes': '是',
    'question.ssn.yes.desc': '我有社会安全号码',
    'question.ssn.no': '否',
    'question.ssn.no.desc': '我没有社会安全号码',

    'question.nyHighSchool.title': '您就读或正在就读纽约高中吗？',
    'question.nyHighSchool.description': '纽约州为纽约高中生提供特殊项目。',
    'question.nyHighSchool.yes': '是',
    'question.nyHighSchool.yes.desc': '我就读或毕业于纽约高中',
    'question.nyHighSchool.no': '否',
    'question.nyHighSchool.no.desc': '我就读或毕业于纽约以外的学校',

    'question.familySituation.title': '您目前的居住情况如何？',
    'question.familySituation.description': '这帮助我们了解您可能需要哪些文件。',
    'question.familySituation.parents': '与父母同住',
    'question.familySituation.parents.desc': '我与一位或双方父母同住',
    'question.familySituation.guardian': '与监护人同住',
    'question.familySituation.guardian.desc': '我与法定监护人同住',
    'question.familySituation.independent': '独立生活',
    'question.familySituation.independent.desc': '我独自或与室友同住',
    'question.familySituation.homeless': '正在经历无家可归',
    'question.familySituation.homeless.desc': '收容所、临时住房或不稳定住房',

    'question.preferredLanguage.title': '您偏好哪种语言？',
    'question.preferredLanguage.description': '我们可以用您偏好的语言提供帮助。',

    // Results Page
    'results.title': 'NYCCollegeNav',
    'results.success': '好消息！',
    'results.successMessage': '我们为您找到了完美的经济援助项目。',
    'results.youCouldReceive': '您可以获得',
    'results.inFreeAid': '的免费经济援助',
    'results.timeToComplete': '完成时间',
    'results.nextSteps': '您的下一步',
    'results.mayQualifyFor': '您还可能有资格获得：',
    'results.startApplication': '开始我的申请',
    'results.getHelp': '从AI助手获得帮助',
    'results.startOver': '重新开始',
    'results.importantInfo': '重要信息',
    'results.privateData': '您的数据是私密的。',
    'results.privateDataDesc': '我们从不存储您的社会安全号码或分享您的信息。',
    'results.freeMoney': '这是免费的钱。',
    'results.freeMoneyDesc': '助学金不需要偿还，不像贷款。',
    'results.hereToHelp': '我们在这里帮助您。',
    'results.hereToHelpDesc': '随时从我们的AI助手获得帮助或联系学校辅导员。',
    'results.questions': '有问题？需要帮助？我们在每一步都为您服务。',
    'results.loading': '正在加载您的个性化计划...',
  },

  // Additional languages (Bengali, Russian, Arabic) can be added similarly
  bn: {
    'header.home': 'হোম',
    'header.getStarted': 'শুরু করুন',
    'header.cssProfile': 'CSS প্রোফাইল',
    'header.resources': 'সম্পদ',
    'header.skipToMain': 'মূল বিষয়বস্তুতে যান',
    // ... rest of Bengali translations
  } as any,

  ru: {
    'header.home': 'Главная',
    'header.getStarted': 'Начать',
    'header.cssProfile': 'CSS профиль',
    'header.resources': 'Ресурсы',
    'header.skipToMain': 'Перейти к основному содержанию',
    // ... rest of Russian translations
  } as any,

  ar: {
    'header.home': 'الرئيسية',
    'header.getStarted': 'ابدأ',
    'header.cssProfile': 'ملف CSS',
    'header.resources': 'الموارد',
    'header.skipToMain': 'انتقل إلى المحتوى الرئيسي',
    // ... rest of Arabic translations
  } as any,
};

export function t(key: TranslationKey, language: Language, replacements?: Record<string, string>): string {
  let translation = translations[language][key] || translations.en[key] || key;

  if (replacements) {
    Object.entries(replacements).forEach(([placeholder, value]) => {
      translation = translation.replace(`{${placeholder}}`, value);
    });
  }

  return translation;
}
