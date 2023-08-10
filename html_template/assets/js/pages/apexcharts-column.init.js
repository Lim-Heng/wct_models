var options={chart:{height:350,type:"bar",toolbar:{show:!1}},plotOptions:{bar:{horizontal:!1,columnWidth:"45%",endingShape:"rounded"}},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},series:[{name:"Net Profit",data:[46,57,59,54,62,58,64,60,66]},{name:"Revenue",data:[74,83,102,97,86,106,93,114,94]},{name:"Free Cash Flow",data:[37,42,38,26,47,50,54,55,43]}],colors:["#f1734f","#038edc","#51d28c"],xaxis:{categories:["Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct"]},yaxis:{title:{text:"$ (thousands)"}},grid:{borderColor:"#f1f1f1"},fill:{opacity:1},tooltip:{y:{formatter:function(e){return"$ "+e+" thousands"}}}},chart=new ApexCharts(document.querySelector("#column_chart"),options),options=(chart.render(),{chart:{height:350,type:"bar",toolbar:{show:!1}},plotOptions:{bar:{dataLabels:{position:"top"}}},dataLabels:{enabled:!0,formatter:function(e){return e+"%"},offsetY:-20,style:{fontSize:"12px",colors:["#adb5bd"]}},series:[{name:"Inflation",data:[2.5,3.2,5,10.1,4.2,3.8,3,2.4,4,1.2,3.5,.8]}],colors:["#038edc"],grid:{borderColor:"#f1f1f1"},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],position:"top",labels:{offsetY:-18},axisBorder:{show:!1},axisTicks:{show:!1},crosshairs:{fill:{type:"gradient",gradient:{colorFrom:"#D8E3F0",colorTo:"#BED1E6",stops:[0,100],opacityFrom:.4,opacityTo:.5}}},tooltip:{enabled:!0,offsetY:-35}},fill:{gradient:{shade:"light",type:"horizontal",shadeIntensity:.25,gradientToColors:void 0,inverseColors:!0,opacityFrom:1,opacityTo:1,stops:[50,0,100,100]}},yaxis:{axisBorder:{show:!1},axisTicks:{show:!1},labels:{show:!1,formatter:function(e){return e+"%"}}},title:{text:"Monthly Inflation in Argentina, 2002",floating:!0,offsetY:320,align:"center",style:{fontWeight:500}}}),options=((chart=new ApexCharts(document.querySelector("#column_chart_datalabel"),options)).render(),{series:[{name:"PRODUCT A",data:[44,55,41,67,22,43]},{name:"PRODUCT B",data:[13,23,20,8,13,27]},{name:"PRODUCT C",data:[11,17,15,15,21,14]},{name:"PRODUCT D",data:[21,7,25,13,22,8]}],chart:{type:"bar",height:350,stacked:!0,toolbar:{show:!1},zoom:{enabled:!0}},responsive:[{breakpoint:480,options:{legend:{position:"bottom",offsetX:-10,offsetY:0}}}],plotOptions:{bar:{horizontal:!1,borderRadius:10}},xaxis:{type:"datetime",categories:["01/01/2011 GMT","01/02/2011 GMT","01/03/2011 GMT","01/04/2011 GMT","01/05/2011 GMT","01/06/2011 GMT"]},legend:{position:"right",offsetY:40},fill:{opacity:1},colors:["#038edc","#51d28c","#f7cc53","#f34e4e"]}),options=((chart=new ApexCharts(document.querySelector("#column_stacked"),options)).render(),{series:[{name:"PRODUCT A",data:[44,55,41,67,22,43,21,49]},{name:"PRODUCT B",data:[13,23,20,8,13,27,33,12]},{name:"PRODUCT C",data:[11,17,15,15,21,14,15,13]}],chart:{type:"bar",height:350,stacked:!0,stackType:"100%",toolbar:{show:!1}},responsive:[{breakpoint:480,options:{legend:{position:"bottom",offsetX:-10,offsetY:0}}}],xaxis:{categories:["2011 Q1","2011 Q2","2011 Q3","2011 Q4","2012 Q1","2012 Q2","2012 Q3","2012 Q4"]},fill:{opacity:1},legend:{position:"right",offsetX:0,offsetY:50},colors:["#038edc","#51d28c","#f7cc53"]}),options=((chart=new ApexCharts(document.querySelector("#column_stacked_chart"),options)).render(),{series:[{name:"Actual",data:[{x:"2011",y:1292,goals:[{name:"Expected",value:1400,strokeWidth:5,strokeColor:"#775DD0"}]},{x:"2012",y:4432,goals:[{name:"Expected",value:5400,strokeWidth:5,strokeColor:"#775DD0"}]},{x:"2013",y:5423,goals:[{name:"Expected",value:5200,strokeWidth:5,strokeColor:"#775DD0"}]},{x:"2014",y:6653,goals:[{name:"Expected",value:6500,strokeWidth:5,strokeColor:"#775DD0"}]},{x:"2015",y:8133,goals:[{name:"Expected",value:6600,strokeWidth:5,strokeColor:"#775DD0"}]},{x:"2016",y:7132,goals:[{name:"Expected",value:7500,strokeWidth:5,strokeColor:"#775DD0"}]},{x:"2017",y:7332,goals:[{name:"Expected",value:8700,strokeWidth:5,strokeColor:"#775DD0"}]},{x:"2018",y:6553,goals:[{name:"Expected",value:7300,strokeWidth:5,strokeColor:"#775DD0"}]}]}],chart:{height:350,type:"bar",toolbar:{show:!1}},plotOptions:{bar:{columnWidth:"30%"}},colors:["#51d28c"],dataLabels:{enabled:!1},legend:{show:!0,showForSingleSeries:!0,customLegendItems:["Actual","Expected"],markers:{fillColors:["#51d28c","#564ab1"]}}}),options=((chart=new ApexCharts(document.querySelector("#column_markers"),options)).render(),{series:[{name:"Servings",data:[44,55,41,67,22,43,21,33,45,31,87,65,35]}],annotations:{points:[{x:"Bananas",seriesIndex:0,label:{borderColor:"#775DD0",offsetY:0,style:{color:"#fff",background:"#775DD0"},text:"Bananas are good"}}]},chart:{height:350,type:"bar",toolbar:{show:!1}},plotOptions:{bar:{borderRadius:10,columnWidth:"50%"}},dataLabels:{enabled:!1},stroke:{width:2},xaxis:{labels:{rotate:-45},categories:["Apples","Oranges","Strawberries","Pineapples","Mangoes","Bananas","Blackberries","Pears","Watermelons","Cherries","Pomegranates","Tangerines","Papayas"],tickPlacement:"on"},yaxis:{title:{text:"Servings"}},fill:{type:"gradient",gradient:{shade:"light",type:"horizontal",shadeIntensity:.25,gradientToColors:void 0,inverseColors:!0,opacityFrom:.85,opacityTo:.85,stops:[50,0,100]}}}),options=((chart=new ApexCharts(document.querySelector("#column_rotated_labels"),options)).render(),{series:[{name:"Cash Flow",data:[1.45,5.42,5.9,-.42,-12.6,-18.1,-18.2,-14.16,-11.1,-6.09,.34,3.88,13.07,5.8,2,7.37,8.1,13.57,15.75,17.1,19.8,-27.03,-54.4,-47.2,-43.3,-18.6,-48.6,-41.1,-39.6,-37.6,-29.4,-21.4,-2.4]}],chart:{type:"bar",height:350,toolbar:{show:!1}},plotOptions:{bar:{colors:{ranges:[{from:-100,to:-46,color:"#f1734f"},{from:-45,to:0,color:"#f7cc53"}]},columnWidth:"80%"}},dataLabels:{enabled:!1},yaxis:{title:{text:"Growth"},labels:{formatter:function(e){return e.toFixed(0)+"%"}}},xaxis:{type:"datetime",categories:["2011-01-01","2011-02-01","2011-03-01","2011-04-01","2011-05-01","2011-06-01","2011-07-01","2011-08-01","2011-09-01","2011-10-01","2011-11-01","2011-12-01","2012-01-01","2012-02-01","2012-03-01","2012-04-01","2012-05-01","2012-06-01","2012-07-01","2012-08-01","2012-09-01","2012-10-01","2012-11-01","2012-12-01","2013-01-01","2013-02-01","2013-03-01","2013-04-01","2013-05-01","2013-06-01","2013-07-01","2013-08-01","2013-09-01"],labels:{rotate:-90}}}),options=((chart=new ApexCharts(document.querySelector("#column_nagetive_values"),options)).render(),{series:[{data:[{x:"Team A",y:[1,5]},{x:"Team B",y:[4,6]},{x:"Team C",y:[5,8]},{x:"Team D",y:[3,11]}]},{data:[{x:"Team A",y:[2,6]},{x:"Team B",y:[1,3]},{x:"Team C",y:[7,8]},{x:"Team D",y:[5,9]}]}],chart:{type:"rangeBar",height:335,toolbar:{show:!1}},plotOptions:{bar:{horizontal:!1}},dataLabels:{enabled:!0},legend:{show:!1},colors:["#038edc","#51d28c"]}),colors=((chart=new ApexCharts(document.querySelector("#column_range"),options)).render(),Apex={chart:{toolbar:{show:!1}},tooltip:{shared:!1},legend:{show:!1}},["#038edc","#51d28c","#f7cc53","#f34e4e","#564ab1","#5fd0f3"]);function shuffleArray(e){for(var t=e.length-1;0<t;t--){var a=Math.floor(Math.random()*(t+1)),o=e[t];e[t]=e[a],e[a]=o}return e}var arrayData=[{y:400,quarters:[{x:"Q1",y:120},{x:"Q2",y:90},{x:"Q3",y:100},{x:"Q4",y:90}]},{y:430,quarters:[{x:"Q1",y:120},{x:"Q2",y:110},{x:"Q3",y:90},{x:"Q4",y:110}]},{y:448,quarters:[{x:"Q1",y:70},{x:"Q2",y:100},{x:"Q3",y:140},{x:"Q4",y:138}]},{y:470,quarters:[{x:"Q1",y:150},{x:"Q2",y:60},{x:"Q3",y:190},{x:"Q4",y:70}]},{y:540,quarters:[{x:"Q1",y:120},{x:"Q2",y:120},{x:"Q3",y:130},{x:"Q4",y:170}]},{y:580,quarters:[{x:"Q1",y:170},{x:"Q2",y:130},{x:"Q3",y:120},{x:"Q4",y:160}]}];function makeData(){var e=shuffleArray(arrayData);return[{x:"2011",y:e[0].y,color:colors[0],quarters:e[0].quarters},{x:"2012",y:e[1].y,color:colors[1],quarters:e[1].quarters},{x:"2013",y:e[2].y,color:colors[2],quarters:e[2].quarters},{x:"2014",y:e[3].y,color:colors[3],quarters:e[3].quarters},{x:"2015",y:e[4].y,color:colors[4],quarters:e[4].quarters},{x:"2016",y:e[5].y,color:colors[5],quarters:e[5].quarters}]}function updateQuarterChart(e,t){var a=[],o=[];if(e.w.globals.selectedDataPoints[0]){for(var r=e.w.globals.selectedDataPoints,s=0;s<r[0].length;s++){var n=r[0][s],l=e.w.config.series[0];a.push({name:l.data[n].x,data:l.data[n].quarters}),o.push(l.data[n].color)}return 0===a.length&&(a=[{data:[]}]),ApexCharts.exec(t,"updateOptions",{series:a,colors:o,fill:{colors:o}})}}var options={series:[{data:makeData()}],chart:{id:"barYear",height:330,width:"100%",type:"bar",events:{dataPointSelection:function(e,t,a){var o=document.querySelector("#chart-quarter"),r=document.querySelector("#chart-year");1!==a.selectedDataPoints[0].length||o.classList.contains("active")||(r.classList.add("chart-quarter-activated"),o.classList.add("active")),updateQuarterChart(t,"barQuarter"),0===a.selectedDataPoints[0].length&&(r.classList.remove("chart-quarter-activated"),o.classList.remove("active"))},updated:function(e){updateQuarterChart(e,"barQuarter")}}},plotOptions:{bar:{distributed:!0,horizontal:!0,barHeight:"75%",dataLabels:{position:"bottom"}}},dataLabels:{enabled:!0,textAnchor:"start",style:{colors:["#fff"]},formatter:function(e,t){return t.w.globals.labels[t.dataPointIndex]},offsetX:0,dropShadow:{enabled:!1}},colors:colors,states:{normal:{filter:{type:"desaturate"}},active:{allowMultipleDataPointsSelection:!0,filter:{type:"darken",value:1}}},tooltip:{x:{show:!1},y:{title:{formatter:function(e,t){return t.w.globals.labels[t.dataPointIndex]}}}},title:{text:"Yearly Results",offsetX:15,style:{fontWeight:600}},subtitle:{text:"(Click on bar to see details)",offsetX:15},yaxis:{labels:{show:!1}}},optionsQuarter=((chart=new ApexCharts(document.querySelector("#chart-year"),options)).render(),{series:[{data:[]}],chart:{id:"barQuarter",height:330,width:"100%",type:"bar",stacked:!0},plotOptions:{bar:{columnWidth:"50%",horizontal:!1}},legend:{show:!1},grid:{yaxis:{lines:{show:!1}},xaxis:{lines:{show:!0}}},yaxis:{labels:{show:!1}},title:{text:"Quarterly Results",offsetX:10,style:{fontWeight:600}},tooltip:{x:{formatter:function(e,t){return t.w.globals.seriesNames[t.seriesIndex]}},y:{title:{formatter:function(e,t){return t.w.globals.labels[t.dataPointIndex]}}}}}),chartQuarter=new ApexCharts(document.querySelector("#chart-quarter"),optionsQuarter),options=(chartQuarter.render(),chart.addEventListener("dataPointSelection",function(e,t,a){var o=document.querySelector("#chart-quarter"),r=document.querySelector("#chart-year");1!==a.selectedDataPoints[0].length||o.classList.contains("active")||(r.classList.add("chart-quarter-activated"),o.classList.add("active")),updateQuarterChart(t,"barQuarter"),0===a.selectedDataPoints[0].length&&(r.classList.remove("chart-quarter-activated"),o.classList.remove("active"))}),chart.addEventListener("updated",function(e){updateQuarterChart(e,"barQuarter")}),{series:[{data:[21,22,10,28,16,21,13,30]}],chart:{height:350,type:"bar",events:{click:function(e,t,a){}}},colors:colors,plotOptions:{bar:{columnWidth:"45%",distributed:!0}},dataLabels:{enabled:!1},legend:{show:!1},xaxis:{categories:[["John","Doe"],["Joe","Smith"],["Jake","Williams"],"Amber",["Peter","Brown"],["Mary","Evans"],["David","Wilson"],["Lily","Roberts"]],labels:{style:{colors:["#038edc","#51d28c","#f7cc53","#f34e4e","#564ab1","#5fd0f3"],fontSize:"12px"}}}});(chart=new ApexCharts(document.querySelector("#column_distributed"),options)).render();