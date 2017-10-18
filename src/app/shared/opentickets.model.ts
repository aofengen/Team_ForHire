export class OpenTickets {
	constructor(
		public studentName: string, 
		public description: string,
		public issueSolved: boolean,
		public category: string,
		public instructor: string,
		public location: string,
		public time: string,
		public id: string
	) {}
}
