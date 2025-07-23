
   const bookings = [];

    function searchRooms() {
      const roomType = document.getElementById("roomType").value;

      const allRooms = [
        { type: "Single", number: 101, price: 100 },
        { type: "Double", number: 202, price: 150 },
        { type: "Suite", number: 303, price: 250 },
        { type: "Single", number: 102, price: 95 }
      ];

      const availableRooms = allRooms.filter(room => room.type === roomType);

      const resultsDiv = document.getElementById("results");
      resultsDiv.innerHTML = `<h3>Available ${roomType} Rooms</h3>`;

      if (availableRooms.length === 0) {
        resultsDiv.innerHTML += "<p>No rooms available.</p>";
        return;
      }

      availableRooms.forEach(room => {
        resultsDiv.innerHTML += `
          <div class="room">
            <strong>Room ${room.number}</strong><br>
            Type: ${room.type}<br>
            Price: $${room.price}/night<br>
            <button onclick="reserveRoom(${room.number}, '${room.type}', ${room.price})">Reserve</button>
          </div>
        `;
      });
    }

    function reserveRoom(roomNumber, roomType, price) {
      const customerName = prompt("Enter your full name:");
      const email = prompt("Enter your email:");
      const checkin = prompt("Enter check-in date (YYYY-MM-DD):");
      const checkout = prompt("Enter check-out date (YYYY-MM-DD):");

      if (!customerName || !email || !checkin || !checkout) {
        alert("Reservation cancelled: Missing required fields.");
        return;
      }

      const booking = {
        roomNumber,
        roomType,
        price,
        customerName,
        email,
        checkin,
        checkout
      };

      bookings.push(booking);

      console.log("Booking added:", booking); //
      alert(`Booking confirmed for ${customerName}. Confirmation sent to ${email}.`);
    }

    function generateBookingReport() {
      const reportDiv = document.getElementById("bookingReport");

      if (bookings.length === 0) {
        reportDiv.innerHTML = "<p>No bookings made yet.</p>";
        return;
      }

      reportDiv.innerHTML = "";
      bookings.forEach(booking => {
        reportDiv.innerHTML += `
          <div class="report-card">
            <strong>${booking.customerName}</strong><br>
            Room: ${booking.roomType} (${booking.roomNumber})<br>
            Check-in: ${booking.checkin}<br>
            Check-out: ${booking.checkout}<br>
            Email: <a href="mailto:${booking.email}">${booking.email}</a><br>
          </div>
        `;
      });

      console.log("Report generated:", bookings);
    }
  
