<template>
<router-link :to = "'/p/'+product.id" class="card hover-card remove-link">
        <img
            v-bind:src="'/product/' + JSON.parse(product.avatar)[0]"
            class="card-img-top"/>
        <div class="card-body">

            <b-card-text>

                <div v-if="product.nama.length<52">
                    {{ product.nama }}
                </div>
                <div v-else>
                    {{ product.nama.substring(0,52) + " ..." }}
                </div>

                <div class="pb-2"></div>

                <!-- Untuk jika ada diskon -->
                <div v-if="product.disc==null">
                    <!-- Null -->
                </div>
                <div v-else>
                    <span class="badge bg-light-danger">{{ product.disc }}
                        %</span>
                    <font size="2rem" class="text-muted">
                        <strike class="pl-2">
                            Rp
                            {{ product.harga | formatNumber }}
                        </strike>
                    </font>
                    <br/>
                </div>
                <!-- end diskon -->

                <div class="pb-2"></div>
                <b class="text-success">
                    Rp
                    {{ product.harga_total | formatNumber }}
                </b>

                <div class="pb-2"></div>
                <font size="2rem" class="text-muted">
                    {{ product.kota }}
                </font>
                <div>
                    <b-form-rating
                        id="rating-inline"
                        inline="inline"
                        v-model="product.rating"
                        no-border="no-border"
                        size="sm"
                        variant="warning"
                        class="pl-0"
                        readonly="readonly"></b-form-rating>
                    <font size="2rem" class="text-muted">
                        ( 0 )
                    </font>
                </div>
            </b-card-text>
        </div>
    </router-link>
</template>

<script>
    export default {name: "Product", props: ["product"]};
</script>