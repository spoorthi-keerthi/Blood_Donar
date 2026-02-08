// Load donors
let donors = JSON.parse(localStorage.getItem("donors")) || [];

// =======================
// DONOR REGISTRATION
// =======================
document.addEventListener("DOMContentLoaded", () => {

    const donorForm = document.getElementById("donorForm");

    if (donorForm) {
        donorForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const donor = {
                name: document.getElementById("name").value.trim(),
                age: document.getElementById("age").value.trim(),
                bloodGroup: document.getElementById("bloodGroup").value,
                phone: document.getElementById("phone").value.trim(),
                city: document.getElementById("city").value.trim()
            };

            donors.push(donor);
            localStorage.setItem("donors", JSON.stringify(donors));

            alert("Donor Registered Successfully");
            donorForm.reset();
        });
    }
});

// =======================
// SEARCH DONOR
// =======================
function searchDonor() {
    const group = document.getElementById("searchGroup").value;
    const result = document.getElementById("result");
    result.innerHTML = "";

    const donors = JSON.parse(localStorage.getItem("donors")) || [];

    const found = donors.filter(d => d.bloodGroup === group);

    if (found.length === 0) {
        result.innerHTML = "<p class='text-center'>No donors found</p>";
        return;
    }

    found.forEach(d => {
        result.innerHTML += `
            <div class="donor-card">
                <b>Name:</b> ${d.name}<br>
                <b>Blood Group:</b> ${d.bloodGroup}<br>
                <b>City:</b> ${d.city}<br>
                <b>Contact:</b> ${d.phone}
            </div>
        `;
    });
}
