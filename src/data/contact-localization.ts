import type { Contact } from '../i18n/types';

export function contactsForLanguage(contacts: Contact[], lang: string): Contact[] {
  if (lang === 'ru') return contacts;

  return contacts.map((contact) =>
    contact.id === 'max'
      ? {
          id: 'instagram',
          label: 'Instagram',
          value: 'instagram.com/alxnmchv',
          href: 'https://www.instagram.com/alxnmchv/',
          external: true,
        }
      : contact,
  );
}
