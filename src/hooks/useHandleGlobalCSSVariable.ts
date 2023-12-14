import { useEffect, useState } from 'react';

export const useHandleGlobalCSSVariable = () => {
  const [root, setRoot] = useState<HTMLElement | null>(null);

  const setGlobalCSSVariable = (variableName: string, value: string) => {
    if (!root) {
      return;
    }

    root.style.setProperty(variableName, value);
  };

  const getGlobalCSSVariable = (variableName: string) => {
    if (!root) {
      return;
    }

    const { getPropertyValue } = getComputedStyle(root);

    return getPropertyValue(variableName);
  };

  useEffect(() => {
    const getRootDocument = () => {
      const root = document.querySelector(':root') as HTMLElement;

      root && setRoot(root);
    };

    getRootDocument();
  }, []);

  return {
    getGlobalCSSVariable,
    setGlobalCSSVariable,
  };
};
