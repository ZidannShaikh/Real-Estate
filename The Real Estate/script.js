  // GSAP Initialization
  gsap.registerPlugin(ScrollTrigger);

  // Initialize animations after page load
  window.addEventListener('load', () => {
      initAnimations();
  });

  function initAnimations() {
      // Navbar entrance animation
      gsap.set('.navbar', { y: -100, opacity: 0 });
      gsap.to('.navbar', {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'back.out(1.4)',
          delay: 0.2
      });

      // Logo animation
      gsap.set('.logo', { scale: 0, rotation: -180 });
      gsap.to('.logo', {
          scale: 1,
          rotation: 0,
          duration: 1,
          ease: 'back.out(1.7)',
          delay: 0.5
      });

      // Menu items stagger animation
      gsap.set('.nav-link', { y: -30, opacity: 0 });
      gsap.to('.nav-link', {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'back.out(1.4)',
          delay: 0.7
      });

      // Floating button entrance
      gsap.set('.floating-contact', { scale: 0, rotation: 180 });
      gsap.to('.floating-contact', {
          scale: 1,
          rotation: 0,
          duration: 1,
          ease: 'back.out(1.7)',
          delay: 1.2
      });

      // Hero Section Animations
      const heroTl = gsap.timeline({ delay: 0.5 });

      // Hero badge animation
      heroTl.to('.hero-badge', {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'back.out(1.4)'
      })
      // Hero headline animation
      .to('.hero-headline', {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out'
      }, '-=0.3')
      // Hero subtext animation
      .to('.hero-subtext', {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out'
      }, '-=0.5')
      // Buttons animation from opposite sides
      .to('.btn-primary', {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'back.out(1.4)'
      }, '-=0.3')
      .to('.btn-secondary', {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'back.out(1.4)'
      }, '-=0.6')
      // Scroll indicator animation
      .to('.scroll-indicator', {
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out'
      }, '-=0.2');

      // 3D House layers animation
      gsap.set('.house-layer', { opacity: 0, scale: 0.8, rotationY: 45 });
      gsap.to('.house-layer', {
          opacity: 0.3,
          scale: 1,
          rotationY: 0,
          duration: 1.5,
          stagger: 0.2,
          ease: 'power3.out',
          delay: 1.5
      });

      // Continuous 3D house animation
      gsap.to('.house-3d', {
          rotationY: '+=360',
          duration: 20,
          ease: 'none',
          repeat: -1
      });

      // Badge pulse animation
      gsap.to('.hero-badge', {
          scale: 1.05,
          duration: 2,
          ease: 'power2.inOut',
          yoyo: true,
          repeat: -1,
          delay: 2
      });

      // Scroll indicator bounce
      gsap.to('.scroll-arrow', {
          y: 5,
          duration: 1.5,
          ease: 'power2.inOut',
          yoyo: true,
          repeat: -1,
          delay: 3
      });

      // Parallax background animation
      gsap.to('.hero-background', {
          yPercent: -50,
          ease: 'none',
          scrollTrigger: {
              trigger: '.hero-section',
              start: 'top bottom',
              end: 'bottom top',
              scrub: true
          }
      });

      // Navbar scroll effects
      ScrollTrigger.create({
          start: 'top -50',
          end: 99999,
          toggleClass: { className: 'scrolled', targets: '.navbar' },
          onToggle: self => {
              if (self.isActive) {
                  gsap.to('.navbar', { scale: 0.98, duration: 0.3 });
                  gsap.to('.navbar', { scale: 1, duration: 0.3, delay: 0.1 });
              }
          }
      });
  }

  // Scroll to section function
  function scrollToSection(target) {
      const targetSection = document.querySelector(target);
      if (targetSection) {
          gsap.to(window, {
              duration: 1.5,
              scrollTo: {
                  y: targetSection.offsetTop - 100,
              },
              ease: 'power3.inOut'
          });
      }
  }

  // Smooth scrolling for navigation links
  document.querySelectorAll('.nav-link, .logo').forEach(link => {
      link.addEventListener('click', (e) => {
          e.preventDefault();
          const targetId = link.getAttribute('href');
          const targetSection = document.querySelector(targetId);
          
          if (targetSection) {
              gsap.to(window, {
                  duration: 1.5,
                  scrollTo: {
                      y: targetSection.offsetTop - 100,
                  },
                  ease: 'power3.inOut'
              });

              // Add click animation
              gsap.to(link, {
                  scale: 0.95,
                  duration: 0.1,
                  yoyo: true,
                  repeat: 1,
                  ease: 'power2.inOut'
              });
          }
      });
  });

  // Floating contact button functionality
  document.getElementById('floatingContact').addEventListener('click', () => {
      // Click animation
      gsap.to('.floating-contact', {
          scale: 0.9,
          duration: 0.1,
          yoyo: true,
          repeat: 1,
          ease: 'power2.inOut',
          onComplete: () => {
              // Scroll to contact section
              const contactSection = document.querySelector('#contact');
              if (contactSection) {
                  gsap.to(window, {
                      duration: 1.5,
                      scrollTo: {
                          y: contactSection.offsetTop - 100,
                      },
                      ease: 'power3.inOut'
                  });
              }
          }
      });
  });

  // Magnetic effect for interactive elements
  document.querySelectorAll('.magnetic').forEach(el => {
      el.addEventListener('mousemove', (e) => {
          const rect = el.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          
          gsap.to(el, {
              x: x * 0.1,
              y: y * 0.1,
              duration: 0.3,
              ease: 'power2.out'
          });
      });

      el.addEventListener('mouseleave', () => {
          gsap.to(el, {
              x: 0,
              y: 0,
              duration: 0.5,
              ease: 'elastic.out(1, 0.3)'
          });
      });
  });

  // Enhanced hover animations
  document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('mouseenter', () => {
          gsap.to(link, {
              scale: 1.05,
              duration: 0.4,
              ease: 'back.out(1.7)'
          });
      });

      link.addEventListener('mouseleave', () => {
          gsap.to(link, {
              scale: 1,
              duration: 0.4,
              ease: 'back.out(1.7)'
          });
      });
  });

  // Logo hover enhancement
  document.querySelector('.logo').addEventListener('mouseenter', () => {
      gsap.to('.logo', {
          scale: 1.08,
          duration: 0.4,
          ease: 'back.out(1.7)'
      });
  });

  document.querySelector('.logo').addEventListener('mouseleave', () => {
      gsap.to('.logo', {
          scale: 1,
          duration: 0.4,
          ease: 'back.out(1.7)'
      });
  });

  // Continuous pulse animation for floating button
  setInterval(() => {
      const button = document.querySelector('.floating-contact');
      if (button) {
          button.classList.remove('pulse');
          setTimeout(() => button.classList.add('pulse'), 100);
      }
  }, 6000);
  // Animate section header
  gsap.to(".section-header", {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
          trigger: ".amenities-section",
          start: "top 80%",
          toggleActions: "play none none reverse"
      }
  });

  // Animate amenity cards with different effects
  const cards = gsap.utils.toArray(".amenity-card");
  
  cards.forEach((card, index) => {
      const animationType = card.dataset.animation;
      let animation = {};
      
      switch(animationType) {
          case 'fadeZoom':
              animation = {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  duration: 1,
                  ease: "back.out(1.7)"
              };
              break;
          case 'slideLeft':
              animation = {
                  opacity: 1,
                  x: 0,
                  y: 0,
                  duration: 1,
                  ease: "power3.out"
              };
              gsap.set(card, { x: -100 });
              break;
          case 'slideRight':
              animation = {
                  opacity: 1,
                  x: 0,
                  y: 0,
                  duration: 1,
                  ease: "power3.out"
              };
              gsap.set(card, { x: 100 });
              break;
          case 'bounce':
              animation = {
                  opacity: 1,
                  y: 0,
                  duration: 1.2,
                  ease: "bounce.out"
              };
              break;
      }
      
      gsap.to(card, {
          ...animation,
          delay: index * 0.15,
          scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse"
          }
      });
  });

  // Animate CTA button
  gsap.to(".cta-button", {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
          trigger: ".cta-container",
          start: "top 90%",
          toggleActions: "play none none reverse"
      }
  });

  // Add floating animation to icons on hover
  cards.forEach(card => {
      const icon = card.querySelector('.amenity-icon');
      
      card.addEventListener('mouseenter', () => {
          gsap.to(icon, {
              y: -5,
              duration: 0.3,
              ease: "power2.out"
          });
      });
      
      card.addEventListener('mouseleave', () => {
          gsap.to(icon, {
              y: 0,
              duration: 0.3,
              ease: "power2.out"
          });
      });
  });

  // Create a subtle parallax effect for the floating particles
  gsap.to(".particle", {
      y: -30,
      duration: 2,
      ease: "power1.inOut",
      stagger: 0.2,
      repeat: -1,
      yoyo: true
  });

  // Add a subtle glow effect that follows the mouse
  document.addEventListener('mousemove', (e) => {
      const cards = document.querySelectorAll('.amenity-card');
      
      cards.forEach(card => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          
          if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
              card.style.setProperty('--mouse-x', `${x}px`);
              card.style.setProperty('--mouse-y', `${y}px`);
          }
      });
  });

  // Initialize GSAP ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  // Animate floating orbs
  gsap.to(".mystical-orb:nth-child(1)", {
      x: 50,
      y: 30,
      rotation: 360,
      duration: 20,
      repeat: -1,
      yoyo: true,
      ease: "none"
  });

  gsap.to(".mystical-orb:nth-child(2)", {
      x: -30,
      y: 50,
      rotation: -360,
      duration: 25,
      repeat: -1,
      yoyo: true,
      ease: "none"
  });

  gsap.to(".mystical-orb:nth-child(3)", {
      x: 40,
      y: -20,
      rotation: 180,
      duration: 15,
      repeat: -1,
      yoyo: true,
      ease: "none"
  });

  // Animate amenity cards on scroll
  gsap.fromTo(".amenity-card", 
      {
          opacity: 0,
          y: 80,
          scale: 0.9
      },
      {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
              trigger: ".amenities-grid",
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
          }
      }
  );

  // Animate amenities title
  gsap.fromTo(".amenities-title",
      {
          opacity: 0,
          y: 50
      },
      {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
              trigger: ".amenities-header",
              start: "top 80%",
              toggleActions: "play none none reverse"
          }
      }
  );

  // Animate stats
  gsap.fromTo(".stat-item",
      {
          opacity: 0,
          scale: 0.5
      },
      {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
              trigger: ".stats-grid",
              start: "top 85%",
              toggleActions: "play none none reverse"
          }
      }
  );

  // Animate property cards on scroll
  gsap.fromTo(".luxury-property-card", 
      {
          opacity: 0,
          y: 100,
          scale: 0.8
      },
      {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
              trigger: ".properties-grid-container",
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
          }
      }
  );

  // Animate title
  gsap.fromTo(".main-title-display",
      {
          opacity: 0,
          y: -50,
          scale: 0.5
      },
      {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.5,
          ease: "power2.out"
      }
  );

  // Create floating particles
  function createParticles() {
      const particleContainer = document.getElementById('particleSystem');
      const particleCount = 50;

      for (let i = 0; i < particleCount; i++) {
          const particle = document.createElement('div');
          particle.className = 'particle-dot';
          particle.style.left = Math.random() * 100 + '%';
          particle.style.top = Math.random() * 100 + '%';
          particleContainer.appendChild(particle);

          // Animate particles
          gsap.to(particle, {
              x: (Math.random() - 0.5) * 200,
              y: (Math.random() - 0.5) * 200,
              opacity: Math.random() * 0.8 + 0.2,
              duration: Math.random() * 10 + 5,
              repeat: -1,
              yoyo: true,
              ease: "none"
          });
      }
  }

  // Property data
  const propertyData = {
      oceanview: {
          details: {
              'Property Type': 'Luxury Villa',
              'Year Built': '2019',
              'Lot Size': '0.8 acres',
              'Garage': '2 car garage',
              'HOA Fee': '$2,500/month',
              'Property Tax': '$28,000/year'
          },
          features: {
              'Interior': ['Marble countertops', 'Hardwood floors', 'Vaulted ceilings', 'Walk-in closets', 'Chef\'s kitchen'],
              'Exterior': ['Infinity pool', 'Private beach access', 'Outdoor kitchen', 'Landscaped gardens', 'Tennis court'],
              'Technology': ['Smart home system', 'Security cameras', 'Automated lighting', 'Climate control', 'Sound system']
          },
          gallery: [
              'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=300&h=200&fit=crop',
              'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=300&h=200&fit=crop',
              'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=300&h=200&fit=crop',
              'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=300&h=200&fit=crop'
          ]
      },
      penthouse: {
          details: {
              'Property Type': 'Luxury Penthouse',
              'Year Built': '2021',
              'Floor': '45th Floor',
              'Parking': 'Private parking',
              'HOA Fee': '$3,200/month',
              'Property Tax': '$42,000/year'
          },
          features: {
              'Interior': ['Italian marble', 'Floor-to-ceiling windows', 'Custom millwork', 'Wine storage', 'Library'],
              'Amenities': ['24/7 concierge', 'Fitness center', 'Rooftop terrace', 'Private elevator', 'Valet parking'],
              'Views': ['Central Park views', 'City skyline', 'East River views', 'Sunset terrace', '360° panoramic']
          },
          gallery: [
              'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=300&h=200&fit=crop',
              'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=300&h=200&fit=crop',
              'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=300&h=200&fit=crop',
              'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=300&h=200&fit=crop'
          ]
      },
      mountain: {
          details: {
              'Property Type': 'Mountain Lodge',
              'Year Built': '2018',
              'Lot Size': '2.5 acres',
              'Elevation': '8,500 ft',
              'HOA Fee': '$1,800/month',
              'Property Tax': '$19,000/year'
          },
          features: {
              'Interior': ['Stone fireplace', 'Exposed beams', 'Heated floors', 'Wine cellar', 'Game room'],
              'Exterior': ['Hot tub', 'Ski-in/ski-out', 'Mountain views', 'Fire pit', 'Hiking trails'],
              'Luxury': ['Home theater', 'Gym', 'Steam room', 'Guest quarters', 'Catering kitchen']
          },
          gallery: [
              'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=300&h=200&fit=crop',
              'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=300&h=200&fit=crop',
              'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=300&h=200&fit=crop',
              'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=300&h=200&fit=crop'
          ]
      },
      desert: {
          details: {
              'Property Type': 'Desert Modern',
              'Year Built': '2020',
              'Lot Size': '1.2 acres',
              'Pool': 'Resort-style pool',
              'HOA Fee': '$2,100/month',
              'Property Tax': '$35,000/year'
          },
          features: {
              'Interior': ['Open floor plan', 'Clerestory windows', 'Polished concrete', 'Custom lighting', 'Art walls'],
              'Exterior': ['Infinity pool', 'Outdoor kitchen', 'Fire features', 'Desert landscaping', 'Guest casita'],
              'Sustainability': ['Solar panels', 'Energy efficient', 'Smart irrigation', 'LED lighting', 'Insulated windows']
          },
          gallery: [
              'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=300&h=200&fit=crop',
              'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=300&h=200&fit=crop',
              'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=300&h=200&fit=crop',
              'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=300&h=200&fit=crop'
          ]
      }
  };

  // Modal functions
  function openScheduleModal(propertyName, price, location) {
      document.getElementById('schedulePropertyName').textContent = propertyName;
      document.getElementById('schedulePropertyLocation').textContent = `${location} • ${price}`;
      document.getElementById('scheduleModalBackdrop').classList.add('active');
      document.body.style.overflow = 'hidden';
  }

  function closeScheduleModal() {
      document.getElementById('scheduleModalBackdrop').classList.remove('active');
      document.body.style.overflow = 'auto';
      document.getElementById('successMessage').style.display = 'none';
  }

  function openDetailsModal(propertyName, price, location, propertyType) {
      document.getElementById('detailsPropertyName').textContent = propertyName;
      document.getElementById('detailsPropertyLocation').textContent = location;
      document.getElementById('detailsPropertyPrice').textContent = price;
      
      const data = propertyData[propertyType];
      const detailsContent = document.getElementById('propertyDetailsContent');
      
      let contentHTML = '';
      
      // Property Details Section
      contentHTML += `
          <div class="detail-section-block">
              <h4 class="detail-section-title">Property Details</h4>
              <div class="detail-info-list">
      `;
      for (const [key, value] of Object.entries(data.details)) {
          contentHTML += `
              <div class="detail-info-item">
                  <span class="detail-info-label">${key}</span>
                  <span class="detail-info-value">${value}</span>
              </div>
          `;
      }
      contentHTML += `</div></div>`;
      
      // Features Section
      for (const [category, features] of Object.entries(data.features)) {
          contentHTML += `
              <div class="detail-section-block">
                  <h4 class="detail-section-title">${category} Features</h4>
                  <div class="detail-info-list">
          `;
          features.forEach(feature => {
              contentHTML += `
                  <div class="detail-info-item">
                      <span class="detail-info-value">• ${feature}</span>
                  </div>
              `;
          });
          contentHTML += `</div></div>`;
      }
      
      // Gallery Section
      contentHTML += `
          <div class="detail-section-block">
              <h4 class="detail-section-title">Property Gallery</h4>
              <div class="gallery-grid-container">
      `;
      data.gallery.forEach(imageUrl => {
          contentHTML += `<img src="${imageUrl}" alt="Property Image" class="gallery-thumbnail-image">`;
      });
      contentHTML += `</div></div>`;
      
      detailsContent.innerHTML = contentHTML;
      document.getElementById('detailsModalBackdrop').classList.add('active');
      document.body.style.overflow = 'hidden';
  }

  function closeDetailsModal() {
      document.getElementById('detailsModalBackdrop').classList.remove('active');
      document.body.style.overflow = 'auto';
  }

  function submitTourForm(event) {
      event.preventDefault();
      
      // Simulate form submission
      setTimeout(() => {
          document.getElementById('successMessage').style.display = 'block';
          event.target.reset();
          
          // Auto close modal after 3 seconds
          setTimeout(() => {
              closeScheduleModal();
          }, 3000);
      }, 1000);
  }

  // Close modals when clicking backdrop
  document.getElementById('scheduleModalBackdrop').addEventListener('click', function(e) {
      if (e.target === this) {
          closeScheduleModal();
      }
  });

  document.getElementById('detailsModalBackdrop').addEventListener('click', function(e) {
      if (e.target === this) {
          closeDetailsModal();
      }
  });

  // Close modals with Escape key
  document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
          closeScheduleModal();
          closeDetailsModal();
      }
  });

  // Initialize animations and particles
  document.addEventListener('DOMContentLoaded', function() {
      createParticles();
      
      // Add subtle hover animations to amenity cards
      document.querySelectorAll('.amenity-card').forEach(card => {
          card.addEventListener('mouseenter', function() {
              gsap.to(this, {
                  scale: 1.02,
                  duration: 0.3,
                  ease: "power2.out"
              });
              
              // Animate the icon
              gsap.to(this.querySelector('.amenity-icon'), {
                  scale: 1.1,
                  rotation: 5,
                  duration: 0.3,
                  ease: "power2.out"
              });
          });
          
          card.addEventListener('mouseleave', function() {
              gsap.to(this, {
                  scale: 1,
                  duration: 0.3,
                  ease: "power2.out"
              });
              
              // Reset icon animation
              gsap.to(this.querySelector('.amenity-icon'), {
                  scale: 1,
                  rotation: 0,
                  duration: 0.3,
                  ease: "power2.out"
              });
          });
      });

      // Add subtle hover animations to cards
      document.querySelectorAll('.luxury-property-card').forEach(card => {
          card.addEventListener('mouseenter', function() {
              gsap.to(this, {
                  scale: 1.02,
                  duration: 0.3,
                  ease: "power2.out"
              });
          });
          
          card.addEventListener('mouseleave', function() {
              gsap.to(this, {
                  scale: 1,
                  duration: 0.3,
                  ease: "power2.out"
              });
          });
      });
  });

  gsap.registerPlugin(ScrollTrigger);

  // Hero animations
  const prestigeTl = gsap.timeline();
  
  prestigeTl.to('.prestige-main-heading', {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: 'power3.out'
  })
  .to('.prestige-sub-heading', {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out'
  }, '-=0.8')
  .to('.prestige-intro-text', {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out'
  }, '-=0.6');

  // Floating shapes animation
  gsap.to('.prestige-shape-a', {
      y: -30,
      x: 20,
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: 'none'
  });

  gsap.to('.prestige-shape-b', {
      y: 40,
      x: -25,
      rotation: -360,
      duration: 25,
      repeat: -1,
      ease: 'none'
  });

  gsap.to('.prestige-shape-c', {
      y: -20,
      x: 15,
      rotation: 180,
      duration: 15,
      repeat: -1,
      ease: 'none'
  });

  // Section titles animation
  gsap.utils.toArray('.prestige-block-title').forEach(title => {
      gsap.to(title, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
              trigger: title,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
          }
      });
  });

  // Story section animations
  gsap.to('.prestige-story-copy', {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
          trigger: '.prestige-story-layout',
          start: 'top 70%',
          toggleActions: 'play none none reverse'
      }
  });

  gsap.to('.prestige-story-image', {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
          trigger: '.prestige-story-layout',
          start: 'top 70%',
          toggleActions: 'play none none reverse'
      }
  });

  // Value cards animation
  gsap.utils.toArray('.prestige-value-item').forEach((card, index) => {
      gsap.to(card, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          delay: index * 0.2,
          scrollTrigger: {
              trigger: card,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
          }
      });
  });

  // Team members animation
  gsap.utils.toArray('.prestige-team-card').forEach((member, index) => {
      gsap.to(member, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          delay: index * 0.15,
          scrollTrigger: {
              trigger: member,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
          }
      });
  });

  // Stats counter animation
  gsap.utils.toArray('.prestige-stat-box').forEach((stat, index) => {
      const number = stat.querySelector('.prestige-stat-figure');
      const target = parseInt(number.getAttribute('data-target'));
      
      gsap.to(stat, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          delay: index * 0.1,
          scrollTrigger: {
              trigger: stat,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
          }
      });

      gsap.to({ value: 0 }, {
          value: target,
          duration: 2,
          ease: 'power2.out',
          delay: index * 0.1,
          onUpdate: function() {
              if (target === 2) {
                  number.textContent = '$' + this.targets()[0].value.toFixed(1) + 'B';
              } else if (target === 95) {
                  number.textContent = Math.round(this.targets()[0].value) + '%';
              } else {
                  number.textContent = Math.round(this.targets()[0].value) + '+';
              }
          },
          scrollTrigger: {
              trigger: stat,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
          }
      });
  });

  // CTA section animation
  gsap.to('.prestige-cta-heading', {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
          trigger: '.prestige-cta-area',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
      }
  });

  gsap.to('.prestige-cta-link', {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
      delay: 0.3,
      scrollTrigger: {
          trigger: '.prestige-cta-area',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
      }
  });

  // Smooth scrolling parallax effect for hero
  gsap.to('.prestige-hero-inner', {
      y: -100,
      opacity: 0.5,
      ease: 'none',
      scrollTrigger: {
          trigger: '.prestige-hero-wrap',
          start: 'top top',
          end: 'bottom top',
          scrub: 1
      }
  });
   // GSAP Animations
   gsap.registerPlugin();

