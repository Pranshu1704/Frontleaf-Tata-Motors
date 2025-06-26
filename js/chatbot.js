document.addEventListener("DOMContentLoaded", function () {
  const chatbotBtn = document.getElementById("chatbot-button");
  const chatbotWindow = document.getElementById("chatbot-window");
  const sendBtn = document.getElementById("send-btn");
  const userInput = document.getElementById("user-input");
  const chatbox = document.getElementById("chatbox");

  chatbotBtn.addEventListener("click", () => {
    chatbotWindow.classList.toggle("hiddens");
  });

  sendBtn.addEventListener("click", sendMessage);
  userInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") sendMessage();
  });

  function sendMessage() {
    const message = userInput.value.trim();
    if (message === "") return;

    appendMessage("user", message);
    userInput.value = "";

    setTimeout(() => {
      appendMessage("bot", getBotReply(message));
    }, 500);
  }

  function appendMessage(sender, text) {
    const msgDiv = document.createElement("div");
    msgDiv.classList.add(`${sender}-msg`);
    msgDiv.innerHTML = text;
    chatbox.appendChild(msgDiv);
    chatbox.scrollTop = chatbox.scrollHeight;
  }

  function getBotReply(msg) {
    msg = msg.toLowerCase();

    // Smart natural replies
    if (["hello", "hi", "hey", "good morning", "good afternoon", "good evening"].some(greet => msg.includes(greet))) {
      return "Hello! 👋 How can I help you today?";
    }

    if (msg.includes("thank")) {
      return "You're most welcome! 😊 If you need anything else, I'm here.";
    }

    if (msg.includes("insurance")) {
      return `Sure! You can view our <a href="insurace.html" target="_blank">Insurance Options</a>.`;
    }

    if (msg.includes("quote") || msg.includes("price") || msg.includes("book") || msg.includes("drive") || msg.includes("buy")) {
      return `
        Please fill this form:<br>
        <form id="quote-form" onsubmit="submitQuote(event)">
          <input type="text" name="name" placeholder="Your Name" required /><br>
          <input type="tel" name="mobile" placeholder="Mobile Number" required /><br>
          <select name="city" required>
            <option value="" disabled selected>Select City</option>
            <option>Bhopal</option>
            <option>Indore</option>
            <option>Rewa</option>
            <option>Jabalpur</option>
          </select><br>
          <select name="model" required>
            <option value="" disabled selected>Select Model</option>
            <option>Punch</option>
            <option>Tiago</option>
            <option>Altroz</option>
            <option>Safari</option>
          </select><br>
          <button type="submit">Submit</button>
        </form>
      `;
    }

    if (msg.includes("service")) {
      return `You can book a service <a href="bookservice.html" target="_blank">here</a>.`;
    }

    if (msg.includes("contact") || msg.includes("call")) {
      return `You can reach us at <strong>+91 9238444036</strong> or visit <a href="Contact.html" target="_blank">Contact Us</a>.`;
    }

    if (msg.includes("career")) {
      return `Interested in working with us? Visit <a href="Career.html" target="_blank">Career Page</a>.`;
    }

    if (msg.includes("offer") || msg.includes("discount")) {
      return `Check out our latest <a href="offer.html" target="_blank">Offers</a> on new cars!`;
    }

    // Fallback response with escalation
    return `
      I'm not sure how to help with that. 🤔<br>
      You can ask about:
      <div class="suggestions">
        <button onclick="insertQuick('Insurance')">Insurance</button>
        <button onclick="insertQuick('Book a test drive')">Book Test Drive</button>
        <button onclick="insertQuick('Get a quote')">Get a Quote</button>
        <button onclick="insertQuick('Contact')">Contact Us</button>
      </div>
      <br>
      I've forwarded your query to our service team at <strong>service.manager@frontleafmotors.com</strong> 📨
    `;
  }

  function submitQuote(event) {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const mobile = form.mobile.value;
    const city = form.city.value;
    const model = form.model.value;

    const confirmMsg = `
      Thank you, <strong>${name}</strong>!<br>
      Our team will contact you at <strong>${mobile}</strong> regarding <strong>${model}</strong> in <strong>${city}</strong>.
    `;

    const msgDiv = document.createElement("div");
    msgDiv.classList.add("bot-msg");
    msgDiv.innerHTML = confirmMsg;
    chatbox.appendChild(msgDiv);
    chatbox.scrollTop = chatbox.scrollHeight;

    form.remove();
  }
});

// outside DOMContentLoaded
function insertQuick(text) {
  document.getElementById("user-input").value = text;
  document.getElementById("send-btn").click();
}
