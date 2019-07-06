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
            <div class="d-flex justify-content-between align-items-center">
              <a class="mb-1" :href="pub['url']['value']" target="_blank">
                {{ pub['title']['title']['value'] }}
              </a>
              <small>{{ pub['publication-date']['year']['value'] }}</small>
            </div>
            <p v-if="pub['journal-title']" class="mb-1">
              <small>{{ pub['journal-title']['value'] }}</small>
            </p>
            <p v-else class="mb-1">
              <small>Preprint</small>
            </p>
          </b-list-group-item>
        </b-list-group>
      <!-- </div> -->
    </ul>
  </div>
</template>

<script>
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
Vue.use(BootstrapVue);

export default {
  name: 'Bloom',
  props: {},
  data() {
    return {
      works: [],
      loading: true,
    };
  },
  mounted() {
    this.getOrcid('0000-0003-1358-196X');
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
        console.log(this.works[0]['work-summary'][0]['external-ids']['external-id'][0]['external-id-type'])
        console.log(this.works[0]['work-summary'][0]['external-ids']['external-id'][0]['external-id-value'])
        return this.works;
      });
    },

    getCrossref(doi) {
      const options = {
          method: 'GET',
          headers: new Headers({'accept': 'application/json'})
      };
      fetch(`https://api.crossref.org/works/${doi}`, options)
      .then((resp) => resp.json())
      .then(data => {
        // console.log(data.message.author);
        author.list = data.message.author;
        // this.loading = false;
        return author.list;
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
