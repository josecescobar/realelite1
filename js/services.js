// Service Details Modal Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Service Modal Setup
    const modal = document.createElement('div');
    modal.id = 'service-details-modal';
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-button">&times;</span>
            <div id="service-details-content"></div>
        </div>
    `;
    document.body.appendChild(modal);

    // Service Modal Content
    const serviceDetails = {
        'roofing': {
            title: 'Expert Roofing Services',
            description: 'Our comprehensive roofing solutions are designed to protect your home and enhance its value. We use only the highest quality materials and employ expert installers.',
            process: [
                'Free Inspection & Assessment',
                'Detailed Written Estimate',
                'Material Selection Consultation',
                'Professional Installation',
                'Final Inspection & Cleanup'
            ],
            materials: [
                {name: 'GAF Timberline HDZ Shingles', desc: 'Industry-leading durability and style'},
                {name: 'Standing Seam Metal Roofing', desc: 'Long-lasting protection with modern appeal'},
                {name: 'Premium Underlayment', desc: 'Extra layer of protection against water damage'},
                {name: 'Ridge Vent Systems', desc: 'Proper ventilation for extended roof life'}
            ],
            certifications: ['GAF Certified', 'OSHA Safety Certified', 'Fully Insured']
        },
        'decks': {
            title: 'Custom Deck Building',
            description: 'We create beautiful, functional outdoor living spaces that perfectly match your lifestyle and home\'s architecture.',
            process: [
                'Design Consultation',
                'Material Selection',
                'Permit Acquisition',
                'Expert Construction',
                'Final Walkthrough'
            ],
            materials: [
                {name: 'Trex Composite Decking', desc: 'Low maintenance with 25-year warranty'},
                {name: 'Premium Treated Lumber', desc: 'Natural beauty with proper protection'},
                {name: 'Aluminum Railing Systems', desc: 'Modern look with minimal upkeep'}
            ],
            certifications: ['Trex Pro Platinum', 'Licensed Contractor', 'Fully Insured']
        },
        'flooring': {
            title: 'Professional Flooring Installation',
            description: 'Our flooring expertise covers all materials and styles, ensuring a perfect installation that stands the test of time.',
            process: [
                'In-Home Consultation',
                'Material Selection',
                'Subfloor Inspection',
                'Expert Installation',
                'Final Inspection'
            ],
            materials: [
                {name: 'Hardwood', desc: 'Classic beauty with decades of durability'},
                {name: 'Luxury Vinyl Plank', desc: 'Water-resistant and low maintenance'},
                {name: 'Tile', desc: 'Perfect for high-traffic areas and wet spaces'}
            ],
            certifications: ['NWFA Certified', 'Licensed Contractor', 'Fully Insured']
        },
        'remodeling': {
            title: 'Complete Home Remodeling',
            description: 'Transform your living spaces with our comprehensive remodeling services, from design to completion.',
            process: [
                'Initial Design Consultation',
                'Detailed Planning & Design',
                'Material Selection',
                'Professional Construction',
                'Quality Inspection'
            ],
            materials: [
                {name: 'Custom Cabinetry', desc: 'Built to your specifications'},
                {name: 'Premium Countertops', desc: 'Granite, quartz, and more'},
                {name: 'Quality Fixtures', desc: 'Name-brand, lasting quality'}
            ],
            certifications: ['NARI Member', 'EPA Lead-Safe', 'Fully Insured']
        },
        'additional': {
            title: 'Additional Home Services',
            description: 'From emergency repairs to custom installations, we provide comprehensive solutions for all your home improvement needs.',
            process: [
                'Service Assessment',
                'Written Estimate',
                'Schedule Service',
                'Expert Execution',
                'Quality Check'
            ],
            materials: [
                {name: 'James Hardie Siding', desc: 'Industry-leading fiber cement siding'},
                {name: 'Anderson Windows', desc: 'Energy-efficient windows'},
                {name: 'Quality Hardware', desc: 'Premium fixtures and fittings'}
            ],
            certifications: ['Multi-Trade Licensed', '24/7 Emergency Service', 'Fully Insured']
        }
    };

    // Handle Service Detail Button Clicks
    document.querySelectorAll('.service-details').forEach(button => {
        button.addEventListener('click', function() {
            const service = this.dataset.service;
            const details = serviceDetails[service];
            
            if (details) {
                const content = document.getElementById('service-details-content');
                content.innerHTML = `
                    <h2>${details.title}</h2>
                    <p class="service-description">${details.description}</p>
                    
                    <div class="details-grid">
                        <div class="details-section">
                            <h4>Our Process</h4>
                            <ul>
                                ${details.process.map(step => `<li>${step}</li>`).join('')}
                            </ul>
                        </div>
                        
                        <div class="details-section">
                            <h4>Materials We Use</h4>
                            <ul>
                                ${details.materials.map(material => `
                                    <li>
                                        <strong>${material.name}</strong>
                                        <br>
                                        <span class="material-desc">${material.desc}</span>
                                    </li>
                                `).join('')}
                            </ul>
                        </div>
                        
                        <div class="details-section">
                            <h4>Certifications</h4>
                            <ul>
                                ${details.certifications.map(cert => `<li>${cert}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                    
                    <div class="details-cta">
                        <button class="btn btn-primary schedule-consultation">
                            <i class="fas fa-calendar-alt"></i>
                            Schedule a Free Consultation
                        </button>
                    </div>
                `;
                
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Handle Schedule Consultation Button Clicks
    document.querySelectorAll('.service-cta').forEach(button => {
        button.addEventListener('click', function() {
            window.location.href = 'index.html#cta';
        });
    });

    // Close Modal Functionality
    const closeModal = () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    };

    document.querySelector('.close-button').addEventListener('click', closeModal);
    
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
});
