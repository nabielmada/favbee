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
        <b-carousel-slide
        v-for="gambar in JSON.parse(product.avatar)"
        :key="gambar.avatar"
        :img-src="'/product/' + gambar "
      ></b-carousel-slide>

                        <!-- <div v-for="product in products" :key="product.id">  
                        <b-carousel-slide 
                            v-bind:src="'/product/' + JSON.parse(product.avatar)[0]">  
                        </b-carousel-slide> 
                        </div> -->

                        <!-- <b-carousel-slide img-src="/product/1.png"></b-carousel-slide>
                        <b-carousel-slide img-src="/product/2.png"></b-carousel-slide> -->
                        
                    </b-carousel>
                </div>

                <div class="col-6 py-2">
                   
                    <div class="pb-3">
                        <h2>{{ product.nama }}</h2>
                        <input type="text" v-model="kodetrans" readonly hidden>

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
                        <div v-if="product.disc==null"></div>
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

                    <label for="kota" class="text-muted">Kuantitas</label>
                    <div class="row">
                        <div class="col-6">
                            <b-input-group>
                                <b-input-group-prepend class="pr-3">
                                    <b-btn variant="outline-secondary" @click="num--">
                                        <b>-</b>
                                    </b-btn>
                                </b-input-group-prepend>

                                <b-form-input type="number" min="0" v-model="num"></b-form-input>

                                <b-input-group-append class="pl-3">
                                    <b-btn variant="outline-secondary" @click="num++">
                                        <b>+</b>
                                    </b-btn>
                                </b-input-group-append>
                            </b-input-group>
                        </div>
                        <div class="col-6 pt-2 text-muted">
                            tersisa
                            {{ product.stock }}
                            buah
                        </div>
                    </div>

                    <div v-if="num > product.stock && alert()"></div>
                    <br/>
                    <br/>

                    <router-link :to = "'/p/pesanan/'+product.id+'/'+num+'/'+kodetrans" class="btn btn-lg btn-primary shadow w-50">
                        Beli Sekarang
                    </router-link>

                    <hr>
                        <p>
                            <b-icon-shield-check class="text-success"></b-icon-shield-check>
                            Garansi Favbee
                            <span class="text-muted pl-3">
                                Dapatkan barang pesananmu atau uang kembali
                            </span>
                        </p>

                    </div>

                </div>
            </b-container>

            <b-container class="pb-5">
                <b-row data-aos="fade-up" data-aos-delay="500">
                                        <b-col md = "5">
                        <h3>
                            <b>Ulasan
                                <span class="text-success glow">
                                    Product
                                </span>
                            </b>
                        </h3>
                        <p></p>
                        <div class="table-responsive">
                            <table class="table table-hover table-lg font-resize">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Comment</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div class="d-flex align-items-center">
                                                <b-avatar variant="primary" text="BV"></b-avatar>
                                                <p class="ms-3 mb-0 ml-2">Nabiel Mada</p>
                                            </div>
                                        </td>
                                        <td >
                                            <p class=" mb-0">Congratulations on your graduation!</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="d-flex align-items-center">
                                                <b-avatar variant="primary" text="BV"></b-avatar>
                                                <p class="ms-3 mb-0 ml-2">Nor Maulida</p>
                                            </div>
                                        </td>
                                        <td >
                                            <p class=" mb-0">Wow amazing design! Can you make another tutorial for this design?</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </b-col>
                    <b-col>
                        <h3>
                            <b>Deskripsi
                                <span class="text-success glow">
                                    Product
                                </span>
                            </b>
                        </h3>
<br/>
                        <div class="row">
                            <b-col md="3">
                                <span class="text-muted">
                                    Kategori
                                </span>
                            </b-col>
                            <b-col md="9">
                                {{ product.kategori }}
                            </b-col>
                            <b-col md="3">
                                <span class="text-muted">
                                    Merk
                                </span>
                            </b-col>
                            <b-col md="9">
                                Tidak ada merk
                            </b-col>
                            <b-col md="3">
                                <span class="text-muted">
                                    Stock
                                </span>
                            </b-col>
                            <b-col md="9">
                                {{ product.stock }}
                            </b-col>
                            <b-col md="3">
                                <span class="text-muted">
                                    Dikirim dari
                                </span>
                            </b-col>
                            <b-col md="9">
                                {{ product.kota }}
                            </b-col>
                        </div>
                        <br/>

                        <span v-html="product.des"></span>

                    </b-col>

                </b-row>
            </b-container>

                    <b-container class="p-2 mt-5 pb-4">
            <h3>
                <b>Produk
                    <span class="text-success glow">
                        Rekomendasi
                    </span>
                </b>
            </h3>
            <p class="text-muted w-75">
                Produk yang bisa bikin kamu tertarik untuk membelinya
            </p>

            <div class="row pt-5">
                <div
                    v-for="product in products"
                    :key="product.id"
                    class="col-md-3 card-group pb-5">

                    <Product :product="product"/>

                </div>
            </div>
        </b-container> 

        <b-container>
            <!-- <Ongkir/> -->
        </b-container>

            <Footer/>

        </div>
    </template>

    <script>

        import Navbar from '@/components/Navbar.vue'
        import Product from '@/components/Product.vue'
        import Footer from '@/components/Footer.vue'

        import axios from 'axios'

        export default {
            name: "DetailProduct",
            components: {
                Navbar,
                Product,
                Footer
            },
            data() {
                return {product: null, products: null, num: 1, kodetrans: ''}
            },
            created() {
                setInterval(this.getNow, 1000);
            },
            methods: {
                setProduct(data) {
                    this.product = data
                },
                setProducts(data) {
                    this.products = data
                },
                getNow: function() {
                    const today = new Date();
                    const date = today.getFullYear()+''+(today.getMonth()+1)+''+today.getDate();
                    const time = today.getHours() + "" + today.getMinutes() + "" + today.getSeconds();
                    const dateTime = 'TFR-'+ date +''+ time;
                    this.kodetrans = dateTime;
                },
                alert: function(){
                    this.num = this.product.stock
                }
            },
            mounted() {
                axios
                    .get('http://127.0.0.1:8001/api/product/' + this.$route.params.id)
                    .then((response) => this.setProduct(response.data.product));
                axios
                    .get('http://127.0.0.1:8001/api/product')
                    .then((response) => this.setProducts(response.data.product));
            }
        }
    </script>