/*
8/7/205

Author: Ali

Performs actions related to displaying the bookings

THe code gets the customers bookings and displays them. It handles the logic of whether there is something to display and outputs in html.

*/

document.addEventListener("DOMContentLoaded", function () {
  const reportContainer = document.getElementById("bookingReport");

  if (!reportContainer) {
    console.warn("No report container found with id 'bookingReport'.");
    return;
  }

  const bookings = JSON.parse(localStorage.getItem("reports") || "[]");

  if (bookings.length === 0) {
    reportContainer.innerHTML = "<p>No bookings found.</p>";
    return;
  }

  reportContainer.innerHTML = "<h2>Customer Booking Reports</h2>";

  bookings.forEach((booking, index) => {
    const fullName = `${booking.guest.firstName} ${booking.guest.lastName}`;
    const room = booking.room || "N/A";
    const total = booking.total || "$0.00";

    // Calculate number of nights if check-in/out added later
    const stayAmount = parseFloat(booking.stay?.replace('$', '') || 0);
    const roomPrice = parseFloat(booking.roomPrice?.replace('$', '') || 1);
    const nights = stayAmount && roomPrice ? Math.round(stayAmount / roomPrice) : "N/A";

    const reportCard = document.createElement("div");
    reportCard.className = "report-card";
    reportCard.innerHTML = `
      <h3>Booking #${index + 1}</h3>
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Room:</strong> ${room}</p>
      <p><strong>Stay Length:</strong> ${nights} night(s)</p>
      <p><strong>Total Cost:</strong> ${total}</p>
      <hr/>
    `;

    reportContainer.appendChild(reportCard);
    
  });

});
<div id="bookingReport"></div>

