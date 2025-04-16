document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registrationForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const contact = document.getElementById("contact").value.trim();
      const address = document.getElementById("address").value.trim();

      const user = { name, email, contact, address };

      let users = JSON.parse(localStorage.getItem("users")) || [];
      users.push(user);
      localStorage.setItem("users", JSON.stringify(users));

      alert("Registration successful!");
      form.reset();
    });
  }

  const usersTable = document.getElementById("usersTable");
  if (usersTable) {
    const tbody = usersTable.querySelector("tbody");
    const users = JSON.parse(localStorage.getItem("users")) || [];

    users.forEach((user, index) => {
      const row = tbody.insertRow();
      row.innerHTML = `
        <td>${index + 1}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.contact}</td>
        <td>${user.address}</td>
      `;
    });
  }
});
