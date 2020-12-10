import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app-root/app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MsalModule } from '@azure/msal-angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    MsalModule.forRoot({
      auth: {
        clientId: '', // This is your client ID,
        // redirectUri: 'http://localhost:4200/home'
      },
      // cache: {
      //   cacheLocation: 'localStorage',
      //   storeAuthStateInCookie: false, // Set to true for Internet Explorer 11
      // },
    },
    {
      popUp: true,
      consentScopes: [
        'user.read',
        'https://analysis.windows.net/powerbi/api/tenant.read.all'
      ],
      unprotectedResources: [],
      // protectedResourceMap: [
      //   ['https://graph.microsoft.com/v1.0/me', ['user.read']],
      //   ['v1.0/myohttps://api.powerbi.com/rg/admin/workspaces/modified', ['user.read']],
      //   ['https://wabi-staging-us-east-redirect.analysis.windows.net/v1.0/myorg/admin/workspaces/*', ['user.read']],
      // ],
      extraQueryParameters: {}
    })
,  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
