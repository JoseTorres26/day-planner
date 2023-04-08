var time = $('#time').text(dayjs().format('dddd, MMMM d')); 
var hour = ['9','10', '11', '12', '1', '2', '3', '4', '5'];
$('p.9').text(hour[0] + 'am')
$('p.10').text(hour[1] + 'am')
$('p.11').text(hour[2] + 'am')
$('p.12').text(hour[3] + 'am')
$('p.1').text(hour[4] + 'pm')
$('p.2').text(hour[5] + 'pm')
$('p.3').text(hour[6] + 'pm')
$('p.4').text(hour[7] + 'pm')
$('p.5').text(hour[8] + 'pm')
