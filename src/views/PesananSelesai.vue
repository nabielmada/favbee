<template>
    <div class="pesanan-selesai">

        <b-container class="pt-5 text-center">
                
            <b-row>
                <b-col md = "12">
                    <b>PEMESANAN BERHASIL</b>
                    <p>Terimakasih, anda berhasil melakukan checkout pemesanan menggunakan bank BCA</p>
                    <span class="text-muted">Lakukan pembayaran sebelum tanggal </span> 12 Maret 2021 20:09:11. 
                    
                    <center>
                    <b-card class="mt-4 w-50 ">
                        <p>Jumlah yang harus dibayar</p>
                        <h1 id="popover-button-open" ><b>Rp190.432</b></h1>
<b-popover
    show="show"
    target="popover-button-open"
    placement="bottom"
    variant="success"
    disabled="true">
    <div class="text-center">Mohon transfer sesuai yang tertera
        <br/>(termasuk 3 digit terakhir)</div>
</b-popover>

<h4 class="mt-5 pt-4"></h4>

  
                    </b-card>
                    </center>
                </b-col>

                <b-col md = "4" class="text-left">

<p>Informasi Rekening Tujuan</p>

<div class="hover-card card mt-3">
                                    <div class="card-body">
                                        <div class="row no-gutters">
                                            <div class="col-3 mr-4 mt-4">
                                                <img src="/banking/bca.png" alt="" srcset="" class="img-fluid"></div>
                                                <div class="col">
                                                    <p class="mb-0">BANK BCA</p>
                                                    <div class="font-bold">222-101-2078</div>
                                                    <div class="text-secondary">
                                                        a.n Nabiel Mada Ranu
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                </b-col>

                <b-col md = "4" class="text-left">
                    <p>Lihat Detil Pembayaran</p>
                    <b-row>
                        <b-col md = "6" class="text-muted">
                            No Transaksi
                        </b-col>
                        <b-col md = "6" class="text-right">
                            TFX-128800921
                        </b-col>
                         <b-col md = "6" class="text-muted">
                            Product
                        </b-col>
                        <b-col md = "6" class="text-right">
                            ALhamdulillah
                        </b-col>
                        <b-col md = "6" class="text-muted">
                            Disc
                        </b-col>
                        <b-col md = "6" class="text-right">
                            20 %
                        </b-col>
                        <b-col md = "6" class="text-muted">
                            Sub Total
                        </b-col>
                        <b-col md = "6" class="text-right">
                            Kuantitas 2x 95.000
                        </b-col>
                        <b-col md = "6" class="text-muted">
                            Total(+Unique)
                        </b-col>
                        <b-col md = "6" class="text-right font-bold">
                            190.432
                        </b-col>
                    </b-row>
                </b-col>

                <b-col class="pt-4 pl-4 text-muted" >
                    " Dengan berbelanja di Favbee, Anda telah mambantu membangun Indonesia menjadi lebih baik, 
                    dengan ikut andil dalam menciptakan lapangan perkerjaan baru di Indonesia "
                </b-col>

            </b-row>

        </b-container>

    </div>
</template>

<script>
export default {
    name: "PesananSelesai",
}
</script>