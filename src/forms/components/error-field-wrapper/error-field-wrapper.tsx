import ErrorField from '../error-field/error-field';

export interface ErrorFieldWrapperProps {
  selectorName: string;
  message: string;
  className?: string;
}

export const ErrorFieldWrapper: React.FC<ErrorFieldWrapperProps> = ({
  message,
  className,
  selectorName,
}) => {
  return (
    <ErrorField
      data-testid={`errorFieldSelector-${selectorName}`}
      className={className}
    >
      {message}
    </ErrorField>
  );
};

export default ErrorFieldWrapper;
