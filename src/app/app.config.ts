import { OpaqueToken } from "@angular/core";

export let APP_CONFIG = new OpaqueToken("app.config");

export interface IAppConfig {
    msgTimeout: number;
}

export const AppConfig: IAppConfig = {    
    msgTimeout: 4000    
};