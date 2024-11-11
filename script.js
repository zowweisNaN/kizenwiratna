function toggleDropdown() {
    const dropdownMenu = document.querySelector('.dropdown-nav .dropdown');
    const dropdownLink = document.querySelector('.dropdown-nav a');
    
    dropdownMenu.classList.toggle('show');
    dropdownLink.classList.toggle('rotate');
}
