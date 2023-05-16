/**
 * testSalesOrderUE.ts
 * @NScriptType UserEventScript
 * @NApiVersion 2.1
 *
 */
define(["require", "exports", "N/log"], function (require, exports, log) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.afterSubmit = void 0;
    function afterSubmit(context) {
        log.debug({
            title: 'After Submit', details: `${context.type} ${context.newRecord.type} ${context.newRecord.id}`
        });
        log.debug({
            title: 'After Submit', details: `${context.type} ${context.newRecord.type} ${context.newRecord.id}`
        });
        log.debug({
            title: 'After Submit', details: `${context.type} ${context.newRecord.type} ${context.newRecord.id}`
        });
    }
    exports.afterSubmit = afterSubmit;
});
