import { Image, Link } from '@types';
import { DataAttributes } from '@api';

interface OpenHours {
  day: string;
  from: string;
  to: string;
}

interface Localization {
  href: Link['href'];
  street: string;
  postCode: string;
  city: string;
}

interface GeneralAttributes<ImageType> {
  companyName: string;
  logo: ImageType;
  email: string;
  phoneNumber: string;
  openHours: OpenHours[];
  localization: Localization;
}

export type General = GeneralAttributes<Image>;

export type GeneralAPIResponse = GeneralAttributes<DataAttributes<Image>>;
