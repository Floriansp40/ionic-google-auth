import { Component } from '@angular/core';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth'
import { isPlatform } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user:any = null

  constructor() {
    if(!isPlatform('capacitor')){
      GoogleAuth.initialize()
    }
  }

  async signIn(){
    this.user = await GoogleAuth.signIn()
    console.log('user', this.user)
  }

  async refresh(){
    const authCode = await GoogleAuth.refresh()
    console.log('refresh', authCode)
  }

  async signOut(){
    await GoogleAuth.signOut()
    this.user = null
  }

}
