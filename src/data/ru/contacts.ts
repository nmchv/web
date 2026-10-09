import type { Contact } from '../../i18n/types';

// Контакты пока не предоставлены, поэтому секция и пункт меню «Контакты» не выводятся.
// Пример:
// { id: 'email', label: 'Почта', value: 'name@example.com', href: 'mailto:name@example.com' },
// { id: 'github', label: 'GitHub', value: 'github.com/user', href: 'https://github.com/user', external: true },
export const contacts: Contact[] = [];
