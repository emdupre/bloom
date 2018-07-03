<template>
  <div id="app">

        <b-navbar toggleable="md" type="light" variant="light">
          <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
          <b-navbar-brand href="/"> Elizabeth DuPre </b-navbar-brand>

          <b-collapse is-nav id="nav_collapse">
            <!--  Here are links to different routes  -->
            <b-navbar-nav class="ml-auto">
              <b-nav-item to="/about">About</b-nav-item>
              <b-nav-item to="/pubs">Publications</b-nav-item>
              <b-nav-item to="/cv">CV</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>

        <!-- Section: intro -->
        <div class="intro-content">
            <div class="container">
                <div class="row">

                    <!--  Headshot image -->
                    <div class="col-sm-6 col-md-6 col-lg-6">
                        <img src="../src/assets/me.jpg" class="img-fluid" alt="">
                    </div>

                    <!-- Landing text, cross-platform links -->
                    <div class="col-sm-6 col-md-6 col-lg-6 slogan">
                        <h2>Elizabeth DuPre</h2>
                        <p>Hi, I'm Elizabeth! I'm a doctoral student in the <a href="//www.mcgill.ca/neuro/neuro-brain-research-patient-care-and-training" target="_blank" style="color: #003399">Montreal Neurological Institute</a> at <a href="//www.mcgill.ca/" target="_blank" style="color: #003399">McGill University</a>.</p>
                        <p>For more information, please see my <a href="/#/pubs" style="color: #003399">publications</a> and <a href="/#/cv" style="color: #003399">curriculum vitae (CV)</a>.</p>

                        <hr>
                        <div class="social">
                            <p>
                            <a href="//github.com/emdupre" title="Fork me on GitHub" class=github>
                            <i class="fa fa-github fa-2x"></i></a>

                            <a href="//twitter.com/emdupre_" title="Follow me on Twitter" class=twitter>
                            <i class="fa fa-twitter fa-2x"></i></a>

                            <a href="//orcid.org/0000-0003-1358-196X" title="View my ORCID profile" class=orcid>
                            <i class="ai ai-orcid ai-2x"></i></a>

                            <a href="//scholar.google.com/citations?user=l-V-T0sAAAAJ&hl=en" title="View my Google Scholar profile" class=google>
                            <i class="ai ai-google-scholar ai-2x"></i></a>
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <footer>
            <div class="navbar navbar-default bottom">
                    <div class="text-center">
                    <span class="copy-left"><a href="//copyleft.org/">©</a></span> Elizabeth DuPre 2018
                    </div>
            </div>
        </footer>

  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
