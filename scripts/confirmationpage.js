document.addEventListener("DOMContentLoaded", function () {
  const confirmBtn = document.querySelector(".ConfirmButton");

  if (!confirmBtn) return;

  confirmBtn.addEventListener("click", function () {
    // Room type from title (Reserve/Double → Double)
    const roomType = document.title.includes("/") 
      ? document.title.split("/")[1] 
      : "Room";

    const booking = {
      room: roomType,
      roomPrice: `$${document.getElementById("roomSpecificPrice").dataset.price}`,
      total: document.getElementById("TOTAL").textContent,
      stay: document.getElementById("STAY").textContent,
      tax: document.getElementById("TAX").textContent,
      guest: {
        firstName: document.getElementById("name").value,
        lastName: document.getElementById("lastname")?.value || "", // Fix to support missing lastname field ID
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        address: document.getElementById("address").value,
        zip: document.getElementById("zip").value,
        city: document.getElementById("city").value,
        state: document.getElementById("state").value
      },
      card: {
        number: document.getElementById("cardnumber").value,
        month: document.getElementById("month").value,
        year: document.getElementById("Year").value
      },
      timestamp: new Date().toISOString()
    };

    // Save to localStorage for reports
    let reports = JSON.parse(localStorage.getItem("reports") || "[]");
    reports.push(booking);
    localStorage.setItem("reports", JSON.stringify(reports));

    // Save current booking for confirmation page
    localStorage.setItem("lastBooking", JSON.stringify(booking));

    // Redirect to confirmation page
    window.location.href = "confirm.html";
  });
});
