document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Capture form values
    const fullName = document.getElementById("fullName").value;
    const emailAddress = document.getElementById("emailAddress").value;
    const totalPerson = document.getElementById("totalPerson").value;
    const bookingDate = document.getElementById("bookingDate").value;
    const message = document.getElementById("message").value;

    // Create HTML structure for the booking details
    const bookingDetailsHTML = `
        <div class="booking-info">
            <p><strong>Name:</strong> ${fullName}</p>
            <p><strong>Email:</strong> ${emailAddress}</p>
            <p><strong>Total Person:</strong> ${totalPerson}</p>
            <p><strong>Booking Date:</strong> ${bookingDate}</p>
            <p><strong>Orders:</strong> ${message}</p>
        </div>
    `;

    // Display the booking details in the designated section
    document.getElementById("bookingDetails").innerHTML = bookingDetailsHTML;

    // Optionally clear form fields after submission
    document.getElementById("bookingForm").reset();
});
