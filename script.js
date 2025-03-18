const inputMsg = document.querySelector("#msg");
const inputMsgs = document.querySelector("#msg-2");

const form = document.querySelector("#sender-1");
const formTwo = document.querySelector("#receiver-1");
const listChat = document.querySelector("#list-box");

// Activation buttons
const firstSender = document.querySelector("#sender");
const secondSender = document.querySelector("#receiver");

// Feedback array
const feedBack = [];

function senderId() {
  if (inputMsg.value.trim() === "") {
    alert("Fill in the input");
  } else if (inputMsg.value.trim() !== "") {
    const newText = document.createElement("div");
    inputMsg.value === newText.value;
    newText.textContent = inputMsg.value;
    formTwo.appendChild(newText);
    newText.style.color = "#fff";
    newText.style.padding = "10px";
    feedBack.push(inputMsg.value);
    inputMsg.value = "";
    console.log(feedBack);
  }else{

  }
}
firstSender.addEventListener("click", senderId);

function chatTwo() {
  if (inputMsgs.value.trim() === "") {
    alert("fill in the input");
  } else {
    const textReply = document.createElement("div");
    inputMsgs.value === textReply.value;
    textReply.textContent = inputMsgs.value;
    form.appendChild(textReply);
    textReply.style.color = "#fff";
    textReply.style.padding = "10px";
    feedBack.push(inputMsgs.value);
    inputMsgs.value = "";
    console.log(feedBack);
  }
}

secondSender.addEventListener("click", chatTwo);


// const inputMsg = document.querySelector("#msg");
// const inputMsgs = document.querySelector("#msg-2");

// const form = document.querySelector("#sender-1");
// const formTwo = document.querySelector("#receiver-1");

// const firstSender = document.querySelector("#sender");
// const secondSender = document.querySelector("#receiver");

// const feedBack = [];

// function senderId() {
//   if (inputMsg.value.trim() === "") {
//     alert("Fill in the input");
//   } else {
//     const newText = document.createElement("div");
//     newText.textContent = inputMsg.value; 
//     formTwo.appendChild(newText);
    
//     newText.style.color = "#fff";
//     newText.style.padding = "10px";
    
//     feedBack.push(inputMsg.value);
//     inputMsg.value = "";
//     console.log(feedBack);
//   }
// }

// firstSender.addEventListener("click", senderId);

// function chatTwo() {
//   if (inputMsgs.value.trim() === "") {
//     alert("Fill in the input");
//   } else {
//     const textReply = document.createElement("div");
    
//     // Get the last message from feedback
//     const lastMessage = feedBack.length > 0 ? feedBack[feedBack.length - 1] : "";
    
//     textReply.textContent = `${inputMsgs.value} (Replying to: ${lastMessage})`;
    
//     form.appendChild(textReply);
//     textReply.style.color = "#fff";
//     textReply.style.padding = "10px";
    
//     feedBack.push(inputMsgs.value);
//     inputMsgs.value = "";
//     console.log(feedBack);
//   }
// }

// secondSender.addEventListener("click", chatTwo);

