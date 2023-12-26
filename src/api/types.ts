import { Metadata } from 'next';

export interface DataAttributes<DataType> {
  data: {
    attributes: DataType;
  };
}

export interface GraphqlResponse<DataType> {
  [key: string]: DataAttributes<DataType>;
}

export type ExtractSeoType<DataType> = DataType & {
  seo: Metadata;
};
