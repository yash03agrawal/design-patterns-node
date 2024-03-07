import { LogLevel } from './constants';
import LogProcessor from './logprocessor';

export default class InfoLogger extends LogProcessor {
  constructor(nextLogger: LogProcessor | null) {
    super(nextLogger);
  }

  log = (logLevel: LogLevel, message: string) => {
    if (logLevel === LogLevel.INFO) {
      console.log(message);
    } else {
      super.log(logLevel, message);
    }
  };
}
