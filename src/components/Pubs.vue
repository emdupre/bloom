<template>
  <div id="Pubs">

      <div class="pub-content">
          <div class="row">

          <h4> Journal Articles </h4>
          <div class="table-responsive">
          <table class='table table-borderless'>
              <tbody>

              <tr>
              <td class="col-md-6">
              Esteban, E., Markiewicz, C.J., Blair, R.W., Moodie, C.A., Isik, A.I., Erramuzpe, A., Kent, J.D., Goncalves, M., <b>DuPre, E.</b>, Snyder, M., Oya, H., Ghosh, S.S., Wright, J., Durnez, J., Poldrack, R.A.<sup>‡</sup>, Gorgolewski, K.J.<sup>‡</sup> (2018). <a href="assets/pubs/esteban_fmriprep_2018.pdf" style="color: #003399">FMRIPrep: a robust preprocessing pipeline for functional MRI</a>. <i>BioRxiv</i>.
              </td>
              <td class="col-md-1">
              <div data-badge-type="donut" data-doi="10.1101/306951" data-hide-no-mentions="true" class="altmetric-embed" data-badge-popover='left' style="float:right"></div>
              </td>
              </tr>

              <tr>
              <td class="col-md-6">
              Spreng, R.N., Lockrow, A.W., <b>DuPre, E.</b>, Setton, R., Spreng, K.A.P., Turner, G.R. (2018). <a href="assets/pubs/spreng_inpress.pdf" style="color: #003399">Semanticized autobiographical memory and the default–executive coupling hypothesis of aging</a>. <i>Neuropsychologia</i>, <i>110</i>, 37-43.
              </td>
              <td class="col-md-1">
              <div data-badge-type="donut" data-doi="10.1016/j.neuropsychologia.2017.06.009" data-hide-no-mentions="true" class="altmetric-embed" data-badge-popover='left' style="float:right"></div>
              </td>
              </tr>

              <tr>
              <td class="col-md-9">
              <b>DuPre, E.</b>, Spreng, R.N. (2017). <a href="assets/pubs/dupre_netneur_2017.pdf" style="color: #003399">Structural covariance networks across the lifespan, from 6-94 years of age</a>. <i>Network Neuroscience</i>, <i>1</i>, 302-323.
              </td>
              <td class="col-md-1">
              <div data-badge-type="donut" data-doi="10.1101/090233" data-hide-no-mentions="true" class="altmetric-embed" data-badge-popover='left' style="float:right;clear:both"></div>
              </td>
              </tr>

              <tr>
              <td class="col-md-6">
              Spreng, R.N., Cassidy, B.N., Darboh, B., <b>DuPre, E.</b>, Lockrow, A., Setton, R., Turner, G.R. (2017). <a href="assets/pubs/spreng_2017.pdf" style="color: #003399">Financial exploitation is associated with structural and functional brain differences in healthy older adults.</a> <i>The Journals of Gerontology, Series A: Biological Sciences and Medical Sciences</i>. Advance online publication.
              </td>
              <td class="col-md-1">
              <div data-badge-type="donut" data-doi="10.1093/gerona/glx051" data-hide-no-mentions="true" class="altmetric-embed" data-badge-popover='left' style="float:right"></div>
              </td>
              </tr>

              <tr>
              <td class="col-md-6">
              <b>DuPre, E.</b>, Luh, W.-M., Spreng, R.N. (2016). <a href="assets/pubs/dupre_2016.pdf" style="color: #003399">Multi-echo fMRI replication sample of autobiographical memory, prospection, and theory of mind reasoning tasks</a>. <i>Scientific Data</i>, <i>3</i>, 160116.
              </td>
              <td class="col-md-1">
              <div data-badge-type="donut" data-doi="10.1038/sdata.2016.116" data-hide-no-mentions="true" class="altmetric-embed" data-badge-popover='left' style="float:right"></div>
              </td>
              </tr>

              <tr>
              <td class="col-md-6">
              Spreng, R.N., <b>DuPre, E.</b>, Selarka, D., Garcia, J., Gojkovic, S., Mildner, J., Luh, W.- M., Turner, G.R. (2014). <a href="assets/pubs/spreng_2014.pdf" style="color: #003399">Goal-congruent default network activity facilitates cognitive control</a>. <i>Journal of Neuroscience</i>, <i>34</i>, 14108-14114.
              </td>
              <td class="col-md-1">
              <div data-badge-type="donut" data-doi="10.1523/JNEUROSCI.2815-14.2014" data-hide-no-mentions="true" class="altmetric-embed" data-badge-popover='left' style="float:right"></div>
              </td>
              </tr>

              </tbody>
          </table>
          </div>

          <br>
          <h4> Book Chapters </h4>
          <div class="table-responsive">
          <table class='table table-borderless'>
              <tbody>
              <tr>
              <td class="col-md-9">
              <b>DuPre, E.</b>, Spreng, R.N. (in press). <a href="assets/pubs/dupre_inpress_oxford.pdf" style="color: #003399">Spontaneous thought gets stuck with rumination</a>. In Fox, K. C. R. and Christoff, K., eds. The Oxford Handbook of Spontaneous Thought: Mind-wandering, Creativity, Dreaming, and Clinical Conditions. New York: Oxford University Press.
              </td>
              </tr>
              </tbody>
          </table>
          </div>

          </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'pubs',
  created() {
  let embedAltmetric = document.createElement('script')
  embedAltmetric.setAttribute('src', 'https://d1bxh8uas1mnw7.cloudfront.net/assets/embed.js')
  document.head.appendChild(embedAltmetric)
  }
}
</script>

<style></style>
