document.addEventListener("DOMContentLoaded", function () {
  const passwordField = document.getElementById("password-field");
  const buttons = document.querySelectorAll(".buttons button:not(.enter)");
  const enterButton = document.querySelector(".enter");
  const correctPassword = "03012010"; // Set your password here
  const container = document.querySelector(".password-container");
  const giftContainer = document.getElementById("gift-container");
  const giftImage = document.getElementById("gift-image");
  const textBox = document.querySelector(".text-box");
  const textMessage = document.querySelector(".hbd-chatbox");

  const giftImages = [
    "notS.jpg",
    "notS2.jpg",
    "notS3.jpg",
    "notS4.jpg",
    "s.jpg",
    "s2.jpg",
    "s3.jpg",
    "s4.jpg",
    "s5.jpg",
    "s6.jpg",
    "s7.jpg",
    "s8.jpg",
    "s9.jpg",
  ];
  let imageIndex = 0;

  if (
    !passwordField ||
    !giftContainer ||
    !giftImage ||
    !textBox ||
    !textMessage
  ) {
    console.error("Some elements are missing from the page!");
    return;
  }

  textBox.classList.add("hidden"); // Ensure the text box is hidden initially

  // Append numbers to password field
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      passwordField.value += this.textContent;
    });
  });

  // Handle Enter button (validate password)
  enterButton.addEventListener("click", function () {
    if (passwordField.value === correctPassword) {
      passwordField.classList.add("success");
      container.classList.add("fade-out");
      setTimeout(() => {
        alert("Access Granted! ✅");
        container.style.display = "none";
        giftContainer.classList.remove("hidden");
      }, 1000);
    } else {
      alert("YOUR PASSCODE IS YOUR BIRTHDAY!(MM/DD/YY)");
      passwordField.classList.add("shake");
      setTimeout(() => passwordField.classList.remove("shake"), 500);
    }
    passwordField.value = "";
  });

  // Handle gift image click (show new images)
  giftImage.addEventListener("click", function () {
    if (imageIndex < giftImages.length) {
      const newImage = document.createElement("img");
      newImage.src = giftImages[imageIndex];
      newImage.classList.add("gift-image");
      newImage.style.width = "120px";
      newImage.style.height = "120px";
      newImage.style.borderRadius = "50px";
      newImage.style.padding = "10px";
      newImage.style.margin = "10px auto"; // Center images
      newImage.style.cursor = "pointer";
      newImage.style.display = "center";
      newImage.style.justifyContent = "cent";
      newImage.style.opacity = "0"; // Start hidden
      newImage.style.transition = "opacity 0.5s ease-in-out"; // Smooth transition

      giftContainer.appendChild(newImage);

      setTimeout(() => {
        newImage.style.opacity = "1"; // Fade in effect
      }, 100);

      imageIndex++;

      // When all images are shown, transition to the text box
      if (imageIndex === giftImages.length) {
        setTimeout(() => {
          document.querySelectorAll(".gift-image").forEach((img) => {
            img.style.opacity = "0"; // Smooth fade-out effect
          });

          setTimeout(() => {
            // Remove images
            document
              .querySelectorAll(".gift-image")
              .forEach((img) => img.remove());

            // 🎯 Set Valentine's message dynamically
            textMessage.innerHTML = `Hi my ig agaw na super kind and but an kaaayooo happy happiest bday sayoooo , sorry if sometimes super strict ko and maldita pero lahat yun para ra po sa imoha and I hope naiintindihan muko 🥹, unta this day ur bday sana matupad mo yung mga wish mo and ambitions and life. Always remember na we're here your second sister, family to support you as always ket super gahi kaykag ulo usahay pero lablab gihapun ka ni ate so much. Thankyouuu din for everything na ginawa mo for me to make me happy when it comes na sad akoo tas wla akong mapgsabihan sa mga bad days ko (kay demn sab ko mag kwento 🥹) pero uk me well tlgaaaaa kaya tysm and again happy bday sayooo mabuhay ka po hanggat gusto mo (charot lngg). We loveyouuuuuuuu our gelynnnn🥰`;

            // 🎯 Reveal the text box with a smooth fade-in effect
            textBox.classList.remove("hidden");
            textBox.style.display = "block";
            textBox.classList.add("fade-in");

            alert("🎉 You unlocked the final surprise!");
          }, 1000);
        }, 1500);
      }
    }
  });
});
