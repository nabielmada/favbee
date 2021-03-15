<template>
    <div class="homepage">

        <Navbar/>

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

        <Footer/>
    </div>

</template>

<script>
    import Navbar from '@/components/Navbar.vue'
    import Product from '@/components/Product.vue'
    import Footer from '@/components/Footer.vue'

    import axios from 'axios'

    export default {
        name: "Home",
        components: {
            Navbar,
            Product,
            Footer
        },
        data() {
            return {webmenus: null, products: null}
        },
        mounted() {
            axios
                .get('http://127.0.0.1:8001/api/webmenu')
                .then(response => (this.webmenus = response.data.webmenu));
            axios
                .get('http://127.0.0.1:8001/api/product')
                .then(response => {
                    this.products = response.data.product
                });
        }
    }
</script>