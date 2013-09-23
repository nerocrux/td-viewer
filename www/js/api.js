function doRequest(params) {
    $.ajax({
        type: "GET",
        url: params.url,
        data: {},
        dataType: "json",
        async: true,
        headers: {
            'AUTHORIZATION': getHeader()
        },
        success: function(responseData) {
            eval(params.success)(responseData);
        }
    });
}

function getHeader() {
    return "TD1 " + loadKey();
}

function loadKey() {
    var apikey = localStorage['apikey'];
    if (apikey === undefined) {
        $('#content').load('settings.html').trigger("create");
    }
    return apikey;
}

function getBaseUrl() {
    return "https://api.treasure-data.com/";
}

function getDatabaseList() {
    var endpoint = "v3/database/list";
    return getBaseUrl() + endpoint;
}

function getJobList() {
    var endpoint = "v3/job/list";
    return getBaseUrl() + endpoint;
}
