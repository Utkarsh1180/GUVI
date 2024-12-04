document.getElementById("donorForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const bloodType = document.getElementById("bloodType").value;
    const date = document.getElementById("date").value;

    // Basic validations
    if (!name || !email || !phone || !bloodType || !date) {
        alert("All fields are required!");
        return;
    }

    if (!/^[a-zA-Z ]+$/.test(name)) {
        alert("Name must contain only letters.");
        return;
    }

    if (!/^\d{10}$/.test(phone)) {
        alert("Phone number must be exactly 10 digits.");
        return;
    }

    // Success
    alert("Registration successful!");
    console.log({
        name,
        email,
        phone,
        bloodType,
        date,
    });
});
