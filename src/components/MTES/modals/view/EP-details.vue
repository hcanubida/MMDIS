<template>
    <div style="display: flex; height: 100vh;">
        <div class="panel">
            <div class="appdetails">
                <div style="display: flex; justify-content: flex-end;">
                    <button
                        style="border: 1px solid black; color: black; width: 45px; border-radius: 5px; background-color: #fca5a5; position: absolute;"
                        @click="Exit">
                        X
                    </button>
                </div>
                <div class="appdetails1">
                    <p>Application Details</p>
                </div>
                <div class="appdetails2">
                    <div class="appdetails3">
                        <p class="detailss">Application Number: <a style="font-weight: 400;">{{ detail_id1 }}</a></p>
                        <p class="detailss">Tenement Number: <a a style="font-weight: 400;">{{ details.tenement_number
                                }}</a></p>
                        <p class="detailss">Status: <a
                                :style="{ color: (details.status === 'unpaid') ? 'red' : 'black', fontWeight: 400 }">{{
                            details.status }}</a></p>
                        <p class="detailss">Area (Hectares): <a style="font-weight: 400;">{{ details.area_hectares
                                }}</a></p>
                        <p class="detailss">Barangay: <a style="font-weight: 400;">{{ details.barangay }}</a></p>
                        <p class="detailss">City:
                            <a style="font-weight: 400;">{{ details.city }}</a>
                        </p>
                        <p class="detailss">Commodity: <a style="font-weight: 400;">{{ details.commodity }}</a></p>
                        <p class="detailss">Date Filed: <a style="font-weight: 400;">{{ details.date_filed }}</a></p>
                    </div>

                    <div class="appdetails4">
                        <p class="detailss">Category: <a style="font-weight: 400;">{{ details.category }}</a></p>
                        <p class="detailss">Authorized <br> Representative: <a style="font-weight: 400;">{{
                            details.authorized_rep }}</a></p>
                        <p class="detailss">Contact Number: <a style="font-weight: 400;">{{ details.contact_no }}</a>
                        </p>
                        <p class="detailss">Email: <a style="font-weight: 400;">{{ details.email }}</a></p>
                        <p class="detailss">Others: <a style="font-weight: 400;">{{ details.others }}</a></p>
                    </div>
                </div>
                <div class="appdetailsbutton1">
                    <button class="butons1" @click="navigateToMandatoryReqEP(detail_id1)">Next</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { viewDetail1 } from '../../../../views/mtes/dashboards/EP-dasboard.vue';
import axios from 'axios';

export default {
    props: {
        detail_id1: String,
    },
    data() {
        return {
            details: [],
        };
    },
    mounted() {
        this.fetchDetails();
    },
    methods: {
        Exit() {
            viewDetail1.value = false
        },
        async fetchDetails() {
            try {
                const response = await axios.get('http://127.0.0.1:8000/get_details/');
                this.details = response.data.find(det => det.id === parseInt(this.detail_id1))
                console.log(this.detail_id1)
                console.log(this.details)

            } catch (error) {
                console.error('Error fetching details:', error);
            }
        },
        navigateToMandatoryReqEP(detail_id1) {

            console.log(detail_id1)
            window.location.href = `/ReqEP/${detail_id1}`;
        },
    }
}

</script>

<style lang="scss" scoped>
.panel {
    display: flex;
    backdrop-filter: blur(5px);
    height: 100vh;
    width: 100%;
    z-index: 999;
    align-items: center;
    justify-content: center;
}

.appdetails3 {
    display: flex;
    flex-direction: column;
}

.detailss {
    margin-bottom: 10px;
}

.appdetails {
    background-color: #ffd498;
    display: flex;
    flex-direction: column;
    border-radius: 25px;
    width: auto;
    /* Set a maximum width */
    height: auto;
    /* Let the height adjust based on content */
    padding: 20px;
}

.appdetailsbutton1 {
    display: flex;
    justify-content: space-around;
    margin-top: 30px;
}

.butons1 {
    /* border: 1px solid white; */
    padding: 5px;
    width: 60px;
    border-radius: 10px;
    background-color: #fafafa;
    color: rgb(92, 92, 92);
    width: 300px;
    height: 50px;
    font-size: 23px;
}

.butons:hover1 {
    background-color: #ececec;
}
</style>