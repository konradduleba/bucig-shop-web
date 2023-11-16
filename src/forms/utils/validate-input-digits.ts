export const validateInputDigits =
  (maxNumberOfDigitsBeforeComma: number, maxNumberOfDigitsAfterComma: number) =>
  (inputValue = 0) => {
    const expression = `^\\d{0,${maxNumberOfDigitsBeforeComma}}(\\.\\d{1,${maxNumberOfDigitsAfterComma}})?$`;
    const regex = new RegExp(expression);

    return regex.test(String(inputValue));
  };
