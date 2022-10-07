import { Injectable } from '@angular/core';
import { Aluno } from '../types/Aluno';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_PATH } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  private baseURL = API_PATH

  constructor(private http: HttpClient) { }

  remove(id: number){
    return this.http.delete<Aluno>(`${this.baseURL}alunos/${id}`)
  }

  getAll(): Observable<Aluno[]>{
    //Requisição http retorna um Observable
    //recebo http pelo constructor .metodo<genéric do que vou receber>
    //Fica observando se esse genéric (no caso array de alunos) chega
    return this.http.get<Aluno[]>(this.baseURL+"alunos")
  }

  getById(id: number): Observable<Aluno>{
    //Erro 400
    return this.http.get<Aluno>(`${this.baseURL}alunos/${id}`)
  }
}
