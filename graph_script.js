google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

/* CSV Data for parsing*/
const csv2 = `Date,Daily Confirmed,Daily Recovered,Daily Deceased
30-Jan,1,0,0
31-Jan,0,0,0
01-Feb,0,0,0
02-Feb,1,0,0
03-Feb,1,0,0
04-Feb,0,0,0
05-Feb,0,0,0
06-Feb,0,0,0
07-Feb,0,0,0
08-Feb,0,0,0
09-Feb,0,0,0
10-Feb,0,0,0
11-Feb,0,0,0
12-Feb,0,0,0
13-Feb,0,1,0
14-Feb,0,0,0
15-Feb,0,0,0
16-Feb,0,1,0
17-Feb,0,0,0
18-Feb,0,0,0
19-Feb,0,0,0
20-Feb,0,1,0
21-Feb,0,0,0
22-Feb,0,0,0
23-Feb,0,0,0
24-Feb,0,0,0
25-Feb,0,0,0
26-Feb,0,0,0
27-Feb,0,0,0
28-Feb,0,0,0
29-Feb,0,0,0
01-Mar,0,0,0
02-Mar,2,0,0
03-Mar,1,0,0
04-Mar,22,0,0
05-Mar,2,0,0
06-Mar,1,0,0
07-Mar,3,0,0
08-Mar,5,0,0
09-Mar,9,0,0
10-Mar,15,1,0
11-Mar,8,0,0
12-Mar,10,0,1
13-Mar,10,6,0
14-Mar,11,0,1
15-Mar,10,3,0
16-Mar,14,1,0
17-Mar,20,1,1
18-Mar,25,0,0
19-Mar,27,5,1
20-Mar,58,3,0
21-Mar,78,0,0
22-Mar,69,0,3
23-Mar,94,2,2
24-Mar,74,15,1
25-Mar,86,3,1
26-Mar,73,7,5
27-Mar,153,25,3
28-Mar,136,10,5
29-Mar,120,17,3
30-Mar,187,35,14
31-Mar,309,13,6
01-Apr,424,19,6
02-Apr,486,22,16
03-Apr,560,39,14
04-Apr,579,56,13
05-Apr,609,43,22
06-Apr,484,65,16
07-Apr,573,75,27
08-Apr,565,96,20
09-Apr,813,70,46
10-Apr,871,151,22
11-Apr,854,186,41
12-Apr,758,114,42
13-Apr,1243,112,27
14-Apr,1031,167,37
15-Apr,886,144,27
16-Apr,1061,258,26
17-Apr,922,273,38
18-Apr,1371,426,35
19-Apr,1580,388,38
20-Apr,1239,419,33
21-Apr,1537,703,53
22-Apr,1292,394,36
23-Apr,1667,642,40
24-Apr,1408,484,59
25-Apr,1835,442,44
26-Apr,1607,585,56
27-Apr,1568,580,58
28-Apr,1902,636,69
29-Apr,1705,690,71
30-Apr,1801,630,75
01-May,2396,962,77
02-May,2564,831,92
03-May,2952,911,140
04-May,3656,1082,103
05-May,2971,1295,128
06-May,3602,1161,91
07-May,3344,1475,104
08-May,3339,1111,97
09-May,3175,1414,115
10-May,4311,1669,112
11-May,3592,1579,81
12-May,3562,1905,120
13-May,3726,1963,137
14-May,3991,1594,97
15-May,3808,2234,104
16-May,4794,4012,120
17-May,5049,2538,152
18-May,4628,2482,131
19-May,6154,3032,146
20-May,5720,3113,134
21-May,6023,3131,148
22-May,6536,3280,142
23-May,6667,2576,142
24-May,7111,3285,156
25-May,6414,3012,150
26-May,5907,3585,173
27-May,7246,3434,188
28-May,7254,3171,176
29-May,8138,11735,269
30-May,8364,4303,205
31-May,8789,4928,222`

/* Converting CSV to JSON*/
function convertCSVToJSON(str, delimiter = ',') {
    let titles = str.slice(0,str.indexOf('\n')).split(delimiter);
    titles = [titles];
    const rows = str.slice(str.indexOf('\n') + 1).split('\n');
    return titles.concat(rows.map(row => {
        var values = row.split(delimiter).map(x=>{
            return +x||x;
        });
        return values;
        //titles.reduce((object, curr, i) => (object[curr] = values[i], object), {})
        })
    );
};

function drawChart() {
  var arrayData=convertCSVToJSON(csv2);
  for (var i = 0; i < arrayData.length; i++) {
    for (var f = 0; f < 4; f++) {
      if(arrayData[i][f]=='0'){
        arrayData[i][f]=0;
      }
    }
  }
  console.log(arrayData);
  var data=new google.visualization.arrayToDataTable(arrayData);
  var view=new google.visualization.DataView(data);


  var options = {
    title: 'Covid Situation in India date-wise',
    curveType: 'function',
    legend: { position: 'bottom' }
  };

  var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

  chart.draw(data, options);
}
