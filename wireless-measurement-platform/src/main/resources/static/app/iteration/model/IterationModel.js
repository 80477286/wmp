Ext.define('App.iteration.model.IterationModel', {
    extend: 'Extend.data.BaseModel',
    fields: [{
        name: 'planedStartDate',
        type: 'date'
    }, {
        name: 'planedEndDate',
        type: 'date'
    }, {
        name: 'actuaStartDate',
        type: 'date'
    }, {
        name: 'actualEndDate',
        type: 'date'
    }]
});
