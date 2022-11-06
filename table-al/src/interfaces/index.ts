export interface IPerson {
  id: string | number;
  name: string;
  phone: string;
  email: string;
  address: string;
  postalZip: string | number;
  country: string;
}

export interface ITableColumn {
  name: string;
  index: number;
  field: keyof IPerson;
}

export interface ITableCell {
  id: number;
  text: string;
}