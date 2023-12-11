let frm = document.getElementById('frm');
let vi = document.getElementById('error_frm');
let unm = document.getElementById('un');
// let yoo = unm.value.length;
frm.addEventListener('submit', function (e) {
    // console.log(uname);
    let uname = unm.value;
    if (uname === "") {
        vi.innerHTML = "plz enter value";
        e.preventDefault();
    }
    else if (uname.length <= 3) {
        vi.innerHTML = "plz Enter 4 char";
        e.preventDefault();
    }
    else {
        vi.innerHTML = "";
    }

});
let frm1 = document.getElementById('frm');
let er = document.getElementById('error_pass');
let pass = document.getElementById('ps');
frm1.addEventListener('submit', function (p) {
    let pasw = pass.value;
    if (pasw === "") {
        er.innerHTML = "Enter Password";
        p.addEventListener();

    }
    else if (pasw.length <= 3) {
        er.innerHTML = "plz Enter 4 char";
        p.preventDefault();
    }
    else {
        er.innerHTML = "";
    }

})