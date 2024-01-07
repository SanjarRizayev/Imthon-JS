const form = document.getElementById("form");
const inputs = form.querySelectorAll("input");
const buy = document.querySelector(".btns");
const checedCheck = document.getElementById("check");
inputs.forEach((input) => {
  const value = localStorage.getItem(input.id);
  if (value) {
    input.value = value;
  }
});
checedCheck.addEventListener("change", () => {
  if (checedCheck.checked) {
    inputs.forEach((input) => {
      localStorage.setItem(input.id, input.value);
    });
  } else {
    inputs.forEach((input) => {
      localStorage.removeItem(input.id);
    });
  }
});
form.addEventListener("submit", function (event) {
  if (checedCheck.checked) {
    inputs.forEach((input) => {
      localStorage.setItem(input.id, input.value);
    });
  } else {
    inputs.forEach((input) => {
      localStorage.removeItem(input.id);
    });
  }
  event.preventDefault();
});
window.addEventListener("beforeunload", function (event) {
  if (!checedCheck.checked) {
    inputs.forEach((input) => {
      localStorage.removeItem(input.id);
    });
  }
});
buy.addEventListener("click", () => {
  let inputsFilled = true;

  // Inputlarni tekshirish
  inputs.forEach((input) => {
    if (input.value === "") {
      inputsFilled = false;
    }
  });
  if (!inputsFilled) {
    alert("Iltimos, barcha joylarni toldiring");
  } else {
    window.location.href = "card.html";
  }
});