// Initialize animations when page loads
window.addEventListener('load', () => {
// Animate floating circles
gsap.to('.floating-circle', {
  y: -20,
  x: 10,
  duration: 6,
  ease: "power2.inOut",
  repeat: -1,
  yoyo: true,
  stagger: 0.5
});

// Hero section animations
const tl = gsap.timeline();

tl.to('.hero-title', {
  opacity: 1,
  y: 0,
  duration: 1,
  ease: "power3.out"
})
.to('.hero-subtitle', {
  opacity: 1,
  y: 0,
  duration: 0.8,
  ease: "power3.out"
}, "-=0.5")
.to('.glass-card', {
  opacity: 1,
  y: 0,
  duration: 1,
  ease: "power3.out",
  stagger: 0.2
}, "-=0.3");

// Form input animations
const inputs = document.querySelectorAll('.form-input');
inputs.forEach(input => {
  input.addEventListener('focus', () => {
      gsap.to(input, {
          scale: 1.02,
          duration: 0.3,
          ease: "power2.out"
      });
  });

  input.addEventListener('blur', () => {
      gsap.to(input, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
      });
  });
});

// Info card hover animations
const infoCards = document.querySelectorAll('.info-card');
infoCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
      gsap.to(card.querySelector('.info-icon'), {
          rotation: 10,
          scale: 1.1,
          duration: 0.3,
          ease: "power2.out"
      });
  });

  card.addEventListener('mouseleave', () => {
      gsap.to(card.querySelector('.info-icon'), {
          rotation: 0,
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
      });
  });
});

