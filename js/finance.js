function calculateEMI() {
  const principal = parseFloat(document.getElementById('loanAmount').value);
  const annualRate = parseFloat(document.getElementById('interestRate').value);
  const monthsArray = [12, 24, 36, 48, 60, 72, 84];

  const tableBody = document.querySelector('#emiTable tbody');
  tableBody.innerHTML = '';

  if (isNaN(principal) || isNaN(annualRate) || principal <= 0 || annualRate <= 0) {
    alert("Please enter valid loan amount and interest rate.");
    return;
  }

  monthsArray.forEach(months => {
    const monthlyRate = annualRate / 12 / 100;
    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
                (Math.pow(1 + monthlyRate, months) - 1);
    const emiRounded = emi.toFixed(0);

    const row = document.createElement('tr');
    row.innerHTML = `<td>${months}</td><td>Rs. ${parseInt(emiRounded).toLocaleString("en-IN")}/-</td>`;
    tableBody.appendChild(row);
  });
}




// documnetatation

const tabs = document.querySelectorAll('.tab-button');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(btn => btn.classList.remove('active'));
    contents.forEach(c => c.classList.remove('active'));

    tab.classList.add('active');
    document.getElementById(tab.dataset.tab).classList.add('active');
  });
});
