google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChartStock);

const csv = `Date,Open + Close /2
30 January 2020,41146.98047
31 January 2020,40935.02344
3 February 2020,39786.66406
4 February 2020,40484.05859
5 February 2020,41032.18555
6 February 2020,41257.58008
7 February 2020,41268.13086
10 February 2020,41073.16992
11 February 2020,41199.76563
12 February 2020,41448.375
13 February 2020,41583.5
14 February 2020,41383.96484
17 February 2020,41189.86523
18 February 2020,40968.41992
19 February 2020,41222.25586
20 February 2020,41252.54102
24 February 2020,40700.12109
25 February 2020,40389.45898
26 February 2020,40041.92578
27 February 2020,39846.73047
28 February 2020,38692.37891
2 March 2020,38527.48438
3 March 2020,38552.29492
4 March 2020,38562.59961
5 March 2020,38537.42969
6 March 2020,37595.29102
9 March 2020,36292.57422
11 March 2020,35583.14844
12 March 2020,33625.32031
13 March 2020,32658.80566
16 March 2020,32246.6543
17 March 2020,31095.33008
18 March 2020,29919.17481
19 March 2020,28030.79492
20 March 2020,29188.39063
23 March 2020,26795.02051
24 March 2020,26865.12988
25 March 2020,27517.79492
26 March 2020,29510.24023
27 March 2020,30281.7002
30 March 2020,28833.43555
31 March 2020,29381.71484
1 April 2020,28885.32031
3 April 2020,28107.23926
7 April 2020,29482.78516
8 April 2020,29797.94043
9 April 2020,30865.4043
13 April 2020,30942.87012
15 April 2020,30828.45996
16 April 2020,30349.05957
17 April 2020,31622.7002
20 April 2020,31852.09473
21 April 2020,30736.4502
22 April 2020,31117.8457
23 April 2020,31754.76465
24 April 2020,31376.91992
27 April 2020,31701.05957
28 April 2020,32108.21484
29 April 2020,32515.59961
30 April 2020,33549.40625
4 May 2020,32231.74512
5 May 2020,31818.20508
6 May 2020,31631.69043
7 May 2020,31560.53516
8 May 2020,31863.00977
11 May 2020,31795.78027
12 May 2020,31357.02441
13 May 2020,32425.24023
14 May 2020,31294.61035
15 May 2020,31197.00488
18 May 2020,30638.62012
19 May 2020,30323.45508
20 May 2020,30489.09961
21 May 2020,30918.59473
22 May 2020,30747.68457
26 May 2020,30736.78516
27 May 2020,31199.16504
28 May 2020,32014.19531`

function convertCSVToJSON(str, delimiter = ',') {
    let titles = str.slice(0, str.indexOf('\n')).split(delimiter);
    titles = [titles];
    const rows = str.slice(str.indexOf('\n') + 1).split('\n');
    return titles.concat(rows.map(row => {
        const values = row.split(delimiter).map(x=>{
            return +x || x;
        });
        return values;
        //titles.reduce((object, curr, i) => (object[curr] = values[i], object), {})
        })
    );
};

// this has to be a global function
function drawChartStock() {

            // transform the CSV string into a 2-dimensional array
            var arrayData = convertCSVToJSON(csv);

            console.log(arrayData);
            // this new DataTable object holds all the data
            var data = new google.visualization.arrayToDataTable(arrayData);
      
            // this view can select a subset of the data at a time
            var view = new google.visualization.DataView(data);
            // view.setColumns([0,1]);
      
           // set chart options
           var options = {
              title: "Stock Market",
              curveType: 'function',
              legend: { position: 'bottom' }

            //   hAxis: {title: data.getColumnLabel(0), minValue: data.getColumnRange(0).min, maxValue: data.getColumnRange(0).max},
            //   vAxis: {title: data.getColumnLabel(1), minValue: data.getColumnRange(1).min, maxValue: data.getColumnRange(1).max},
            //   legend: 'none'
           };
      
           // create the chart object and draw it
           var chart = new google.visualization.LineChart(document.getElementById('stock_chart'));
           chart.draw(view, options);
}

