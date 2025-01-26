document.addEventListener("DOMContentLoaded", function () {
  const email = document.querySelector(".email");
  const mailString =
    email.dataset.first + "@" + email.dataset.last + "." + email.dataset.tld;
  email.textContent = mailString;
  email.setAttribute("href", "mailto:" + mailString);
});
