import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';


const routes: Routes = [
  { path: ':language?', component: HomeComponent },
  { path: ':language?/proyectos', component: ArchiveComponent },
  { path: ':language?/pokemon', component: PokemonComponent },
  { path: 'inicio', component: HomeComponent },

  { path: '**', pathMatch: 'full', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
