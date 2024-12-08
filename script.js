// Get today's date
const today = new Date();

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("calculateDaysButton").addEventListener("click", calculateDays);
    document.getElementById("calculateDateButton").addEventListener("click", calculateDate);
});

// Calculate number of days between today and the given end date
function calculateDays() {
    const endDateInput = document.getElementById("endDate").value;

    if (!endDateInput) {
        document.getElementById("daysOutput").innerText = "Error: Please select an end date.";
        return;
    }

    const endDate = new Date(endDateInput);
    if (isNaN(endDate.getTime())) {
        document.getElementById("daysOutput").innerText = "Error: Invalid end date.";
        return;
    }

    const differenceInTime = endDate - today;
    const differenceInDays = Math.round(differenceInTime / (1000 * 3600 * 24));

    document.getElementById("daysOutput").innerText = `Difference: ${differenceInDays} days`;
}

// Calculate the date based on a number of days from today
function calculateDate() {
    const numDaysInput = document.getElementById("numDays").value;

    if (!numDaysInput || isNaN(parseInt(numDaysInput))) {
        document.getElementById("dateOutput").innerText = "Error: Please enter a valid number.";
        return;
    }

    const numDays = parseInt(numDaysInput);
    const resultDate = new Date(today);
    resultDate.setDate(resultDate.getDate() + numDays);

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = resultDate.toLocaleDateString('en-US', options);

    document.getElementById("dateOutput").innerText = `Result: ${formattedDate}`;
}
