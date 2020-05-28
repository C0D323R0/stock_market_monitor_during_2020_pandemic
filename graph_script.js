 google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Date', 'Daily Infected', 'Daily Deaths', 'Daily Recoveries'],
          ['May 23',  6629, 142, 2561],
          ['May 24',  7113, 156, 3307],
          ['May 25',  6414, 148, 3014],
          ['May 26',  5843, 172, 3571],
        ]);

        var options = {
          title: 'Covid Situation in India date-wise',
          curveType: 'function',
          legend: { position: 'bottom' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(data, options);
      }