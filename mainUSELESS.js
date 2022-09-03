let stylesheetsContents = "";

Array.from(document.styleSheets[0].cssRules).forEach(rule=>{
    stylesheetsContents+=rule.cssText;
});

let init = Array.from(stylesheetsContents.match(/\._.+\}/));

str = init[0];

str = str.split(" > ");

let target = str[1];
let affectRaw = str[2];
let affectSelector = affectRaw.replace(/^([^ ]+)([ ])(.+)/,"$1");
let affectContentRaw = affectRaw.replace(/^([^ ]+)([ ])(.+)/,"$3");
let affectContentStripped = affectContentRaw.replace(/^\{[ ]/,"").replace(/[ ]\}$/,"")+" ";
let affectContentSplitedRaw = affectContentStripped.split("; ");

affectContentSplitedRaw.pop();

affectContentSplitedRaw.forEach(property=>{
    let propertyName = property.replace(/((\w|-)+)(\:[ ])(.+)/,"$1");//good
    let value = property.replace(/([^ \:]+)(\:[ ])(.+)/,"$3");//good
    let isDashed = /-/.test(propertyName);
    if(isDashed) {
        let arr = propertyName.split("");
        let flag = false;
        var concatStr = "";
        arr.forEach(letter=>{
            if(letter==="-"){
                flag=true;return;
            };
            if(flag){
                concatStr+=letter.toUpperCase();
                flag=false;
            } else {
                concatStr+=letter;
            }
        });
        propertyName = concatStr;
    }
    // console.log(propertyName)
    let rule = str[2];
    document.styleSheets[0].insertRule(rule,document.styleSheets[0].cssRules.length)
})

console.log(affectContentSplitedRaw);

document.onkeyup = e=> {
    alert(e.key.charCodeAt(0))
}


