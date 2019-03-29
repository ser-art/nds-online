var summa;
var stavka;
var nds;
var visible_button_clear = false;
var ids = 0;
var ids_mini = 0;
var counter_remove = 0;
var copy_text;
var text_any = "Не хватка данных";
var flag = false;
var ans;
var a, b;

$(document).ready(function () {
	 $("#clear_all").hide();
     $("body").keypress(function(e) {
          if (e.which == "13") {
			clickvaddel();
          }
     });
	 $('body').keydown(function (e) {
       if (e.ctrlKey && e.keyCode == 13) {
			clicknasl(); 
	   }
	 });

	 $('body').keydown(function (e) {
	     if (e.ctrlKey && e.keyCode == 75) {
	         $("#calculator_other").dialog("open");
	     }
	 });
	
  $("#information").dialog({
  open: function(event, ui) { 
  $(this).parent().children().children('.ui-dialog-titlebar-close').hide();
  },
  dialogClass: "no-close",
  title: "Разработка",
  modal: true,
  width: 460,
  height: 410,
  resizable: false,
  show: { effect: "fade", duration: 700 },
  hide: { effect: "fade", duration: 700 },
  autoOpen: false,
  buttons: [
    {
      text: "Выйти",
      click: function() {
		$( this ).dialog("close");
      }
    }
  ]
});

  $("#all-info-of-string").dialog({
  open: function(event, ui) { 
      $(this).parent().children().children('.ui-dialog-titlebar-close').hide();
  },
  dialogClass: "no-close",
  title: "Текст в документ",
  modal: true,
  width: 600,
  height: 300,
  show: { effect: "fade", duration: 700 },
  hide: { effect: "fade", duration: 700 },
  autoOpen: false,
  buttons: [
    {
        text: "Закрыть",
        id: "copy",
        name: "copyB",
		click: function () {
		    $(".del1").remove();
		$(this).dialog("close");
      }
    }
  ]
  });

  $("#calculator_other").dialog({
      dialogClass: "no-close",
      title: "Калькулятор",
      width: 240,
      height: 340,
      resizable: false,
      show: { effect: "fade", duration: 700 },
      hide: { effect: "fade", duration: 700 },
      autoOpen: false
  });
});

function all_sch()
{
    if(a != "" && ans != "")
    {
        b = $('#clakul-ans').val();
    }

    if(b != 0)
    {
        $('#clakul-ans').val(ans);
    }

    var answer;
    if(a == "+")
    {
        answer = (parseFloat(ans) + parseFloat(b)).toFixed(2);
        $('#clakul-ans').val(answer);
        $("#up-text").remove();
    } else if (a == "-")
    {
        answer = (parseFloat(ans) - parseFloat(b)).toFixed(2);
        $('#clakul-ans').val(answer);
        $("#up-text").remove();
    } else if (a == "*") {
        answer = (parseFloat(ans) * parseFloat(b)).toFixed(2);
        $('#clakul-ans').val(answer);
        $("#up-text").remove();
    } else if (a == "/") {
        answer = (parseFloat(ans) / parseFloat(b)).toFixed(2);
        $('#clakul-ans').val(answer);
        $("#up-text").remove();
    }
}

function count(obj)
{
    var str = null;
    if(obj.id == "btn-plus")
    {
        str = $('#clakul-ans').val() + " +";
        $("#up-text").remove();
        $("#help-text").append('<p id="up-text">' + str + '</p>');
        a = "+";
    } else if(obj.id == "btn-minus") {
        str = $('#clakul-ans').val() + " -";
        $("#up-text").remove();
        $("#help-text").append('<p id="up-text">' + str + '</p>');
        a = "-";
    } else if (obj.id == "btn-umn") {
        str = $('#clakul-ans').val() + " *";
        $("#up-text").remove();
        $("#help-text").append('<p id="up-text">' + str + '</p>');
        a = "*";
    } else if (obj.id == "btn-delel") {
        str = $('#clakul-ans').val() + " /";
        $("#up-text").remove();
        $("#help-text").append('<p id="up-text">' + str + '</p>');
        a = "/";
    }
    ans = str;
    ans = ans.slice(0, -1);
    $('#clakul-ans').val(null);
}

function write_numbers(obj) {
    var str = null;
    if (obj.id == "zero") {
        str = $('#clakul-ans').val() + "0";
        $('#clakul-ans').val(str);
    } else if (obj.id == "one") {
        str = $('#clakul-ans').val() + "1";
        $('#clakul-ans').val(str);
    } else if (obj.id == "two") {
        str = $('#clakul-ans').val() + "2";
        $('#clakul-ans').val(str);
    } else if (obj.id == "three") {
        str = $('#clakul-ans').val() + "3";
        $('#clakul-ans').val(str);
    } else if (obj.id == "four") {
        str = $('#clakul-ans').val() + "4";
        $('#clakul-ans').val(str);
    } else if (obj.id == "five") {
        str = $('#clakul-ans').val() + "5";
        $('#clakul-ans').val(str);
    } else if (obj.id == "six") {
        str = $('#clakul-ans').val() + "6";
        $('#clakul-ans').val(str);
    } else if (obj.id == "seven") {
        str = $('#clakul-ans').val() + "7";
        $('#clakul-ans').val(str);
    } else if (obj.id == "eight") {
        str = $('#clakul-ans').val() + "8";
        $('#clakul-ans').val(str);
    } else if (obj.id == "nine") {
        str = $('#clakul-ans').val() + "9";
        $('#clakul-ans').val(str);
    } else if (obj.id == "toch") {
        str = $('#clakul-ans').val() + ".";
        $('#clakul-ans').val(str);
    }
}


