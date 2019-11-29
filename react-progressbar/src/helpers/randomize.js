import { INITIAL_VAL, MAX_VAL } from './constants';
import { clamp } from './clamp'

export const randomize = () => parseInt(clamp(INITIAL_VAL, (Math.random() * MAX_VAL), MAX_VAL))