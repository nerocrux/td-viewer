function setDatabase(json) {
    $.each(json.databases, function(i, item) {
        $("#database-list").append(
            '<li class="list-group-item" id="table-' + item.name + '">' +
                '<span class="badge">' + kiloSeperator(item.count) + '</span>' +
                item.name +
            '</li>'
        );
    });
}

function kiloSeperator(num) {
    return String(num).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
}
