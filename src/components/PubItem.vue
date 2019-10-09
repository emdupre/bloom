<template>
  <div>
    <ul>
      <b-list-group v-if="pub">
        <b-row>
        <b-col cols="11">
        <div class="d-flex justify-content-between align-items-center">
          <a class="mb-1" :href="pub['url']['value']" target="_blank">
            {{ pub['title']['title']['value'] }}
          </a>
          <small>{{ pub['publication-date']['year']['value'] }}</small>
        </div>
        <div>
          <span v-for="(author, index) in authorList" v-bind:key="index"
                                                            :style="styleAuthor(author)">
            {{ author['given'].charAt(0) }} {{ author['family'] }}{{ index == authorList.length - 1 ? '.': ',' }}
          </span>
        </div>
        <div>
        <p v-if="pub['journal-title']" class="mb-1">
          <small>{{ pub['journal-title']['value'] }}</small>
        </p>
        <p v-else class="mb-1">
          <small>Preprint</small>
        </p>
        </div>
        </b-col>
        <b-col cols="1">
          <div>
          <span class="__dimensions_badge_embed__"
            :data-doi="doi"
            data-style="small_circle"
            data-hide-zero-citations="true">
          </span>
          </div>
        </b-col>
        </b-row>
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
    // Check DOI properly passed to child component
    // console.log(this.doi);
    let dimensionScript = document.createElement('script')
    dimensionScript.setAttribute('src', 'https://badge.dimensions.ai/badge.js')
    document.head.appendChild(dimensionScript)
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
        // this.$emit('loading', 'false')
      });
    },
    styleAuthor(author) {
      var style = {};
      if (author['family'] == 'DuPre') {
        style.color = 'black',
        style.textDecoration = 'underline'
      }
      return style;
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
