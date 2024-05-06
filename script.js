document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    document.querySelector('.body').style.display = 'none'; 
    document.querySelector('.register-link').style.display = 'none';
    document.querySelector('.container-fluid').style.display = 'block';
});
document.getElementById('registerLink').addEventListener('click', function() {
    document.getElementById('wrap').classList.add('active');
});
document.getElementById('loginLink').addEventListener('click', function() {
    document.getElementById('wrap').classList.remove('active');
});