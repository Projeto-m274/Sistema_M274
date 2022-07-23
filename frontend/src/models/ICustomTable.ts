export interface ICustomTableColumns {
  title: string;
  field: string;
};

export interface ICustomTableOptions {
  exportData?: boolean;
  exportFileName?: string;
}

export interface ICustomTableProps {
  title: string;
  columns: Array<ICustomTableColumns>;
  data: Array<Object>;
  options?: ICustomTableOptions;
};