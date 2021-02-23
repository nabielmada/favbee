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

                        <b-card
                            img-src="/produk1.jpg"
                            img-alt="Image"
                            img-top="img-top"
                            class="mb-2 shadow-sm">

                            <b-card-text>
                                Saniter Fabric Disinfectant 200+30ml - 2pcs
                                <div class="pb-2"></div>

                                <!-- Untuk jika ada diskon -->
                                <span class="badge bg-light-danger">15%</span>
                                <font size="2rem" class="text-muted">
                                    <strike class="pl-2">Rp 42.800</strike>
                                </font>
                                <br/>
                                <!-- end diskon -->

                                <b class="text-success">Rp 36.380</b>

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

                        <b-card
                            img-src="/produk2.jpg"
                            img-alt="Image"
                            img-top="img-top"
                            tag="article"
                            class="mb-2 shadow-sm">

                            <b-card-text>
                                Snackbox / Hampers / New Normal / Free Req Gift Card
                                <div class="pb-2"></div>

                                <!-- Untuk jika ada diskon -->
                                <span class="badge bg-light-danger">15%</span>
                                <font size="2rem" class="text-muted">
                                    <strike class="pl-2">Rp 50.000</strike>
                                </font>
                                <br/>
                                <!-- end diskon -->

                                <b class="text-success">Rp 26.000</b>

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

                        <b-card
                            img-src="/produk3.jpg"
                            img-alt="Image"
                            img-top="img-top"
                            tag="article"
                            class="mb-2 shadow-sm">

                            <b-card-text>
                                Masker 3 ply Medis Masker Bedah Kemenkes 3ply isi...
                                <div class="pb-2"></div>

                                <!-- Untuk jika ada diskon -->
                                <span class="badge bg-light-danger">15%</span>
                                <font size="2rem" class="text-muted">
                                    <strike class="pl-2">Rp 50.000</strike>
                                </font>
                                <br/>
                                <!-- end diskon -->

                                <b class="text-success">Rp 26.000</b>

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
                                        class="pl-0"></b-form-rating>
                                    <font size="2rem" class="text-muted">
                                        (4)
                                    </font>
                                </div>
                            </b-card-text>

                        </b-card>

                        <b-card
                            img-src="/produk4.jpg"
                            img-alt="Image"
                            img-top="img-top"
                            tag="article"
                            class="mb-2 shadow-sm">

                            <b-card-text>
                                Cetak Foto Polaroid Ukuran 2R ( 6 x 9 Centimeter)...
                                <div class="pb-2"></div>

                                <!-- Untuk jika ada diskon -->
                                <!-- <span class="badge bg-light-danger">15%</span> <font size="2rem"
                                class="text-muted"> <strike class="pl-2">Rp 50.000</strike> </font> <br/> -->
                                <!-- end diskon -->

                                <b class="text-success">Rp 250</b>

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
                                        class="pl-0"></b-form-rating>
                                    <font size="2rem" class="text-muted">
                                        (4)
                                    </font>
                                </div>
                            </b-card-text>

                        </b-card>
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
                return {webmenus: null}
            },
            mounted() {
                axios
                    .get('http://127.0.0.1:8001/api/webmenu')
                    .then(response => (this.webmenus = response.data.webmenu));
            }
        }
    </script>