import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appName: string = 'Meu Aplicativo';

  menuItems: string[] = ['Home', 'Sobre', 'Contato'];

  index: number = 1;

  card = {
    title: 'Card 1',
    description: 'This is the content of card 1.',
    image: `https://picsum.photos/id/102${this.index}/600/400`
  };

  formTitle: string = '';
  formDescription: string = '';

  onSubmit() {
    this.card.description = this.formDescription;
  }

  changeImage() {
    this.index++;
    this.card.image = `https://picsum.photos/id/102${this.index}/600/400`;
  }
}
