// Function to calculate project cost estimates
function calculateProjectCost() {
    const projectType = document.getElementById('project-type').value;
    const area = document.getElementById('area').value;
    let costPerSqFt;

    switch (projectType) {
        case 'residential':
            costPerSqFt = 50;
            break;
        case 'commercial':
            costPerSqFt = 70;
            break;
        case 'landscaping':
            costPerSqFt = 30;
            break;
        case 'resort':
            costPerSqFt = 100;
            break;
        default:
            costPerSqFt = 0;
    }

    const totalCost = area * costPerSqFt;
    document.getElementById('quote-result').innerText = `Estimated Project Cost: $${totalCost}`;
}

// Event listener for the form submission
document.getElementById('quote-form').addEventListener('submit', function(event) {
    event.preventDefault();
    calculateProjectCost();
});
