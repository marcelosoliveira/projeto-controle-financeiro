import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

import { LazyLoadEvent } from 'primeng/api';
import { LancamentoService } from '../lancamento.service';

@Component({
  selector: 'app-lancamentos-grid',
  templateUrl: './lancamentos-grid.component.html',
  styleUrls: ['./lancamentos-grid.component.css']
})
export class LancamentosGridComponent implements OnInit {

  @Input()
  public lancamentos: any = [];

  @Input()
  public itensPagina: number = 0;

  @Input()
  public totalRegistros: number = 0;

  @Output()
  public pagina = new EventEmitter<number>();

  @Output()
  public delete = new EventEmitter<number>();

  constructor(private lancamentoService: LancamentoService) { }

  ngOnInit(): void {
  }

  proximaPagina(event: LazyLoadEvent) {
    const { first, rows } = event
    this.pagina.emit(Number(first) / Number(rows));
  }

  deleteLancamento(codigo: number): void {
    this.delete.emit(codigo);
  }

}
