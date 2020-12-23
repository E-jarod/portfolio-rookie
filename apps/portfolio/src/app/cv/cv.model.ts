interface ICvSkillsProgressBar {
	name: string;
	value: number;
	bufferValue: number;
}

export class CvSkillsProgressBar implements ICvSkillsProgressBar{
	constructor(
		public name: string,
		public value: number,
		public bufferValue: number
	) {}
}
