import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MainPage } from '../pages/main/main';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { FirebaseProvider } from './../providers/firebase/firebase';

/*const firebaseConfig = {
    apiKey: "YOURKEY",
    authDomain: "domain.firebaseapp.com",
    databaseURL: "https://domain.firebaseio.com",
    projectId: "yourvalues",
    storageBucket: "dmaoin.appspot.com",
    messagingSenderId: "yourvalues"
  };*/
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MainPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    BrowserAnimationsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MainPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
