<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Swiper from 'swiper'
import 'swiper/swiper-bundle.css'

import { TresCanvas } from '@tresjs/core'
import { OrbitControls } from '@tresjs/cientos'
import Moon from './components/Moon.vue'

const isMobile = ref(window.innerWidth <= 767)

function handleResize() {
  isMobile.value = window.innerWidth <= 767
}

onMounted(() => {
  import('../public/assets/js/main.js')

  window.addEventListener('resize', handleResize)

  new Swiper('.testimonial-slider', {
    loop: true,
    speed: 800,
    autoplay: { delay: 5000 },
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      nextEl: '.slider-next',
      prevEl: '.slider-prev'
    },
    breakpoints: {
      768: { slidesPerView: 2 }
    }
  })

  new Swiper('.testimonials-slider', {
    loop: true,
    speed: 600,
    autoplay: { delay: 5000 },
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      nextEl: '.slider-next',
      prevEl: '.slider-prev'
    },
    breakpoints: {
      768: { slidesPerView: 2 }
    }
  })
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<template>
    <header id="header" class="header d-flex align-items-center fixed-top">
    <div class="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between">

      <a href="index.html" class="d-flex align-items-center me-auto me-xl-0">
        <img src="../public/assets/img/logo.png" alt="">
      </a>

      <nav id="navmenu" class="navmenu">
        <ul>
          <li><a href="#hero" class="active">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#team">Team</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </nav>
    </div>
  </header>

  <main class="main">

    <!-- Hero Section -->
    <section id="hero" class="hero section">
      <div class="container">
        <div class="row">
          <div class="col-lg-7 content-col" data-aos="fade-up">
            <div class="content">
              <div class="agency-name">
                <h5>NOSSO IDEAL</h5>
              </div>

              <div class="main-heading">
                <h1 style="color: #a2a5a8;">CODE</h1>
                <h1 style="color: #55b9e6;">LUNI</h1>
              </div>

              <div class="divider"></div>

              <div class="description">
                <p>Implementamos estratégias inovadoras para uma maior produtividade. Transformamos ideias em realidades impactantes, garantindo que sua marca se destaque em um mercado competitivo. Utilizamos tecnologias de ponta para desenvolver produtos otimizados que fazem a diferença no seu resultado, desde landing pages à sistemas completos.</p>
              </div>

              <div class="cta-button">
                <a href="#services" class="btn">
                  <span>EXPLORE NOSSOS SERVIÇOS</span>
                  <i class="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-5" data-aos="zoom-out">
            <div class="visual-content">
              <div class="fluid-shape">
                <!-- <img src="../public/assets/img/abstract/abstract-1.webp" alt="Abstract Fluid Shape" class="fluid-img"> -->
                  <TresCanvas>
                    <TresPerspectiveCamera :position="[0, 60, 128]" />
                    <OrbitControls :enableZoom="false" :enableRotate="!isMobile" :enablePan="!isMobile" />
                    <Suspense>
                        <Moon :isMobile="isMobile" />
                    </Suspense>
                    <TresDirectionalLight
                      :intensity="2"
                      :position="[3, 3, 3]"
                    />
                    <TresAmbientLight :intensity="1" />
                  </TresCanvas>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section><!-- /Hero Section -->

    <!-- About Section -->
    <section id="about" class="about section">

      <!-- Section Title -->
      <div class="container section-title" data-aos="fade-up">
        <h2>About</h2>
        <div><span>Learn More</span> <span class="description-title">About Us</span></div>
      </div><!-- End Section Title -->

      <div class="container">

        <div class="row gx-5 align-items-center">
          <div class="col-lg-6" data-aos="fade-right" data-aos-delay="200">
            <div class="about-image position-relative">
              <img src="../public/assets/img/about/about-portrait-1.webp" class="img-fluid rounded-4 shadow-sm" alt="About Image" loading="lazy">
              <div class="experience-badge">
                <span class="years">20+</span>
                <span class="text">Years of Expertise</span>
              </div>
            </div>
          </div>

          <div class="col-lg-6 mt-4 mt-lg-0" data-aos="fade-left" data-aos-delay="300">
            <div class="about-content">
              <h2>Elevating Business Performance Through Innovation</h2>
              <p class="lead">We focus on crafting bespoke strategies that navigate complexity and deliver tangible results for our clients.</p>
              <p>Through a blend of sophisticated analytics and creative problem-solving, we empower organizations to thrive in rapidly evolving markets.</p>

              <div class="row g-4 mt-3">
                <div class="col-md-6" data-aos="zoom-in" data-aos-delay="400">
                  <div class="feature-item">
                    <i class="bi bi-check-circle-fill"></i>
                    <h5>Dedicated Team Support</h5>
                    <p>Our highly skilled professionals are committed to providing personalized service and impactful solutions on every engagement.</p>
                  </div>
                </div>
                <div class="col-md-6" data-aos="zoom-in" data-aos-delay="450">
                  <div class="feature-item">
                    <i class="bi bi-lightbulb-fill"></i>
                    <h5>Forward-Thinking Approach</h5>
                    <p>We embrace innovative methodologies to develop unique strategies that drive lasting success.</p>
                  </div>
                </div>
              </div>

              <a href="#" class="btn btn-primary mt-4">Explore Our Services</a>
            </div>
          </div>
        </div>
      </div>
    </section><!-- /About Section -->

    <!-- Services Section -->
    <section id="services" class="services section">

      <!-- Section Title -->
      <div class="container section-title" data-aos="fade-up">
        <h2>Services</h2>
        <div><span>Check Our</span> <span class="description-title">Services</span></div>
      </div><!-- End Section Title -->

      <div class="container" data-aos="fade-up" data-aos-delay="100">

        <div class="service-header">
          <div class="row align-items-center">
            <div class="col-lg-8 col-md-12">
              <div class="service-intro">
                <h2 class="service-heading">
                  <div>Innovative business</div>
                  <div><span>performance solutions</span></div>
                </h2>
              </div>
            </div>
            <div class="col-lg-4 col-md-12">
              <div class="service-summary">
                <p>
                  We integrate forward-thinking strategies, creative approaches, and state-of-the-art technologies to deliver exceptional customer experiences that drive growth and engage target markets.
                </p>
                <a href="services.html" class="service-btn">
                  View All Services
                  <i class="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="row justify-content-center">
          <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div class="service-card position-relative z-1">
              <div class="service-icon">
                <i class="bi bi-palette"></i>
              </div>
              <a href="service-details.html" class="card-action d-flex align-items-center justify-content-center rounded-circle">
                <i class="bi bi-arrow-up-right"></i>
              </a>
              <h3>
                <a href="service-details.html">
                  Creative <span>branding</span>
                </a>
              </h3>
              <p>
                Nulla facilisi. Maecenas eget magna neque. Suspendisse potenti. Curabitur eleifend nisi non magna vulputate, vel condimentum libero tempus. Proin consectetur feugiat diam.
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div class="service-card position-relative z-1">
              <div class="service-icon">
                <i class="bi bi-gem"></i>
              </div>
              <a href="service-details.html" class="card-action d-flex align-items-center justify-content-center rounded-circle">
                <i class="bi bi-arrow-up-right"></i>
              </a>
              <h3>
                <a href="service-details.html">
                  Design <span>systems</span>
                </a>
              </h3>
              <p>
                Praesent euismod varius tellus, vel bibendum nunc interdum at. Donec vehicula diam vel metus venenatis convallis. Aliquam erat volutpat. Etiam viverra magna sit amet.
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
            <div class="service-card position-relative z-1">
              <div class="service-icon">
                <i class="bi bi-megaphone"></i>
              </div>
              <a href="service-details.html" class="card-action d-flex align-items-center justify-content-center rounded-circle">
                <i class="bi bi-arrow-up-right"></i>
              </a>
              <h3>
                <a href="service-details.html">
                  Marketing <span>strategies</span>
                </a>
              </h3>
              <p>
                Vivamus tempor velit id magna dictum, sed fermentum nisi faucibus. Integer nec pretium sapien. Fusce tincidunt ligula et purus consequat, ac pellentesque nulla eleifend.
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div class="service-card position-relative z-1">
              <div class="service-icon">
                <i class="bi bi-code-slash"></i>
              </div>
              <a href="service-details.html" class="card-action d-flex align-items-center justify-content-center rounded-circle">
                <i class="bi bi-arrow-up-right"></i>
              </a>
              <h3>
                <a href="service-details.html">
                  Digital <span>platforms</span>
                </a>
              </h3>
              <p>
                Cras fermentum odio eu feugiat malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et accumsan cursus. Morbi placerat nulla vel nunc viverra accumsan.
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div class="service-card position-relative z-1">
              <div class="service-icon">
                <i class="bi bi-graph-up"></i>
              </div>
              <a href="service-details.html" class="card-action d-flex align-items-center justify-content-center rounded-circle">
                <i class="bi bi-arrow-up-right"></i>
              </a>
              <h3>
                <a href="service-details.html">
                  Growth <span>acceleration</span>
                </a>
              </h3>
              <p>
                Aenean vel augue vel nisi bibendum posuere. Phasellus in lacus quis urna sodales dignissim. Duis aliquam libero eget risus facilisis. Quisque eget libero vel nisl fringilla.
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
            <div class="service-card position-relative z-1">
              <div class="service-icon">
                <i class="bi bi-camera-video"></i>
              </div>
              <a href="service-details.html" class="card-action d-flex align-items-center justify-content-center rounded-circle">
                <i class="bi bi-arrow-up-right"></i>
              </a>
              <h3>
                <a href="service-details.html">
                  Media <span>solutions</span>
                </a>
              </h3>
              <p>
                Etiam efficitur lacus in diam finibus, nec ultrices est sagittis. Maecenas elementum magna sed risus faucibus, nec commodo purus facilisis. Vestibulum accumsan magna.
              </p>
            </div>
          </div>
        </div>

      </div>

    </section><!-- /Services Section -->

    <!-- Steps Section -->
    <section id="steps" class="steps section">

      <!-- Section Title -->
      <div class="container section-title" data-aos="fade-up">
        <h2>Steps</h2>
        <div><span>How we</span> <span class="description-title">Work</span></div>
      </div><!-- End Section Title -->

      <div class="container" data-aos="fade-up" data-aos-delay="100">

        <div class="steps-wrapper">

          <div class="step-item" data-aos="fade-right" data-aos-delay="200">
            <div class="step-content">
              <div class="step-icon">
                <i class="bi bi-lightbulb"></i>
              </div>
              <div class="step-info">
                <span class="step-number">Step 01</span>
                <h3>Initial Consultation</h3>
                <p>Conducting thorough discovery sessions to understand your business requirements and objectives. Our expert team analyzes your needs to create a customized approach.</p>
              </div>
            </div>
          </div><!-- End Step Item -->

          <div class="step-item" data-aos="fade-left" data-aos-delay="300">
            <div class="step-content">
              <div class="step-icon">
                <i class="bi bi-gear"></i>
              </div>
              <div class="step-info">
                <span class="step-number">Step 02</span>
                <h3>Planning &amp; Strategy</h3>
                <p>Developing comprehensive strategies and detailed project plans based on the initial consultation. We create actionable roadmaps with clear milestones and deliverables.</p>
              </div>
            </div>
          </div><!-- End Step Item -->

          <div class="step-item" data-aos="fade-right" data-aos-delay="400">
            <div class="step-content">
              <div class="step-icon">
                <i class="bi bi-bar-chart"></i>
              </div>
              <div class="step-info">
                <span class="step-number">Step 03</span>
                <h3>Development Phase</h3>
                <p>Executing the planned strategies with precision and agility. Our team implements solutions while maintaining constant communication and progress updates.</p>
              </div>
            </div>
          </div><!-- End Step Item -->

          <div class="step-item" data-aos="fade-left" data-aos-delay="500">
            <div class="step-content">
              <div class="step-icon">
                <i class="bi bi-check2-circle"></i>
              </div>
              <div class="step-info">
                <span class="step-number">Step 04</span>
                <h3>Launch &amp; Support</h3>
                <p>Ensuring smooth deployment and providing ongoing support for implemented solutions. We monitor performance and make necessary adjustments for optimal results.</p>
              </div>
            </div>
          </div><!-- End Step Item -->
        </div>
      </div>
    </section><!-- /Steps Section -->

    <!-- Portfolio Section -->
    <section id="portfolio" class="portfolio section">

      <!-- Section Title -->
      <div class="container section-title" data-aos="fade-up">
        <h2>Portfolio</h2>
        <div><span>Check Our</span> <span class="description-title">Portfolio</span></div>
      </div><!-- End Section Title -->

      <div class="container-fluid" data-aos="fade-up" data-aos-delay="100">

        <div class="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">

          <ul class="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="200">
            <li data-filter="*" class="filter-active">
              <i class="bi bi-grid-3x3"></i> All Projects
            </li>
            <li data-filter=".filter-ui">
              <i class="bi bi-phone"></i> UI/UX
            </li>
            <li data-filter=".filter-development">
              <i class="bi bi-code-slash"></i> Development
            </li>
            <li data-filter=".filter-photography">
              <i class="bi bi-camera"></i> Photography
            </li>
            <li data-filter=".filter-marketing">
              <i class="bi bi-graph-up"></i> Marketing
            </li>
          </ul>

          <div class="row g-4 isotope-container" data-aos="fade-up" data-aos-delay="300">

            <div class="col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-ui">
              <article class="portfolio-entry">
                <figure class="entry-image">
                  <img src="../public/assets/img/portfolio/portfolio-1.webp" class="img-fluid" alt="" loading="lazy">
                  <div class="entry-overlay">
                    <div class="overlay-content">
                      <div class="entry-meta">UI/UX Design</div>
                      <h3 class="entry-title">Mobile Banking App</h3>
                      <div class="entry-links">
                        <a href="../public/assets/img/portfolio/portfolio-1.webp" class="glightbox" data-gallery="portfolio-gallery-ui" data-glightbox="title: Mobile Banking App; description: Praesent commodo cursus magna, vel scelerisque nisl consectetur.">
                          <i class="bi bi-arrows-angle-expand"></i>
                        </a>
                        <a href="portfolio-details.html">
                          <i class="bi bi-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </figure>
              </article>
            </div><!-- End Portfolio Item -->

            <div class="col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-development">
              <article class="portfolio-entry">
                <figure class="entry-image">
                  <img src="../public/assets/img/portfolio/portfolio-10.webp" class="img-fluid" alt="" loading="lazy">
                  <div class="entry-overlay">
                    <div class="overlay-content">
                      <div class="entry-meta">Development</div>
                      <h3 class="entry-title">E-Learning Platform</h3>
                      <div class="entry-links">
                        <a href="../public/assets/img/portfolio/portfolio-10.webp" class="glightbox" data-gallery="portfolio-gallery-development" data-glightbox="title: E-Learning Platform; description: Nulla vitae elit libero, a pharetra augue mollis interdum.">
                          <i class="bi bi-arrows-angle-expand"></i>
                        </a>
                        <a href="portfolio-details.html">
                          <i class="bi bi-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </figure>
              </article>
            </div><!-- End Portfolio Item -->

            <div class="col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-photography">
              <article class="portfolio-entry">
                <figure class="entry-image">
                  <img src="../public/assets/img/portfolio/portfolio-7.webp" class="img-fluid" alt="" loading="lazy">
                  <div class="entry-overlay">
                    <div class="overlay-content">
                      <div class="entry-meta">Photography</div>
                      <h3 class="entry-title">Urban Architecture</h3>
                      <div class="entry-links">
                        <a href="../public/assets/img/portfolio/portfolio-7.webp" class="glightbox" data-gallery="portfolio-gallery-photography" data-glightbox="title: Urban Architecture; description: Sed ut perspiciatis unde omnis iste natus error sit voluptatem.">
                          <i class="bi bi-arrows-angle-expand"></i>
                        </a>
                        <a href="portfolio-details.html">
                          <i class="bi bi-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </figure>
              </article>
            </div><!-- End Portfolio Item -->

            <div class="col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-marketing">
              <article class="portfolio-entry">
                <figure class="entry-image">
                  <img src="../public/assets/img/portfolio/portfolio-4.webp" class="img-fluid" alt="" loading="lazy">
                  <div class="entry-overlay">
                    <div class="overlay-content">
                      <div class="entry-meta">Marketing</div>
                      <h3 class="entry-title">Social Media Campaign</h3>
                      <div class="entry-links">
                        <a href="../public/assets/img/portfolio/portfolio-4.webp" class="glightbox" data-gallery="portfolio-gallery-marketing" data-glightbox="title: Social Media Campaign; description: Quis autem vel eum iure reprehenderit qui in ea voluptate.">
                          <i class="bi bi-arrows-angle-expand"></i>
                        </a>
                        <a href="portfolio-details.html">
                          <i class="bi bi-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </figure>
              </article>
            </div><!-- End Portfolio Item -->

            <div class="col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-ui">
              <article class="portfolio-entry">
                <figure class="entry-image">
                  <img src="../public/assets/img/portfolio/portfolio-2.webp" class="img-fluid" alt="" loading="lazy">
                  <div class="entry-overlay">
                    <div class="overlay-content">
                      <div class="entry-meta">UI/UX Design</div>
                      <h3 class="entry-title">Smart Home Interface</h3>
                      <div class="entry-links">
                        <a href="../public/assets/img/portfolio/portfolio-2.webp" class="glightbox" data-gallery="portfolio-gallery-ui" data-glightbox="title: Smart Home Interface; description: At vero eos et accusamus et iusto odio dignissimos ducimus.">
                          <i class="bi bi-arrows-angle-expand"></i>
                        </a>
                        <a href="portfolio-details.html">
                          <i class="bi bi-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </figure>
              </article>
            </div><!-- End Portfolio Item -->

            <div class="col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-development">
              <article class="portfolio-entry">
                <figure class="entry-image">
                  <img src="../public/assets/img/portfolio/portfolio-11.webp" class="img-fluid" alt="" loading="lazy">
                  <div class="entry-overlay">
                    <div class="overlay-content">
                      <div class="entry-meta">Development</div>
                      <h3 class="entry-title">Cloud Management System</h3>
                      <div class="entry-links">
                        <a href="../public/assets/img/portfolio/portfolio-11.webp" class="glightbox" data-gallery="portfolio-gallery-development" data-glightbox="title: Cloud Management System; description: Temporibus autem quibusdam et aut officiis debitis.">
                          <i class="bi bi-arrows-angle-expand"></i>
                        </a>
                        <a href="portfolio-details.html">
                          <i class="bi bi-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </figure>
              </article>
            </div><!-- End Portfolio Item -->

            <div class="col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-photography">
              <article class="portfolio-entry">
                <figure class="entry-image">
                  <img src="../public/assets/img/portfolio/portfolio-8.webp" class="img-fluid" alt="" loading="lazy">
                  <div class="entry-overlay">
                    <div class="overlay-content">
                      <div class="entry-meta">Photography</div>
                      <h3 class="entry-title">Nature Collection</h3>
                      <div class="entry-links">
                        <a href="../public/assets/img/portfolio/portfolio-8.webp" class="glightbox" data-gallery="portfolio-gallery-photography" data-glightbox="title: Nature Collection; description: Integer posuere erat a ante venenatis dapibus posuere velit aliquet.">
                          <i class="bi bi-arrows-angle-expand"></i>
                        </a>
                        <a href="portfolio-details.html">
                          <i class="bi bi-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </figure>
              </article>
            </div><!-- End Portfolio Item -->

            <div class="col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-marketing">
              <article class="portfolio-entry">
                <figure class="entry-image">
                  <img src="../public/assets/img/portfolio/portfolio-5.webp" class="img-fluid" alt="" loading="lazy">
                  <div class="entry-overlay">
                    <div class="overlay-content">
                      <div class="entry-meta">Marketing</div>
                      <h3 class="entry-title">Brand Strategy</h3>
                      <div class="entry-links">
                        <a href="../public/assets/img/portfolio/portfolio-5.webp" class="glightbox" data-gallery="portfolio-gallery-marketing" data-glightbox="title: Brand Strategy; description: Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum.">
                          <i class="bi bi-arrows-angle-expand"></i>
                        </a>
                        <a href="portfolio-details.html">
                          <i class="bi bi-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </figure>
              </article>
            </div><!-- End Portfolio Item -->

          </div><!-- End Portfolio Container -->

        </div>

      </div>

    </section><!-- /Portfolio Section -->

    <!-- Team Section -->
    <section id="team" class="team section light-background">

      <!-- Section Title -->
      <div class="container section-title" data-aos="fade-up">
        <h2>Team</h2>
        <div><span>Check Our</span> <span class="description-title">Team</span></div>
      </div><!-- End Section Title -->

      <div class="container" data-aos="fade-up" data-aos-delay="100">

        <div class="row gy-4">

          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <div class="team-member d-flex">
              <div class="member-img">
                <img src="../public/assets/img/person/person-m-7.webp" class="img-fluid" alt="" loading="lazy">
              </div>
              <div class="member-info flex-grow-1">
                <h4>Walter White</h4>
                <span>Chief Executive Officer</span>
                <p>Aliquam iure quaerat voluptatem praesentium possimus unde laudantium vel dolorum distinctio dire flow</p>
                <div class="social">
                  <a href=""><i class="bi bi-facebook"></i></a>
                  <a href=""><i class="bi bi-twitter-x"></i></a>
                  <a href=""><i class="bi bi-linkedin"></i></a>
                  <a href=""><i class="bi bi-youtube"></i></a>
                </div>
              </div>
            </div>
          </div><!-- End Team Member -->

          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <div class="team-member d-flex">
              <div class="member-img">
                <img src="../public/assets/img/person/person-f-8.webp" class="img-fluid" alt="" loading="lazy">
              </div>
              <div class="member-info flex-grow-1">
                <h4>Sarah Jhonson</h4>
                <span>Product Manager</span>
                <p>Labore ipsam sit consequatur exercitationem rerum laboriosam laudantium aut quod dolores exercitationem ut</p>
                <div class="social">
                  <a href=""><i class="bi bi-facebook"></i></a>
                  <a href=""><i class="bi bi-twitter-x"></i></a>
                  <a href=""><i class="bi bi-linkedin"></i></a>
                  <a href=""><i class="bi bi-youtube"></i></a>
                </div>
              </div>
            </div>
          </div><!-- End Team Member -->

          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="300">
            <div class="team-member d-flex">
              <div class="member-img">
                <img src="../public/assets/img/person/person-m-6.webp" class="img-fluid" alt="" loading="lazy">
              </div>
              <div class="member-info flex-grow-1">
                <h4>William Anderson</h4>
                <span>CTO</span>
                <p>Illum minima ea autem doloremque ipsum quidem quas aspernatur modi ut praesentium vel tque sed facilis at qui</p>
                <div class="social">
                  <a href=""><i class="bi bi-facebook"></i></a>
                  <a href=""><i class="bi bi-twitter-x"></i></a>
                  <a href=""><i class="bi bi-linkedin"></i></a>
                  <a href=""><i class="bi bi-youtube"></i></a>
                </div>
              </div>
            </div>
          </div><!-- End Team Member -->

          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="400">
            <div class="team-member d-flex">
              <div class="member-img">
                <img src="../public/assets/img/person/person-f-4.webp" class="img-fluid" alt="" loading="lazy">
              </div>
              <div class="member-info flex-grow-1">
                <h4>Amanda Jepson</h4>
                <span>Accountant</span>
                <p>Magni voluptatem accusamus assumenda cum nisi aut qui dolorem voluptate sed et veniam quasi quam consectetur</p>
                <div class="social">
                  <a href=""><i class="bi bi-facebook"></i></a>
                  <a href=""><i class="bi bi-twitter-x"></i></a>
                  <a href=""><i class="bi bi-linkedin"></i></a>
                  <a href=""><i class="bi bi-youtube"></i></a>
                </div>
              </div>
            </div>
          </div><!-- End Team Member -->

          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="500">
            <div class="team-member d-flex">
              <div class="member-img">
                <img src="../public/assets/img/person/person-m-12.webp" class="img-fluid" alt="" loading="lazy">
              </div>
              <div class="member-info flex-grow-1">
                <h4>Brian Doe</h4>
                <span>Marketing</span>
                <p>Qui consequuntur quos accusamus magnam quo est molestiae eius laboriosam sunt doloribus quia impedit laborum velit</p>
                <div class="social">
                  <a href=""><i class="bi bi-facebook"></i></a>
                  <a href=""><i class="bi bi-twitter-x"></i></a>
                  <a href=""><i class="bi bi-linkedin"></i></a>
                  <a href=""><i class="bi bi-youtube"></i></a>
                </div>
              </div>
            </div>
          </div><!-- End Team Member -->

          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="600">
            <div class="team-member d-flex">
              <div class="member-img">
                <img src="../public/assets/img/person/person-f-9.webp" class="img-fluid" alt="" loading="lazy">
              </div>
              <div class="member-info flex-grow-1">
                <h4>Josepha Palas</h4>
                <span>Operation</span>
                <p>Sint sint eveniet explicabo amet consequatur nesciunt error enim rerum earum et omnis fugit eligendi cupiditate vel</p>
                <div class="social">
                  <a href=""><i class="bi bi-facebook"></i></a>
                  <a href=""><i class="bi bi-twitter-x"></i></a>
                  <a href=""><i class="bi bi-linkedin"></i></a>
                  <a href=""><i class="bi bi-youtube"></i></a>
                </div>
              </div>
            </div>
          </div><!-- End Team Member -->
        </div>
      </div>
    </section><!-- /Team Section -->

    <!-- Contact Section -->
    <section id="contact" class="contact section">

      <!-- Section Title -->
      <div class="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <div><span>Let's</span> <span class="description-title">Connect</span></div>
      </div><!-- End Section Title -->

      <div class="container" data-aos="fade-up" data-aos-delay="100">

        <!-- Contact Info Boxes -->
        <div class="row gy-4 mb-5">
          <div class="col-lg-4" data-aos="fade-up" data-aos-delay="100">
            <div class="contact-info-box">
              <div class="icon-box">
                <i class="bi bi-geo-alt"></i>
              </div>
              <div class="info-content">
                <h4>Our Address</h4>
                <p>1842 Maple Avenue, Portland, Oregon 97204</p>
              </div>
            </div>
          </div>

          <div class="col-lg-4" data-aos="fade-up" data-aos-delay="200">
            <div class="contact-info-box">
              <div class="icon-box">
                <i class="bi bi-envelope"></i>
              </div>
              <div class="info-content">
                <h4>Email Address</h4>
                <p>info@example.com</p>
                <p>contact@example.com</p>
              </div>
            </div>
          </div>

          <div class="col-lg-4" data-aos="fade-up" data-aos-delay="300">
            <div class="contact-info-box">
              <div class="icon-box">
                <i class="bi bi-headset"></i>
              </div>
              <div class="info-content">
                <h4>Hours of Operation</h4>
                <p>Sunday-Fri: 9 AM - 6 PM</p>
                <p>Saturday: 9 AM - 4 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section><!-- /Contact Section -->

  </main>

  <footer id="footer" class="footer">

    <div class="container footer-top">
      <div class="row gy-4">
        <div class="col-lg-5 col-md-12 footer-about">
          <a href="index.html" class="logo d-flex align-items-center">
            <span class="sitename">Strategy</span>
          </a>
          <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
          <div class="social-links d-flex mt-4">
            <a href=""><i class="bi bi-twitter-x"></i></a>
            <a href=""><i class="bi bi-facebook"></i></a>
            <a href=""><i class="bi bi-instagram"></i></a>
            <a href=""><i class="bi bi-linkedin"></i></a>
          </div>
        </div>

        <div class="col-lg-2 col-6 footer-links">
          <h4>Useful Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Terms of service</a></li>
            <li><a href="#">Privacy policy</a></li>
          </ul>
        </div>

        <div class="col-lg-2 col-6 footer-links">
          <h4>Our Services</h4>
          <ul>
            <li><a href="#">Web Design</a></li>
            <li><a href="#">Web Development</a></li>
            <li><a href="#">Product Management</a></li>
            <li><a href="#">Marketing</a></li>
            <li><a href="#">Graphic Design</a></li>
          </ul>
        </div>

        <div class="col-lg-3 col-md-12 footer-contact text-center text-md-start">
          <h4>Contact Us</h4>
          <p>A108 Adam Street</p>
          <p>New York, NY 535022</p>
          <p>United States</p>
          <p class="mt-4"><strong>Phone:</strong> <span>+1 5589 55488 55</span></p>
          <p><strong>Email:</strong> <span>info@example.com</span></p>
        </div>

      </div>
    </div>

    <div class="container copyright text-center mt-4">
      <p>© <span>Copyright</span> <strong class="px-1 sitename">Strategy</strong> <span>All Rights Reserved</span></p>
      <div class="credits">
        <!-- All the links in the footer should remain intact. -->
        <!-- You can delete the links only if you've purchased the pro version. -->
        <!-- Licensing information: https://bootstrapmade.com/license/ -->
        <!-- Purchase the pro version with working PHP/AJAX contact form: [buy-url] -->
        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
      </div>
    </div>

  </footer>

  <!-- Scroll Top -->
  <a href="#" id="scroll-top" class="scroll-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

  <!-- Preloader -->
  <div id="preloader"></div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
