<template>
  <div id="Pubs" class="pub-content">
    <ul>
      <!-- Lot of problems with the spinner D:  -->
      <!-- <div v-if="loading" class="align-items-center">
        <b-spinner type="grow" variant="info"></b-spinner>
      </div> -->
      <!-- <div v-else> -->
        <b-list-group>
          <b-list-group-item v-for="work in works"
                             :set="pub = work['work-summary'][0]"
                             class="flex-column align-items-start">

            <PubItem :doi={{ pub['external-ids']['external-id'][0]['external-id-value'] }}>
            </PubItem>
          </b-list-group-item>
        </b-list-group>
      <!-- </div> -->
    </ul>
  </div>
</template>

<script>
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import PubItem from './PubItem'
Vue.use(BootstrapVue);

export default {
  name: 'Bloom',
  props: {},
  components: {
    PubItem,
  },
  data() {
    return {
      works: [],
      loading: true,
    };
  },
  mounted() {
    this.getOrcid('0000-0003-1358-196X');  // Replace with your own ORCID !
  },
  methods: {
    getOrcid(orcid) {
      const options = {
          method: 'GET',
          headers: new Headers({'accept': 'application/json'})
      };
      fetch(`https://pub.orcid.org/v3.0/${orcid}/works`, options)
      .then((resp) => resp.json())
      .then(data => {
        this.works = data.group;
        this.loading = false;
        // Check if a DOI is available:
        // console.log(this.works[0]['work-summary'][0]['external-ids']['external-id'][0]['external-id-type'])
        return this.works;
      });
    }
  },
};
</script>

<style>
/* ===================================
publications
==================================== */
.pub-content {
    background:transparent;
    position:relative;
    margin-left:60px;
    margin-bottom: 10px;
    /* padding:60px 0 60px; */
    padding:40px 60px 0px 0px;
}

</style>
