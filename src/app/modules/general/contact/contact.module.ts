import { NgModule } from '@angular/core';
import { SharedModule } from "../../../shared/shared.module";
import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from "./contact.component";
import {MailingComponent} from "./mailing/mailing.component";

@NgModule({
  declarations: [
    ContactComponent,
    MailingComponent
  ],
  imports: [
    SharedModule,
    ContactRoutingModule,
  ],
  exports: [
    ContactComponent
  ],
})
export class ContactModule { }
