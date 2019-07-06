<template>
  <!-- Section: intro -->
  <div class="intro-content" id="home">
      <div class="container">
        <div class="row">
          <!--  Headshot image -->
          <div class="col-sm-6 col-md-6 col-lg-6">
              <img src="@/assets/me.jpg" class="img-fluid" alt="">
          </div>
          <!-- Landing text, cross-platform links -->
          <div class="col-sm-6 col-md-6 col-lg-6 slogan">
              <h2>Elizabeth DuPre</h2>
              <p>
                Hi, I'm Elizabeth! I'm a doctoral student in the
                <a href="//www.mcgill.ca/neuro/neuro-brain-research-patient-care-and-training"
                   target="_blank"
                   style="color: #003399">
                  Montreal Neurological Institute
                </a> at
                <a href="//www.mcgill.ca/" target="_blank" style="color: #003399">
                  McGill University</a>.
              </p>
              <p>For more information, please see my
                <a href="/#/pubs" style="color: #003399">
                  publications</a> and
                <a href="/#/cv" style="color: #003399">curriculum vitae (CV)</a>.
              </p>

              <hr>
              <div class="social">
                <p>
                <a href="//github.com/emdupre" title="Fork me on GitHub" class=github>
                <i class="fab fa-github fa-2x"></i></a>

                <a href="//twitter.com/emdupre_" title="Follow me on Twitter" class=twitter>
                <i class="fab fa-twitter fa-2x"></i></a>

                <a href="//orcid.org/0000-0003-1358-196X" title="View my ORCID profile" class=orcid>
                <i class="ai ai-orcid ai-2x"></i></a>

                <a href="//scholar.google.ca/citations?user=9FzK0bcAAAAJ&hl=en" title="View my Google Scholar profile" class=google>
                <i class="ai ai-google-scholar ai-2x"></i></a>
                </p>
              </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style>
    @import '../assets/fontawesome/css/all.css';
    @import '../assets/academicons/css/academicons.css';

    /* ===========================
    --- intro
    ============================ */

    .intro {
        width:100%;
        position:relative;
    }

    .intro-content {
        padding:60px 0 60px;
    }

    .intro-content.intro-nobg {
        background:#fff;
        position:relative;
        margin:0;
        padding:140px 0 60px;
    }

    .intro-content .img-fluid {
      margin-bottom: 30px
    }

    .intro-content .slogan h2 {
        margin-bottom: 30px;
    }

    /* ===========================
    --- social
    ============================ */

    a.github:hover {
        color:#000000
    }

    a.google:hover {
        color:#4885ED
    }

    a.twitter:hover {
        color:#0084FF
    }

    a.orcid:hover {
        color:#A6CE39
    }

    a.resgate:hover {
        color:#00CCBB
    }

    .collapse-container > :nth-child(even) {
      display: none;
      padding-left: 0.5rem;

    }
</style>
