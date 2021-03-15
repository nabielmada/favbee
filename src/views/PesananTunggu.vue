<template>
    <div class = "pesanan-tunggu">

<div class="d-flex align-items-center justify-content-center flex-wrap pt-5 mt-5">
  <div>
      <center>
         <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_uyfxzh9u.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop  autoplay ></lottie-player>
        </center>
  </div>
  <div class="mr-5 pr-5">
          <h1>Yeay !</h1>
    <div class = "text-muted"> Pesananmmu sedang kami proses <br/> mohon ditunggu sebentar</div>

      <b-progress class="mt-3" :max="maxLoadingTime" height="1rem">
        <b-progress-bar :value="loadingTime" :label="`${((loadingTime / maxLoadingTime) * 100).toFixed(2)}%`"></b-progress-bar>
      </b-progress>
  </div>
  </div>

</div>

</template>

<script>
export default {
    name: "PesananTunggu",
     data() {
      return {
        loading: false,
        loadingTime: 0,
        maxLoadingTime: 5
      }
    },
    watch: {
      loading(newValue, oldValue) {
        if (newValue !== oldValue) {
          this.clearLoadingTimeInterval()

          if (newValue) {
            this.$_loadingTimeInterval = setInterval(() => {
              this.loadingTime++
            }, 1000)
          }
        }
      },
      loadingTime(newValue, oldValue) {
        if (newValue !== oldValue) {
          if (newValue === this.maxLoadingTime) {
            this.loading = false
          }
        }
      }
    },
    created() {
      this.$_loadingTimeInterval = null
    },
    mounted() {
      this.startLoading()
    },
    methods: {
      clearLoadingTimeInterval() {
        clearInterval(this.$_loadingTimeInterval)
        this.$_loadingTimeInterval = null
      },
      startLoading() {
        this.loading = true
        this.loadingTime = 0
      }
    }
}
</script>