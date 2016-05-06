/**
 * Created by wslsh on 2016/4/26.
 */

function Student() {
    this.name = undefined;
    this.number = undefined;
    this.introduce = function () {
        document.write("name: " + this.name + " ,number: " + this.number + "<br/>")
    }
}


function Lesson() {
    this.name = undefined;
    this.teacher = undefined;
    this.num = undefined;
    this.details = function () {
        str = ("课程名：" + this.name + ", 授课教师：" + this.teacher + ",   学生人数：" + this.num + "<br/>");
        return str;
    }
}


// 表格 Table 类
function Table() {
    this.row = document.getElementById("a").value;
    this.col = document.getElementById("b").value;
    this.print = function () {
        var area = document.getElementById("area");
        for (var i = 0; i < this.col; i++) {
            var tr = document.createElement("tr");
            for (var j = 0; j < this.row; j++) {
                var td = document.createElement("td");
                td.style.width = "50px";
                td.style.height = "15px";
                tr.appendChild(td);
            }
            area.appendChild(tr);
        }
    }
}


// 生成表格
function printTable() {
    var tb = new Table();
    tb.print();
}


// 删除表格行
function deleteRows() {
    var row = document.getElementById("c").value - 1;
    var table = document.getElementsByTagName("table")[1];
    var rows = table.getElementsByTagName("tr")[row];
    table.removeChild(rows);
}


// 设置表格某单元值
function setTd() {
    var row = document.getElementById("d").value - 1;
    var col = document.getElementById("e").value - 1;
    var content = document.getElementById("f").value;
    var table = document.getElementById("area");
    var rows = table.getElementsByTagName("tr")[row];
    var td = rows.getElementsByTagName("td")[col];
    td.innerText = content;
}

