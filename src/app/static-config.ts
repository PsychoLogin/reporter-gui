export class StaticConfig {
  penaltyErrorLevel: number;
  penaltyWarningLevel: number;
  minimumNumberLogins: number;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
