import { LogLevel } from './constants';
import LogProcessor from './logprocessor';

export default class ErrorLogger extends LogProcessor {
  constructor(nextLogger: LogProcessor | null) {
    super(nextLogger);
  }

  log = (logLevel: LogLevel, message: string) => {
    if (logLevel === LogLevel.ERROR) {
      console.error(message);
    } else {
      super.log(logLevel, message);
    }
  };
}
