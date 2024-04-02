const btn = document.getElementById("btn");
const output = document.querySelector(".output");

let quote = [
  "Character is power.” ",
  " “Never be limited by other people limited imaginations.” ",
  "“Only a life lived for others is a life worthwhile.”",
  "“The only impossible journey is the one you never begin.”",
  "“If you fell down yesterday, stand up today.” ",
  "“The only approval you need is your own.”",
  " “Never regret anything that made you smile.”",
  "“Try to be a rainbow in someone cloud.” ",
  "“Perpetual optimism  a force multiplier.” ",
  "“Be yourself; everyone else is already taken.” ",
  "“Less is more.” ",
  "“The secret of getting ahead is getting started.” ",
  "“Happiness is not by chance, but by choice.” ",
  "“Life is what happens when you’re busy making other plans.”",
  "“No man goes before his time — unless his boss leaves early.”",
  "“There is no sunrise so beautiful that it is worth waking me up to see it.” ",
  "“A day without sunshine is like, you know, night.” ",
  "“I always arrive late at the office, but I make up for it by leaving early.” ",
];

btn.addEventListener("click", () => {
  console.log("clicked");
  let random = Math.floor(Math.random() * quote.length);
  output.textContent = quote[random];
});