// Submit button click animation
const submitBtn = document.querySelector('.submit-btn');
submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  
  // Create ripple effect
  const ripple = document.createElement('div');
  ripple.style.position = 'absolute';
  ripple.style.borderRadius = '50%';
  ripple.style.background = 'rgba(255, 255, 255, 0.6)';
  ripple.style.transform = 'scale(0)';
  ripple.style.animation = 'ripple 0.6s linear';
  ripple.style.left = '50%';
  ripple.style.top = '50%';
  ripple.style.width = '20px';
  ripple.style.height = '20px';
  ripple.style.marginLeft = '-10px';
  ripple.style.marginTop = '-10px';
  
  submitBtn.appendChild(ripple);
  
  setTimeout(() => {
      ripple.remove();
  }, 600);

  // Button success animation
  gsap.to(submitBtn, {
      backgroundColor: '#4CAF50',
      duration: 0.3,
      onComplete: () => {
          submitBtn.innerHTML = '✓ Message Sent!';
          setTimeout(() => {
              submitBtn.innerHTML = 'Send Message';
              gsap.to(submitBtn, {
                  backgroundColor: '',
                  duration: 0.3
              });
          }, 3000);
      }
  });
});

// Scroll-triggered animations
gsap.utils.toArray('.info-card').forEach((card, i) => {
  gsap.fromTo(card, {
      opacity: 0,
      x: i % 2 === 0 ? -50 : 50
  }, {
      opacity: 1,
      x: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
          trigger: card,
          start: "top 80%",
          toggleActions: "play none none reverse"
      }
  });
});
});

