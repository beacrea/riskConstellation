d3.csv("data/data.csv", function(data) {
    for (var i=0, len=data.length; i < len; ++i) {
        $('#containerMain').append('<div>'+ data[i].ID +'</div>');
        if (data[i].Category == "Configuration") {
            console.log(data[i]);
        }
    }
});
