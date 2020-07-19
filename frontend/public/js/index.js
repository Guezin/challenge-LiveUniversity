const API_URL = "http://localhost:1995";

const aside = document.querySelector("aside");
const optionButton = document.getElementById("optionButton");
const dropdown = document.getElementById("dropdown");
const dropdownButton = document.getElementById("dropdownButton");
const dropdownContent = document.getElementById("dropdownContent");
const inputValue = document.getElementById("inputQuantity");
const icon = document.getElementsByTagName("i");

optionButton.addEventListener("click", () => {
  dropdown.style.display = "flex";
});

document.documentElement.onclick = (event) => {
  const li = document.querySelectorAll(".dropdown-content a li");

  if (
    event.target !== optionButton &&
    event.target !== dropdown &&
    event.target !== dropdownButton &&
    event.target !== dropdownContent &&
    event.target !== inputValue &&
    event.target !== li[0] &&
    event.target !== li[1]
  ) {
    dropdown.style.display = "none";
    dropdownContent.style.display = "none";
    dropdownButton.style.backgroundColor = "#fff";
    dropdownButton.style.color = "#000";
    dropdownButton.style.fontWeight = "400";
  }
};

dropdownButton.addEventListener("click", () => {
  if (!dropdownContent.style.display) {
    dropdownContent.style.display = "block";
    dropdownButton.style.backgroundColor = "#7159c1";
    dropdownButton.style.color = "#fff";
    dropdownButton.style.fontWeight = "500";
  } else if (dropdownContent.style.display === "block") {
    dropdownContent.style.display = "none";
    dropdownButton.style.backgroundColor = "#fff";
    dropdownButton.style.color = "#000";
    dropdownButton.style.fontWeight = "400";
  } else if (dropdownContent.style.display === "none") {
    dropdownContent.style.display = "block";
    dropdownButton.style.backgroundColor = "#7159c1";
    dropdownButton.style.color = "#fff";
    dropdownButton.style.fontWeight = "500";
  }
});

dropdownContent.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", (event) => {
    if (!inputValue.value) {
      event.preventDefault();

      icon[0].style.visibility = "visible";
      inputValue.style.borderColor = "#d41717";
    }
  });
});

const handleAddItems = async (letter) => {
  await fetch(`${API_URL}/add-item`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      quantity: inputValue.value,
      letter,
    }),
  });
};
