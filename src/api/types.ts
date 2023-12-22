export interface GraphqlResponse<DataType> {
  [key: string]: {
    data: {
      attributes: DataType;
    };
  };
}
