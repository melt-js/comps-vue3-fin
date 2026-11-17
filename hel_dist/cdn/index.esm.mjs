import { exposeLib } from 'hel-lib-proxy';

/*
|--------------------------------------------------------------------------
|
| 对应 package.json/appGroupName
|
|--------------------------------------------------------------------------
*/
const LIB_NAME = 'comps-vue3-fin';

/**
 * 将提供给用户的 lib 暴露出去（同时也暴露了类型）
 */
const dtlib = exposeLib(LIB_NAME);
const FinAmount = dtlib.FinAmount;
const FinKpiCard = dtlib.FinKpiCard;
const FinSparkline = dtlib.FinSparkline;
const App = dtlib.App;

export { App, FinAmount, FinKpiCard, FinSparkline, dtlib as default, dtlib };
