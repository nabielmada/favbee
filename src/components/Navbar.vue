<template>
    <b-container>

        <b-navbar variant="faded" type="light" class="p-4 mt-2">
            <b-navbar-brand href="#">
                <div class="h4 fw-bold pt-1">Favbee shop</div>
            </b-navbar-brand>

            <!-- <div class="input-group form-group position-relative has-icon-left mx-5">
                <input type="text" class="form-control" placeholder="lagi cari produk apa ?">
                    <div class="form-control-icon">
                        <i class="bi bi-search"></i>
                    </div>
                </div> -->

                 <div class="form-group has-icon-left mx-5 w-100 pt-2">
                <div class="position-relative">
                    <input type="text" class="form-control" placeholder="lagi cari produk apa ?" id="first-name-icon">
                        <div class="form-control-icon">
                            <i class="bi bi-search"></i>
                        </div>
                    </div>
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
                            <button class="btn shadow-sm">
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
    </template>

    <script>
        export default {name: "Navbar"};
    </script>