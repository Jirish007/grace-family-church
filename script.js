// Smooth scroll for in-page links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});
// Form submission
document.querySelector('form').addEventListener('submit', function(e){
  e.preventDefault();
  alert("Thank you! We'll respond soon to help you connect with our church family.");
  this.reset();
});
