export type Grade = "junior" | "middle" | "senior" | "lead";
export type WorkFormat = "remote" | "onsite" | "hybrid";
export type Currency = "UZS" | "USD";

export interface Company {
  name: string;
  /** Admin-set verification badge. */
  verified: boolean;
}

export interface Salary {
  /** Stored in full units (e.g. 18000000 for 18 mln soʻm). */
  min: number;
  max: number;
  currency: Currency;
}

export interface Job {
  id: string;
  slug: string;
  title: string;
  company: Company;
  grade: Grade;
  workFormat: WorkFormat;
  city: string;
  skills: string[];
  salary: Salary;
  /** Secondary USD estimate shown alongside a UZS range. */
  salaryUsd?: { min: number; max: number };
  postedDaysAgo: number;
}
