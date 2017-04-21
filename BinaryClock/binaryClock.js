'use strict';

window.addEventListener('load', function() {
      var myVar = setInterval(getTime, 1000);
}) ;

var hourList = [];
var minuteList = [];
var secondList = [];

var hours;
var minutes;
var seconds;

function getTime() {

      var date = new Date();
      hours= date.getHours();
      minutes = date.getMinutes();
      seconds = date.getSeconds();

      convertDec2Bin(hours, minutes, seconds);
      showClockInCanvas();
}

function convertDec2Bin(hours, minutes, seconds) {
      var binaryHour = hours.toString(2);
      var binaryMinute = minutes.toString(2);
      var binarySecond = seconds.toString(2);

      // split and add hour to the list
      hourList = binaryHour.split('');
      minuteList = binaryMinute.split('');
      secondList = binarySecond.split('');
}

function showClockInCanvas() {

      var canvas = document.getElementById('BinaryClockCanvas');
            if (canvas.getContext) {

                  var ctx = canvas.getContext('2d');

                        ctx.clearRect(0, 0, 600, 800);
                        ctx.save();

                        ctx.scale(2,2);

                        ctx.font = "10px Arial";
                        ctx.fillText("Hour: ", 25, 52);
                        ctx.fillText("Minutes: ", 25, 72);
                        ctx.fillText("Seconds: ", 25, 92);

                        ctx.fillText(hours + " : " + minutes + " : " + seconds, 80, 25);

                        var x; //x coordinate
                        var y; //y coordinate
                        var radius = 5; // Arc radius
                        var startAngle = 0; // Starting point on circle
                        var endAngle = 2*Math.PI; // End point on circle
                        var clockwise = true;

                  //hours
                  for( var i = 0; i < hourList.length; i++ ) {
                        ctx.beginPath();
                        x = 80 + i * 20;
                        y = 50 ;

                        ctx.arc(x, y, radius, startAngle, endAngle, clockwise);

                         if( hourList[i] == "1" ) {
                                ctx.fillStyle="#FF0000";
                                ctx.fill();
                         } else {
                               ctx.fillStyle="#4d0000";
                               ctx.fill();
                         }
                   }

            // minutes
            for( var j = 0; j < minuteList.length; j++ ) {
                  ctx.beginPath();
                  x = 80 + j * 20;
                  y = 70 ;

                  ctx.arc(x, y, radius, startAngle, endAngle, clockwise);

                   if( minuteList[j] == "1" ) {
                          ctx.fillStyle="#FF0000";
                          ctx.fill();
                   } else {
                         ctx.fillStyle="#4d0000";
                         ctx.fill();
                   }
             }

             //seconds
             for( var g = 0; g < secondList.length; g++ ) {
                   console.log(secondList.length);
                  ctx.beginPath();
                  x = 80 + g * 20;
                  y = 90 ;

                  ctx.arc(x, y, radius, startAngle, endAngle, clockwise);

                   if( secondList[g] == "1" ) {
                          ctx.fillStyle="#FF0000";
                          ctx.fill();
                   } else {
                         ctx.fillStyle="#4d0000";
                         ctx.fill();
                   }
             }

            ctx.restore();
      }
}
