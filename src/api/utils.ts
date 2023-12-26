import { gql } from 'graphql-request';

import { Locales } from '@i18n';

import { Image } from '@types';

import {
  QueryKey,
  DataAttributes,
  GraphqlResponse,
  ExtractSeoType,
} from '@api';
import { Metadata } from 'next';

const updateImageSrc = (image: Image): Image => {
  const imageSrc = `${process.env.NEXT_PUBLIC_API_URL_ASSETS}${image.url}`;

  return {
    ...image,
    url: imageSrc,
  };
};

export const extractAttributesFromGraphqlData = <AttributesType>(
  key: QueryKey,
  data: GraphqlResponse<AttributesType> | undefined,
): AttributesType | undefined => {
  if (!data || !data[key] || !data[key].data) {
    return undefined;
  }
  return data[key].data.attributes;
};

export const extractImageAttributesFromGraphqlData = (
  data: DataAttributes<Image>,
) => {
  if (!data) {
    return undefined;
  }

  return updateImageSrc(data.data.attributes);
};

export const extractSeoMetadata = <DataType>(
  queryKey: QueryKey,
  data: GraphqlResponse<ExtractSeoType<DataType>>,
): Metadata | undefined => {
  const attributes = extractAttributesFromGraphqlData(queryKey, data);

  if (!attributes) {
    return undefined;
  }

  return attributes.seo;
};

export const createGraphqlGetQuery = (
  key: QueryKey,
  attributes: string,
  locale: Locales,
) => {
  return gql`
  query {
    ${key}(locale: "${locale}") {
      data {
        attributes {
          locale
          ${attributes}
        }
      }
    }
  }
`;
};

export const createGraphqlGetQueryWithoutLocale = (
  key: QueryKey,
  attributes: string,
) => {
  return gql`
  query {
    ${key} {
      data {
        attributes {
          ${attributes}
        }
      }
    }
  }
`;
};

export const getImageAttributes = (key: string) => {
  return `
      ${key} {
        data {
          attributes {
            url
          }
        }
      }
    `;
};

export const getSeoAttributes = () => {
  return `
    seo {
      title
      description
    }
  `;
};
