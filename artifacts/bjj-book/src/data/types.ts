export type TechniqueCategory =
  | 'Guard'
  | 'Passing'
  | 'Sweeps'
  | 'Submissions'
  | 'Escapes'
  | 'Takedowns';

export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced';
export type GiNoGi = 'Gi' | 'No-Gi' | 'Both';

export interface Technique {
  id: string;
  name: string;
  category: TechniqueCategory;
  difficulty: Difficulty;
  giNoGi: GiNoGi;
  position: string;
  description: string;
  steps: string[];
  keyPoints: string[];
  commonMistakes: string[];
  /** Common entries and setups into this technique */
  setups: string[];
  /** What to chain to when this technique is defended, and what it combos with */
  followUps: string[];
  /** Strategic context: when and against whom this technique shines */
  whenToUse: string;
  /** The underlying grappling concept or principle this technique teaches */
  concept: string;
  /** Image filename (without path) under attached_assets/generated_images/techniques/ */
  image?: string;
}