// Add CSS for ripple animation
const style = document.createElement('style');
style.textContent = `
@keyframes ripple {
  to {
      transform: scale(4);
      opacity: 0;
  }
}
`;
document.head.appendChild(style);
// Register GSAP plugins
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

// GSAP Animations
window.onload = function() {
// Animate footer sections on load
gsap.from(".footer-section", {
  duration: 1,
  y: 50,
  opacity: 0,
  stagger: 0.2,
  ease: "power3.out",
  scrollTrigger: {
      trigger: "footer",
      start: "top 90%", // Start animation when footer top is 90% in view
      toggleActions: "play none none none"
  }
});

// Animate individual quick links
gsap.from(".quick-links .footer-link", { /* Targeted specifically */
  duration: 0.5,
  x: -20,
  opacity: 0,
  stagger: 0.1,
  ease: "power2.out",
  delay: 0.5, // Delay slightly after section animation
  scrollTrigger: {
      trigger: ".quick-links",
      start: "top 90%"
  }
});

// Animate social icons
gsap.from(".social-icon", {
  duration: 0.6,
  y: 10,
  opacity: 0,
  stagger: 0.15,
  ease: "back.out(1.7)",
  delay: 0.8,
  scrollTrigger: {
      trigger: ".social-icons-container",
      start: "top 90%"
  }
});

// Animate newsletter input and button
gsap.from(".newsletter-input", {
  duration: 0.7,
  x: -50,
  opacity: 0,
  ease: "power2.out",
  delay: 1,
  scrollTrigger: {
      trigger: ".newsletter-input",
      start: "top 90%"
  }
});
gsap.from(".newsletter-button", {
  duration: 0.7,
  x: 50,
  opacity: 0,
  ease: "power2.out",
  delay: 1.2,
  scrollTrigger: {
      trigger: ".newsletter-button",
      start: "top 90%"
  }
});

// Animate back to top button on hover (subtle scale)
gsap.to(".back-to-top-button", {
  duration: 0.3,
  scale: 1.1,
  paused: true,
  ease: "power1.out"
});

document.querySelector(".back-to-top-button").addEventListener("mouseenter", () => {
  gsap.to(".back-to-top-button", {scale: 1.1});
});
document.querySelector(".back-to-top-button").addEventListener("mouseleave", () => {
  gsap.to(".back-to-top-button", {scale: 1});
});

// Smooth scroll for back to top button
document.querySelector(".back-to-top-button").addEventListener("click", function(e) {
  e.preventDefault();
  gsap.to(window, {duration: 1.5, scrollTo: {y: 0}, ease: "power3.inOut"});
});
};