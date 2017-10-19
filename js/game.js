window.onload = function () {
    let coverObj = document.querySelectorAll(".cover");
    let innerObj = document.querySelectorAll(".inner");
    let innerNum = document.querySelectorAll(".inner span");
    let row = document.querySelectorAll(".row");
    let num = 10;
    let size = 81;
    let uncover = 0;
    //随机布雷
    for (let i = 0; i < num; i++) {
        innerNum[Math.floor(size * Math.random())].innerHTML = "*";
    }
    console.log(row[0].children[0].lastElementChild);
    //判断小方块周围雷数
    for (let r = 0; r < row.length; r++) {
        let col = row[r].querySelectorAll(".inner span");
        for (let c = 0; c < col.length; c++) {
            if (col[c]) {
                if (!(col[c].innerHTML)) {
                    col[c].innerHTML = getMine(r, c, getPos(r,c));
                }
            }
        }

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
        if(num){
            return num;
        }else{
            return "";
        }

    }

    // 判断区
    function getPos(r,c){
        let pos;
        if (r != 0 && r != row.length - 1 && c != 0 && c != row[0].children.length - 1) {
            pos="m";
        } else if (r === 0 && c != 0 && c != row[0].children.length - 1) {
            pos="t";
        } else if (r === row.length - 1 && c != 0 && c != row[0].children.length - 1) {
            pos="b";
        } else if (c === 0 && r != 0 && r != row.length - 1) {
            pos="l";
        } else if (c === row[0].children.length - 1 && r != 0 && r != row.length - 1) {
            pos="r";
        } else if (r === 0 && c === 0) {
            pos="lt";
        } else if (r === 0 && c === row[0].children.length - 1) {
            pos="rt";
        } else if (c === 0 && r === row.length - 1) {
            pos="lb";
        } else if (c === row[0].children.length - 1 && r === row.length - 1) {
            pos="rb";
        }
        return pos;
    }
    // 点击空白
    function blankClick(r,c,pos){
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
            row[r].children[c - 1].firstElementChild.classList.add("uncover");
            row[r - 1].children[c - 1].firstElementChild.classList.add("uncover");
            row[r - 1].children[c].firstElementChild.classList.add("uncover");
        }
    }
    //小方块添加点击事件
    coverObj.forEach(function (ele, index) {
        ele.onclick = function () {
            ele.classList.add("uncover");


            //踩到雷
            if (innerNum[index].innerHTML === "*") {
                for (let i = 0; i < coverObj.length; i++) {
                    coverObj[i].classList.add("uncover");
                }
            }
            if(!innerNum[index].innerHTML){
                let c=index%9;
                let r=Math.floor(index/9);
                blankClick(r, c, getPos(r,c));
            }
            //排完雷
            uncover=document.querySelectorAll(".uncover").length;
            if (uncover === size - num) {
                alert("win");
            }
        }
    });

};

