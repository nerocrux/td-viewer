function setJobList(json) {
    // JST fixed
    var timezone = "0900";

    $.each(json.jobs, function(i, item) {
        tr = $('<tr/>');
        tr.append("<td>" + styleJobId(item.job_id, item.url) + "</td>");
        tr.append("<td>" + styleStatus(item.status) + "</td>");
        tr.append("<td>" + styleDate(item.created_at, timezone) + "</td>");
        tr.append("<td>" + styleDate(item.start_at, timezone) + "</td>");
        tr.append("<td>" + styleDate(item.end_at, timezone) + "</td>");
        tr.append("<td class='long-text' job='" + item.job_id + "' data-status='folded'>" + styleQuery(item.query) + "</td>");
        tr.append("<td>" + item.type + "</td>");
        tr.append("<td>" + item.priority + "</td>");
        tr.append("<td>" + item.database + "</td>");
        $('tbody').append(tr);
        $("td.long-text[job=" + item.job_id + "]").click(function() {
            if ($(this).data("status") === "folded") {
                $(this).text(item.query);
                $(this).data("status", "expanded");
            } else {
                $(this).text(styleQuery(item.query));
                $(this).data("status", "folded");
            }
        });
    });
    $('table').fixedHeaderTable({
        autoShow: true,
        width: '100%',
        height:$(window).height()-60,
        footer: true,
        cloneHeadToFoot: true,
        fixedColumn: false
    });
}

function styleJobId(job_id, url) {
    return '<a href="' + url + '">' + job_id + '</a>';
}

function styleStatus(status) {
    if (status.toLowerCase() === "success") {
        return '<span class="label label-success">Success</span>';
    } else if (status.toLowerCase() === "error") {
        return '<span class="label label-danger">Error</span>';
    }
    return '<span class="label label-primary">' + status + '</span>';
}

function styleDate(date, timezone) {
    return moment(String(date.slice(0, date.length-4)) + " +" + timezone).toDate();
}

function styleQuery(query) {
    return query.substring(0,40) + "...";
}
