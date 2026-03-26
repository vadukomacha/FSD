import { Routes } from '@angular/router';
import { Profile } from './profile';
import { Home } from './home';

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
