//* Function - Toggle Menu in Mobile View
const sideMenu = document.querySelector('aside');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
    sideMenu.style.left = '0';
});

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
    sideMenu.style.left = '-100%';
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 769) {
        sideMenu.style.display = 'block';
        sideMenu.style.left = '0';
    } else {
        sideMenu.style.display = 'none';
        sideMenu.style.left = '-100%';
    }
});

//* Function - Toggle Dark Mode
const darkMode = document.querySelector('.dark-mode');

darkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode-variables');
    darkMode.querySelector('span:nth-child(1)').classList.toggle('active');
    darkMode.querySelector('span:nth-child(2)').classList.toggle('active');
});

//* Function - Display Subrentals from Subrental Data
Subrental.forEach(sub => {
    const tr = document.createElement('tr');
    const trContent = `
        <td>${sub.gearName}</td>
        <td>${sub.poNumber}</td>
        <td>${sub.company}</td>
        <td class="${sub.status === 'Paid' ? 'success' : sub.status === 'Pending' ? 'warning' : 'primary'}">${sub.status}</td>
        <td class="primary">Details</td>
    `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
})