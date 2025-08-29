import { Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = new AuthService(new Router());
  if (authService.isLoggedIn()) {
    return true;
  } else {
    window.alert('You must be logged in to access this page.');
    return false;
  }
};
