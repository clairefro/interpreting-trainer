//coded by Graham Weldon
function convert(original_input) {
  var result = 0;
	var bigNumberPattern = /(?:(\d+)\s((?:b|m|tr)illion))/g;
	var matches;
  var lastMatchIndex;
  while ((matches = bigNumberPattern.exec(original_input)) !== null) {
  	result += textToNumber(matches[1], matches[2]);
    lastMatchIndex = bigNumberPattern.lastIndex;
  }
  var remainder = parseInt(original_input.slice(lastMatchIndex).trim());
  return result + (isNaN(remainder) ? 0 : remainder);
}

function textToNumber(num, str) {
	switch (str) {
  	case 'million':
    	return Math.pow(10, 6) * num;
    case 'billion':
     	return Math.pow(10, 9) * num;
    case 'trillion':
    	return Math.pow(10, 12) * num;
    default:
      return num;
  }
}
