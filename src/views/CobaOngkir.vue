<template>
	<div class="container" id="coba-ongkir">
		<div class="row mt-3">
			<div class="col-md-8">
				<div class="card">
					<div class="card-body">
				
            
            <!-- CUKUP PERHATIKAN TAG SELECT SAJA -->
						<div class="form-group">
							<label for="">Propinsi</label>
							<select class="form-control" v-model="province_id" @change="getCities">
								<option value="">Pilih</option>
								<option v-for="(row, index) in provinces" :key="'provinces'+index" :value="row.id">{{ row.name }}</option>
							</select>
						</div>
						<div class="form-group">
							<label for="">Kota/Kabupaten</label>
							<select class="form-control" v-model="city_id" @change="getDistricts">
								<option value="">Pilih</option>
								<option v-for="(row, index) in cities" :key="'cities'+index" :value="row.id">{{ row.name }}</option>
							</select>
						</div>
						<div class="form-group">
							<label for="">Kecamatan</label>
							<select class="form-control" v-model="district_id" @change="getCouriers">
								<option value="">Pilih</option>
								<option v-for="(row, index) in districts" :key="'districts'+index" :value="row.id">{{ row.name }}</option>
							</select>
						</div>
						<div class="form-group">
							<label for="">Kurir</label>
							<select class="form-control" v-model="courier" >
								<option value="">Pilih</option>
								<option v-for="(row, index) in couriers" :key="'couriers'+index" :value="row">{{ row.courier }} - {{ row.service }} (Rp {{ row.cost }})</option>
							</select>
						</div>
            <!-- CUKUP PERHATIKAN TAG SELECT SAJA -->
            
					</div>
				</div>
			</div>
			<div class="col-md-4">
				<div class="card">
					<div class="card-header">
						<h4 class="card-title">Summary</h4>
					</div>
					<div class="card-body">
						<!-- <app-ongkir :courier="courier" /> -->
					</div>
				</div>
			</div>
		</div>
	</div>
</template>


<script>

import axios from 'axios'
// import Ongkir from '@/components/Ongkir.vue'

 export default {
	name: 'CobaOngkir',
	created() {
		this.getProvinces() //KETIKA HALAMAN DILOAD, METHODS getProvinces() DIJALANKAN
	},
	data() {
		return {
      api_key: 'BH4XrJfwe9hV6RosgUnpknv8naq6UNuUXMRRVhwr',
			provinces: [],
			province_id: '',
			cities: [],
			city_id: '',
			districts: [],
			district_id: '',
			couriers: [],
			courier: ''
		}
	},
	methods: {
		getProvinces() {
      //MELAKUKAN REQUEST KE RUANGAPI UNTUK MENGAMBIL DATA PROPINSI
			axios.get('https://ruangapi.com/api/v1/provinces', {
        //KIRIMKAN HEADER AUTHORIZATION YANG BERISI API KEY YANG DIDAPATKAN DARI RUANGAPI
				headers: {
					Authorization: this.api_key
				}
			}).then((response) => {
				let provinces = response.data.data.results 
				this.provinces = provinces //MASUKKAN REQUEST DATA PROPINSI KE DALAM VAR PROVINCES
			})
		},
		getCities() {
      //MENGIRIM PERMINTAAN UNTUK MENGAMBIL DATA KOTA/KABUPATEN
			axios.get('https://ruangapi.com/api/v1/cities', {
        //MENGIRIMKAN PARAMETER PROVINCE_ID SEBAGAI PARAMETER FILTERING
				params: {
					province: this.province_id
				},
				headers: {
					Authorization: this.api_key
				}
			}).then((response) => {
				let cities = response.data.data.results
				this.cities = cities //DATA KOTA/KABUPATEN AKAN DISIMPAN KE VAR CITIES
			})
		},
		getDistricts() {
      //MENGIRIM PERMINTAAN UNTUK MENGAMBIL DATA KECAMATAN
			axios.get('https://ruangapi.com/api/v1/districts', {
        //MENGIRIM CITY_ID SEBAGAI PARAMETER UNTUK FILTERING DATA KECAMATAN
				params: {
					city: this.city_id
				},
				headers: {
					Authorization: this.api_key
				}
			}).then((response) => {
				let districts = response.data.data.results
                this.districts = districts //DATA KECAMATAN AKAN DISIMPAN KE DALAM VAR districts
			})
		},
		getCouriers() {
			axios.post('https://ruangapi.com/api/v1/shipping', {
				origin: 22,
				destination: this.district_id,
				weight: 600,
				courier: 'jne,jnt'
			}, {
				headers: {
                    Authorization: this.api_key
                },
			}).then((response) => {
				let couriers = response.data.data.results
                this.couriers = couriers
			})
        }
        
	},
}
</script>