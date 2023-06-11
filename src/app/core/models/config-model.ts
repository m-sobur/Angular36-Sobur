export class ConfigModel {
  id?: number;
  login?: string;
  email?: string;

  constructor(config: Partial<ConfigModel>) {
    Object.assign(this, config);
  }
}
