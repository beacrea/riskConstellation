var mainModel = {};
d3.csv("data/data.csv", function(data) {
    mainModel = data;
    /*for (var i=0, len=data.length; i < len; ++i) {
        if (data[i].Category == "Configuration") {
            console.log(data[i]);
        }
    }*/
});
