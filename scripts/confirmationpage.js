document.addEventListener("DOMContentLoaded", function () {
  const confirmBtn = document.querySelector(".ConfirmButton");

  if (!confirmBtn) return;

  confirmBtn.addEventListener("click", function () {
    // Get basic room info
    const roomType = document.title.includes("Reserve") ? document.title.split("/")[1] : "Room";
    const roomPrice = document.getElementById("roomSpecificPrice").dataset.price;

    // Get dates
    const checkin = document.getElementById("checkin")?.value || "";
    const checkout = document.getElementById("checkout")?.value || "";

    // Get price breakdown
    const total = document.getElementById("TOTAL").textContent;
    const stay = document.getElementById("STAY").textContent;
    const tax = document.getElementById("TAX").textContent;

    // Get guest info
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

    // Save booking to localStorage for manager reports
    const bookings = JSON.parse(localStorage.getItem("reports") || "[]");
    bookings.push(booking);
    localStorage.setItem("reports", JSON.stringify(bookings));

    // Redirect to confirmation page
    window.location.href = "confirm.html";
  });
});
