function apply(){
    alert("Form Applied! Kidnly Wait for Response");
}
function addLogo() {
    const container = document.querySelector('#logo');
    const logo = document.createElement('img');
    logo.id = 'company-logo';
    logo.src = 'logo.jpg';
    logo.alt = 'Company Logo';
    logo.style.display = 'inline';
    logo.style.margin = '0 auto';
    logo.style.maxWidth = '4%';
    logo.style.height = 'auto';

    container.insertBefore(logo, container.firstChild); 
}

document.addEventListener('DOMContentLoaded', addLogo);
document.getElementById('resume').addEventListener('change', function () {
    const fileName = this.files[0] ? this.files[0].name : 'No file chosen';
    document.getElementById('resume-label').innerText = `Resume: ${fileName}`;
});