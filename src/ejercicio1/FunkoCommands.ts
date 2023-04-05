import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { FunkoColeccion } from './FunkoColeccion';
import { Funko } from './Funko';


yargs(hideBin(process.argv))
  .command('add', 'Añadir un funko', {
  user: {
   description: 'Nombre de usuario',
   type: 'string',
   demandOption: true
  },
  id: {
   description: 'Funko ID',
   type: 'number',
   demandOption: true
  },
  name: {
    description: 'Funko Nombre',
    type: 'string',
    demandOption: true
  },
  desc: {
    description: 'Funko Descripcion',
    type: 'string',
    demandOption: true
  },
  type: {
    description: 'Funko Tipo',
    type: 'number',
    demandOption: true
  },
  gener: {
    description: 'Funko Genero',
    type: 'number',
    demandOption: true
  },
  franq: {
    description: 'Funko Franquicia',
    type: 'string',
    demandOption: true
  },
  num: {
    description: 'Funko Número Franquicia',
    type: 'number',
    demandOption: true
  },
  excl: {
    description: 'Funko Exclusivo',
    type: 'boolean',
    demandOption: true
  },
  carac: {
    description: 'Funko Caractericticas Especiales',
    type: 'string',
    demandOption: true
  },
  value: {
    description: 'Funko Valor Mercado',
    type: 'number',
    demandOption: true
  }

 }, (argv) => {
  let coleccion: FunkoColeccion = new FunkoColeccion(argv.user, []);
  let funko: Funko = new Funko(argv.id, argv.name, argv.desc, argv.type, argv.gener, argv.franq, argv.num, argv.excl, argv.carac, argv.value)
  coleccion.Add(funko);
 })


 .command('modify', 'Modificar un funko', {
  user: {
   description: 'Nombre de usuario',
   type: 'string',
   demandOption: true
  },
  id: {
   description: 'Funko ID',
   type: 'number',
   demandOption: true
  },
  name: {
    description: 'Funko Nombre',
    type: 'string',
    demandOption: true
  },
  desc: {
    description: 'Funko Descripcion',
    type: 'string',
    demandOption: true
  },
  type: {
    description: 'Funko Tipo',
    type: 'number',
    demandOption: true
  },
  gener: {
    description: 'Funko Genero',
    type: 'number',
    demandOption: true
  },
  franq: {
    description: 'Funko Franquicia',
    type: 'string',
    demandOption: true
  },
  num: {
    description: 'Funko Número Franquicia',
    type: 'number',
    demandOption: true
  },
  excl: {
    description: 'Funko Exclusivo',
    type: 'boolean',
    demandOption: true
  },
  carac: {
    description: 'Funko Caractericticas Especiales',
    type: 'string',
    demandOption: true
  },
  value: {
    description: 'Funko Valor Mercado',
    type: 'number',
    demandOption: true
  }

 }, (argv) => {
    let coleccion: FunkoColeccion = new FunkoColeccion(argv.user, []);
    let funko: Funko = new Funko(argv.id, argv.name, argv.desc, argv.type, argv.gener, argv.franq, argv.num, argv.excl, argv.carac, argv.value)
    coleccion.Modify(funko);
})

 
 .command('remove', 'Eliminar un funko', {
  user: {
   description: 'Nombre de usuario',
   type: 'string',
   demandOption: true
  },
  id: {
   description: 'Funko ID',
   type: 'number',
   demandOption: true
  }
 }, (argv) => {
    let coleccion: FunkoColeccion = new FunkoColeccion(argv.user, []);
    coleccion.Delete(argv.id);
 })


 .command('list', 'Listar todos los funkos', {
  user: {
   description: 'Nombre de usuario',
   type: 'string',
   demandOption: true
  }
 }, (argv) => {
    let coleccion: FunkoColeccion = new FunkoColeccion(argv.user, []);
    coleccion.List();
 })


 .command('show', 'Mostra un funko concreto', {
  user: {
   description: 'Nombre de usuario',
   type: 'string',
   demandOption: true
  },
  id: {
   description: 'Funko ID',
   type: 'number',
   demandOption: true
  }
 }, (argv) => {
    let coleccion: FunkoColeccion = new FunkoColeccion(argv.user, []);
    coleccion.Show(argv.id);
 })

 .help()
 .argv;