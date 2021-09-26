import { FuncionarioService } from "./funcionario.service";
import { LogService } from "./log.service";

export class FuncionarioAbreviadoService extends FuncionarioService {

  constructor(
    public logService: LogService,
    private criarFuncionarioService: number
  ) {
    super(logService);
  }

  addPerson(name: string): void {
    super.addPerson(name.substr(0, this.criarFuncionarioService) + "...");
  }

}
