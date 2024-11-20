export type Owner = {
  externalId: string;
  name: string;
  fullName: string;
  shortName: string;
};

export type ProgressStatus = {
  id: number;
  status: string;
  label: string;
  order: number;
};
export type SubStatus = {
  id: number;
  subStatus: string;
  label: string;
  order: number;
};
export type Lead = {
  id: string;
  name: string;
  personalId: string;
  mobilePhone: string;
  channel: string;
  product: string;
  amount: number;
  ccy: string;
  createDate: string;
};

export interface IDealsResponseObjectTypes {
  id: string;
  name: string;
  personalId: string;
  mobilePhone: string;
  channel: string;
  product: string;
  amount: number;
  ccy: string;
  comment?: string | null;
  createDate: string;
  owner?: Owner;
  dealStatus?: string;
  tags?: string[];
  progressStatus?: ProgressStatus | null;
  progressSubStatus?: SubStatus | null;
  leads?: Lead[];
}

export interface IDealsResponseTypes {
  content: IDealsResponseObjectTypes[];
  totalElements: number;
  totalPages: number;
}

export interface IDealsListParams {
  dealStatuses?: string;
  ownerExternalIds?: string[];
  pageNumber: number;
  pageSize: number;
  progressStatuses?: string;
  searchText?: string;
}

export interface Attribute {
  attributes: any;
  key: string;
  value: string;
}

export interface Deal {
  id: string;
  name: string;
  channel: string;
  product: string;
  amount: number;
  ccy: string;
  createDate: string;
  owner: Owner;
  subStatus: SubStatus;
  applicationSource: string;
  attributes: Attribute[];
}

export interface IActiveDealsObject {
  status: ProgressStatus;
  deals: Deal[];
}
export type IActiveDealsResponse = IActiveDealsObject[];

export interface IActivity {
  id: number;
  activityType: string;
  activityLabel: string;
  activityDate: string;
  comment: string;
  attributes: Attribute[];
}

export interface ISingleDealResponse {
  deal: IDealsResponseObjectTypes;
  activities: IActivity[];
}

export interface IStatusesObject {
  id: number;
  status: string;
  label: string;
  order: number;
}
export type IStatusesResponse = IStatusesObject[];

export interface IProductObject {
  productCode: string;
  name: string;
}
export type IProductResponse = IProductObject[];

export interface IBranchObject {
  branchId: string;
  branchDesc: string;
  branchEmail: string | null;
}

export type IBranchesResponse = IBranchObject[];
