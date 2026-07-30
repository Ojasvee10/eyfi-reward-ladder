import {
  Rocket,
  Gift,
  BadgeCheck,
  GraduationCap,
  Briefcase,
  Crown,
} from "lucide-react";

export const rewards = [
  {
    id: 1,
    milestone: 0,
    title: "Journey Begins",
    reward:
      "Welcome aboard! Start your journey as an EYFI Campus Ambassador and begin promoting the program on your campus.",
    icon: Rocket,
  },
  {
    id: 2,
    milestone: 25,
    title: "EYFI Goodies",
    reward:
      "Receive exclusive EYFI merchandise and appreciation goodies after successfully reaching 25 registrations.",
    icon: Gift,
  },
  {
    id: 3,
    milestone: 50,
    title: "Certificate of Achievement",
    reward:
      "Earn an official EYFI Campus Ambassador Certificate to strengthen your resume and professional profile.",
    icon: BadgeCheck,
  },
  {
    id: 4,
    milestone: 75,
    title: "Mentorship Access",
    reward:
      "Unlock exclusive mentorship sessions with industry experts to enhance your career and leadership skills.",
    icon: GraduationCap,
  },
  {
    id: 5,
    milestone: 100,
    title: "Paid Internship Opportunity",
    reward:
      "Become eligible for an internship opportunity with EYFI and gain valuable real-world experience.",
    icon: Briefcase,
  },
  {
    id: 6,
    milestone: 200,
    title: "Founding Team Opportunity",
    reward:
      "Top performers may receive an opportunity to join the EYFI Founding Team and contribute to future growth.",
    icon: Crown,
  },
];