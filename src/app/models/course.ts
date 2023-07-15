export class Course {
  constructor(
    private id: string,
    private name: string,
    private startDate: Date,
    private endDate: Date,
    private parcipants: string[]
  ) {}

  static Create(name: string, startDate: Date, endDate: Date): Course {
    return new Course(
      Date.now().toString() + Math.random(),
      name,
      startDate,
      endDate,
      []
    );
  }

  get Name() {
    return this.name;
  }
  addParcipant(parcipant: string) {
    this.parcipants.push(parcipant);
  }
  get Parcipants() {
    return this.parcipants;
  }

  get Id() {
    return this.id;
  }
}
