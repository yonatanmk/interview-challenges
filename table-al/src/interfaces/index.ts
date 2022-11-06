export interface IPerson {
  id: string | number;
  name: string;
  phone: string;
  email: string;
  address: string;
  postalZip: string | number;
  country: string;
  link?: ITableCellComponent;
  accepted?: ITableCellComponent;
}

export interface ISong {
  id: string | number;
  name: string;
  artist: string,
  album?: string,
  duration: number,
  liked?: ITableCellComponent;
}

export interface ITableHeaderRow extends IPerson {
  sortPredicate?: string;
  sortOrder?: ISortOrder;
}

// export interface ITableRow extends IPerson {
//   sortPredicate?: string;
//   sortOrder?: ISortOrder;
// }

export type ISortOrder = 'asc' | 'desc';

export interface ITableColumn<T> {
  name: string;
  index: number;
  // field: keyof T;
  field: string;
  component?: React.ComponentType<any>;
  sortByFunction?: (row: IPerson) => any;
  formatFunction?: (value: any) => number | string;
}

export interface ITableCellComponent {
  props: {
    [key: string]: any;
  }
}