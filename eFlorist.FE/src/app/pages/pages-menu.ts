import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Moje Konto',
    icon: 'nb-home',
    link: '/pages/myaccount',
    home: true,
  },
  {
    title: 'Zamówienia',
    icon: 'nb-paper-plane',
    link: '/pages/orderList',
  },
  {
    title: 'Admin',
    icon: 'nb-person',
    children: [
      {
        title: 'Bazy magazynowe',
        link: '/pages/forms/inputs',
      },
      {
        title: 'Kwiaciarnie',
        link: '/pages/forms/layouts',
      },
      {
        title: 'Użytkownicy',
        link: '/pages/forms/inputs',
      },
      {
        title: 'Uprawnienia użytkowników',
        link: '/pages/forms/inputs',
      },
      {
        title: 'Faktury',
        link: '/pages/forms/inputs',
      },
    ],
  },
  {
    title: 'Auth',
    icon: 'nb-locked',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
