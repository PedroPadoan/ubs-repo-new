import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Paciente } from '../model/paciente';
import { PacienteService } from '../service/paciente.service';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css',
  providers: [PacienteService]
})
export class CadastroComponent {
  public obj: Paciente = new Paciente();
  public mensagem: string = "";

  constructor(private service: PacienteService) { }

  public salvar(){
    this.service.salvar(this.obj).subscribe({
      next:(data)=>{this.mensagem="cliente inserido com sucesso!";},
      error:(msg)=>{this.mensagem="ocorreu erro tente mais tarde!";}

    });
    this.limpar();
  }

  public limpar(){
    this.obj = new Paciente();
  }
}
