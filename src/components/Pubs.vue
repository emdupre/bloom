<template>
  <div id="Pubs">
    <div v-if="loading" class="d-flex justify-content-center mb-3">
      <b-spinner variant="primary"></b-spinner>
    </div>
    <div v-else class="container-fluid pub-content">
      <h3>Journal Articles</h3>
      <b-list-group>
        <b-list-group-item v-for="(work, index) in works" :key="index">
          <PubItem
          :pub="work['work-summary'][0]"
          :doi="work['work-summary'][0]['external-ids']['external-id'][0]['external-id-value']">
          </PubItem>
        </b-list-group-item>
      </b-list-group>
      </div>
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
        // console.log(this.works[0]['work-summary'][0]['external-ids']['external-id'][0]['external-id-value'])
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
    margin-left:10px;
    margin-bottom: 10px;
    padding:40px 60px 0px 0px;
}

</style>
