export class HistoryModel {
	constructor(
		public studentName: string,
		public name: string, 
		public solution: string, 
		public description: string, 
		public issueSolved: boolean,
		public solvedBy: string,
		public createTime: string,
		public finishTime: string) {}
}