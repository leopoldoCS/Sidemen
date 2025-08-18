/*
8/7/205

Author: Ali

Performs actions related to a reservation

THe code handles logic related to a reservation and the selected rooms. It also handles information related to the reservation.

*/
document.addEventListener("DOMContentLoaded", () => {
    const room = JSON.parse(sessionStorage.getItem("selectedRoom"));
    const roomDetails = document.getElementById("roomDetails");
  
    if (!room) {
      roomDetails.innerHTML = "<p>Error: No room selected.</p>";
      document.getElementById("bookingForm").style.display = "none";
      return;
    }
  
    roomDetails.innerHTML = `
      <h3>You're booking: ${room.type} (Room ${room.number})</h3>
      <p>Price: $${room.price}/night</p>
      <p>Capacity: ${room.capacity} adult(s)</p>
      <img src="${room.image}" alt="${room.type}" style="width:200px;">
    `;
  
    document.getElementById("bookingForm").addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
  
      // Simulate reservation logic
      alert(`Thank you, ${name}! Your reservation for Room ${room.number} is confirmed. A confirmation will be sent to ${email}.`);
      sessionStorage.removeItem("selectedRoom");
      window.location.href = "index.html"; // or confirmation.html
    });
  });
  
