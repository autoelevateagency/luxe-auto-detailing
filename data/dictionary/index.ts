import { en } from "./en";
import { ur } from "./ur";
import type { Dictionary } from "./types";

export type Language = "EN" | "UR";

export const dictionaries: Record<Language, Dictionary> = {
  EN: en,
  UR: ur,
};

export type { Dictionary };
