import { RecursionPracticeModule } from './recursion-practice.module';

describe('RecursionPracticeModule', () => {
  let recursionPracticeModule: RecursionPracticeModule;

  beforeEach(() => {
    recursionPracticeModule = new RecursionPracticeModule();
  });

  it('should create an instance', () => {
    expect(recursionPracticeModule).toBeTruthy();
  });
});
