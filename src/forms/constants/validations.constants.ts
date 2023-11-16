export const MAX_STREET_LENGTH = 60;
export const MAX_COMPANY_HEADQUARTERS_STREET_LENGTH = 80;
export const MAX_HOUSE_NUMBER_LENGTH = 20;
export const MAX_FLAT_NUMBER_LENGTH = 30;
export const MAX_ZIP_CODE_LENGTH = 10;
export const MAX_CITY_LENGTH = 50;
export const MAX_DELIVERY_INSTRUCTIONS_LENGTH = 1024;
export const MAX_PHONE_NUMBER_LENGTH = 27;
export const MAX_EMAIL_LENGTH = 255;
export const MAX_INVOICES_EMAIL_LENGTH = 255;
export const MAX_FIRST_NAME_LENGTH = 50;
export const MAX_LAST_NAME_LENGTH = 50;
export const MAX_COMPANY_NAME = 255;
export const MAX_REFERENCE_LENGTH = 80;
export const MAX_COMMENT_LENGTH = 255;
export const MAX_DELIVERY_REVIEW_COMMENT_LENGTH = 1024;
export const MAX_ADDITIONAL_INFO_LENGTH = 50;
export const MAX_INVESTMENT_NAME_LENGTH = 100;
export const MAX_CUSTOMER_NAME_LENGTH = 100;
export const MAX_ADDRESS_NAME_LENGTH = 100;
export const MAX_JOB_TITLE_LENGTH = 100;
export const MIN_ROLES_LENGTH = 1;
export const MIN_REASONS_LENGTH = 1;
export const MIN_ORDERS_LENGTH = 1;
export const MAX_BANK_NAME = 255;
export const MAX_SWIFT_CODE = 11;
export const MAX_IBAN = 32;
export const MAX_ACCOUNT_NUMBER = 30;
export const MAX_VAT_NUMBER_LENGTH = 32;
export const MAX_INVOICE_NUMBER_LENGTH = 25;
export const MAX_INVOICE_PAYMENT_METHOD_LENGTH = 100;
export const MAX_INVOICE_PLACE_OF_ISSUE_LENGTH = 100;
export const MAX_INVOICE_DESCRIPTION_LENGTH = 1024;
export const MAX_INVOICE_CORRECTION_REASON_LENGTH = 255;
export const MAX_INVOICE_EMAIL_MESSAGE_LENGTH = 500;

// for phone number used for system processes
export const PHONE_STRICT_REGEX = /^\+[0-9]{1,3}\([A-Z]{2}\)\.[\s\-0-9]+$/;
export const PHONE_STRICT_REGEX_WITHOUT_PREFIX = /^[\s\-0-9]+$/;
// phone strict validation + optional
export const PHONE_STRICT_OPTIONAL_REGEX =
  /^$|^\+[0-9]{1,3}\([A-Z]{2}\)\.[\s\-0-9]+$/;
export const PHONE_STRICT_OPTIONAL_REGEX_WITHOUT_PREFIX = /^$|^[\s\-0-9]+$/;
// for manual contact
export const PHONE_FREE_REGEX =
  /^\+[0-9]{1,3}\([A-Z]{2}\)\.[?<=.\s*#\-()0-9]+$/;
export const PHONE_FREE_REGEX_WITHOUT_PREFIX = /^[?<=.\s*#\-()0-9]+$/;
// phone free validation + optional
export const PHONE_FREE_OPTIONAL_REGEX =
  /^$|^\+[0-9]{1,3}\([A-Z]{2}\)\.[?<=.\s*#\-()0-9]+$/;
export const PHONE_FREE_OPTIONAL_REGEX_WITHOUT_PREFIX =
  /^$|^[?<=.\s*#\-()0-9]+$/;
