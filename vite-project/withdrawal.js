const withdrawButton = document.getElementById('withdrawButton');
    const btcWithdrawButton = document.getElementById('btcWithdrawButton');
    const withdrawalStatus = document.getElementById('withdrawalStatus');
    const errorModal = document.getElementById('errorModal');
    const closeModal = document.getElementById('closeModal');

    // Form input fields for cash withdrawal
    const bankName = document.getElementById('bankName');
    const accountNumber = document.getElementById('accountNumber');
    const amount = document.getElementById('amount');
    const accountName = document.getElementById('accountName');

    // Form input field for BTC withdrawal
    const btcAmount = document.getElementById('btcAmount');
    const btcConverted = document.getElementById('btcConverted');

    // Error messages for cash withdrawal
    const bankNameError = document.getElementById('bankNameError');
    const accountNumberError = document.getElementById('accountNumberError');
    const amountError = document.getElementById('amountError');
    const accountNameError = document.getElementById('accountNameError');
    const balanceError = document.getElementById('balanceError'); // New error message for balance

    withdrawButton.addEventListener('click', function(event) {
        // Reset error messages and button state
        bankNameError.classList.add('hidden');
        accountNumberError.classList.add('hidden');
        amountError.classList.add('hidden');
        accountNameError.classList.add('hidden');
        withdrawalStatus.classList.add('hidden');
        withdrawButton.textContent = 'Withdraw'; // Reset button text if clicked again

        // Validation flag
        let isValid = true;

        // Validate Bank Name
        if (bankName.value.trim() === "") {
            bankNameError.classList.remove('hidden');
            isValid = false;
        }

        // Validate Account Number
        if (accountNumber.value.trim() === "") {
            accountNumberError.classList.remove('hidden');
            isValid = false;
        }

        // Validate Amount
        if (amount.value.trim() === "") {
            amountError.classList.remove('hidden');
            isValid = false;
        }

        // Validate Account Name
        if (accountName.value.trim() === "") {
            accountNameError.classList.remove('hidden');
            isValid = false;
        }

        // If all fields are valid, show loading state for 5 seconds
        if (isValid) {
            // Change button to loading state
            withdrawButton.textContent = 'Processing...';
            withdrawButton.disabled = true;

            // Simulate a delay of 5 seconds (5000ms) before showing the success message
            setTimeout(() => {
                withdrawButton.textContent = 'Withdraw';
                withdrawButton.disabled = false;
                withdrawalStatus.classList.remove('hidden');
            }, 5000); // 5 seconds delay
        }
    });

    // BTC Withdraw Button Click
    btcWithdrawButton.addEventListener('click', function() {
        // Show the error modal for unverified users
        errorModal.classList.remove('hidden');
    });

    // Close Modal
    closeModal.addEventListener('click', function() {
        errorModal.classList.add('hidden');
    });

    // Toggle between Cash and BTC Withdrawal Forms
    function toggleWithdrawal(type) {
        const cashWithdrawal = document.getElementById('cashWithdrawal');
        const btcWithdrawal = document.getElementById('btcWithdrawal');

        if (type === 'cash') {
            cashWithdrawal.classList.remove('hidden');
            btcWithdrawal.classList.add('hidden');
            document.getElementById('cashButton').classList.remove('text-gray-400');
            document.getElementById('btcButton').classList.add('text-gray-400');
        } else {
            cashWithdrawal.classList.add('hidden');
            btcWithdrawal.classList.remove('hidden');
            document.getElementById('btcButton').classList.remove('text-gray-400');
            document.getElementById('cashButton').classList.add('text-gray-400');
        }
    }

    // Initialize the view to show Cash Withdrawal by default
    toggleWithdrawal('cash');


     // Function to set the active navbar item
    function setActive(element) {
        // Reset all items to default styles
        const icons = document.querySelectorAll('.nav-item div');
        const texts = document.querySelectorAll('.nav-item span');
        icons.forEach(icon => icon.classList.remove('bg-blue-300', 'text-white'));
        texts.forEach(text => text.classList.remove('text-blue-300'));

        // Add active styles to the clicked item
        const icon = element.querySelector('div');
        const text = element.querySelector('span');
        icon.classList.add('bg-blue-300', 'text-white'); // Highlight background of active icon
        text.classList.add('text-blue-300'); // Highlight text of active item
    }

    // Set the active state on page load based on the current URL
    const currentPath = window.location.pathname;
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        if (item.href.includes(currentPath)) {
            setActive(item);
        }
    });