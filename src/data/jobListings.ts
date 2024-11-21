export interface JobListing {
  id: string;
  title: string;
  location: string;
  type: string;
  mode: string;
  deadline: string;
  description: string;
  responsibilities: string[];
  qualifications: string[];
  applicationEmail: string;
  isActive: boolean;
  applicationLink: string;
}

export const jobListings: JobListing[] = [
  {
    id: "prog-officer-2024",
    title:
      "Programme Officer – Undergraduate Learning Support Programme (Female)",
    location: "Corporate Office, Ajao Estate, Isolo, Lagos",
    type: "Full-Time (Contract)",
    mode: "Physical",
    deadline: "November 30, 2024",
    description:
      "The Programme Officer will be responsible for supporting the planning, implementation, monitoring, and evaluation of the foundation’s Undergraduate Learning Support Programme for female Muslim students. The role involves working closely with the Programme, Administrative, and Scholarships team, the programme stakeholders, and partners to ensure that the programme is delivered on time, within scope, and in accordance with budgetary constraints. The Programme Officer will also contribute to reporting, data analysis, and ensuring that the programme is implemented in a manner that is in line with the organization’s mission and objectives.",
    responsibilities: [
      "Design and develop programme plan, strategies, and budgets.",
      "Coordinate the logistics and operational aspects of programme delivery.",
      "Ensure effective communication and collaboration with stakeholders, including partners, beneficiaries, and donors.",
      "Monitor and manage program timelines and milestones to ensure objectives are met.",
      "Track program progress through regular reporting and data collection.",
      "Conduct assessments to evaluate the impact, effectiveness, and efficiency of the programme.",
      "Provide regular updates and reports to senior management on programme implementation and outcomes.",
      "Identify challenges and suggest corrective actions when necessary.",
      "Ensure that program activities are implemented in accordance with organizational policies, procedures, and compliance requirements.",
      "Contribute to resource mobilization efforts by supporting fundraising and grant applications.",
      "Communicate program successes, challenges, and lessons learned to internal and external stakeholders.",
      "Prepare and submit regular program reports, including narrative and financial updates.",
      "Ensure compliance with reporting requirements for donors, government bodies, and other stakeholders.",
    ],
    qualifications: [
      "Minimum of a first degree or an HND in marketing, communications, business, or a related field.",
      "Strong networking and relationship-building skills.",
      "Excellent written and verbal communication skills.",
      "Ability to work independently and meet targets.",
      "Proficiency in Microsoft Office suites.",
    ],
    applicationEmail: "info@fcmfoundation.org",
    applicationLink: "https://zfrmz.com/iUIzXj659Sb6CrZFBPyO",
    isActive: true,
  },
];
