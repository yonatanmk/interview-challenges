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

export interface ITableHeaderRow extends IPerson {
  sortPredicate?: string;
  sortOrder?: ISortOrder;
}

// export interface ITableRow extends IPerson {
//   sortPredicate?: string;
//   sortOrder?: ISortOrder;
// }

export type ISortOrder = 'asc' | 'desc';

export interface ITableColumn {
  name: string;
  index: number;
  field: keyof IPerson;
  component?: React.ComponentType<any>;
  sortByFunction?: (row: IPerson) => any;
}

export interface ITableCellComponent {
  props: {
    [key: string]: any;
  }
}