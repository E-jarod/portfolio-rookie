interface ICard {
  title: string;
  cols: number;
  rows: number;
}

export class Card implements ICard {
  constructor(
    public title: string,
    public cols: number,
    public rows: number,
    public content?: string
  ) {}
}

export class Skill {
  constructor(
    public color: string,
    public value: number,
    public bufferValue: number
  ) {}
}

export class SkillCard implements ICard {
  constructor(
    public title: string,
    public cols: number,
    public rows: number,
    public skill: Skill
  ) {}
}
