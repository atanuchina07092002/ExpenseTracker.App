import { inject } from '@angular/core';
import { User } from '../services/user';
import { Router } from '@angular/router';

export const authGurd = () => {
  const authServise = inject(User);
  const router = inject(Router);

  if (authServise.isCredential()) {
    return true;
  }

  router.navigate(['/transaction']);

  return false;
};
