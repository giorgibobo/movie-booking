var container = document.querySelector(".container");
var seats = document.querySelectorAll(" .row .seat:not(.occupied)");
var count = document.getElementById("count");
var total = document.getElementById("total");
var movieSelect = document.getElementById("movie");
const checkout = document.querySelector(".checkout");

var ticketPrice = +movieSelect.value;


function updateSelectedCount(){
    var selectedSeats = document.querySelectorAll('.row .seat.selected');    

    var seatsIndex = [...selectedSeats].map(function(el){
        return [...seats].indexOf(el);
    });

    checkout.innerHTML = "";

    seatsIndex.map(el => {
        const str = `${Math.ceil(++el / 8)}-${el % 8}`;
        const para = document.createElement("p");
        para.innerText = str;
        checkout.appendChild(para);

    });
    

    var selectedSeatsCount = selectedSeats.length; //seatsIndex.length
    count.textContent = selectedSeatsCount;
    total.innerText = "$" + ticketPrice * selectedSeatsCount;

}

movieSelect.addEventListener("change", function(e){
    ticketPrice = e.target.value;
    updateSelectedCount();
})


container.addEventListener("click", function(event){
    if(event.target.classList.contains("seat") && !event.target.classList.contains("occupied")){
        event.target.classList.toggle("selected")
    }

    updateSelectedCount();

})