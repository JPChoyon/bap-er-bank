// diposit function 

document.getElementById('diposit-btn').addEventListener('click', function () {
    const dipositField = document.getElementById('diposit-input');
    const dipositValue = parseFloat(dipositField.value);

    const dipositElement = document.getElementById('diposit-current');
    const currentDiposit = parseFloat(dipositElement.innerText);

    const totallDiposit = dipositValue + currentDiposit;
    dipositElement.innerText = totallDiposit;

    const balanceField = document.getElementById('balance');
    const balanceValue = parseFloat(balanceField.innerText);
    const newBalance = balanceValue + dipositValue;
    balanceField.innerText =newBalance;


    dipositField.value = '';
})

// Withdraw function 

document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-input');
    const withdrawValue = parseFloat(withdrawField.value);

    const withdrawElement = document.getElementById('withdraw-current');
    const currentWithdraw = parseFloat(withdrawElement.innerText);

    const totallWithdraw = withdrawValue + currentWithdraw;
    withdrawElement.innerText = totallWithdraw;

    const balanceField = document.getElementById('balance');
    const balanceValue = parseFloat(balanceField.innerText);
    const newBalance = balanceValue - withdrawValue;
    balanceField.innerText =newBalance;


    withdrawField.value = '';
})