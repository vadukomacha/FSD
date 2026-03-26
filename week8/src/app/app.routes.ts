import { Routes } from '@angular/router';
import { Home } from './home';
import { Profile } from './profile';

export const routes: Routes = [
    {
        path: '',
        component: Home,
        title: 'Home',
    },
    {
        path: 'profile',
        component: Profile,
        title: 'Profile',
    },
];
