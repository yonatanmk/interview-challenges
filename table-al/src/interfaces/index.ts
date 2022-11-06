export interface IPerson {
  id: string | number;
  name: string;
  phone: string;
  email: string;
  address: string;
  postalZip: string | number;
  country: string;
  linkText?: string;
  link?: ITableCellComponent;
}

export interface ITableColumn {
  name: string;
  index: number;
  field: keyof IPerson;
  component?: React.ComponentType<any>
}

export interface ITableCellComponent {
  props: {
    [key: string]: any;
  }
}