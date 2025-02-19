// Get today's date
const today = new Date();

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
    // Set today's date as default for date inputs
    const todayString = today.toISOString().split('T')[0];
    document.getElementById("startDate").value = todayString;

    // Tab functionality
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => switchTab(btn.dataset.tab));
    });

    // Original date calculator listeners
    document.getElementById("calculateDaysButton").addEventListener("click", calculateDays);
    document.getElementById("calculateDateButton").addEventListener("click", calculateDate);

    // New medication calculator listeners
    document.getElementById("calculateTotalButton").addEventListener("click", calculateTotalTablets);
    document.getElementById("calculateRemainingButton").addEventListener("click", calculateRemainingTablets);
});

// Switch between tabs
function switchTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.add('hidden');
    });
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    document.getElementById(tabId).classList.remove('hidden');
    document.querySelector(`[data-tab="${tabId}"]`).classList.add('active');
}

// Calculate number of days between dates
function calculateDays() {
    const startDateInput = document.getElementById("startDate").value;
    const endDateInput = document.getElementById("endDate").value;

    if (!startDateInput || !endDateInput) {
        document.getElementById("daysOutput").innerText = "Error: Please select both dates.";
        return;
    }

    const startDate = new Date(startDateInput);
    const endDate = new Date(endDateInput);

    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
        document.getElementById("daysOutput").innerText = "Error: Invalid date(s).";
        return;
    }

    const differenceInTime = endDate - startDate;
    const differenceInDays = Math.round(differenceInTime / (1000 * 3600 * 24));
    document.getElementById("daysOutput").innerText = `Difference: ${differenceInDays} days`;
}

// Calculate future or past date
function calculateDate() {
    const numDaysInput = document.getElementById("numDays").value;
    const startDate = new Date(document.getElementById("startDate").value);
    const direction = document.getElementById("dateDirection").value;

    if (!numDaysInput || isNaN(parseInt(numDaysInput))) {
        document.getElementById("dateOutput").innerText = "Error: Please enter a valid number.";
        return;
    }

    const numDays = parseInt(numDaysInput);
    const resultDate = new Date(startDate);

    // Add or subtract days based on direction
    if (direction === "future") {
        resultDate.setDate(resultDate.getDate() + numDays);
    } else {
        resultDate.setDate(resultDate.getDate() - numDays);
    }

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = resultDate.toLocaleDateString('en-US', options);
    document.getElementById("dateOutput").innerText =
        `Result: ${formattedDate}\n(${direction === 'future' ? '+' : '-'}${numDays} days from start date)`;
}

// Calculate total tablets needed
function calculateTotalTablets() {
    const dosesPerDay = parseFloat(document.getElementById("dosesPerDay").value);
    const treatmentDays = parseInt(document.getElementById("treatmentDays").value);

    if (isNaN(dosesPerDay) || isNaN(treatmentDays)) {
        document.getElementById("totalOutput").innerText = "Error: Please enter valid numbers.";
        return;
    }

    const totalTablets = Math.ceil(dosesPerDay * treatmentDays);
    document.getElementById("totalOutput").innerText =
        `Total tablets needed: ${totalTablets} tablets\n(${dosesPerDay} doses/day × ${treatmentDays} days)`;
}

// Calculate remaining tablets
function calculateRemainingTablets() {
    const nextAppointmentDate = new Date(document.getElementById("nextAppointment").value);
    const dailyDose = parseFloat(document.getElementById("dailyDose").value);

    if (isNaN(nextAppointmentDate.getTime()) || isNaN(dailyDose)) {
        document.getElementById("remainingOutput").innerText = "Error: Please fill in all fields.";
        return;
    }

    const today = new Date();
    const daysUntilAppointment = Math.ceil((nextAppointmentDate - today) / (1000 * 3600 * 24));
    const tabletsNeeded = Math.ceil(daysUntilAppointment * dailyDose);

    let message = `Days until appointment: ${daysUntilAppointment}\n`;
    message += `Total tablets needed: ${tabletsNeeded}`;

    document.getElementById("remainingOutput").innerText = message;
}
