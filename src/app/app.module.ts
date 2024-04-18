import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { IndexComponent } from './index/index.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProductComponent } from './product/product.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MessageListComponent } from './chat/message-list/message-list.component';
import { ChatModule } from './chat/chat.module';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { Faren2CeliusPipe } from './faren2-celius.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    AboutUsComponent,
    ContactUsComponent,
    ProductComponent,
    PageNotFoundComponent,
    EmployeeDetailComponent,
    Faren2CeliusPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
