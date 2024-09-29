const button = document.querySelector("button");
button.addEventListener("click", function () {
  const input = document.querySelector("input");
  const inputValue = new Date(input.value);
  const currentDate = new Date();
  let ageYears = currentDate.getFullYear() - inputValue.getFullYear();
  let ageMonths = currentDate.getMonth() - inputValue.getMonth();
  let ageDays = currentDate.getDate() - inputValue.getDate();
});
