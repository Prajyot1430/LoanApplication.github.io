function myfun() {


    var x = document.getElementById('menu');

    if (x.style.display == "block") {

        x.style.display = "none";

    } else {
        x.style.display = 'block';
    }

}

// function convertValue(e) {
//     loanamount.textContent = e.target.value;
//     document.getElementById('amountInWords').innerHTML = fname;

// }

function validation() {
    var username = document.getElementById('user').value;
    var emailid = document.getElementById('email').value;
    var pancard = document.getElementById('pan').value;
    var loanamount = document.getElementById('number').value;
    var sumbit = document.getElementById('submitform');
    var tut = document.getElementById('demo');
    var tut1 = document.getElementById('demo1');
    var tut2 = document.getElementById('demo2');
    var tut3 = document.getElementById('demo3');
    // var myarr = username.split(" ")[0];

    let reg = /^[A-Za-z ]+$/;
    var regexp = /[a-zA-Z]+\s+[a-zA-Z]+/g;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var panid = /([A-Z]){5}([0-9]){4}([A-Z]){1}$/;

    // document.getElementById('users').innerHTML=myarr;

    // trimming first name of the user and storing it in localstorage
    // console.log(fname)
    const [first, last] = username.split(' ')
    var fname = first;
    localStorage.setItem("fname", fname)

    // const input = document.querySelector('input');
    // const amountInWords = document.getElementById('amountInWords');

    // input.addEventListener('input', convertValue());

    if (username == "") {
        alert("Please fill up the name")
        tut.innerHTML = "Please Fill Up The Name";
        return false;
    } if (!reg.test(username)) {
        alert("Please Fill up the Correct Name")
        tut.innerHTML = "Please Fill up the Correct Name";
        return false;
    } if (!regexp.test(username)) {
        alert("Please Correct username")
        tut.innerHTML = "Please Correct username";
        return false;
    } if (username.length < 4) {
        alert("Please Enter a corret name")
        tut.innerHTML = 'Please Fill Up The Full Name'
        return false;
    } if (!mailformat.test(emailid)) {
        alert("Please Correct Mail Id")
        tut1.innerHTML = "Please Correct Mail Id"
        return false;

    } if (emailid == "") {
        alert("Please Fill up the email")
        tut1.innerHTML = "Please Fill up the email"
        return false;
    } if (pancard == "") {
        alert("Please Fill up the PanCard Number")
        tut2.innerHTML = "Please Fill up the PanCard Number"
        return false;
    } if (panid.test(pancard)) {
        // alert("Yes its correct")
    } else {
        alert("Its is not valid")
        tut2.innerHTML = "Must be in this order and format: ABCDE1234F"
        return false;
    } if (loanamount == "") {
        alert("Please Fill up the LoamAmount")
        tut3.innerHTML = "Please Fill up the LoamAmount"
        return false;
    } if (loanamount.length > 10) {

        alert("Maximum 9 digital Numeric")
        tut3.innerHTML = "maximum of 9 digits"
        return false;
    } else {

        interest = (loanamount * (8.5 * 0.01)) / 180;
        total = ((loanamount / 180) + interest);
        Add = Math.trunc(total)
        alert("‘Your Estimated EMI Will Be ’,"+ Add + "₹")
        alert("Thanks For Submit The Form")
        window.open("./Confirmation.html");
    }
    {
        // window.location.href="Confirmation.html";
        // alert("Done")
        // window.open("./Confirmation.html")
        // myWindow.document.write("<p>This is 'MsgWindow'. I am 200px wide and 100px tall!</p>");
        // return true;
        // d.document.write(myarr);


    }
    // document.getElementById('users').innerHTML = username;
    // d.document.write(myarr);


}

function confirmationPage() {
    var fname = localStorage.getItem('fname');
    document.getElementById('fname').innerHTML = `${fname} Thank you for your inquiry. A 4 digit verification number has been sent to your email:`;
    // localStorage.removeItem('fname');

}


// document.getElementById('users').innerHTML=`Dear ${username},
// Thank you for your inquiry. A 4 digit verification number has been sent to your email:`;
var min = 1000;
var max = 9000;
var num = Math.floor(Math.random() * min) + max;
console.log(num)



function msg() {
    var ids = document.getElementById('Otp').value;
    var counter=0;
    if (ids != num) {
        alert("Please Correct The OTP")
    } else {
        window.location.href = "http://pixel6.co/";
        alert("Validation Successful!")
    }if(ids != num && counter++ ){

        alert("Please enter your password:")
        return false;
    }if(counter>=3){
        alert(" 'Validation Failed!'")
        return false;
    }else{

        window.open("Error.html")
        return true;
    }

}
