document.addEventListener("DOMContentLoaded", function () {
  const confirmBtn = document.querySelector(".ConfirmButton");

  if (!confirmBtn) return;

  confirmBtn.addEventListener("click", function () {
    // Automatically infer room type from page title or fallback to 'Room'
    const roomType = document.title.includes("Reserve") ? document.title.split("/")[1] : "Room";
    const roomPrice = document.getElementById("roomSpecificPrice").dataset.price;

    const checkin = document.getElementById("checkin")?.value || "";
    const checkout = document.getElementById("checkout")?.value || "";

    const total = document.getElementById("TOTAL").textContent;
    const stay = document.getElementById("STAY").textContent;
    const tax = document.getElementById("TAX").textContent;

    const booking = {
      room: roomType,
      roomPrice: `$${roomPrice}`,
      total,
      stay,
      tax,
      checkin,
      checkout,
      guest: {
        firstName: document.getElementById("name")?.value || "",
        lastName: document.getElementById("lastname")?.value || "",
        email: document.getElementById("email")?.value || "",
        phone: document.getElementById("phone")?.value || "",
        address: document.getElementById("address")?.value || "",
        zip: document.getElementById("zip")?.value || "",
        city: document.getElementById("city")?.value || "",
        state: document.getElementById("state")?.value || ""
      },
      card: {
        number: document.getElementById("cardnumber")?.value || "",
        month: document.getElementById("month")?.value || "",
        year: document.getElementById("Year")?.value || ""
      },
      timestamp: new Date().toISOString()
    };

    fetch("http://localhost:3000/api/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(booking)
    })
      .then(res => res.json())
      .then(data => {
        alert("Booking confirmed! Redirecting...");
        window.location.href = "confirmation.html";
      })
      .catch(err => {
        console.error("Error:", err);
        alert("Booking failed. Please try again.");
      });
  });
});

