
async function generateImage() {
  const prompt = document.getElementById("prompt").value;
  const loader = document.getElementById("loader");
  const result = document.getElementById("result");
  const modalImage = document.getElementById("modal-img");

  loader.style.display = "block";
  result.style.display = "none";

  const response = await fetch("https://api.deepai.org/api/text2img", {
    method: "POST",
    headers: {
      "Api-Key": "4e875ad8-76b7-403a-8d28-5e1ebb881249",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: `text=${encodeURIComponent(prompt)}`
  });

  const data = await response.json();

  if (data.output_url) {
    result.src = data.output_url;
    modalImage.src = data.output_url;
    result.style.display = "block";
  } else {
    alert("Failed to generate image. Check console for details.");
    console.log(data);
  }

  loader.style.display = "none";
}

function enlargeImage() {
  const modal = document.getElementById("modal");
  modal.style.display = "flex";
}

function closeModal(event) {
  if (event.target.id === "modal" || event.target.className === "close") {
    document.getElementById("modal").style.display = "none";
  }
}

function selectOption(el, groupId) {
  const buttons = document.getElementById(groupId).querySelectorAll("button");
  buttons.forEach(btn => btn.classList.remove("active"));
  el.classList.add("active");
}
