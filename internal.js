// script.js
let highestBid = 100;  // starting bid
let bidHistory = [];
let countdownTimer;

function placeBid() {
    const bidAmount = parseFloat(document.getElementById("bidAmount").value);
    const highestBidElement = document.getElementById("highestBid");
    const bidHistoryList = document.getElementById("bidHistoryList");

    if (isNaN(bidAmount) || bidAmount <= highestBid) {
        alert("Your bid must be higher than the current highest bid.");
        return;
    }

    highestBid = bidAmount;
    highestBidElement.textContent = highestBid;

    // Add the new bid to the bid history
    bidHistory.push(bidAmount);
    const newBid = document.createElement("li");
    newBid.textContent = `Bid of $${bidAmount.toFixed(2)}`;
    bidHistoryList.appendChild(newBid);

    // Clear the input field
    document.getElementById("bidAmount").value = "";
}

function startTimer() {
    let timeLeft = 10;  // Auction duration in seconds

    countdownTimer = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").textContent = `00:${timeLeft < 10 ? "0" : ""}${timeLeft}`;

        if (timeLeft <= 0) {
            clearInterval(countdownTimer);
            alert("Auction ended! The highest bid was: $" + highestBid);
        }
    }, 1000);
}

// Initialize the auction timer
startTimer();
