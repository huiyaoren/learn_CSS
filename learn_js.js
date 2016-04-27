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

//var _history = new Lesson();
//_history.name = "bob";
//_history.number = "160409";
//_history.introduce();

function Lesson() {
    this.name = undefined;
    this.teacher = undefined;
    this.num = undefined;
    this.details = function () {
        str = ("课程名：" + this.name + ", 授课教师：" + this.teacher + ",   学生人数：" + this.num + "<br/>");
        return str;
    }
}

var _history = new Lesson();
_history.teacher = "bob";
_history.num = 50;
document.write(_history.details());


var lesson = {
    history: {
        name: "历史",
        teacher: "Bob",
        num: "50"
    },
    math: {
        name: "数学",
        teacher: "Lily",
        num: "50"
    },
    english: {
        name: "英语",
        teacher: "Jobs",
        num: "50"
    },
    physical: {
        name: "物理",
        teacher: "Mike",
        num: "50"
    },
    chemistry: {
        name: "化学",
        teacher: "Tom",
        num: "50"
    },
    art: {
        name: "艺术",
        teacher: "Maria",
        num: "50"
    }
};

function printLesson(list) {
    //for (var i = 0; i < list.length; i++) {
    //    document.write("1111");
    //
    //    var _lesson = new Lesson();
    //    _lesson.name = list[i].name;
    //    _lesson.teacher = list[i].teacher;
    //    _lesson.num = list[i].num;
    //    document.write(_lesson.detail());
    //
    //}
    var j=0;
    for(var l in list){
        //var _lesson = new Lesson();
        document.write(list[''+key+'']);

        //_lesson.name = list.l;
        //_lesson.teacher = l.teacher;
        //_lesson.num = l.num;
        //document.write(_lesson.details());

    }
}
printLesson(lesson);