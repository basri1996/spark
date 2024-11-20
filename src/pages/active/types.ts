export interface ColumnCardTypes {
  name: string;
  product: string;
  amount: number;
  ccy: string;
  id: string;
}

export interface ActiveColumnTypes {
  label: string;
  deals: ColumnCardTypes[];
}
