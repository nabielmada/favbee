<template>
    <div class="homepage">

        <b-container>

            <b-navbar variant="faded" type="light" class="p-4 mt-2">
                <b-navbar-brand href="#">
                    <div class="h4 fw-bold pt-1">Favbee shop</div>
                </b-navbar-brand>

                <!-- <input type="text" class="form-control mx-5" placeholder="lagi cari produk
                apa ?"> -->

                <div class="input-group mx-5">
                    <input
                        class="form-control py-2 border-right-0 border"
                        type="text"
                        placeholder="lagi cari produk apa ?"
                        id="example-search-input">
                        <span class="input-group-append">
                            <button class="btn border-left-0 border" type="button">
                                <b-icon-search class="text-muted p-1"></b-icon-search>
                            </button>
                        </span>
                    </div>

                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item pr-5">
                            <router-link class="nav-link" to="/keranjang">

                                <button type="button" class="btn position-relative">
                                    <b-icon-cart3 scale="1.3" class="text-muted"></b-icon-cart3>
                                    <span
                                        class="position-absolute top-0 start-100 translate-middle badge rounded-pill text-white bg-success">+99</span>
                                </button>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/login">
                                <button class="btn btn-outline-success shadow-sm">
                                    Masuk
                                </button>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/signup">
                                <button class="btn btn-success shadow">
                                    Daftar
                                </button>
                            </router-link>
                        </li>
                    </ul>
                </b-navbar>

            </b-container>

            <b-container class="p-2 mt-3 pb-2">
                <b-card class="px-5 pt-3 shadow-sm">

                    <div class="row">
                        <div class="col-8 pt-4">
                            <div v-for="webmenu in webmenus" :key="webmenu.id">
                                <h3>
                                    <b>{{ webmenu.deskripsi_heading}}</b>
                                </h3>
                                <p class="text-muted w-75">
                                    {{ webmenu.deskripsi_sub}}
                                </p>
                            </div>

                            <br/><br/>
                            <h5>Kategori</h5>

                            <div class="row pt-2 text-center w-75 pl-3">
                                <div class="col">
                                    <b-card overlay="overlay" img-src="/giftbox.jpg"></b-card>
                                </div>
                                <div class="col">
                                    <b-card overlay="overlay" img-src="/kecantikan.jpg"></b-card>
                                </div>
                                <div class="col">
                                    <b-card overlay="overlay" img-src="/perawatan_tubuh.jpg"></b-card>
                                </div>
                                <div class="col">
                                    <b-card overlay="overlay" img-src="/fashion.jpg"></b-card>
                                </div>

                            </div>
                        </div>

                        <div class="col-4">

                            <b-skeleton-img height="150px"></b-skeleton-img>
                            <b-skeleton-img height="150px"></b-skeleton-img>

                        </div>

                    </div>
                </b-card>

            </b-container>

            <section class="pt-2">

                <b-container class="p-2 mt-5 pb-4">
                    <h4>
                        <b>Produk Rekomendasi</b>
                    </h4>
                    <p class="text-muted w-75">
                        Produk yang bisa bikin kamu tertarik untuk membelinya
                    </p>

                    <b-card-group deck="deck" class="pt-5">
                        <div v-for="product in products" :key="product.id">

                            <b-card class="mb-2 shadow-sm">
                                <img v-bind:src="'/' + JSON.parse(product.avatar)[0]" img-top="img-top"/>
                                <!-- {{ JSON.parse(product.avatar)[0] }} -->
                                <b-card-text>

                                    <div v-if="product.nama.length<10">
                                        {{ product.nama }}

                                    </div>
                                    <div v-else>
                                        {{ product.nama.substring(0,30) + "..." }}
                                    </div>

                                    <div class="pb-2"></div>

                                    <!-- Untuk jika ada diskon -->
                                    <span class="badge bg-light-danger">15%</span>
                                    <font size="2rem" class="text-muted">
                                        <strike class="pl-2">Rp 42.800</strike>
                                    </font>
                                    <br/>
                                    <!-- end diskon -->

                                    <b class="text-success">
                                        Rp
                                        {{ product.harga | formatNumber }}
                                    </b>

                                    <div class="pb-2"></div>
                                    <font size="2rem" class="text-muted">
                                        Kota Semarang
                                    </font>
                                    <div>
                                        <b-form-rating
                                            id="rating-inline"
                                            inline="inline"
                                            value="4"
                                            no-border="no-border"
                                            size="sm"
                                            variant="warning"
                                            class="pl-0"
                                            readonly="readonly"></b-form-rating>
                                        <font size="2rem" class="text-muted">
                                            (4)
                                        </font>
                                    </div>
                                </b-card-text>

                            </b-card>
                        </div>

                    </b-card-group>

                </b-container>

            </section>

            <b-container class="p-5">
                <footer class="text-center text-muted">
                    2021 &copy; Favbee Shop
                </footer>
            </b-container>

        </div>
    </template>

    <script>
        const axios = require('axios');

        export default {
            name: "Home",
            data() {
                return {webmenus: null, products: null}
            },
            mounted() {
                axios
                    .get('http://127.0.0.1:8001/api/webmenu')
                    .then(response => (this.webmenus = response.data.webmenu));
                axios
                    .get('http://127.0.0.1:8001/api/product')
                    .then(response => (this.products = response.data.product));
            }
        }
    </script>