import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { TimconsalComponent } from './timconsal/timconsal.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegistrationComponent } from './registration/registration.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { CertificateComponent } from './certificate/certificate.component';
import { ContactService } from './contact.service';
import { CertificateService } from './certificate.service';
import { TripsComponent } from './trips/trips.component';
import { TripsService } from './trips.service';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ArtsComponent } from './arts/arts.component';
import { ArtsService } from './arts.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactsComponent,
    TimconsalComponent,
    NavigationComponent,
    AttendanceComponent,
    NotFoundComponent,
    RegistrationComponent,
    FooterComponent,
    CarouselComponent,
    AboutMeComponent,
    FeedbackComponent,
    CertificateComponent,
    TripsComponent,
    ArtsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'attendance', component: NavigationComponent },
      { path: 'contacts', component: ContactsComponent },
      { path: 'consalting', component: TimconsalComponent },
      { path: 'services', component: AttendanceComponent },
      { path: 'registration', component: RegistrationComponent },
      { path: 'about', component: AboutMeComponent },
      { path: 'trips', component: TripsComponent },
      { path: 'arts', component: ArtsComponent },
      { path: 'feedBack', component: FeedbackComponent },
      { path: 'certificate', component: CertificateComponent },
      { path: '**', component: NotFoundComponent },

    ]),
    InfiniteScrollModule,

  ],
  providers: [ContactService, CertificateService, TripsService, ArtsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
