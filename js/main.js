var mainModel = {};
d3.csv("data/data.csv", function(data) {
    mainModel = data;
    console.log(data);
    for (var i=0, len=data.length; i < len; ++i) {
        var item = data[i];
        var valueClass = '.valueRow' + Math.floor(item['Value (1-3)']);
        var horizonClass = '.horizon' + Math.floor(item['Horizon (1-3)']);
        var matrixAddress = valueClass + ' > ' + horizonClass;
        $(matrixAddress).append('<div class="item">' + item.ID + '</div>');
    }
});
