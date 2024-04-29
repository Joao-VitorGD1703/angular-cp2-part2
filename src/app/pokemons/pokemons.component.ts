import { Component, OnInit } from '@angular/core';
import { MokeService } from '../service/moke.service';

@Component({
  selector: 'app-pokemons',
  standalone: true,
  imports: [],
  templateUrl: './pokemons.component.html',
  styleUrl: './pokemons.component.css'
})
export class PokemonsComponent implements OnInit {

  mockData: any
  constructor(private mockService: MokeService) { }

  ngOnInit(): void {
      this.mockService.getData().subscribe(data =>{
        this.mockData=data;
        console.log(this.mockData);
      })
  }
}
