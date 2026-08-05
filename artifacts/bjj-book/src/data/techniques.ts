export type {
  Technique,
  TechniqueCategory,
  Difficulty,
  GiNoGi,
} from './types';

import type { Technique } from './types';
import { guardTechniques } from './techniques/guards';
import { passingTechniques } from './techniques/passing';
import { sweepTechniques } from './techniques/sweeps';
import { submissionTechniques } from './techniques/submissions';
import { escapeTechniques } from './techniques/escapes';
import { takedownTechniques } from './techniques/takedowns';

export const techniques: Technique[] = [
  ...submissionTechniques,
  ...guardTechniques,
  ...passingTechniques,
  ...sweepTechniques,
  ...escapeTechniques,
  ...takedownTechniques,
];
