

var myform = $("form#myform");
myform.submit(function (event) {
    event.preventDefault();

    var params = myform.serializeArray().reduce(function(obj, item) {
        obj[item.name] = item.value;
        return obj;
     }, {});

    // Change to your service ID, or keep using the default service
    var service_id = "default_service";

    var template_id = "template_0lcNQ32O";
    myform.find("button").text("Sending...");
    console.log(params);
    window.emailjs.send(service_id, template_id, params)
        .then(function (data) {
            alert("Sent!");
            console.log(data);
            myform.find("button").text("Send");
        }, function (err) {
            alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
            myform.find("button").text("Send");
        });

    return false;
});