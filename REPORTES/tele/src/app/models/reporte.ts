export class Reporte{
	constructor(
		public _id: string,
		public documento: string,
		public nombre: string,
		public apellido: string,
		public fechaIni: string,
		public fechaFin: string,
		public horaini: string,
		public horafin: string,
		public horaextraini: string,
		public horaextrafin: string
	){}
}