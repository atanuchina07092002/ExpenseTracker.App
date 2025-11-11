import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { SignUp } from './components/sign-up/sign-up';
import { TransactionList } from './components/transaction-list/transaction-list';
import { TransactionForm } from './components/transaction-form/transaction-form';
import { authGurd } from './Gurds/auth.gurd';

export const routes: Routes = [
    {
    path: 'login',
    component: Login,
  },
  {
    path: 'signup',
    component: SignUp,
  },
  {
    path: 'transaction',
    component: TransactionList,
    canActivate: [authGurd],
  },
  {
    path: 'add',
    component: TransactionForm,
    canActivate: [authGurd],
  },
  {
    path: 'edit/:id',
    component: TransactionForm,
    canActivate: [authGurd],
  },
  {
    path: '',
    component: TransactionList,
  },
  {
    path: '**',
    redirectTo: '/transaction',
  },
];
