export interface IModifyData {
  productCode?: string;
  amount?: number;
  currency?: string;
}

export interface IActivityObject {
  activityType: string;
  comment?: string;
  attributes?: { key: string; value: string }[];
}
export interface IStatusChangeObject {
  status?: string;
}

export interface ITagsObject {
  tags?: string[];
}

export interface IRedirectObject {
  comment?: string;
  attributes: {
    BRANCH_ID?: string;
    COMMUNICATION_DATE?: string;
  };
}