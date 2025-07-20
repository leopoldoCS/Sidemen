// This function runs when the user clicks "Search"
function searchRooms() {
    const checkin = document.getElementById("checkin").value;
    const checkout = document.getElementById("checkout").value;
    const roomType = document.getElementById("roomType").value;
  
    if (!checkin || !checkout) {
      alert("Please select both check-in and check-out dates.");
      return;
    }
  
    // Dummy room data - this would come from your backend eventually
    const allRooms = [
      { type: "Single", number: 101, price: 100 },
      { type: "Double", number: 202, price: 150 },
      { type: "Suite", number: 303, price: 250 },
      { type: "Single", number: 102, price: 95 }
    ];
  
    // Filter rooms based on selected room type
    const availableRooms = allRooms.filter(room => room.type === roomType);
  
    // Display results
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
          <button onclick="reserveRoom(${room.number})">Reserve</button>
        </div>
      `;
    });
  }
  
  // Placeholder function for reserving a room
  function reserveRoom(roomNumber) {
    alert(`Reservation started for room ${roomNumber}.`);
    // In Sprint 2, this could redirect to reservation form or call an API
  }
  