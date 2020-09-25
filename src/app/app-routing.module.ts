import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { ProfileComponent } from './profile/profile.component';
import { ChatComponent } from './chat/chat.component';
import { CreateComponent } from './create/create.component';
import { BlockComponent } from './block/block.component';
import { ListProductsComponent } from './list-products/list-products.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'account', component: AccountComponent},
  {path: 'chat', component: ChatComponent},
  {path: 'create', component: CreateComponent},
  {path: 'block', component: BlockComponent},
  {path: 'list', component: ListProductsComponent},
  {path: 'profile', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
