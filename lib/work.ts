import { works as a } from "./works-a";
import { works as b } from "./works-b";
export const works = [...a, ...b] as const;
