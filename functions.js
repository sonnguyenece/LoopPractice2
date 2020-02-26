function fiboSeq() {
    let N = prompt("Nhap vao so phan tu trong day Fibonacci");
    let temp = 0;
    let count = 0;
    let i = 0;
    let j = 1;
    let display = '';
    while (count < N) {
        display = display + j + ' ';
        temp = j;
        j = i + j;
        i = temp;
        count++;
    }
    document.getElementById('resultEx1').innerHTML = display;
}

function factorial() {
    let result;
    let input;
    do {
        input = prompt("Nhap vao 1 so nguyen duong :")
        if (input < 0) alert("Ban da nhap sai!!Hay nhap lai");
    }
    while (input < 0);
    if (input == 0 || input == 1) result = 1;
    else {
        result = 1;
        for (let i = 1; i <= input; i++) {
            result *= i;
        }
    }
    document.getElementById('resultEx2').innerHTML = input + "!" + "=" + result;
}

function drawTriagle() {
    let disTri1 = '<table>';
    let disTri2 = '<table>';
    let disTri3 = '<table>';
    let disTri4 = '<table>';
    let temp1 = 5;
    for (let i = 0; i < 5; i++) {
        disTri1 += "<tr>";
        for (let j = temp1; j > 0; j--) {
            disTri1 += "<td>*</td>";
        }
        disTri1 += "</tr>";
        temp1--;
    }
    disTri1 += "</table>";
    document.getElementById('triangle1').innerHTML = disTri1;

    let temp2 = 1;
    for (let i = 0; i < 5; i++) {
        disTri2 += "<tr>";
        for (let j = 0; j < temp2; j++) {
            disTri2 += "<td>*</td>";
        }
        disTri2 += "</tr>";
        temp2++;
        if (temp2 > 5) temp2 = 0;
    }
    disTri2 += "</table>";
    document.getElementById('triangle2').innerHTML = disTri2;
    let temp3 = 5;
    let temp4;
    for (let i = 0; i <= 5; i++) {
        disTri3 += "<tr>";
        for (let j = 0; j < temp3; j++) {
            disTri3 += "<td>" + " " + "</td>";
        }
        temp4 = 5 - temp3;
        for (let k = 0; k < temp4; k++) {
            disTri3 += "<td>*</td>";
        }
        disTri3 += "</tr>";
        temp3--;
        if (temp3 < 0) break;
    }
    disTri3 += "</table>";
    document.getElementById('triangle3').innerHTML = disTri3;
    let temp5 = 0;
    let temp6;
    for (let i = 0; i <= 5; i++) {
        disTri4 += "<tr>";
        temp6 = 5 - temp5;
        for (let j = 0; j < temp5; j++) {
            disTri4 += "<td>" + " " + "</td>";
        }
        for (let k = 0; k < temp6; k++) {
            disTri4 += "<td>*</td>";
        }
        disTri4 += "</tr>";
        temp5++;
        if (temp5 > 5) break;
    }
    disTri4 += "</table>";
    document.getElementById('triangle4').innerHTML = disTri4;

}

function drawRec() {
    let width = parseInt(prompt("Nhap vao chieu rong(tinh theo ki tu):"));
    let length = parseInt(prompt("Nhap vao chieu dai(tinh theo ki tu):"));
    let i = 0;
    let j = 0;
    let k = 0;
    let displayRec = "<table>";
    for (i = 0; i < length; i++) {
        if (i == 0 || i == (length - 1)) {
            displayRec += "<tr>";
            for (j = 0; j <= width - 1; j++) {
                displayRec += "<td>*</td>";
            }
            displayRec += "</tr>";
        } else for (j = 0; j <= width - 1; j++) {
            if (j == 0) {
                displayRec += "<tr><td>*</td>";
                continue;
            } else if (j == width - 1) {
                displayRec += "<td>*</td></tr>";
                continue;
            } else displayRec += "<td>" + " " + "</td>";
        }
    }
    displayRec += "</table>";
    document.getElementById('resultEx4').innerHTML = displayRec;
}

function money() {
    let V = parseFloat(prompt("Nhap vao von :"));
    let L = parseFloat(prompt("Nhap lai suat cua ngan hang:"));
    let T = parseFloat(prompt("So thang gui tiet kiem"));
    let M = V;
    let v = V;
    let t = T;
    for (let i = 0; i < T; i++) {
        M = M + V * L;
        V = V * (1 + L);
    }
    document.getElementById('resultEx5').innerHTML =
        "Voi " + v + "$ tien von." + " Gui ngan hang trong " + t + " thang voi lai suat " + L +
        " ban se nhan lai duoc: " + M.toFixed(2) + "$";
}

function heart() {
    let i, j;
    let x=0;
    let y=0;
    let displayHeart = "<table>";
    let F = 0;
    for(y=1.25;y>-1;y-=0.05){
        displayHeart += "<tr>";
        for(x=-1.25;x<1.25;x+=0.025){
            F = ((x ** 2) + (y ** 2) - 1)** 3 - (x ** 2) * (y ** 3);
            console.log(F);
            if(F<0.005&&F>-0.005){
                displayHeart += "<td>*</td>";
            }
            else
                displayHeart += "<td>" + " " + "</td>";
        }
        displayHeart += "</tr>"
    }
    displayHeart += "</table>";
    document.getElementById("resultEx6").innerHTML = displayHeart;
}