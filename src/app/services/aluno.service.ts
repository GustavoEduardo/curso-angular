import { Injectable } from '@angular/core';
import { Aluno } from '../types/Aluno';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  //viria de um arquivo de configuração
  private baseURL = "http://localhost:3000/"

  constructor(private http: HttpClient) { }

  remove(id: number){
    return this.http.delete<Aluno>(`${this.baseURL}alunos/${id}`)
  }

  getAll(): Observable<Aluno[]>{
    //Requisição http
    //recebo http pelo constructor .metodo<genéric doque vao receber>
    //Fica observando se esse genéric (no caso array de alunos) chega
    return this.http.get<Aluno[]>(this.baseURL+"alunos")
  }

  getById(id: number): Observable<Aluno>{
    //Erro 400
    return this.http.get<Aluno>(`${this.baseURL}alunos/${id}`)
  }
}
