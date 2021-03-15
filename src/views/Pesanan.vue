<template>
    <div class="pesanan">

        <Navbar/>

        <b-container class="p-2 mt-3 pb-5">
            <div class="col-12">

                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb bg-white">
                        <li class="breadcrumb-item">
                            <router-link to="/">
                                Home
                            </router-link>
                        </li>
                        <li class="breadcrumb-item " aria-current="page">
                            <router-link :to="'/p/'+product.id">
                                Detail Products
                            </router-link>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">Pesanan</li>
                    </ol>
                </nav>
            </div>

            <b-row>
                <b-col md="8">
                    <b-card>
                        <b-row>
                            <b-col md="4">
                                <div class="card hover-card">
                                    <img
                                        v-bind:src="'/product/' + JSON.parse(product.avatar)[0]"
                                        class="card-img-top"/>
                                </div>
                            </b-col>
                            <b-col>
                                <p>
                                    <b>{{  product.nama }}</b>
                                </p>
                                <b-row>
                                    <b-col>
                                        <div class="text-muted">Kuantitas</div>
                                        <p>{{ num }} x</p>
                                    </b-col>
                                    <b-col>
                                        <div class="text-muted">Harga</div>
                                        <p>Rp
                                            {{ product.harga | formatNumber }}
                                        </p>

                                    </b-col>
                                        <!-- Untuk jika ada diskon -->
                        <div v-if="product.disc==null"></div>
                        <div v-else>
                                    <b-col>
                            <div class="text-muted">Disc</div>
                            <span class="badge bg-light-danger">{{ product.disc }} %</span>
                                    </b-col>
                        </div>
                        <!-- end diskon -->
                                    <b-col>
                                        <div class="text-muted">Total</div>
                                        <p>Rp
                                            {{num * product.harga_total | formatNumber }}
                                        </p>
                                    </b-col>
                                    <b-col md="12">
                                        <p>
                                            Tambahkan catatan
                                        </p>
                                        <textarea
                                            name=""
                                            id=""
                                            class="form-control"
                                            placeholder="masukkan keterangan jika ada..."></textarea>
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                    </b-card>

                    <b-card>
                        <b-row>
                            <b-col md="12">
                                <h5>Konfirmasi data diri pesanan</h5>
                            </b-col>
                            <b-col class="mt-3">
                                  <b-button id="show-btn" @click="$bvModal.show('bv-modal-example')" variant = "light" class="text-success">
                                  <b-icon-plus></b-icon-plus> Tambahkan alamat</b-button>
                                  <p></p>
                                  <b-form-text>Silahkan isi data diri anda sebelum membuat pesanan </b-form-text>

                                    <b-modal id="bv-modal-example" hide-footer>
                                        <template #modal-title>
                                        Formulir data diri pesanan
                                        </template>

                                            <b-row class="p-3">
                                                <b-col md="12" class="mb-3">
                                                    <label>Nama lengkap</label>
                                                        <b-form-input
                                                        id="nama"
                                                        v-model="nama"
                                                        aria-describedby="nama-live-help nama-live-feedback"
                                                        placeholder="Nama lengkap..."
                                                        trim
                                                        ></b-form-input>

                                                </b-col>

                                                <b-col md="12" class="mb-3">
                                                    <label >No Hp / Whatsapp</label>
                                                        <b-form-input
                                                        id="nohp"
                                                        v-model="nohp"
                                                        :state="nohpState"
                                                        aria-describedby="nohp-live-help nohp-live-feedback"
                                                        placeholder=""
                                                        trim
                                                        ></b-form-input>

                                                        <!-- This will only be shown if the preceding input has an invalid state -->
                                                        <b-form-invalid-feedback id="input-live-feedback">
                                                        Harap masukkan kurang lebih 12 - 13 digit
                                                        </b-form-invalid-feedback>

                                                        <!-- This is a form text block (formerly known as help block) -->
                                                        <b-form-text id="input-live-help">Nomer ini berfungsi untuk verifikasi ke customer service kami.</b-form-text>
                                                </b-col>
                                                
                                                <b-col md = "12" class="mb-3">
                                                    <label>Alamat lengkap</label>
                                                        <b-form-textarea
                                                        id="alamat_lengkap"
                                                        v-model="alamat_lengkap"
                                                        placeholder="Jl. sana sini No. A-8 06/03"
                                                        rows="3"
                                                        ></b-form-textarea>
                                                </b-col>
                                            </b-row>

                                        <b-button class="mt-3" @click="$bvModal.hide('bv-modal-example')" variant="success float-end">Simpan</b-button>
                                    </b-modal>
                                
                            </b-col>
                        </b-row>
                    </b-card>

                    <b-card style="border:none;">
                        <b-row>
                            <b-col md="12">
                                <h5>Pilih metode pembayaran</h5>
                            </b-col>
                            <b-col md = "6">
                                    <label>
                                    <div class="card hover-card mt-3">
                                        <input type="radio" name="product" class="card-banking-element d-none"/>
                                        <div class="card-body card-banking">
                                            <div class="row no-gutters">
                                                <div class="col-3 mr-4 mt-4">
                                                    <img src="/banking/bca.png" alt="" srcset="" class="img-fluid">
                                                    </div>
                                                    <div class="wow col">
                                                        <p class="mb-0">BANK BCA</p>
                                                        <div class="font-bold">222-101-xxxx</div>
                                                        <div >
                                                            a.n Nabiel Mada Ranu
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        </label>
                                </b-col>

                                <b-col md = "6">
                                    <label>
                                    <div class="card hover-card mt-3">
                                    <input type="radio" name="product" class="card-banking-element d-none"/>
                                        <div class="card-body card-banking">
                                            <div class="row no-gutters">
                                                <div class="col-3 mr-4 mt-4">
                                                    <img src="/banking/bni.png" alt="" srcset="" class="img-fluid "></div>
                                                    <div class="col">
                                                        <p class="mb-0">BANK BNI</p>
                                                        <div class="font-bold">222-101-xxxx</div>
                                                        <div class="text-secondary">
                                                            a.n Nor Maulida Porwanti
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        </label>
                                    </b-col>

                                    <b-col md = "6">
                                    <label>
                                    <div class="card hover-card">
                                    <input type="radio" name="product" class="card-banking-element d-none"/>
                                        <div class="card-body card-banking">
                                            <div class="row no-gutters">
                                                <div class="col-3 mr-4 mt-4">
                                                    <img src="/banking/cod.png" alt="" srcset="" class="img-fluid "></div>
                                                    <div class="col">
                                                        <p class="mb-0">Cash On Delivery</p>
                                                        <div class="font-bold">Free Ongkir</div>
                                                        <div class="text-secondary">
                                                            Kota & Kab Semarang 
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </label>
                                    </b-col>

                                </b-row>
                            </b-card>
                        </b-col>

                        <b-col>
                            <div class="sticky pt-4">
                            <b-card class="shadow">
                                Pengiriman ke
                                <hr/>
                                <b-row class="text-right pl-5">
                                    <b-col md="6">
                                        Sub Total
                                    </b-col>
                                    <b-col>
                                        {{subtotal | formatNumber}}
                                    </b-col>
                                    <b-col md="6">
                                        Ongkos kirim
                                    </b-col>
                                    <b-col>
                                        {{ courier | formatNumber}}
                                    </b-col>
                                    <b-col md="6">
                                        <b>Grand Total</b>
                                    </b-col>
                                    <b-col>
                                        <b>{{ grandtotal | formatNumber}}</b>
                                    </b-col>
                                </b-row>
                                <br/>

                                    <router-link :to = "'/p/pesanan/'+product.id+'/pending'" class="btn btn-block btn-lg btn-primary shadow">
                                        Buat pesanan
                                    </router-link>
                                
                            </b-card>
</div>
                        </b-col>
                    </b-row>

                </b-container>

            </div>
        </template>

        <script>
            import Navbar from '@/components/Navbar.vue'
            import axios from 'axios'

            export default {
                name: "Pesanan",
                props: ["num","kodetrans"],
                components: {
                    Navbar
                },
                data() {
                    return {
                        product: null, 
                        nama: '',
                        nohp: '',
                        alamat_lengkap: '',
                        courier: 18000,
                        }
                },
                computed: {
                    nohpState() {
                        return this.nohp.length > 12 ? true : false
                    },
                    subtotal: function(){
                        return this.num * this.product.harga_total;
                    },
                    grandtotal: function() {
                        return parseFloat(this.subtotal) + parseFloat(this.courier)
                    }
                },
                methods: {
                    setProduct(data) {
                        this.product = data
                    },
                },
                mounted() {
                    axios
                        .get('http://127.0.0.1:8001/api/product/' + this.$route.params.id)
                        .then((response) => this.setProduct(response.data.product));
                }

            }
        </script>