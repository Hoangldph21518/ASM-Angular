import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAddComponent } from './pages/admin/admin-add/admin-add/admin-add.component';
import { AdminEditComponent } from './pages/admin/admin-edit/admin-edit/admin-edit.component';
import { AdminProductComponent } from './pages/admin/admin-product/admin-product/admin-product.component';


const routes: Routes = [
      { path: "product", component: AdminProductComponent },
      { path: "product/add", component:AdminAddComponent  },
      { path: "product/:id/edit", component: AdminEditComponent },
  // { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
