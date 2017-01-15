var rootRef = new Firebase('https://qiaowebsite.firebaseio.com');

function read_current() {
	rootRef.once('value').then(function(snapshot) {
		var val = snapshot.child("Eating").val();
		console.log(val);
	});
}

function draw_graph() {
  var canvas = document.getElementById("pie_chart");
	var ctx = document.getElementById("pie_chart").getContext("2d");
	canvas.style.width = '70vw';
  canvas.style.height = '70vw';
	var options2 = 
	{
    //Boolean - Show a backdrop to the scale label
    scaleShowLabelBackdrop : true,
    //String - The colour of the label backdrop
    scaleBackdropColor : "rgba(255,255,255,0.75)",
    // Boolean - Whether the scale should begin at zero
    scaleBeginAtZero : true,
    //Number - The backdrop padding above & below the label in pixels
    scaleBackdropPaddingY : 2,
    //Number - The backdrop padding to the side of the label in pixels
    scaleBackdropPaddingX : 2,
    //Boolean - Show line for each value in the scale
    scaleShowLine : true,
    //Boolean - Stroke a line around each segment in the chart
    segmentShowStroke : false,
    //String - The colour of the stroke on each segement.
    segmentStrokeColor : "#fff",
    //Number - The width of the stroke value in pixels
    segmentStrokeWidth : 2,
    //Number - Amount of animation steps
    animationSteps : 100,
    //String - Animation easing effect.
    animationEasing : "easeOutBounce",
    //Boolean - Whether to animate the rotation of the chart
    // animateRotate : true,
    // //Boolean - Whether to animate scaling the chart from the centre
    // animateScale : false,
    //String - A legend template
    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>",
    responsive: true,
    legend: {
        position: 'top',
    },
    title: {
        display: true,
        text: 'How I Spent My Time Every Day'
    },
    animation: {
        animateScale: true,
        animateRotate: true
    }
  }

  var data = {
  	labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  	datasets: [{
  		label: '# of Votes',
  		data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
          window.chartColors.red,
          window.chartColors.orange,
          window.chartColors.yellow,
          window.chartColors.green,
          window.chartColors.blue,
      ],
  		// backgroundColor: [
  		// 'rgba(255, 99, 132, 0.2)',
  		// 'rgba(54, 162, 235, 0.2)',
  		// 'rgba(255, 206, 86, 0.2)',
  		// 'rgba(75, 192, 192, 0.2)',
  		// 'rgba(153, 102, 255, 0.2)',
  		// 'rgba(255, 159, 64, 0.2)'
  		// ],
  		// borderColor: [
  		// 'rgba(255,99,132,1)',
  		// 'rgba(54, 162, 235, 1)',
  		// 'rgba(255, 206, 86, 1)',
  		// 'rgba(75, 192, 192, 1)',
  		// 'rgba(153, 102, 255, 1)',
  		// 'rgba(255, 159, 64, 1)'
  		// ],
  		// borderWidth: 2
  	}]
  }


  var options = {
  	scales: {
  		yAxes: [{
  			ticks: {
  				beginAtZero:true
  			}
  		}]
  	}
  }

	// message_counts = {
	//   "Eating" : 1,
	//   "Exercising" : 1,
	//   "Flute" : 1,
	//   "Learning" : 1,
	//   "Meditation" : 1,
	//   "Sleeping" : 1
	// }

	// var canvas = document.getElementById("pie_chart");
	// canvas.width = window.innerWidth * 0.5;
	// canvas.height = window.innerWidth * 0.5;
	// console.log(message_counts.length);
	// for (var i = 0; i < message_counts.length; i++) {
	// 	console.log(message_counts[i]);
	// 	message_counts[i].color = "#ADFF2F";
	// }

	// var chart = new Chart(ctx).Doughnut(message_counts, options);
	var chart = new Chart(ctx, {
		type: 'doughnut',
		data: data,
		options: options2
	});
}

// function randColor() {
// 	for (var i = 0; i < message_counts.length; i++) {
// 		message_counts[i].color = getRandomColor();
// 	}
// }

// function highlight() {
// 	for (var i = 0; i < message_counts.length; i++) {
// 		if (message_counts[i].label == "Rachel Han") {
// 			message_counts[i].color = "#FFB6C1";
// 		}
// 	}
// }

// function initialize() {
// 	//we will initialize stuff here later
// 	$.getJSON("chats.json", function(json) {
// 		message_counts = json;
// 		draw_graph();
// 	});
// }
