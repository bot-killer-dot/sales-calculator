async function calculateSalary() {
  const salesInput = document
    .getElementById("salesInput")
    .value.trim()
    .replace(/\s+/g, " ");

  try {
    const response = await fetch("/calculate", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `salesInput=${salesInput}`,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();

    document.getElementById(
      "result"
    ).innerHTML = `Total Sales $${result.y}<br>Total Commission Earned: Rs. ${result.totalCommission}`;
  } catch (error) {
    console.error("Error during fetch:", error);
  }
}

// Add an event listener for the paste event
document
  .getElementById("salesInput")
  .addEventListener("paste", function (event) {
    // Prevent the default paste behavior
    event.preventDefault();

    // Get the pasted text
    var pastedText = (event.clipboardData || window.clipboardData).getData(
      "text"
    );

    // Remove line breaks and trim spaces
    pastedText = pastedText.replace(/\s+/g, " ").trim();

    // Set the modified text back to the input
    document.getElementById("salesInput").value = pastedText;
  });
