function changeButtonsStyle(clickedButton, allButtons) {
  Array.from(allButtons).forEach((button) => {
    const isClickedButton = clickedButton.id == button.id;

    if (!isClickedButton) {
      button.className = "";
      return;
    }

    setClickedButtonDivPosition(clickedButton);
  });
}

function setClickedButtonDivPosition(clickedButton) {
  clickedButton.className = "button-primary__selected";

  const clickedButtonDiv = document.querySelector(".box-button__selected");

  clickedButtonDiv.style.width = `${clickedButton.offsetWidth}px`;
  clickedButtonDiv.style.left = `${clickedButton.offsetLeft}px`;
}

function setFirstButtonAsDefaultClickedButton() {
  const firstButton = document.querySelector(".button-primary-wrapper button");
  setClickedButtonDivPosition(firstButton);
}

function addToggleClickedButtonEvent() {
  const allButtons = document.querySelectorAll(
    ".button-primary-wrapper button"
  );

  allButtons.forEach((button) =>
    button.addEventListener("click", (clickedButton) =>
      changeButtonsStyle(clickedButton.target, allButtons)
    )
  );
}

addToggleClickedButtonEvent();
setFirstButtonAsDefaultClickedButton();
