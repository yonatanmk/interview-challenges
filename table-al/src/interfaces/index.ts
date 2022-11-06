export interface IPerson {
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
  field: string;
}

export interface ITableCell {
  text: string
}