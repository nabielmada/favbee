<template>
    <div class="homepage">

        <b-container>

            <b-navbar variant="faded" type="light" class="p-4 mt-2">
                <b-navbar-brand href="#">
                    <div class="h4 fw-bold pt-1">Favbee shop</div>
                </b-navbar-brand>

                <input
                    type="text"
                    class="form-control mx-5"
                    placeholder="lagi cari produk apa ?">

                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item pr-5">
                            <router-link class="nav-link" to="/keranjang">

                                <button type="button" class="btn position-relative">
                                    <b-icon-cart3 scale="1.3" class="text-muted"></b-icon-cart3>
                                    <span
                                        class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-light">+99</span>
                                </button>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/login">
                                <button class="btn btn-outline-primary shadow-sm">
                                    Masuk
                                </button>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/signup">
                                <button class="btn btn-primary shadow">
                                    Daftar
                                </button>
                            </router-link>
                        </li>
                    </ul>
                </b-navbar>

            </b-container>

            <b-container class="p-2 mt-3">
                <b-card class="p-5 shadow">

                    <div class="row">
                        <div class="col-8 pt-4">
                                <div v-for="webmenu in webmenus" :key="webmenu.id" >
                            <h3>
                                    <b>{{ webmenu.deskripsi_heading}}</b>
                            </h3>
                            <p class="text-muted w-75">
                                {{ webmenu.deskripsi_sub}}
                            </p>
                                </div>

                            <br/><br/><br/>
                            <h5>Kategori</h5>

                            <div class="row pt-2 text-center w-75 pl-3">
                                <div class="col">
                                    <b-card>
                                        <b-icon-cart3 scale="2" class="text-muted"></b-icon-cart3>
                                    </b-card>
                                </div>
                                <div class="col">
                                    <b-card>
                                        <b-icon-cart3 scale="2" class="text-muted"></b-icon-cart3>
                                    </b-card>
                                </div>
                                <div class="col">
                                    <b-card>
                                        <b-icon-cart3 scale="2" class="text-muted"></b-icon-cart3>
                                    </b-card>
                                </div>
                                <div class="col">
                                    <b-card>
                                        <b-icon-cart3 scale="2" class="text-muted"></b-icon-cart3>
                                    </b-card>
                                </div>
                                <div class="col">
                                    <b-card>
                                        <b-icon-cart3 scale="2" class="text-muted"></b-icon-cart3>
                                    </b-card>
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

        </div>
    </template>

<script>
const axios = require('axios');

export default {
    name   : "Home",
    data() {
        return{
            webmenus: null
        }
    },
    mounted(){
        axios
        .get('http://127.0.0.1:8000/api/webmenu')
        .then(response => (this.webmenus = response.data.webmenu));
    }
}
</script>