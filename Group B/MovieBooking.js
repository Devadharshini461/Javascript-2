let ticketPrice = 200; // default movie price

function changeMovie() {
  const movieSelect = document.getElementById('movie');
  ticketPrice = +movieSelect.value;
  updateSelectedCount();
}

function selectSeat(seatElement) {
  if (seatElement.classList.contains('occupied')) {
    alert('This seat is already booked!');
    return;
  }
  seatElement.classList.toggle('selected');
  updateSelectedCount();
}

function updateSelectedCount() {
  const seats = document.querySelectorAll('.row .seat');
  const selectedSeats = document.querySelectorAll('.row .seat.selected');
  const count = document.getElementById('count');
  const total = document.getElementById('total');

  const selectedSeatsIndexes = [...selectedSeats].map(seat => [...seats].indexOf(seat));

  localStorage.setItem('selectedSeats', JSON.stringify(selectedSeatsIndexes));

  count.innerText = selectedSeats.length;
  total.innerText = selectedSeats.length * ticketPrice;
}

function populateUI() {
  const seats = document.querySelectorAll('.row .seat');
  const bookedSeats = JSON.parse(localStorage.getItem('bookedSeats'));
  if (bookedSeats && bookedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (bookedSeats.indexOf(index) > -1) {
        seat.classList.add('occupied');
      }
    });
  }
}

function bookSeats() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');
  if (selectedSeats.length === 0) {
    alert('Please select at least one seat!');
    return;
  }

  const totalAmount = selectedSeats.length * ticketPrice;
  const confirmPay = confirm(`Pay ₹${totalAmount} to confirm booking?`);

  if (confirmPay) {
    selectedSeats.forEach(seat => {
      seat.classList.remove('selected');
      seat.classList.add('occupied');
    });

    const seats = document.querySelectorAll('.row .seat');
    const bookedSeatsIndexes = [...seats]
      .map((seat, index) => (seat.classList.contains('occupied') ? index : null))
      .filter(index => index !== null);

    localStorage.setItem('bookedSeats', JSON.stringify(bookedSeatsIndexes));
    alert('Payment successful! Your seats are booked.');
    updateSelectedCount();
  }
}








//  allot={
//     A1:{book:0},A2:{book:0},A3:{book:0},A4:{book:0},A5:{book:0},A6:{book:0},A7:{book:0},A8:{book:0},
//     B1:{book:0},B2:{book:0},B3:{book:0},B4:{book:0},B5:{book:0},A6:{book:0},B7:{book:0},B8:{book:0},
//     B9:{book:0},B10:{book:0},B11:{book:0},B12:{book:0},B13:{book:0},B14:{book:0},B15:{book:0},B16:{book:0},
//     B17:{book:0},B18:{book:0},B19:{book:0},B20:{book:0},B21:{book:0},B22:{book:0},B23:{book:0},B24:{book:0},
//     C1:{book:0},C2:{book:0},C3:{book:0},C4:{book:0},C5:{book:0},C6:{book:0},C7:{book:0},C8:{book:0},
//     C9:{book:0},C10:{book:0},C11:{book:0},C12:{book:0},C13:{book:0}
// }
//     var btn;
//  function add(x){
//     if(allot[x].book==0){
//         allot[x].book++;
//         btn=document.getElementById("btn");
//         btn.style.color="yellow";

//     }
//  }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
// //     function booking(){
// //     let btn=document.getElementById("btn").click;
// //     if(btn.style.color==white){
// //         btn.style.color=yellow;
// //     }
// //     else if(btn.style.color==yellow){
// //         btn.style.color=green;
// //     }
// //     // if(btn.style.color==){
// //     //     btn.style.color=yellow;
// //     // }
    
// // }