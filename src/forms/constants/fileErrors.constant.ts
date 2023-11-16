enum FileErrorType {
  FileTooLarge = 'file-too-large',
  FileInvalidType = 'file-invalid-type',
}

export const fileErrorLookup: {
  [key: string]: {
    translationKey: string;
  };
} = {
  [FileErrorType.FileTooLarge]: {
    translationKey: 'WEB_generic.validation.file.tooLarge',
  },
  [FileErrorType.FileInvalidType]: {
    translationKey: 'WEB_generic.validation.file.invalidType',
  },
};
