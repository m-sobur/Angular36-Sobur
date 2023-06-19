import { Injectable } from '@angular/core';
import { ConfigModel } from '../models/config-model';

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {
  private config!: ConfigModel;

  setConfig(config: Partial<ConfigModel>): void {
    this.config = { ...this.config, ...config };
  }

  setConfigProperty(key: keyof ConfigModel, value: ConfigModel[keyof ConfigModel]): void {
    this.config = { ...this.config, [key]: value };
  }

  getConfig(): ConfigModel {
    return this.config;
  }

  constructor() { }
}
