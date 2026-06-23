import type { Grade, WorkFormat } from "../model/types";

// Uzbek display labels. Move to the i18n dictionary when a second locale ships.
export const workFormatLabel: Record<WorkFormat, string> = {
  remote: "Masofaviy",
  onsite: "Ofisda",
  hybrid: "Gibrid",
};

export const gradeLabel: Record<Grade, string> = {
  junior: "Junior",
  middle: "Middle",
  senior: "Senior",
  lead: "Lead",
};
