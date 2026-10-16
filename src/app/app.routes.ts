import { Routes } from '@angular/router';
import { Main } from './pages/main/main';
import { Projects } from './pages/projects/projects';
import { Rap } from './pages/rap/rap';

export const routes: Routes = [
    {'path': '', 'redirectTo': 'home', 'pathMatch': 'full' },
    {'path': 'home', component: Main},
    {'path': 'projects', component: Projects},
    {'path': 'rap', component: Rap}, 
    {'path': '**', 'redirectTo': 'home', 'pathMatch': 'full' }
];
