async function calculateSalary() {
  const salesInput = document.getElementById("salesInput").value;
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
