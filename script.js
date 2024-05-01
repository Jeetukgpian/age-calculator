// Waiting for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Selecting necessary DOM elements
  var calculateButton = document.querySelector("#calculator button");
  var birthDateInput = document.getElementById("birthDate");
  var resultDisplay = document.getElementById("result");

  // Adding event listener to the Calculate button
  calculateButton.addEventListener("click", function () {
    // Getting the birth date value from the input field
    var birthDate = new Date(birthDateInput.value);
    var today = new Date();

    // Validating if the birth date is in the future
    if (birthDate >= today) {
      // Displaying an error message if the birth date is invalid
      resultDisplay.textContent = "Please enter a valid birthdate.";
      return;
    }

    // Calculating age
    var ageYears = today.getFullYear() - birthDate.getFullYear();
    var monthDiff = today.getMonth() - birthDate.getMonth();
    var daysDiff = today.getDate() - birthDate.getDate();

    // Adjusting age if the birth date is in the future of the current month or day
    if (monthDiff < 0 || (monthDiff === 0 && daysDiff < 0)) {
      ageYears--;
      monthDiff += 12;
    }

    // Handling negative days difference
    var daysInMonth = new Date(
      today.getFullYear(),
      today.getMonth() - 1,
      0
    ).getDate();
    if (daysDiff < 0) {
      daysDiff += daysInMonth;
      monthDiff--;
    }

    // Displaying the result in the specified format
    resultDisplay.textContent = `You are ${ageYears} year ${monthDiff} months & ${daysDiff} days old.`;
  });
});
