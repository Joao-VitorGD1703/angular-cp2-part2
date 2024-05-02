import { Component } from '@angular/core';
import { IbgeService } from '../../service/ibge.service';
import { Estado } from '../../interfaces/Estados';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-ibge',
  standalone: true,
  imports: [ CommonModule, HeaderComponent],
  templateUrl: './ibge.component.html',
  styleUrl: './ibge.component.css'
})
export class IbgeComponent {
  estados: Estado[] = [];

  constructor(private ibgeService: IbgeService){}

  listar():void{
     this.ibgeService.listar().subscribe((estados) => {this.estados = estados});
  }
  ngOnInit(){
     this.listar();
  }
}
