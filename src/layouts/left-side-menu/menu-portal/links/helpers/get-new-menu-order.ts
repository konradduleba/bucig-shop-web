import { LinkIds, MenuLink } from '../links.types';

export const getNewMenuOrder = (menu: MenuLink[], activePhotoKey: LinkIds) => {
  const indexOfElement = menu.findIndex(({ id }) => id === activePhotoKey);

  if (indexOfElement === -1) {
    return menu;
  }
  const copyOfTheMenu = [...menu];

  const selectedElement = copyOfTheMenu[indexOfElement];

  copyOfTheMenu.splice(indexOfElement, 1);

  copyOfTheMenu.push(selectedElement);

  return copyOfTheMenu;
};