function all_clear() {
    $('#clakul-ans').val(null);
    ans = null;
    $("#up-text").remove();
}

function one_clear() {
  var str = $('#clakul-ans').val();
  $('#clakul-ans').val(str.slice(0, -1));
}

function clear_all()
{
	if(visible_button_clear == true)
	{
	    flag = false;
		ids = 0;
		ids_mini = 0;
		counter_remove = 0;
		$("#res_table table tr").remove();
		$("#res_table table input").remove();
		$("#clear_all").hide();
		$("#del1").remove();
		visible_button_clear = false;
	}
}
function clear_one_obj(obj)
{
 counter_remove -= 1;
 var str = "#" + obj.id + "0";
 if(counter_remove == 0) {$("#clear_all").hide()}
 $(str).fadeOut(400);
 $(obj).remove();
}

function other_vat(obj)
{
    var str = "#" + obj.id + "0";
    $("#calculator_other").dialog("open");
}

function creat_any_text(obj)
{
 $('#all-info-of-string').dialog('open');
 var str = "#" + obj.id + "0";
 if($(str + ' .tblur').text() == "Выделение НДС")
 {
  text_any = $(str + " .summa").text() + " (" + $(str + " .summa_w").text() +") в т.ч. НДС "+ $(str + " .stavka").text() +" - "+ $(str + " .nds").text() + " (" +$(str + " .nds_w").text()+")";
  $("#all-info-of-string").append('<p class="del1" id="del1">' + text_any +"</p>");
 }else
 { 
  summa_w = number_to_string($(str + " .summa").text())[0].toUpperCase() + number_to_string($(str + " .summa").text()).substring(1,number_to_string($(str + " .summa").text()).length);
  text_any = $(str + " .summa").text() + " (" + summa_w +") в т.ч. НДС "+ $(str + " .stavka").text() +" - "+ $(str + " .nds").text() + " (" +$(str + " .nds_w").text()+")";
  $("#all-info-of-string").append('<p class="del1" id="del1">' + text_any + "</p>");
 }
}

function clickvaddel()
{
 if ((document.getElementById("f_sum_rub").value + "." + document.getElementById("f_sum_kop").value).toString() != "0.00") {
 ids += 10;
 ids_mini ++;
 counter_remove ++;
 $("#clear_all").show();
 visible_button_clear = true;
 summa = document.getElementById("f_sum_rub").value + "." + document.getElementById("f_sum_kop").value;
 stavka = document.getElementById("f_nds").value;
 nds = summa * (1 - 1/(1 + stavka/100));
 $("#res_table table").append("<tr id=td" + ids + "><td class='summa'>" + summa + "</td> <td class='summa_w'>" + number_to_string(summa)[0].toUpperCase() + number_to_string(summa).substring(1, number_to_string(summa).length) + "</td> <td>" + "<span class='tblur'>Выделение НДС</span>" + "</td> <td class='stavka'>" + stavka + "%" + "</td> <td class='nds'>" + nds.toFixed(2) + "</td> <td class='nds_w'>" + number_to_string(nds)[0].toUpperCase() + number_to_string(nds).substring(1, number_to_string(nds).length) + "</td> <td>" + summa + "</td> <td>" + (summa - nds).toFixed(2) + "</td><td class='td9'><input type='button' class='btn btn-danger btn_close btn-sm btn-close-obj' id='td" + ids_mini + "' title='Удалить текущий элемент' value='X' onclick = 'clear_one_obj(this)'> <input type='button' class='btn btn_close btn-close-obj btn-info btn-sm' id='td" + ids_mini + "' title='Текст в документ' value='O' onclick = 'creat_any_text(this)'> <input type='button' class='btn btn_close btn-warning btn-sm' id='td" + ids_mini + "' title='Открыть калькулятор (Ctrl+K)' value='К' onclick = 'other_vat(this)'></td></tr>");
 $("#td" + ids).hide();
 $("#td" + ids).fadeIn(400);
 }
}

