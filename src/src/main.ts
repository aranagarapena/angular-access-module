import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { WelcomeComponent } from './app/pages/welcome/welcome.component';
import { provideRouter, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: WelcomeComponent }, // Página de inicio
];

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)
  ],
}).catch(err => console.error(err));