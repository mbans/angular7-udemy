export class InstrumentRequestSearchCriteria {

    code?: string;
    type?: string;
    status?: string;
    user?: string;
    from?: Date;
    to?: Date;

    constructor() {
    }

    // public isEmpty(): boolean {
    //    return this.empty(this.code) &&
    //    this.empty(this.type) &&
    //    this.empty(this.status) &&
    //    this.empty(this.user) &&
    //    this.from === undefined &&
    //    this.to === undefined;
    // }

    // public empty(value): boolean {
    //   return value === '' || value === undefined;
    // }

  }
