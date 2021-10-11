import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';

@Component({
  selector: 'app-pessoas-grid',
  templateUrl: './pessoas-grid.component.html',
  styleUrls: ['./pessoas-grid.component.css']
})
export class PessoasGridComponent implements OnInit {

  @Input()
  public pessoas: any = [];

  @Input()
  public totalRegistros: number = 0;

  @Input()
  public itensPaginas: number = 0;

  @Output()
  public pagina = new EventEmitter<number>();

  @Output()
  public delete = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  proximaPagina(event: LazyLoadEvent) {
    const { first, rows } = event
    this.pagina.emit(Number(first) / Number(rows));
  }

  deletePessoa(codigo: number): void {
    this.delete.emit(codigo);
  }

}
