import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminProductComponent } from './pages/admin/admin-product/admin-product/admin-product.component';
import { AdminAddComponent } from './pages/admin/admin-add/admin-add/admin-add.component';
import { AdminEditComponent } from './pages/admin/admin-edit/admin-edit/admin-edit.component';

// decorators typescript
@NgModule({
  declarations: [
    AppComponent,
    AdminProductComponent,
    AdminAddComponent,
    AdminEditComponent
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
