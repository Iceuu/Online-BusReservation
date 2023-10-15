
//total
function totalPrice(val) {
    var t = val * 500;
    var val1 = document.getElementById("total").value = t;
    console.log("total" + val1);
}

//pay alert
function pay() {
    alert("Your Ticket has been booked Successfully")
}


// payments

//upi

function totalPrice(val) {
    var t = val * 500;
    var val1 = document.getElementById("total").value = t;

    var val3 = val1 + 5;
    var upitotal = document.getElementById("upi").value = val3;

}


//booking
let answer = {};
function booking() {
    event.preventDefault();


    let fromBook = document.getElementById("from").value;
    let toBook = document.getElementById("to").value;
    let dateBook = document.getElementById("date").value;
    let ticketTotalBook = document.getElementById("ticketTotal").value;
    let totalBook = document.getElementById("total").value;

    let traveller_details = {};

    traveller_details.From = fromBook;
    traveller_details.To = toBook;
    traveller_details.Date = dateBook;
    traveller_details.Number_of_Tickets = ticketTotalBook;
    traveller_details.Date = totalBook;


    answer.Booking_Informations = traveller_details;
    console.log(answer);

    window.location.href = "#toLab";

}


let result2 = {}


function payment1() {
    event.preventDefault();
    let payUpiId = document.getElementById("upitext").value;
    let payUpi = document.getElementById("upi").value;


    let pay_details = {};

    pay_details.Upi_ID = payUpiId;
    pay_details.Total = payUpi;


    result2.Payment_Informations = pay_details;
    console.log(result2);

    alert("Your Ticket has been booked Successfully");
}

function gotopay() {
    window.location.href = "#payDiv";
    event.preventDefault();
}

function gotopass() {
    window.location.href = "#passHead";
}



































