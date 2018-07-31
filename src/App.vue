<template>
  <div id="app">

        <b-navbar toggleable="md" type="light" variant="light">
          <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
          <b-navbar-brand to="/" exact> Elizabeth DuPre </b-navbar-brand>

          <b-collapse is-nav id="nav_collapse">
            <!--  Here are links to different routes  -->
            <b-navbar-nav class="ml-auto">
              <!-- <b-nav-item to="/about">About</b-nav-item> -->
              <b-nav-item to="/pubs">Publications</b-nav-item>
              <b-nav-item to="/cv">CV</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>

        <div>
            <router-view></router-view>
        </div>

        <footer>
            <div class="fluid-container footer">
                    <p class="text-center"><span class="copy-left"><a href="//copyleft.org/">©</a></span> Elizabeth DuPre 2018</p>
            </div>
        </footer>

  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
