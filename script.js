const button = document.querySelector("button");
button.addEventListener("click", function () {
  const years = document.getElementById("years");
  const months = document.getElementById("months");
  const days = document.getElementById("days");
  const input = document.querySelector("input");
  const inputValue = new Date(input.value);
  const currentDate = new Date();
  let ageYears = currentDate.getFullYear() - inputValue.getFullYear();
  let ageMonths = currentDate.getMonth() - inputValue.getMonth();
  let ageDays = currentDate.getDate() - inputValue.getDate();

  years.textContent = ageYears;
  months.textContent = ageMonths;
});
