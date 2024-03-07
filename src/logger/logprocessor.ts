import { LogLevel } from './constants';

export default abstract class LogProcessor {
  nextLogProcessor: LogProcessor | null = null;

  constructor(logProcessor: LogProcessor | null) {
    if (logProcessor) {
      this.nextLogProcessor = logProcessor;
    }
  }

  /**
   * can not use arrow function, as otherwise
   * use of super in child classes is not possible
   * @param logLevel
   * @param message
   * @returns
   */
  log(logLevel: LogLevel, message: string) {
    if (this.nextLogProcessor) {
      return this.nextLogProcessor.log(logLevel, message);
    }
    throw new Error('log level not handled');
  }
}
