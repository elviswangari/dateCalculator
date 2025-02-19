# Appointment & Medication Tracker

A user-friendly web application to help track appointments and manage medication schedules.

## Features

### Appointment Management
- **Days Calculator**: Calculate the number of days between two dates
- **Date Calculator**: 
  - Calculate future dates by adding days
  - Calculate past dates by subtracting days
  - Displays results with full date format (weekday, month, day, year)

### Medication Management
- **Tablet Calculator**:
  - Calculate total tablets needed based on daily doses and treatment duration
  - Supports decimal values for dosing (e.g., 0.5, 1.5 tablets per day)
  - Automatically rounds up to ensure sufficient medication

- **Appointment Planner**:
  - Calculate tablets needed until next appointment
  - Automatically computes days remaining until appointment
  - Shows total tablets required for the period

## Usage

1. **Appointment Tab**
   - Use the "Next Appointment" calculator to find days between dates
   - Use the "Date Calculator" to find future or past dates
   - Select "Forward" or "Backward" to calculate dates in either direction

2. **Medication Tab**
   - Enter doses per day (supports decimals) and treatment duration
   - For appointment planning, enter your next appointment date and daily dose
   - All calculations automatically round up to ensure you have enough medication

## Technical Details
- Built with vanilla JavaScript
- Responsive design
- No external dependencies required
- Local date calculations
- Supports decimal inputs for precise dosing


