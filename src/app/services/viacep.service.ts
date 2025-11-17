import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ViaCep } from "../models/viacep.model";

@Injectable({
  providedIn: "root",
})

export class ViaCepService {
    private apiUrl = "https://viacep.com.br/ws/";

  
    constructor(private http: HttpClient) {}
    getEndereco(cep: string): Observable<ViaCep> {
        return this.http.get<ViaCep>('${this.apiUrl}/${cep}/json');
    }    
    
    
}