function clicknasl()
{
 if ((document.getElementById("f_sum_rub").value + "." + document.getElementById("f_sum_kop").value).toString() != "0.00") {
 ids += 10;
 ids_mini ++;
 counter_remove ++;
 $("#clear_all").show();
 visible_button_clear = true; 
 summa = document.getElementById("f_sum_rub").value + "." + document.getElementById("f_sum_kop").value;
 stavka = document.getElementById("f_nds").value;
 nds = summa * stavka/100;
 $("#res_table table").append("<tr id=td" + ids + "><td>" + summa + "</td> <td>" + number_to_string(summa)[0].toUpperCase() + number_to_string(summa).substring(1, number_to_string(summa).length) + "</td> <td>" + "<span class='tgreen'>Начисление НДС</span>" + "</td> <td class='stavka'>" + stavka + "%" + "</td> <td class='nds'>" + nds.toFixed(2) + "</td> <td class='nds_w'>" + number_to_string(nds)[0].toUpperCase() + number_to_string(nds).substring(1, number_to_string(nds).length) + "</td> <td class='summa'>" + (parseFloat(summa) + nds).toFixed(2) + "</td> <td>" + summa + "</td><td class='td9'><input type='button' class='btn btn-danger btn_close btn-sm btn-close-obj' id='td" + ids_mini + "' title='Удалить текущий элемент' value='X' onclick = 'clear_one_obj(this)'> <input type='button' class='btn btn_close btn-info btn-sm btn-close-obj' id='td" + ids_mini + "' title='Текст в документ' value='O' onclick = 'creat_any_text(this)'> <input type='button' class='btn btn_close btn-warning btn-sm' id='td" + ids_mini + "' title='Открыть калькулятор (Ctrl+K)' value='К' onclick = 'other_vat(this)'></td></tr>");
 $("#td" + ids).hide();
 $("#td" + ids).fadeIn(400);
 }
}

function number_to_string(_number) {
        var _arr_numbers = new Array();
        _arr_numbers[1] = new Array('', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять', 'десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать');
        _arr_numbers[2] = new Array('', '', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто');
        _arr_numbers[3] = new Array('', 'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот');
        function number_parser(_num, _desc) {
                var _string = '';
                var _num_hundred = '';
                if (_num.length == 3) {
                        _num_hundred = _num.substr(0, 1);
                        _num = _num.substr(1, 3);
                        _string = _arr_numbers[3][_num_hundred] + ' ';
                }
                if (_num < 20) _string += _arr_numbers[1][parseFloat(_num)] + ' ';
                else {
                        var _first_num = _num.substr(0, 1);
                        var _second_num = _num.substr(1, 2);
                        _string += _arr_numbers[2][_first_num] + ' ' + _arr_numbers[1][_second_num] + ' ';
                }              
                switch (_desc){
                        case 0:
                                var _last_num = parseFloat(_num.substr(-1));
                                if (_last_num == 1) _string += 'рубль';
                                else if (_last_num > 1 && _last_num < 5) _string += 'рубля';
                                else _string += 'рублей';
                                break;
                        case 1:
                                var _last_num = parseFloat(_num.substr(-1));
                                if (_last_num == 1) _string += 'тысяча ';
                                else if (_last_num > 1 && _last_num < 5) _string += 'тысячи ';
                                else _string += 'тысяч ';
                                _string = _string.replace('один ', 'одна ');
                                _string = _string.replace('два ', 'две ');
                                break;
                        case 2:
                                var _last_num = parseFloat(_num.substr(-1));
                                if (_last_num == 1) _string += 'миллион ';
                                else if (_last_num > 1 && _last_num < 5) _string += 'миллиона ';
                                else _string += 'миллионов ';
                                break;
                        case 3:
                                var _last_num = parseFloat(_num.substr(-1));
                                if (_last_num == 1) _string += 'миллиард ';
                                else if (_last_num > 1 && _last_num < 5) _string += 'миллиарда ';
                                else _string += 'миллиардов ';
                                break;
                }
                _string = _string.replace('  ', ' ');
                return _string;
        }
        function decimals_parser(_num) {
                var _first_num = _num.substr(0, 1);
                var _second_num = parseFloat(_num.substr(1, 2));
                var _string = ' ' + _first_num + _second_num;
				console.log(_second_num);
                if (_second_num == 1) _string += ' копейка';
                else if (_second_num > 1 && _second_num < 5) _string += ' копейки';
                else _string += ' копеек';
                return _string;
        }
        if (!_number || _number == 0) return false;
        if (typeof _number !== 'number') {
                _number = _number.replace(',', '.');
                _number = parseFloat(_number);
                if (isNaN(_number)) return false;
        }
        _number = _number.toFixed(2);
        if(_number.indexOf('.') != -1) {
                var _number_arr = _number.split('.');
                var _number = _number_arr[0];
                var _number_decimals = _number_arr[1];
        }
        var _number_length = _number.length;
        var _string = '';
        var _num_parser = '';
        var _count = 0;
        for (var _p = (_number_length - 1); _p >= 0; _p--) {
                var _num_digit = _number.substr(_p, 1);
                _num_parser = _num_digit +  _num_parser;
                if ((_num_parser.length == 3 || _p == 0) && !isNaN(parseFloat(_num_parser))) {
                        _string = number_parser(_num_parser, _count) + _string;
                        _num_parser = '';
                        _count++;
                }
        }
        if (_number_decimals) _string += decimals_parser(_number_decimals);
		
        return _string;
}

