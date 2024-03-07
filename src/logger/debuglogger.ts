import { LogLevel } from './constants';
import LogProcessor from './logprocessor';

export default class DebugLogger extends LogProcessor {
  constructor(nextLogger: LogProcessor | null) {
    super(nextLogger);
  }

  log = (logLevel: LogLevel, message: string) => {
    if (logLevel === LogLevel.DEBUG) {
      console.debug(message);
    } else {
      super.log(logLevel, message);
    }
  };
}
