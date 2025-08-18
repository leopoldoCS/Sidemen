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

  // 1) Hydrate reports from the latest confirmation (if present)
  const lastBooking = JSON.parse(localStorage.getItem("lastBooking") || "null");
  const reportsKey = "reports";
  const reports = JSON.parse(localStorage.getItem(reportsKey) || "[]");

  if (lastBooking && lastBooking.room) {
    // avoid duplicates: check by timestamp if available, otherwise email+room+total
    const exists = reports.some(r =>
      (r.timestamp && lastBooking.timestamp && r.timestamp === lastBooking.timestamp) ||
      (r.guest?.email === lastBooking.guest?.email &&
       r.room === lastBooking.room &&
       r.total === lastBooking.total)
    );
    if (!exists) {
      reports.push(lastBooking);
      localStorage.setItem(reportsKey, JSON.stringify(reports));
    }
  }

  // 2) Now read the finalized list for rendering
  const bookings = JSON.parse(localStorage.getItem(reportsKey) || "[]");

  if (!Array.isArray(bookings) || bookings.length === 0) {
    reportContainer.innerHTML = "<p>No bookings found.</p>";
    return;
  }

  reportContainer.innerHTML = "<h2>Customer Booking Reports</h2>";

  bookings.forEach((booking, index) => {
    const fullName = `${booking?.guest?.firstName || ""} ${booking?.guest?.lastName || ""}`.trim();
    const room = booking.room || "N/A";
    const total = booking.total || "$0.00";

    // Keep your original nights calculation
    const stayAmount = parseFloat((booking.stay || "").replace("$", "")) || 0;
    const roomPrice = parseFloat((booking.roomPrice || "").replace("$", "")) || 1;
    const nights = stayAmount && roomPrice ? Math.round(stayAmount / roomPrice) : "N/A";

    const reportCard = document.createElement("div");
    reportCard.className = "report-card";
    reportCard.innerHTML = `
      <h3>Booking #${index + 1}</h3>
      <p><strong>Name:</strong> ${fullName || "N/A"}</p>
      <p><strong>Room:</strong> ${room}</p>
      <p><strong>Stay Length:</strong> ${nights} night(s)</p>
      <p><strong>Total Cost:</strong> ${total}</p>
      <hr/>
    `;

    reportContainer.appendChild(reportCard);
  });
});


