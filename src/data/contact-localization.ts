import type { Contact } from ‘../i18n/types’;

export function contactsForLanguage(
contacts: Contact[],
lang: string,
): Contact[] {
if (lang === ‘ru’) {
return contacts;
}

return contacts.flatMap((contact) => {
if (contact.id !== ‘max’) {
return [contact];
}

return [
  {
    id: 'instagram',
    label: 'Instagram',
    value: 'instagram.com/aaaaa',
    href: 'https://www.instagram.com/aaaaa',
    external: true,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'linkedin.com/in/aaaaa',
    href: 'https://www.linkedin.com/in/aaaaa',
    external: true,
  },
];

});
}
