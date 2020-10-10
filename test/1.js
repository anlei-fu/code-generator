let url ="Http://www.microsoft.com/test/term_no(由系统生成)/";
let replaced =url.replace("term_no(由系统生成)","test");
var strRegex = "^((https|http|ftp|rtsp|mms)://)?[a-z0-9A-Z]{3}\.[a-z0-9A-Z][a-z0-9A-Z]{0,61}?[a-z0-9A-Z]\.com|net|cn|cc (:s[0-9]{1-4})?/$";
var re = new RegExp(strRegex);
if(!re.test(replaced)){
  console.log(`${url} 格式不正确!`);
  return;
}