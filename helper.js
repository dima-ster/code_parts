///d - дата для конывертации
///clv - календарный разрез:
/// 0 (undefined) - день, месяц и год
/// 1-год
/// 2-полугодие
/// 3-квартал
/// 4-месяц
/// 5-неделя
/// 6-
/// 7-день
function getDateString(d, clv){
d = d || new Date();
var options = {};
switch (clv) {
  case 1:
    options.year = "numeric";
    break;
  case 2:
    var i = getHalfYear(d);
    return i + ' полугодие ' + d.getFullYear();
  case 3:
    var i = getQuarter(d);
    return i + ' кв. ' + d.getFullYear();
  case 4:
    options.year = "numeric";
    options.month = "short";
    break;
  case 5:
    options.weekday = "long";
    options.year = "numeric";
    options.month = "short";
    options.day = "numeric";
    break;
  case 6:
    
    break;

  case 7:
    options = {};
    break;
  default:
	options = {};
    }

	return d.toLocaleDateString('ru-RU', options);
}

////////
///Получение номера квартала у даты
///////
function getQuarter(d) {
      d = d || new Date();
      var m = Math.floor(d.getMonth()/3) + 2;
      return m - 1;
}
////////
///Получение номера полугодия
///////
function getHalfYear(d) {
      d = d || new Date();
      var m = d.getMonth()<=6;
      return m ? 1:2;
}
