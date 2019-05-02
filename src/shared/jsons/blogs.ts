import { Blog } from 'src/shared/models/blog.model';
import { Levels } from '../enums/levels.enum';
import { Topic } from '../enums/subject.enum';

export const Blogs: Blog[] = [
  {
    id: 1,
    name: 'TypeScript Classes and Constructors',
    initials:
      'Actions in the Redux paradigm are the initiators of the one-way dataflow process for state management.',
    url: 'https://ultimatecourses.com/blog/typescript-classes-and-constructors',
    author: 'nazamul ALam',
    level: Levels.PRIMARY,
    topic: Topic.ANGULAR,
    date: '2nd May, 2019'
  },
  {
    id: 2,
    name: 'Exploring Angular Lifecycle Hooks – OnDestroy',
    initials:
      'Welcome to our new blog series, Exploring Angular Lifecycle Hooks! There’s going to be nothing quite like this available on the web, as we will be promoting best practices, revealing hidden tips and tricks',
    url:
      'https://ultimatecourses.com/blog/exploring-angular-lifecycle-hooks-ondestroy',
    author: 'nazamul ALam',
    level: Levels.PRIMARY,
    topic: Topic.ANGULAR,
    date: '3rd May, 2019'
  },
  {
    id: 3,
    name: 'Classes vs Interfaces in TypeScript',
    initials:
      'Classes and interfaces are powerful structures that facilitate not just object-oriented programming but also type-checking in TypeScript',
    url: 'https://ultimatecourses.com/blog/classes-vs-interfaces-in-typescript',
    author: 'nazamul ALam',
    level: Levels.PRIMARY,
    topic: Topic.ANGULAR,
    date: '4th May, 2019'
  },
  {
    id: 4,
    name: 'NGRX Store: Understanding State Selectors',
    initials:
      'Classes and interfaces are powerful structures that facilitate not just object-oriented programming but also type-checking in TypeScript',
    url:
      'https://ultimatecourses.com/blog/ngrx-store-understanding-state-selectors',
    author: 'nazamul ALam',
    level: Levels.PRIMARY,
    topic: Topic.ANGULAR,
    date: '4th May, 2019'
  }
];
