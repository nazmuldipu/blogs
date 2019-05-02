import { Levels } from '../enums/levels.enum';
import { Topic } from '../enums/subject.enum';

export interface Blog {
  id: number;
  name: string;
  initials: string;
  url: string;
  author: string;
  level: Levels;
  topic: Topic;
  date: string;
}
