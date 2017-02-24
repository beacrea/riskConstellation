// Init Model
var mainModel = {};

// Header Titles
var header_value = 'Value (1-3)';
var header_horizon = 'Horizon (1-3)';

// Write Data From CSV
d3.csv("data/data.csv", function(data) {
    mainModel = data;
    console.log(data);
    for (var i=0, len=data.length; i < len; ++i) {
        var item = data[i];
        var valueClass = '.valueRow' + Math.floor(item[header_value]);
        var horizonClass = '.horizon' + Math.floor(item[header_horizon]);
        var matrixAddress = valueClass + ' > ' + horizonClass;
        $(matrixAddress).append('<div class="item id_' + item.ID + '"><span>' + item.ID + '</span></div>');
    }
});
