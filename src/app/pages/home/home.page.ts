import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DweetService } from 'src/app/services/dweet.service';
import Dweet from 'src/models/Dweet';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {

  public dweet: Dweet
  private time: any;
  public buzzerStatus: boolean = false;
  public ledColor: string;

  constructor(
    private router: Router,
    private dweetService: DweetService
  ) { }

  ngOnInit() {
    this.time = setInterval(() => { this.getLastDweets() }, 5000);
  }

  ngOnDestroy() {
    clearInterval(this.time)
  }

  private getLastDweets() {
    this.dweetService.loadLastDweets().subscribe(
      data => {
        this.dweet = this.dweetService.preencherDweet(data);
        this.buzzerStatus = this.dweet.with[0].content.$status_buzzer;
        this.ledColor = this.dweet.with[0].content.$current_color;
      },
      err => {
        console.log("Erro: ", err);
      }
    )
  }


  goToTempPage() {
    this.router.navigate(['/temperature']);
  }

  goToLumPage() {
    this.router.navigate(['/luminosidade']);
  }

  goToHumidityPage() {
    this.router.navigate(['/umidade']);
  }
}
