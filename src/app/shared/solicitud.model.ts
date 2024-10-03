export class SolicitudModel {
    constructor(
      public id: string,
      public pet_id: string,
      public adopter_id: string,
      public request_date: string,
      public status: string,
      public approval_date: string,
      public employee_id: string
    ) {}
  }
  

