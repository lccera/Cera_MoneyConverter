$(function() {
            $(".pick-a-color").pickAColor();

            var options = {
                lines: { show: true },
                points: { show: false },
                xaxis: { mode: "time"},
                grid: {
                    borderWidth: {
                        top: 1,
                        right: 1,
                        bottom: 1,
                        left: 1
                    }
                }
            };
            $("button.fetchSeries").click(function () {
                var button = $(this);
                var dataurl = $(this).attr("datasrc");

                function onDataReceived(series) {
                    var data = [];
                    data.push(series);
                    $("h4.chart-title").text(series.currency + "/" + series.against + " One Month Chart");
                    $("div.chart-footer").text("Source: " + series.source + "/" + series.against + " One Month Chart");
                    $.plot("#chart", data, options);
                }
                $.ajax({
                    url: dataurl,
                    type: "GET",
                    dataType: "json",
                    success: onDataReceived
                });
            });
            $("button.fetchSeries:first").click();

            $("select.fetchSeries").change(function () {
                var c_chart = $("#c option:selected").val();
                var a_chart = $("#a option:selected").val();
                var d_chart = $("#d option:selected").val();
                var dataurl = "/ajax.php?c=" + c_chart + "&a=" + a_chart + "&d=" + d_chart + "&k=a00dg28ge6lf0dd99kbb14bnl4";

                function onDataReceived(series) {
                    var data = [];
                    data.push(series);
                    var d_range = $("#d option:selected").text();
                    $("h2.chart-title").text(series.currency + " Against " + series.against + " for the Most Recent " + d_range);
                    $("div.table-footer").text("Data Source: " + series.source);
                    $("a.page-link").text("https://www.foreignexchangeresource.com/converter-code.php" + series.url);
                    $("a.page-link").attr("href","https://www.foreignexchangeresource.com/converter-code.php" + series.url);
                    $.plot("#chart", data, options);
                }
                $.ajax({
                    url: dataurl,
                    type: "GET",
                    dataType: "json",
                    success: onDataReceived
                });
            });

            $("select.fetchRates").change(function () {
                var c_chart = $("#c option:selected").val();
                var a_chart = $("#a option:selected").val();
                var d_chart = $("#d option:selected").val();
                $('#rate-table').children().remove();
                var dataurl = "/ajax.php?c=" + c_chart + "&a=" + a_chart + "&d=" + d_chart + "&df=1&k=a00dg28ge6lf0dd99kbb14bnl4";

                function onDataReceived(series) {
                    var data = [];
                    data.push(series);
                    var d_range = $("#d option:selected").text();
                    $("h3.rate-title").text(series.currency + " Against " + series.against + " for the Most Recent " + d_range);
                    $("#a-heading").text("1.00 " + series.currency + " Buys");
                    $.each( series.data, function( i, val ) {
                        $('#rate-table').append('<tr><td>'+val[2]+' '+series.against+'</td><td>'+val[0]+'</td></tr>');
                    });
                    $("div.table-footer").text("Data Source: " + series.source);
                    $("a.page-link").text("https://www.foreignexchangeresource.com/converter-code.php" + series.url);
                    $("a.page-link").attr("href","https://www.foreignexchangeresource.com/converter-code.php" + series.url);
                }
                $.ajax({
                    url: dataurl,
                    type: "GET",
                    dataType: "json",
                    success: onDataReceived
                });
            });

            $("button.fetchConv").click(function () {
                var c_chart = $("#c option:selected").val();
                var a_chart = $("#a option:selected").val();
                var d_chart = 1;
                var amt_chart = $("#amt").val();
                $('#rate-table').children().remove();
                var dataurl = "/ajax.php?c=" + c_chart + "&a=" + a_chart + "&d=" + d_chart + "&amt=" + amt_chart + "&df=1&k=a00dg28ge6lf0dd99kbb14bnl4";

                function onDataReceived(series) {
                    var data = [];
                    data.push(series);
                    var d_range = $("#d option:selected").text();
                    $("h3.rate-title").text("Currency Converter: " + series.currency + " to " + series.against);
                    $.each( series.data, function( i, val ) {
                        $('#rate-table').append('<tr><td>'+val[1]+' '+series.currency+'</td><td>'+val[2]+' '+series.against+'</td><td>'+val[0]+'</td></tr>');
                    });
                    $("div.table-footer").text("Data Source: " + series.source);
                    $("a.page-link").text("https://www.foreignexchangeresource.com/converter-code.php" + series.url);
                    $("a.page-link").attr("href","https://www.foreignexchangeresource.com/converter-code.php" + series.url);
                    $("#amt").val(series.amount);

                }
                $.ajax({
                    url: dataurl,
                    type: "GET",
                    dataType: "json",
                    success: onDataReceived
                });
            });

            $("select.fetchRatesByDate").change(function () {
                var c_chart = $("#c option:selected").val();
                var d_chart = $("#d option:selected").val();
                $('#rate-table').children().remove();
                var dataurl = "/ajax-multi.php?c=" + c_chart + "&d=" + d_chart + "&k=a00dg28ge6lf0dd99kbb14bnl4";

                function onDataReceived(series) {
                    var data = [];
                    data.push(series);
                    var d_date = $("#d option:selected").text();
                    $("h3.rate-title").text("World Currencies Compared to " + series.currency + " on " + d_date);
                    $("#c-heading").text("1 " + series.currency + " Buys");
                    $.each( series.data, function( i, val ) {
                        $('#rate-table').append('<tr><td>'+val[2]+'</td><td>'+val[0]+'</td><td>'+val[1]+' '+val[0]+'</td><td>'+d_date+'</td></tr>');
                    });
                    $("a.page-link").text("https://www.foreignexchangeresource.com/converter-code.php" + series.url);
                    $("a.page-link").attr("href","https://www.foreignexchangeresource.com/converter-code.php" + series.url);

                }
                $.ajax({
                    url: dataurl,
                    type: "GET",
                    dataType: "json",
                    success: onDataReceived
                });
            });
        });