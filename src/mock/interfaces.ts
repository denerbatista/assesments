export interface ISimulator {
    name: string;
    questions: {
      title: string;
      right: string;
      options: string[];
    }[];
  }
  