// Initialize Lucide Icons
document.addEventListener('DOMContentLoaded', () => {
    // The Lucide CDN script tag is in index.html, so 'lucide' should be available here.
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    } else {
        console.error("Lucide library not found. Icons may not render.");
    }
});

// Modal Functions
const modal = document.getElementById('project-modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalContent = modal.querySelector('div');

// Function to open the project detail modal
function openModal(title, description) {
    modalTitle.textContent = title;
    modalDescription.textContent = description;
    
    // Show modal and enable transition
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
    
    // Trigger transition after a slight delay to allow display change
    setTimeout(() => {
        modal.classList.remove('opacity-0');
        modalContent.classList.remove('scale-95');
        modalContent.classList.add('scale-100');
    }, 10);
}

// Function to close the project detail modal
function closeModal() {
    // Trigger reverse transition
    modal.classList.add('opacity-0');
    modalContent.classList.remove('scale-100');
    modalContent.classList.add('scale-95');
    
    // Hide modal after transition
    setTimeout(() => {
        modal.classList.add('hidden');
        document.body.style.overflow = ''; // Restore scrolling
    }, 300); // Match transition duration
}

// Close modal on outside click
if (modal) {
    modal.addEventListener('click', (e) => {
        if (e.target.id === 'project-modal') {
            closeModal();
        }
    });
}
