import { ThemePalette } from '@angular/material/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
interface ICvSkillsProgressBar {
  name: string;
  value: number;
  bufferValue: number;
}
export class CvSkillsProgressBar implements ICvSkillsProgressBar {
  constructor(
    public name: string,
    public value: number,
    public bufferValue: number,
    public color: ThemePalette,
    public icon: IconProp
  ) {}
}

export class BannerInfo {
  constructor(private faIcon: IconProp, private text: string) {}

  get icon(): IconProp {
    return this.faIcon;
  }

  get data(): string {
    return this.text;
  }
}

export class SocialInfo {
  constructor(
    private socialLink: string,
    private socialIcon: IconProp,
    private socialIconColor: string,
    private socialId: string
  ) {}

	get color(): string {
		return this.socialIconColor;
	}

  get link(): string {
    return this.socialLink;
  }

  get icon(): IconProp {
    return this.socialIcon;
  }

  get id(): string {
    return this.socialId;
  }
}
