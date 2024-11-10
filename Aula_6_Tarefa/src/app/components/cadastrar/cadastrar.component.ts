import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent {
  cadastroRealizado: boolean = false;

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.cadastroRealizado = true;
    }
  }
}
