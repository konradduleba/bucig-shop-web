import { useState } from 'react';

export const useVisibleToggle = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible((prevState) => !prevState);
  };

  const hideVisibility = () => {
    setIsVisible(false);
  };

  const showVisibility = () => {
    setIsVisible(true);
  };

  return {
    isVisible,
    toggleVisibility,
    hideVisibility,
    showVisibility,
  };
};
