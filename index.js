/**
 * Created by wslsh on 2016/4/21.
 */
var height= 9,
    width = 9,
    i,j;

for(i=1;i<=height;i++){
    for(j=1;j<=width;j++) {
        if(j>i){
            continue;
        }
        document.write(i + "*" + j + "=" + i * j + "&nbsp;");

    }
    document.write("<br/>");
}