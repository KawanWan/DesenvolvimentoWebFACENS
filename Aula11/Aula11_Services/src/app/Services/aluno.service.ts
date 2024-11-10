import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aluno } from '../models/aluno';

@Injectable({
  providedIn: 'root'
})

export class AlunosService {
  API_URL: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  obterAlunos():Observable<Aluno[]> {
    return this.http.get<Aluno[]>(`${this.API_URL}/alunos`);
  }

  obterAlunoPorId(id: number):Observable<Aluno> {
    return this.http.get<Aluno>(`${this.API_URL}/alunos/${id}`);
  }

  salvarAluno(aluno: Aluno):Observable<Aluno> {
    return this.http.post<Aluno>(`${this.API_URL}/alunos/`, aluno);
  }

  editarAluno(aluno: Aluno):Observable<Aluno> {
    return this.http.put<Aluno>(`${this.API_URL}/alunos/${aluno.id}`, aluno);
  }

  excluirAluno(aluno: Aluno):Observable<Aluno> {
    return this.http.delete<Aluno>(`${this.API_URL}/alunos/${aluno.id}`);
  }
}