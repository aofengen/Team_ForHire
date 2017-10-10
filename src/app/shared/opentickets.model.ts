export class OpenTickets {
	constructor(
		public name: string, 
		public description: string,
		public issueSolved: boolean,
		public category: string,
		public instructor: string,
		public location: string,
		public time: string) {}
}
