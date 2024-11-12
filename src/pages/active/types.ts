export interface ColumnCardTypes {
  name: string;
  product: string;
  amount: number;
  ccy: string;
}

export interface ActiveColumnTypes {
  label: string;
  deals: ColumnCardTypes[];
}
