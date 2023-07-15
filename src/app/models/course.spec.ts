import { Course } from './course';

describe('Course', () => {
  it('should create an instance', () => {
    var course = Course.Create("Java",new Date(),new Date())
    expect(course.Id).toBeDefined()
  });

  
});
