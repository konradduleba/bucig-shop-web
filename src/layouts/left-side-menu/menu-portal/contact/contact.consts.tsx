import { ROUTES } from '@utils';

import { ContactContent, ContactIds } from './contact.types';

import { Hours, Localization, Mail, Phone, WriteMessage } from './fields';

export const ICON_FONT_SIZE: number = 34;

export const CONTACT_INFO_ELEMENTS: ContactContent[] = [
  {
    id: ContactIds.MAIL,
    href: 'mailto:kon.duleba@gmail.com',
    external: true,
    children: <Mail />,
  },
  {
    id: ContactIds.PHONE,
    href: 'tel:+48123456789p000',
    external: true,
    children: <Phone />,
  },
  {
    id: ContactIds.HOURS,
    href: 'https://www.google.com/search?q=zak%C5%82ad+optyczny+pawel+budzik+bochnia&sca_esv=577601299&rlz=1C5CHFA_enPL995PL995&sxsrf=AM9HkKl5ItxiV48jKyzLd2EmMBAraET4JA%3A1698581457148&ei=0Us-ZZ_dCKnSwPAPwfCasAQ&ved=0ahUKEwjfiYCDnZuCAxUpKRAIHUG4BkYQ4dUDCBA&uact=5&oq=zak%C5%82ad+optyczny+pawel+budzik+bochnia&gs_lp=Egxnd3Mtd2l6LXNlcnAiJXpha8WCYWQgb3B0eWN6bnkgcGF3ZWwgYnVkemlrIGJvY2huaWEyBRAAGKIESJMJULUDWPwGcAJ4AZABAJgBrQGgAZQEqgEDNC4xuAEDyAEA-AEBwgIKEAAYRxjWBBiwA8ICBBAhGAriAwQYACBBiAYBkAYI&sclient=gws-wiz-serp#ip=1',
    external: true,
    children: <Hours />,
  },
  {
    id: ContactIds.LOCALIZATION,
    href: 'https://www.google.com/maps/dir/50.0371601,19.9846769/zak%C5%82ad+optyczny+pawel+budzik+bochnia/@49.99968,19.8894404,10z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x47163bc858bac631:0x58f06cd42c4ba73c!2m2!1d20.432047!2d49.969209?entry=ttu',
    external: true,
    children: <Localization />,
  },
  {
    id: ContactIds.MESSAGE,
    href: ROUTES.MESSAGE_US(),
    children: <WriteMessage />,
  },
];
