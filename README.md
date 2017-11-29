<img src="https://github.com/s96116157/s96116157.github.io/blob/master/demo/Picture/icon_index.png" width="128" align="right">
# Google App Script Exsample

You can use the [editor on GitHub](https://github.com/s96116157/index/edit/master/index.md) to maintain and preview the content for your website in Markdown files.

Whenever you commit to this repository, GitHub Pages will run [Jekyll](https://jekyllrb.com/) to rebuild the pages in your site, from the content in your Markdown files.

## Google App Script

Markdown is a lightweight and easy-to-use syntax for styling your writing. It includes conventions for

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
    
  }
  else  {
    
  };    
  return ContentService.createTextOutput(back_value);
}

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

For more details see [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/).

### Jekyll Themes

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/s96116157/index/settings). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://help.github.com/categories/github-pages-basics/) or [contact support](https://github.com/contact) and we’ll help you sort it out.
