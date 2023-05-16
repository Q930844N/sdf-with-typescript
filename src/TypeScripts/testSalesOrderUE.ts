/**
 * testSalesOrderUE.ts
 * @NScriptType UserEventScript
 * @NApiVersion 2.1
 * 
 */

import { EntryPoints } from 'N/types';
import log = require('N/log');

export function afterSubmit(context: EntryPoints.UserEvent.afterSubmitContext) {
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

