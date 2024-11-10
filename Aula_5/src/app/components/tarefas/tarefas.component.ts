import { Component } from '@angular/core';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})
export class TarefasComponent {

  tarefas = [
    { descricao: 'Comprar mantimentos', concluida: false },
    { descricao: 'Enviar relatório', concluida: true },
    { descricao: 'Estudar Angular', concluida: false },
    { descricao: 'Lavar o carro', concluida: true },
    { descricao: 'Fazer exercícios', concluida: false }
  ];

  alternarTarefa(tarefa: any): void {
    tarefa.concluida = !tarefa.concluida;
  }
}
