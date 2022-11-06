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
  renderComponent?: boolean;
}

export interface ITableCell {
  id: number;
  text: string;
}

export interface ITableCellComponent {
  component: React.ComponentType<any>;
  props: {
    [key: string]: any;
  }
}