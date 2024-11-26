export interface ColumnCardTypes {
  name: string;
  product: string;
  amount: number;
  ccy: string;
  id: string;
  attributes: { key: string; value: string }[];
  subStatus: {
    id: number;
    subStatus: string;
    label: string;
    order: number;
  };
}

export interface ActiveColumnTypes {
  label: string;
  deals: ColumnCardTypes[];
}
