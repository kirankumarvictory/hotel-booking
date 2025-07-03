document.getElementById("bookingForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const bookingData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    roomType: document.getElementById("roomType").value,
    checkIn: document.getElementById("checkIn").value,
    checkOut: document.getElementById("checkOut").value,
  };

  const response = await fetch("http://localhost:5000/api/bookings", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(bookingData),
  });

  const result = await response.json();
  const msg = document.getElementById("responseMsg");
  msg.innerText = result.message;
  msg.className = response.ok ? "text-success" : "text-danger";
});
