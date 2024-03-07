import { LogLevel } from './constants';
import DebugLogger from './debuglogger';
import ErrorLogger from './errorlogger';
import InfoLogger from './infologger';
import LogProcessor from './logprocessor';

const main = () => {
  /**
   * this is an example of
   * chain of responsibility
   * pattern
   */
  const logger: LogProcessor = new InfoLogger(new DebugLogger(new ErrorLogger(null)));

  logger.log(LogLevel.INFO, 'this is info');
  logger.log(LogLevel.DEBUG, 'this is debug');
  logger.log(LogLevel.ERROR, 'this is error');
};

main();
