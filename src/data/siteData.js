export const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Shop', to: '/shop' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
]

export const processSteps = [
  {
    title: 'Initial Consultation',
    description:
      'Our experienced lawyers analyze the facts of each case and apply the relevant legal framework.',
  },
  {
    title: 'Case Evaluation',
    description:
      'We assess strengths, risks, and opportunities so your legal direction is clear from day one.',
  },
  {
    title: 'Legal Strategy',
    description:
      'A tailored strategy is designed to protect your rights and move toward the best possible outcome.',
  },
]

export const serviceCards = [
  {
    title: 'Criminal Law',
    description:
      'Defense representation for clients facing criminal investigations and legal proceedings.',
  },
  {
    title: 'Corporate Law',
    description:
      'Advisory for businesses on contracts, governance, and legal risk management.',
    active: true,
  },
  {
    title: 'Family Law',
    description:
      'Support in divorce, custody, and related family legal matters with practical guidance.',
  },
  {
    title: 'Real Estate Law',
    description:
      'End-to-end legal support for property transactions and dispute resolution.',
  },
  {
    title: 'Immigration Law',
    description:
      'Visa, residency, and citizenship support with structured legal guidance.',
  },
  {
    title: 'Intellectual Property',
    description:
      'Trademark, copyright, and IP protection strategies for businesses and creators.',
  },
  {
    title: 'Tax Law',
    description:
      'Practical legal support in tax planning, compliance, and dispute handling.',
  },
  {
    title: 'Employment Law',
    description:
      'Workplace disputes, contracts, and policy advice for employers and employees.',
  },
]

export const caseStats = [
  { value: '98%', label: 'Successful Case Outcomes' },
  { value: '12K+', label: 'Consultations Completed' },
  { value: '42+', label: 'Expert Attorneys' },
  { value: '25+', label: 'Years Combined Experience' },
]

export const attorneyCards = [
  {
    name: 'Sophia Carter',
    role: 'Corporate Attorney',
    image: '/images/team-sophia.jpg',
  },
  {
    name: 'Elena Brooks',
    role: 'Family Law Specialist',
    image: '/images/team-elena.jpg',
  },
  {
    name: 'Amelia Grant',
    role: 'Criminal Defense Lawyer',
    image: '/images/team-amelia.jpg',
  },
]

export const testimonials = [
  {
    quote:
      'Lexovia handled my business dispute with absolute clarity. Every step was explained and executed on time.',
    name: 'Daniel Morgan',
    type: 'Business Owner',
  },
  {
    quote:
      'They supported my family case with professionalism and empathy. I always felt informed and protected.',
    name: 'Ava Williams',
    type: 'Private Client',
  },
]

export const practiceAreas = [
  {
    slug: 'criminal-law',
    label: 'Criminal Law',
    short:
      'Strategic defense representation for investigations, charges, bail, and trial matters.',
    overview:
      'Our criminal defense team builds proactive legal strategy from first notice through final resolution, with focus on rights protection and evidence scrutiny.',
    points: [
      'Case analysis and charge evaluation at initial stage',
      'Bail hearings, procedural defense, and motion practice',
      'Evidence review and cross-examination strategy',
      'Negotiation and trial-focused representation',
    ],
  },
  {
    slug: 'corporate-law',
    label: 'Corporate Law',
    short:
      'Business-first legal support for contracts, governance, risk, and commercial decisions.',
    overview:
      'We advise startups and established businesses on day-to-day legal decisions, transaction structuring, compliance, and dispute prevention.',
    points: [
      'Commercial contracts and policy drafting',
      'Corporate governance and board advisory',
      'M&A due diligence and negotiation support',
      'Regulatory compliance and risk mitigation',
    ],
  },
  {
    slug: 'family-law',
    label: 'Family Law',
    short:
      'Clear and respectful legal guidance in custody, divorce, and family settlement matters.',
    overview:
      'Family matters require legal precision and emotional sensitivity. We provide practical representation with focus on fair outcomes and long-term stability.',
    points: [
      'Divorce and settlement structuring',
      'Child custody and guardianship representation',
      'Maintenance and financial arrangement planning',
      'Mediation support and contested hearings',
    ],
  },
  {
    slug: 'real-estate-law',
    label: 'Real Estate Law',
    short:
      'Legal support for property transactions, title review, and real-estate dispute handling.',
    overview:
      'From purchase agreements to dispute resolution, our team safeguards property interests through document precision and strategic legal action.',
    points: [
      'Sale deed, lease, and transaction documentation',
      'Title verification and compliance review',
      'Property dispute and possession litigation',
      'Commercial and residential advisory',
    ],
  },
  {
    slug: 'civil-litigation',
    label: 'Civil Litigation',
    short:
      'Result-focused representation for contractual, commercial, and civil court disputes.',
    overview:
      'We represent clients in civil claims with rigorous preparation, procedural strength, and a courtroom strategy aligned with business and personal goals.',
    points: [
      'Claim assessment and legal notice drafting',
      'Pleadings, filings, and procedural compliance',
      'Interim relief and injunction strategy',
      'Settlement negotiation and trial representation',
    ],
  },
]

