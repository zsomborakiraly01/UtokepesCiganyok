/* Custom Search and Table Utilities for Installer Website */
document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('exeSearch');
  if (searchInput) {
    searchInput.addEventListener('keyup', function() {
      const filter = this.value.toLowerCase();
      const rows = document.querySelectorAll('#downloadsTable tbody tr');
      
      rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        if (text.includes(filter)) {
          row.style.display = '';
        } else {
          row.style.display = 'none';
        }
      });
    });
  }
});