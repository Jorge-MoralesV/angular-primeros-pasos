import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'ironMan';
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getheroDescription(): string {
    return `${this.name} - ${this.age}`
  }

  public changeHero(): void {
    this.name = 'SpiderMan'
  }

  public changeAge(): void {
    this.age = 25
  }

  public resetForm(): void {
    this.name = 'ironMan';
    this.age = 45;
    /* document.querySelectorAll('h1')!.forEach(element => {
      element.innerHTML = '<h1>Desde Angular</h1>'
    });; */
  }

}