export const practiceLinks = practiceAreas.map((area) => ({
  label: area.label,
  to: `/practice/${area.slug}`,
}))

export const quickLinks = [
  { label: 'About Us', to: '/about' },
  { label: 'Our Team', to: '/about#our-team' },
  { label: 'Case Studies', to: '/services#case-results' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
]

export const shopItems = [
  {
    name: 'Business Contract Template',
    category: 'Corporate',
    price: '$99',
  },
  {
    name: 'Employment Agreement Kit',
    category: 'Employment',
    price: '$79',
  },
  {
    name: 'Real Estate Due Diligence Pack',
    category: 'Property',
    price: '$119',
  },
  {
    name: 'Trademark Filing Checklist',
    category: 'IP Law',
    price: '$69',
  },
  {
    name: 'Startup Legal Starter Bundle',
    category: 'Corporate',
    price: '$149',
  },
  {
    name: 'Family Law Documentation Guide',
    category: 'Family',
    price: '$59',
  },
  {
    name: 'Case Strategy Planning Workbook',
    category: 'Litigation',
    price: '$89',
  },
  {
    name: 'Tax Compliance Legal Notes',
    category: 'Tax',
    price: '$75',
  },
]

export const blogPosts = [
  {
    title: 'How to Prepare for Your First Legal Consultation',
    excerpt:
      'A practical checklist to help clients walk into consultations with confidence and clarity.',
    tag: 'Client Guide',
    date: 'January 12, 2026',
  },
  {
    title: 'Top Contract Clauses Every Business Should Review',
    excerpt:
      'Key clauses that frequently create risk when overlooked in vendor and partnership agreements.',
    tag: 'Corporate Law',
    date: 'December 28, 2025',
  },
  {
    title: 'Understanding Property Disputes Before They Escalate',
    excerpt:
      'Early indicators, documentation strategy, and legal pathways to protect your property rights.',
    tag: 'Real Estate',
    date: 'December 6, 2025',
  },
  {
    title: 'Family Law: What Judges Look For in Custody Matters',
    excerpt:
      'A concise overview of how courts evaluate stability, welfare, and parental responsibility.',
    tag: 'Family Law',
    date: 'November 20, 2025',
  },
  {
    title: 'How Evidence Quality Impacts Criminal Defense Outcomes',
    excerpt:
      'Why evidence chain, documentation, and timing can substantially influence defense strategy.',
    tag: 'Criminal Law',
    date: 'November 1, 2025',
  },
  {
    title: 'A Founder’s Legal Readiness Checklist for New Ventures',
    excerpt:
      'Legal essentials every founder should lock in before fundraising, hiring, or scaling operations.',
    tag: 'Startups',
    date: 'October 17, 2025',
  },
]
