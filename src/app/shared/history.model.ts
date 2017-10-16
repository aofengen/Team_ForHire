export class HistoryModel {
	constructor(
		public name: string, 
		public solution: string, 
		public description: string, 
		public issueSolved: boolean,
		public solvedBy: string,
		public time: string) {}
}