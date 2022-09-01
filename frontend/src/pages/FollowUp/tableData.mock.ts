import { ICustomTableColumns, ICustomTableOptions } from "../../models/CustomTable";

export const columns: ICustomTableColumns[] = [
 { title: "DT. TAREFA", field: 'dtTarefa'  }, 
 { title: "DT. LIMITE", field: 'dtLimite'  }, 
 { title: "UNIDADE/CIDADE", field: 'locale'  }, 
 { title: "COD/SERV/OBS", field: 'codServObs'  }, 
 { title: "DESC. TAREFA", field: 'descTarefa'  }, 
];

export const data: Array<Object> = [
  { 
    dtTarefa: '21/04/2022', 
    dtLimite: '21/04/2022', 
    locale: 'Osasco - SP', 
    codServObs: "10", 
    descTarefa: "teste" 
  },
  { 
    dtTarefa: '21/04/2022', 
    dtLimite: '21/04/2022', 
    locale: 'Osasco - SP', 
    codServObs: "10", 
    descTarefa: "teste" 
  },
  { 
    dtTarefa: '21/04/2022', 
    dtLimite: '21/04/2022', 
    locale: 'Osasco - SP', 
    codServObs: "10",
    descTarefa: "teste" 
  },
  { 
    dtTarefa: '21/04/2022', 
    dtLimite: '21/04/2022', 
    locale: 'Osasco - SP', 
    codServObs: "10", 
    descTarefa: "teste" 
  },
  { 
    dtTarefa: '21/04/2022', 
    dtLimite: '21/04/2022', 
    locale: 'Osasco - SP', 
    codServObs: "10", 
    descTarefa: "teste" 
  },
];

export const options: ICustomTableOptions = {
  exportData: true,
  exportFileName: 'FollowUp',
}