
var Cookie = {
    setCookie:  function ( key, value, day ) {
        var str = key + '=' + value + ';';
        if(day){
            var now = new Date();
            now.setDate(now.getDate() + day);
            str += ' expires=' + now + ';';
        }
        document.cookie = str;
    },

    getCookie:  function ( key ) {
        var arr = document.cookie.split('; ');
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].split('=')[0] === key) {
                return  arr[i].split('=')[1];
            };
        }
    },
    delCookie: 	function (key) {
        this.setCookie(key, '', -10);
    }
};



/*		setCookie('Simon', 'You are awesome!', 5);

 function setCookie( key, value, day ) {
 var str = key + '=' + value + ';';
 if(day){
 var now = new Date();
 now.setDate(now.getDate() + day);
 str += ' expire=' + now + ';';
 }
 document.cookie = str;
 }

 getCookie( 'Simon' );

 function getCookie( key ) {
 var arr = document.cookie.split('; ');
 for (var i = 0; i < arr.length; i++) {
 if (arr[i].split('=')[0] === key) {
 return  arr[i].split('=')[1];
 };
 }
 }

 delCookie(key);

 function delCookie(key) {
 setCookie(key, '', -1);
 }
 */