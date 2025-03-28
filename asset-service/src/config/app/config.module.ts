import * as Joi from 'joi'
import { Module } from '@nestjs/common'
import configuration from './configuration'
import { AppConfigService } from './config.service'
import { ConfigModule, ConfigService } from '@nestjs/config'

/**
 * Import and provide app configuration related classes.
 *
 * @module
 */

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      validationSchema: Joi.object({
        APP_NAME: Joi.string().default('MyApp'),
        APP_ENV: Joi.string()
          .valid('development', 'production', 'test', 'provision')
          .default('development'),
        APP_URL: Joi.string().default('http://my-app.test'),
        APP_PORT: Joi.number().default(9000),
        APP_SERVICE_HOST: Joi.string().default('localhost'),
        APP_SERVICE_PORT: Joi.number().default(3001)
      })
    })
  ],
  providers: [ConfigService, AppConfigService],
  exports: [ConfigService, AppConfigService]
})


export class AppConfigModule { }
