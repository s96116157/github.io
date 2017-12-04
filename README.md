<img src="https://github.com/s96116157/s96116157.github.io/blob/master/demo/Picture/icon_index.png" width="128" align="right">

# Google App Script Exsample
[![MIT license](https://img.shields.io/badge/built%20with-Google%20App%20Script-blue.svg)](https://developers.google.com/apps-script/)
![MIT license](https://img.shields.io/badge/built%20with-JavaScript-red.svg)

**You can use the [Google App Script](https://developers.google.com/apps-script/) send information to [Google Cloud Sheets](https://docs.google.com/spreadsheets/).**

You don't need to build server by youself.

## Google App Script

Use **function doGet(e)** get information.

**Your URL** is your **[Google Cloud Sheet](https://docs.google.com/spreadsheets/)** URL.

**Exsample [My Google Sheet](https://docs.google.com/spreadsheets/d/1X5Mtln-MYBhyBRn0RveNOXCkb32A4VTzht1AIGkNvdU/edit#gid=0)**

**name** is your sheets name
```javascript
function doGet(e) {  
  var params = e.parameter;
  var url = 'Your URL';
  var name = 'From_002';
  var type = params.type;
  
  var SpreadSheet = SpreadsheetApp.openByUrl(url);  
  var SheetName = SpreadSheet.getSheetByName(name);  
  
  var lastColumn = SheetName.getLastColumn();  // A B C D...
  var lastRow = SheetName.getLastRow();  // 1 2 3 4...
  var back_value = 1;
  
  if(type == 'write'){
    back_value = write(params, SheetName, lastRow);
  }  
  else if(type == 'read')  {      
    return ContentService.createTextOutput(doGet_2(params));
  }
  else  {
    
  };    
  return ContentService.createTextOutput(back_value);
}
```

```javascript
function write(params, SheetName, lastRow)
{ 
  var id = Date.now();
  var key = params.key;
  var sysid = lastRow;
  var d_items = params.items;
  var d_number = params.number;
  var d_price = params.price;
  var data_items = [];
  var data_number = [];
  var data_price = [];
  var arr_items;
  var arr_number;
  var arr_price;
  
  if(d_items.indexOf(',')!=-1){        // indexOf 傳回指定字元 ',' 沒值則回傳-1
    arr_items = d_items.split(',');    // 把原始資料用 ',' 分割成陣列
    arr_number = d_number.split(',');  // 把原始資料用 ',' 分割成陣列
    arr_price = d_price.split(',');    // 把原始資料用 ',' 分割成陣列
    
    for(var i=0; i<arr_items.length; i++){
      data_items.push(arr_items[i]); 
      data_number.push(arr_number[i]); 
      data_price.push(arr_price[i]); 
    }
    
  }else{
    arr_items = d_items.split(',');    // 把原始資料用 ',' 分割成陣列
    data_items = [d_items];
    data_number = [d_number];
    data_price = [d_price];
  }
  
  for (i = 0; i < arr_items.length; i++) {  
    sysid ++;
    var val_time = params.time;    
    var val_items = data_items[i];
    var val_number = data_number[i];
    var val_price = data_price[i];
    SheetName.appendRow([sysid,1,GetTime(),val_items,val_number,val_price,id]);
  }
  
  return id;
};
```

```javascript
function GetTime()
{
  var Today = new Date();
  var yyyy = Today.getFullYear();
  var MM = ('0' + (Today.getMonth() + 1)).substr(-2);
  var dd = ('0' + Today.getDate()).substr(-2);
  var HH = ('0' + Today.getHours()).substr(-2);
  var mm = ('0' + Today.getMinutes()).substr(-2);
  var ss = ('0' + Today.getSeconds()).substr(-2);
  return '' + yyyy + '' + MM + '' + dd + '' + HH + '' + mm + '' + ss + '';
}
```

```javascript
function doGet_2(params){
  var sourceSheetString = 'https://spreadsheets.google.com/tq?tqx=out:json&key=1X5Mtln-MYBhyBRn0RveNOXCkb32A4VTzht1AIGkNvdU&gid=0&tq=';
  var query = 'select A,B,C,D,E,F,G ';
  query += params.query;
  var queryString = sourceSheetString + query;

  var response = UrlFetchApp.fetch(queryString); 
  var data = response.getContentText().replace(/google.visualization.Query.setResponse/,'');
  data = data.slice(9,data.length-2); 
  return data;
}
```
