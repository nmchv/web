import type { Contact } from '../i18n/types';

export function contactsForLanguage(
contacts: Contact[],
lang: string,
): Contact[] {
if (lang === 'ru') {
return contacts;
}

return contacts.flatMap((contact) => {
if (contact.id !== 'max') {
return [contact];
}

return [
  {
    id: 'instagram',
    label: 'Instagram',
    value: '@alxnmchv',
    href: 'https://www.instagram.com/alxnmchv',
    external: true,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: '@nmchv',
    href: 'https://www.linkedin.com/in/nmchv',
    external: true,
  },
];

});
}
