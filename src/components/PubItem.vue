<template>
  <div>
    <ul>
      <b-list-group>
        <div class="d-flex justify-content-between align-items-center">
          <a class="mb-1" :href="pub['url']['value']" target="_blank">
            {{ pub['title']['title']['value'] }}
          </a>
          <small>{{ pub['publication-date']['year']['value'] }}</small>
        </div>
        <div>
          <p>
            <p v-for="author in authorList">
                
            </p>
          </p>
        </div>
        <div>
        <p v-if="pub['journal-title']" class="mb-1">
          <small>{{ pub['journal-title']['value'] }}</small>
        </p>
        <p v-else class="mb-1">
          <small>Preprint</small>
        </p>
        </div>
      </b-list-group>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'Bloom',
  props: {doi: {type: String},
          pub: {type: Object}},
  data() {
    return {
      works: [],
      loading: true,
      authorList: [],
    };
  },
  mounted() {
    this.getCrossref(this.doi);
  },
  methods: {
    getCrossref(doi) {
      const options = {
          method: 'GET',
          headers: new Headers({'accept': 'application/json'})
      };
      fetch(`https://api.crossref.org/works/${doi}`, options)
      .then((resp) => resp.json())
      .then(data => {
        // console.log(data.message.author);
        this.authorList = data.message.author;
        this.loading = false;
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
