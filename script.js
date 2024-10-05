const button = document.querySelector("button");
button.addEventListener("click", function () {
  const years = document.getElementById("years");
  const months = document.getElementById("months");
  const days = document.getElementById("days");
  const input = document.querySelector("input");
  const birthDate = new Date(input.value);
  const currentDate = new Date();
  if (birthDate > currentDate) {
    return alert("Birth date cannot be set in the future");
  } else {
    let ageYears = currentDate.getFullYear() - birthDate.getFullYear();

    let ageMonths = currentDate.getMonth() - birthDate.getMonth();
    if (ageMonths < 0) {
      ageMonths += 12;
    }
    let ageDays = currentDate.getDate() - birthDate.getDate();
    if (ageDays < 0) {
      ageDays += 30;
    }

    years.textContent = ageYears;
    months.textContent = ageMonths;
    days.textContent = ageDays;
  }
});


