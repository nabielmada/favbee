<template>
    <div class="detail-product">

        <Navbar/>

        <b-container class="p-2 mt-3 pb-5">
            <div class="row">
                <div class="col-12">

                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb bg-white">
                            <li class="breadcrumb-item">
                                <router-link to="/">
                                    Home
                                </router-link>
                            </li>
                            <li class="breadcrumb-item " aria-current="page">Detail Product</li>
                            <li class="breadcrumb-item active" aria-current="page">{{ product.nama }}</li>
                        </ol>
                    </nav>
                </div>

                <div class="col-5">
                    <b-carousel
                        id="carousel-1"
                        v-model="slide"
                        :interval="4000"
                        controls="controls"
                        indicators="indicators"
                        style="text-shadow: 1px 1px 2px #333;"
                        @sliding-start="onSlideStart"
                        @sliding-end="onSlideEnd">

                        <!-- Slides with image only -->

                        <b-carousel-slide img-src="/product/1.png"></b-carousel-slide>
                        <b-carousel-slide img-src="/product/2.png"></b-carousel-slide>
                        <!-- <b-carousel-slide> <img v-bind:src="'/product/' +
                        JSON.parse(product.avatar)[0]" class="card-img-top"/> </b-carousel-slide> -->

                    </b-carousel>
                </div>

                <div class="col-6 py-2">
<div class="pb-3">
                    <h2>{{ product.nama }}</h2>

                    <div class="d-inline-block mr-3">
                        <label class="text-muted mr-2">Rating</label>
                        <b-form-rating
                        id="rating-inline"
                        inline="inline"
                        v-model="product.rating"
                        no-border="no-border"
                        size="sm"
                        variant="warning"
                        class="pl-0"
                        readonly="readonly"></b-form-rating>
                    </div>

                    <div class="d-inline-block mr-4">

                        <label class="text-muted mr-2">Terjual</label>
                        543
                    </div>

                    <div class="d-inline-block">

                        <label class="text-muted mr-2">Ulasan</label>
                        1.403
                    </div>
</div>
<b-card>
                    <!-- Untuk jika ada diskon -->
                    <div v-if="product.disc==null">
                        
                    </div>
                    <div v-else>
                        <span class="badge bg-light-danger">{{ product.disc }}
                            %</span>
                        <font size="4rem" class="text-muted">
                            <strike class="pl-2">
                                Rp
                                {{ product.harga | formatNumber }}
                            </strike>
                        </font>
                        <br/>
                    </div>
                    <!-- end diskon -->

                    <b class="text-success h2">
                        Rp
                        {{ product.harga_total | formatNumber }}
                    </b>
                    </b-card>
                    

                    <div class="pt-4 ">
                        <label for="kota" class="text-muted">Pengiriman</label>
                            <div class="h5">
                                {{ product.kategori }}
                            </div>

                            <label for="kota" class="text-muted">Kuantitas</label>

                            <label for="kota" class="text-muted">tersisa {{ product.stock }} buah</label>
                            
<br/>
<br/>
                         <button class="btn btn-lg btn-primary shadow w-50">
                             Beli Sekarang
                            </button>

                                <hr>
                            <p>
                               <b-icon-shield-check class="text-success"></b-icon-shield-check> Garansi Favbee  <span class="text-muted pl-3"> Dapatkan barang pesananmu atau uang kembali </span>
                            </p>

                            
                    </div>

                </div>

            </div>
        </b-container>

        <Footer/>

    </div>
</template>

<script>
    import Navbar from '@/components/Navbar.vue'
    import Footer from '@/components/Footer.vue'

    const axios = require('axios');

    export default {
        name: "DetailProduct",
        components: {
            Navbar,
            Footer
        },
        data() {
            return {product: null}
        },
        methods: {
            setProduct(data) {
                this.product = data
            }
        },
        mounted() {
            axios
                .get('http://127.0.0.1:8001/api/product/' + this.$route.params.id)
                .then((response) => this.setProduct(response.data.product));
        }
    }
</script>