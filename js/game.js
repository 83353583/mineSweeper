window.onload = function () {
    let coverObj = document.querySelectorAll(".cover");
    let innerObj = document.querySelectorAll(".inner");
    let innerNum = document.querySelectorAll(".inner span");
    let row = document.querySelectorAll(".row");
    let num = 10;
    let size = 81;
    let uncover = 0;
    let numArr = [];
    //随机布雷
    setMine();
    setNum();
    function setMine() {
        for (let i = 0; i < num; i++) {
            let pos = Math.floor(size * Math.random());
            while (numArr.includes(pos)) {
                pos = Math.floor(size * Math.random());
            }
            numArr[numArr.length] = pos;
            innerNum[pos].innerHTML = "*";
        }
        console.log("mineOK");
    }

    // console.dir(grow);
    // console.dir(row);
    // console.dir(grow[0].children[0].lastElementChild);
    // console.dir(row[0].children[0].lastElementChild);
    //判断小方块周围雷数
    function setNum() {
        for (let r = 0; r < row.length; r++) {
            let col = row[r].querySelectorAll(".inner span");
            for (let c = 0; c < col.length; c++) {
                if (col[c]) {
                    if (!(col[c].innerHTML)) {
                        col[c].innerHTML = getMine(r, c, getPos(r, c));
                    }
                }
            }

        }
        console.log("numOK");
    }

    // 获得雷数Fn
    function getMine(r, c, pos) {
        let num = 0;
        if (pos === "m") {
            if (row[r - 1].children[c - 1].lastElementChild.innerHTML === "*") {
                num++;
            }
            if (row[r - 1].children[c].lastElementChild.innerHTML === "*") {
                num++;
            }
            if (row[r - 1].children[c + 1].lastElementChild.innerHTML === "*") {
                num++;
            }
            if (row[r].children[c - 1].lastElementChild.innerHTML === "*") {
                num++;
            }
            if (row[r].children[c + 1].lastElementChild.innerHTML === "*") {
                num++;
            }
            if (row[r + 1].children[c - 1].lastElementChild.innerHTML === "*") {
                num++;
            }
            if (row[r + 1].children[c].lastElementChild.innerHTML === "*") {
                num++;
            }
            if (row[r + 1].children[c + 1].lastElementChild.innerHTML === "*") {
                num++;
            }
        }
        if (pos === "t") {
            if (row[r].children[c - 1].lastElementChild.innerHTML === "*") {
                num++;
            }
            if (row[r].children[c + 1].lastElementChild.innerHTML === "*") {
                num++;
            }
            if (row[r + 1].children[c - 1].lastElementChild.innerHTML === "*") {
                num++;
            }
            if (row[r + 1].children[c].lastElementChild.innerHTML === "*") {
                num++;
            }
            if (row[r + 1].children[c + 1].lastElementChild.innerHTML === "*") {
                num++;
            }
        }
        if (pos === "b") {
            if (row[r - 1].children[c - 1].lastElementChild.innerHTML === "*") {
                num++;
            }
            if (row[r - 1].children[c].lastElementChild.innerHTML === "*") {
                num++;
            }
            if (row[r - 1].children[c + 1].lastElementChild.innerHTML === "*") {
                num++;
            }
            if (row[r].children[c - 1].lastElementChild.innerHTML === "*") {
                num++;
            }
            if (row[r].children[c + 1].lastElementChild.innerHTML === "*") {
                num++;
            }
        }
        if (pos === "l") {
            if (row[r - 1].children[c].lastElementChild.innerHTML === "*") {
                num++;
            }
            if (row[r - 1].children[c + 1].lastElementChild.innerHTML === "*") {
                num++;
            }
            if (row[r].children[c + 1].lastElementChild.innerHTML === "*") {
                num++;
            }
            if (row[r + 1].children[c].lastElementChild.innerHTML === "*") {
                num++;
            }
            if (row[r + 1].children[c + 1].lastElementChild.innerHTML === "*") {
                num++;
            }
        }
        if (pos === "r") {
            if (row[r - 1].children[c - 1].lastElementChild.innerHTML === "*") {
                num++;
            }
            if (row[r - 1].children[c].lastElementChild.innerHTML === "*") {
                num++;
            }
            if (row[r + 1].children[c - 1].lastElementChild.innerHTML === "*") {
                num++;
            }
            if (row[r + 1].children[c].lastElementChild.innerHTML === "*") {
                num++;
            }
            if (row[r].children[c - 1].lastElementChild.innerHTML === "*") {
                num++;
            }
        }
        if (pos === "lt") {
            if (row[r].children[c + 1].lastElementChild.innerHTML === "*") {
                num++;
            }
            if (row[r + 1].children[c].lastElementChild.innerHTML === "*") {
                num++;
            }
            if (row[r + 1].children[c + 1].lastElementChild.innerHTML === "*") {
                num++;
            }
        }
        if (pos === "rt") {
            if (row[r + 1].children[c - 1].lastElementChild.innerHTML === "*") {
                num++;
            }
            if (row[r + 1].children[c].lastElementChild.innerHTML === "*") {
                num++;
            }
            if (row[r].children[c - 1].lastElementChild.innerHTML === "*") {
                num++;
            }
        }
        if (pos === "lb") {
            if (row[r - 1].children[c].lastElementChild.innerHTML === "*") {
                num++;
            }
            if (row[r - 1].children[c + 1].lastElementChild.innerHTML === "*") {
                num++;
            }
            if (row[r].children[c + 1].lastElementChild.innerHTML === "*") {
                num++;
            }
        }
        if (pos === "rb") {
            if (row[r].children[c - 1].lastElementChild.innerHTML === "*") {
                num++;
            }
            if (row[r - 1].children[c - 1].lastElementChild.innerHTML === "*") {
                num++;
            }
            if (row[r - 1].children[c].lastElementChild.innerHTML === "*") {
                num++;
            }
        }
        if (num) {
            return num;
        } else {
            return "";
        }

    }

    // 判断区
    function getPos(r, c) {
        let pos;
        if (r != 0 && r != row.length - 1 && c != 0 && c != row[0].children.length - 1) {
            pos = "m";
        } else if (r === 0 && c != 0 && c != row[0].children.length - 1) {
            pos = "t";
        } else if (r === row.length - 1 && c != 0 && c != row[0].children.length - 1) {
            pos = "b";
        } else if (c === 0 && r != 0 && r != row.length - 1) {
            pos = "l";
        } else if (c === row[0].children.length - 1 && r != 0 && r != row.length - 1) {
            pos = "r";
        } else if (r === 0 && c === 0) {
            pos = "lt";
        } else if (r === 0 && c === row[0].children.length - 1) {
            pos = "rt";
        } else if (c === 0 && r === row.length - 1) {
            pos = "lb";
        } else if (c === row[0].children.length - 1 && r === row.length - 1) {
            pos = "rb";
        }
        if (r < 0 || c < 0) {
            return;
        }
        return pos;
    }

    // 点击空白
    function blankClear(r, c, pos) {
        if (pos === "m") {
            row[r - 1].children[c - 1].firstElementChild.classList.add("uncover");

            row[r - 1].children[c].firstElementChild.classList.add("uncover");

            row[r - 1].children[c + 1].firstElementChild.classList.add("uncover");

            row[r].children[c - 1].firstElementChild.classList.add("uncover");

            row[r].children[c + 1].firstElementChild.classList.add("uncover");

            row[r + 1].children[c - 1].firstElementChild.classList.add("uncover");

            row[r + 1].children[c].firstElementChild.classList.add("uncover");

            row[r + 1].children[c + 1].firstElementChild.classList.add("uncover");

        }
        if (pos === "t") {
            row[r].children[c - 1].firstElementChild.classList.add("uncover");

            row[r].children[c + 1].firstElementChild.classList.add("uncover");

            row[r + 1].children[c - 1].firstElementChild.classList.add("uncover");

            row[r + 1].children[c].firstElementChild.classList.add("uncover");

            row[r + 1].children[c + 1].firstElementChild.classList.add("uncover");

        }
        if (pos === "b") {
            row[r - 1].children[c - 1].firstElementChild.classList.add("uncover");

            row[r - 1].children[c].firstElementChild.classList.add("uncover");

            row[r - 1].children[c + 1].firstElementChild.classList.add("uncover");

            row[r].children[c - 1].firstElementChild.classList.add("uncover");

            row[r].children[c + 1].firstElementChild.classList.add("uncover");

        }
        if (pos === "l") {
            row[r - 1].children[c].firstElementChild.classList.add("uncover");

            row[r - 1].children[c + 1].firstElementChild.classList.add("uncover");

            row[r].children[c + 1].firstElementChild.classList.add("uncover");

            row[r + 1].children[c].firstElementChild.classList.add("uncover");

            row[r + 1].children[c + 1].firstElementChild.classList.add("uncover");

        }
        if (pos === "r") {
            row[r - 1].children[c - 1].firstElementChild.classList.add("uncover");

            row[r - 1].children[c].firstElementChild.classList.add("uncover");

            row[r + 1].children[c - 1].firstElementChild.classList.add("uncover");

            row[r + 1].children[c].firstElementChild.classList.add("uncover");

            row[r].children[c - 1].firstElementChild.classList.add("uncover");

        }
        if (pos === "lt") {
            row[r].children[c + 1].firstElementChild.classList.add("uncover");

            row[r + 1].children[c].firstElementChild.classList.add("uncover");

            row[r + 1].children[c + 1].firstElementChild.classList.add("uncover");

        }
        if (pos === "rt") {
            row[r + 1].children[c - 1].firstElementChild.classList.add("uncover");

            row[r + 1].children[c].firstElementChild.classList.add("uncover");

            row[r].children[c - 1].firstElementChild.classList.add("uncover");

        }
        if (pos === "lb") {
            row[r - 1].children[c].firstElementChild.classList.add("uncover");

            row[r - 1].children[c + 1].firstElementChild.classList.add("uncover");

            row[r].children[c + 1].firstElementChild.classList.add("uncover");

        }
        if (pos === "rb") {
            row[r - 1].children[c - 1].firstElementChild.classList.add("uncover");

            row[r - 1].children[c].firstElementChild.classList.add("uncover");

            row[r].children[c - 1].firstElementChild.classList.add("uncover");

        }
    }

    //小方块添加点击事件
    coverObj.forEach(function (ele, index) {
        // 第一下踩到雷
        // 一般情况
        ele.onclick = function () {
            ele.classList.add("uncover");
            //踩到雷
            if (innerNum[index].innerHTML === "*") {
                innerNum[index].innerHTML = "☠";
                for (let i = 0; i < coverObj.length; i++) {
                    coverObj[i].classList.add("uncover");
                }
            }
            // 点开空白块
            if (!innerNum[index].innerHTML) {
                let c = index % 9;
                let r = Math.floor(index / 9);
                blankClear(r, c, getPos(r, c));
            }
            //排完雷
            uncover = document.querySelectorAll(".uncover").length;
            if (uncover === size - num) {
                addStarFn(100);
                coverObj.forEach(function (ele, index) {
                    ele.innerHTML = "☻";
                    ele.onclick = null;
                })
            }
        }
    });
};

// 星星
let starColor = ["0", "3", "6", "9", "c", "f"];
function getColor() {
    let str = "#";
    for (let i = 0; i < 3; i++) {
        let pos = Math.floor(6 * (Math.random() - 0.0001));
        str += starColor[pos];
    }
    return str;
}
let icon = ["★", "❤", "❉", "❁", "☂", "☃", "☻", "☀", "☎"];
function getIcon() {
    let pos = Math.floor(9 * (Math.random() - 0.0001));
    return icon[pos];
}
function addStarFn(starNum) {
    for (let i = 0; i < starNum; i++) {
        let star = document.createElement("div");
        star.innerHTML = "★";
        star.className = "star";
        star.style.left = `${ Math.floor(Math.random() * innerWidth)}px`;
        star.style.animationDuration = `${Math.floor(5 + 25 * Math.random())}s`;
        star.style.fontSize = `${Math.floor(12 + 24 * Math.random())}px`;
        star.style.color = getColor();
        document.documentElement.appendChild(star);
    }
}



