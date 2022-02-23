import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SignComponent } from './components/sign/sign.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LibraryComponent } from './components/library/library.component';
import { GamesComponent } from './components/games/games.component';

import { FormsModule } from '@angular/forms';

import {Routes, RouterModule} from '@angular/router';
import { FriendsComponent } from './components/friends/friends.component';

import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import { FriendCardComponent } from './friend-card/friend-card.component';
import { MyGameCardComponent } from './components/my-game-card/my-game-card.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { ShareDownloadButtonsComponent } from './components/buttons/share-download-buttons/share-download-buttons.component';
import { AddToLibraryButtonsComponent } from './components/buttons/add-to-library-buttons/add-to-library-buttons.component';
import { AuthGuardGuard } from './guards/auth-guard.guard';
import { SignGuard } from './guards/sign.guard';
import { InputComponent } from './components/input/input.component';
import { ZeroItemsComponent } from './components/zero-items/zero-items.component';

const appRoutes: Routes =[
  { path: '', redirectTo: 'sign', pathMatch: 'full'},
  { path: 'sign', component: SignComponent, canActivate: [SignGuard]},
  { path: 'games', component: GamesComponent,     canActivate: [AuthGuardGuard]},
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardGuard] },
  { path: 'library', component: LibraryComponent, canActivate: [AuthGuardGuard] },
  { path: 'friends', component: FriendsComponent, canActivate: [AuthGuardGuard] }

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignComponent,
    ProfileComponent,
    LibraryComponent,
    GamesComponent,
    FriendsComponent,
    FriendCardComponent,
    MyGameCardComponent,
    WrapperComponent,
    ShareDownloadButtonsComponent,
    AddToLibraryButtonsComponent,
    InputComponent,
    ZeroItemsComponent,

  ],
  imports: [
   
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([AppEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
