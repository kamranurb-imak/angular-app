import { Routes } from '@angular/router';
import { CounterComponent } from './counter/counter';
import { LoginComponent } from './login/login';
import { TodoListComponent } from './todo-list/todo-list';
import { HomeComponent } from './home/home';
import { PageNotFoundComponent } from './page-not-found/page-not-found';
import { Profile } from './profile/profile';
import { ReactiveFormComponent } from './reactive-form/reactive-form';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form';
import { UserParentComponent } from './user-parent-component/user-parent-component';
import { InventoryComponent } from './inventory/inventory';
import { PipesComponent } from './pipes-component/pipes';
import { LifeCycleHooksComponent } from './life-cycle-hooks/life-cycle-hooks';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'counter', component: CounterComponent},
    {path: 'login', component: LoginComponent},
    {path: 'todo-list', component: TodoListComponent},
    {path: 'profile', component: Profile},
    {path: 'reactive-form', component: ReactiveFormComponent},
    {path: 'template-driven-form', component: TemplateDrivenFormComponent},
    
    //Eager Lading - user component module will be loaded when app loads, even if user does not navigate to /users route
    //{path: 'users', component: UserParentComponent}, 
    
    //lazy loading - user component module will be loaded only when user navigates to /users route
    {path: 'users', loadComponent: () => import('./user-parent-component/user-parent-component').then(m => m.UserParentComponent)},
    
    {path: 'inventory', component: InventoryComponent},
    {path: 'pipes', component: PipesComponent},
    {path: 'life-cycle-hooks', component: LifeCycleHooksComponent},
    {path: '', component: TodoListComponent},
    {path: '**', component: PageNotFoundComponent}
];
