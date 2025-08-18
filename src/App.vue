<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

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
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<template>
    <header id="header" class="header d-flex align-items-center fixed-top">
    <div class="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between">

      <a href="#hero" class="d-flex align-items-center me-auto me-xl-0">
        <img src="../public/assets/img/logo.png" alt="">
      </a>

      <nav id="navmenu" class="navmenu">
        <ul>
          <li><a href="#hero" class="active">Home</a></li>
          <li><a href="#about">Sobre</a></li>
          <li><a href="#services">Serviços</a></li>
          <li><a href="#contact">Contato</a></li>
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
        <h2>Sobre</h2>
        <div><span>Saiba Mais</span> <span class="description-title">Sobre Nós</span></div>
      </div><!-- End Section Title -->

      <div class="container">

        <div class="row gx-5 align-items-center">
          <div class="col-lg-6" data-aos="fade-right" data-aos-delay="200">
            <div class="about-image position-relative">
              <img src="../public/assets/img/about/about-portrait-1.webp" class="img-fluid rounded-4 shadow-sm" alt="About Image" loading="lazy">
            </div>
          </div>

          <div class="col-lg-6 mt-4 mt-lg-0" data-aos="fade-left" data-aos-delay="300">
            <div class="about-content">
              <h2>Elevando a Performance do seu Negócio através da Inovação</h2>
              <p class="lead">Nosso foco é traçar estratégias personalizadas que navegam pela complexidade e entregam resultados tangíveis para nossos clientes.</p>
              <p>Através de uma combinação de análises sofisticadas e resolução criativa de problemas, ajudamos organizações a prosperar em um ambiente de negócios em constante mudança.</p>

              <div class="row g-4 mt-3">
                <div class="col-md-6" data-aos="zoom-in" data-aos-delay="400">
                  <div class="feature-item">
                    <i class="bi bi-check-circle-fill"></i>
                    <h5>Dedicação ao Cliente</h5>
                    <p>Estamos altamente comprometidos em compreender a necessidade dos nossos clientes e fornecer um serviço personalizado que atenda à real necessidade do seu negócio.</p>
                  </div>
                </div>
                <div class="col-md-6" data-aos="zoom-in" data-aos-delay="450">
                  <div class="feature-item">
                    <i class="bi bi-lightbulb-fill"></i>
                    <h5>Abordagem Inovadora</h5>
                    <p>Adotamos metodologias inovadoras para desenvolver softwares únicos que impulsionam o sucesso da sua empresa.</p>
                  </div>
                </div>
              </div>

              <a href="#" class="btn btn-primary mt-4">Explore nossos serviços</a>
            </div>
          </div>
        </div>
      </div>
    </section><!-- /About Section -->

    <!-- Services Section -->
    <section id="services" class="services section">

      <!-- Section Title -->
      <div class="container section-title" data-aos="fade-up">
        <h2>Serviços</h2>
        <div><span>Confira os nossos</span> <span class="description-title">Serviços</span></div>
      </div><!-- End Section Title -->

      <div class="container" data-aos="fade-up" data-aos-delay="100">

        <div class="service-header">
          <div class="row align-items-center">
            <div class="col-lg-8 col-md-12">
              <div class="service-intro">
                <h2 class="service-heading">
                  <div>Inovando Negócios</div>
                  <div><span>através do desenvolvimento de softwares</span></div>
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div class="row justify-content-center">
          <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div :class="'service-card position-relative z-1' + (!isMobile ? ' service-card-desktop' : ' ')">
              <div class="service-icon">
                <i class="bi bi-palette"></i>
              </div>
              <h3>
                  Desenvolvimento de <span>Landing Pages</span>
              </h3>
              <p>
                Quer lançar um produto novo? Nós criamos landing pages otimizadas para conversão, com design atraente e conteúdo persuasivo que capturam a atenção do seu público-alvo.
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div :class="'service-card position-relative z-1' + (!isMobile ? ' service-card-desktop' : ' ')">
              <div class="service-icon">
                <i class="bi bi-gem"></i>
              </div>
              <h3>
                  Criação de <span>Websites</span>
              </h3>
              <p>
                Sua empresa precisa de uma identidade na Internet? Nós criamos websites personalizados que não apenas atraem visitantes, mas também proporcionam uma experiência de usuário excepcional. Com designs responsivos e otimização para SEO, garantimos que seu site se destaque.
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
            <div :class="'service-card position-relative z-1' + (!isMobile ? ' service-card-desktop' : ' ')">
              <div class="service-icon">
                <i class="bi bi-megaphone"></i>
              </div>
              <h3>
                  Desenvolvimento de <span>Sistemas Completos</span>
              </h3>
              <p>
                Um novo serviço para os seus clientes? Um software para operação interna? Nós desenvolvemos sistemas completos sob medida para atender às necessidades específicas do seu negócio. Desde a análise de requisitos até a implementação e manutenção, garantimos uma solução robusta e escalável.
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div :class="'service-card position-relative z-1' + (!isMobile ? ' service-card-desktop' : ' ')">
              <div class="service-icon">
                <i class="bi bi-code-slash"></i>
              </div>
              <h3>
                  Criação de <span>Aplicativos Mobile</span>
              </h3>
              <p>
                Quer as informações da sua empresa na palma da mão? Nós desenvolvemos aplicativos personalizados que atendem às necessidades específicas do seu negócio. Com foco na experiência do usuário e nas melhores práticas de desenvolvimento, garantimos que seu aplicativo se destaque no mercado.
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div :class="'service-card position-relative z-1' + (!isMobile ? ' service-card-desktop' : ' ')">
              <div class="service-icon">
                <i class="bi bi-graph-up"></i>
              </div>
              <h3>
                  Otimização de Processos através de <span>Softwares</span>
              </h3>
              <p>
                Sua empresa necessita de uma solução para otimizar os processos? Nós ajudamos empresas por meio de soluções de software personalizadas. Com uma abordagem centrada no usuário, garantimos que nossas ferramentas atendam às suas necessidades específicas e melhorem a eficiência operacional.
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
            <div :class="'service-card position-relative z-1' + (!isMobile ? ' service-card-desktop' : ' ')">
              <div class="service-icon">
                <i class="bi bi-camera-video"></i>
              </div>
              <h3>
                  Estratégias de <span>Marketing Digital</span>
              </h3>
              <p>
                Precisa de ajuda para alavancar suas vendas? Nós ajudamos empresas a acelerar seu crescimento por meio de estratégias de marketing digital eficazes. Desde a otimização de conversões até campanhas de mídia paga, trabalhamos para maximizar seu ROI.
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
        <h2>Passo-a-passo</h2>
        <div><span>Como nós</span> <span class="description-title">Trabalhamos</span></div>
      </div><!-- End Section Title -->

      <div class="container" data-aos="fade-up" data-aos-delay="100">

        <div class="steps-wrapper">

          <div class="step-item" data-aos="fade-right" data-aos-delay="200">
            <div class="step-content">
              <div class="step-icon">
                <i class="bi bi-lightbulb"></i>
              </div>
              <div class="step-info">
                <span class="step-number">Passo 1</span>
                <h3>Consultoria Inicial</h3>
                <p>Realizamos sessões de descoberta para entender os requisitos e objetivos do seu negócio. Nossa equipe de especialistas analisa suas necessidades para criar uma abordagem personalizada.</p>
              </div>
            </div>
          </div><!-- End Step Item -->

          <div class="step-item" data-aos="fade-left" data-aos-delay="300">
            <div class="step-content">
              <div class="step-icon">
                <i class="bi bi-gear"></i>
              </div>
              <div class="step-info">
                <span class="step-number">Passo 2</span>
                <h3>Planejamento &amp; Estratégia</h3>
                <p>Desenvolvemos estratégias abrangentes e planos de projeto detalhados com base na consultoria inicial. Criamos roteiros acionáveis com marcos e entregas claras.</p>
              </div>
            </div>
          </div><!-- End Step Item -->

          <div class="step-item" data-aos="fade-right" data-aos-delay="400">
            <div class="step-content">
              <div class="step-icon">
                <i class="bi bi-bar-chart"></i>
              </div>
              <div class="step-info">
                <span class="step-number">Passo 3</span>
                <h3>Fase de Desenvolvimento</h3>
                <p>Executamos as estratégias planejadas com precisão e agilidade. Nossa equipe implementa soluções enquanto mantém comunicação constante e atualizações de progresso.</p>
              </div>
            </div>
          </div><!-- End Step Item -->

          <div class="step-item" data-aos="fade-left" data-aos-delay="500">
            <div class="step-content">
              <div class="step-icon">
                <i class="bi bi-check2-circle"></i>
              </div>
              <div class="step-info">
                <span class="step-number">Passo 4</span>
                <h3>Implantação &amp; Suporte</h3>
                <p>Garantimos uma implantação suave e fornecemos suporte contínuo para as soluções implementadas. Monitoramos o desempenho e fazemos os ajustes necessários para resultados ideais.</p>
              </div>
            </div>
          </div><!-- End Step Item -->
        </div>
      </div>
    </section><!-- /Steps Section -->

    <!-- Contact Section -->
    <section id="contact" class="contact section">

      <!-- Section Title -->
      <div class="container section-title" data-aos="fade-up">
        <h2>Contatos</h2>
        <div><span>Vamos</span> <span class="description-title">Conectar</span></div>
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
        <div class="col-lg-5 col-md-12 footer-about flex-grow-1 d-flex flex-column text-center">
          <a href="#hero" class="logo">
            <img src="../public/assets/img/logo.png" alt="">
          </a>
          <p>Inovação que impulsiona resultados.</p>
          <div class="social-links d-flex justify-content-center align-items-center">
            <a href="https://wa.me/5534999514231?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20a%20CodeLuni" target="_blank" rel="noopener noreferrer"><i class="bi bi-whatsapp"></i></a>
            <a href="https://www.instagram.com/codeluni/" target="_blank" rel="noopener noreferrer"><i class="bi bi-instagram"></i></a>
          </div>
        </div>

        <div class="col-lg-2 col-6 footer-links">
          <h4>Links Úteis</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#about">Sobre nós</a></li>
            <li><a href="#services">Serviços</a></li>
            <li><a href="#contact">Contato</a></li>
            <!-- <li><a href="#">Termos de serviço</a></li> -->
            <!-- <li><a href="#">Política de privacidade</a></li> -->
          </ul>
        </div>

        <div class="col-lg-2 col-6 footer-links">
          <h4>Contate-nos</h4>
          <p>A108 Adam Street</p>
          <p>New York, NY 535022</p>
          <p>United States</p>
          <p class="mt-4"><strong>Email:</strong> <span>info@example.com</span></p>
        </div>
      </div>
    </div>

    <div class="container copyright text-center mt-4">
      <p>© <span>Copyright</span> <strong class="px-1 sitename">CodeLuni</strong> <span>All Rights Reserved</span></p>
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
