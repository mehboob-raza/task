document.getElementById("burger-menu").addEventListener("click", function () {
  document.querySelector(".sidebar").classList.toggle("active");
});

function openChat(chatMessage) {
  // Retrieve sender and message content
  const sender = chatMessage.querySelector(".sender").textContent;
  const message = chatMessage.querySelector(".message").textContent;

  // Create chat message elements
  const chatView = document.getElementById("chat-view");
  chatView.innerHTML = `
    <div >
    <div style='display:flex; justify-content:space-between;align-items:center; background:#fff; padding:4px'>
         <div style='display:flex; align-items:center'>
          <div class="avatar"><img src="avatar.jpg" alt="Avatar"></div>
          <div class="sender">${sender}</div>
         </div>
          <div>
            <span class="menu-icon">&#8942;</span>
          </div>
        </div>
      <div class="chat-message" style='display:flex; margin-top:30px '>
        <div class="avatar"><img src="avatar.jpg" alt="Avatar"></div>
        <div class="message-content">
          
          <div class="message">${message}</div>
        </div>
      </div>
    </div>
    <!-- Additional chat messages can be added here -->
  `;

  chatView.style.display = "block";
}

function showChat() {
  document.getElementById("chat").classList.add("show");
}

document.addEventListener("DOMContentLoaded", function () {
  const dropdown = document.querySelector(".dropdown");
  const dropdownContent = document.querySelector(".dropdown-content");

  dropdown.addEventListener("click", function () {
    dropdownContent.style.display =
      dropdownContent.style.display === "block" ? "none" : "block";
  });

  document.addEventListener("click", function (event) {
    if (!dropdown.contains(event.target)) {
      dropdownContent.style.display = "none";
    }
  });
});
function showHome() {
  document.querySelector(".sidebar").style.display = "none";
  document.querySelector(".chat-container").style.display = "none";
}

function showMessages() {
  document.querySelector(".sidebar").style.display = "block";
  document.querySelector(".chat-container").style.display = "flex";
}
