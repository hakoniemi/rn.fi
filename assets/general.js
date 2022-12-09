(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-83552084-1', 'auto');
ga('send', 'pageview');

document.addEventListener('DOMContentLoaded', function() {
  const email = document.querySelector('.email');
  const mailString = email.dataset.first +'@'+ email.dataset.last +'.'+ email.dataset.tld;
  email.textContent = mailString;
  email.setAttribute('href', 'mailto:'+ mailString);

  const mobiles = document.querySelectorAll('.mobile');

  [].forEach.call(mobiles, function(mobile) {
    mobile.addEventListener('click', function(evt) {
      mobile.classList.toggle('active');
    });
  });
});