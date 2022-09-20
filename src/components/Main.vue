<template>
    <b-container fluid class="bv-example-row">
        <header class="header h1 mt-2 mb-5">
            <b-link style="color:black; text-decoration: none;" href="https://instagram.com/nightcaps.keycaps" target="_blank">
                Nightcaps
            </b-link>
            Poisoned Summer 6 (2022)
        </header>
        <b-row>
            <b-col
                lg="2"
                md="3"
                sm="4"
                v-for="(day, key) in Object.keys(calData).slice().reverse()" 
                :key="'day-' + key "

            >
            <b-card-group 
                deck
                style="background-color: lightgrey;"
                
            >
                <b-card
                    no-body
                    border-variant="primary"
                    class="shadow-lg mb-2"
                >
                    <b-card-header
                        header-bg-variant="primary"
                        header-text-variant="white"
                        :title="calData[day]['sculpts'][0].date_day"
                    >
                        Day {{ calData[day]['sculpts'][0].day }}
                    </b-card-header>
                    <b-card-body>
                        <div class="text-left">
                            Entry:
                        </div>
                        <div class="text-right" v-if="calData[day]['sculpts'][0].entry_time < 12">
                            {{ calData[day]['sculpts'][0].entry_time }}AM PST
                        </div>
                        <div class="text-right" v-else>
                            {{ calData[day]['sculpts'][0].entry_time - 12}}PM PST
                        </div>
                        <div class="text-right" :alt="`This cap costs $${calData[day]['sculpts'][0].price}`" >
                            {{ calData[day]['sculpts'][0].entry_window}} {{calData[day]['sculpts'][0].entry_unit}}<span v-if="calData[day]['sculpts'][0].entry_window != 1">s</span>
                        </div>
                        <div class="text-left">
                            Colorway:
                        </div>
                        <div v-for="(c,i) in calData[day]['colorways']" :key="i + '-' + calData[day]['sculpts'][0].day + '-' + c">
                            <div class="text-right">
                                {{ c }}
                            </div>
                        </div>
                        <div class="text-left">
                            Sculpts:
                        </div>
                        <div v-for="(s,i) in calData[day]['sculpts']" :key="i + '-'+ s.day + '-' + s.sculpt + '-' + s.colorway">
                            <div class="text-right" :title="`$${s.price}`">
                                {{ s.sculpt }} <span class="text-muted initialism">({{ s.quantity }})</span>
                            </div>
                        </div>
                    </b-card-body>
                    <b-card-footer >
                        <b-row>
                            <b-col class="col-md-2">
                                <img v-if="calData[day]['sculpts'][0].goldbag" title="Goldbags are back :o" alt="Goldbags are back :o" src="../assets/goldbag.png" height="24px" />
                            </b-col>
                            <b-col class="col-md-10 text-right">
                                <a class="" :href="calData[day]['sculpts'][0].link" target="_blank"><img title="Instagram post" alt="Link to post on Instagram" src="../assets/ig.png" height="24px"></a>
                            </b-col>
                        </b-row>
                    </b-card-footer>
                </b-card>
            </b-card-group>
            </b-col>
        </b-row>
        <datatable :columns="dtColumns" :data="dtRows"></datatable>            
    </b-container>
</template>

<script>
import axios from 'axios'; 
// import { Bar } from 'vue-chartjs';
// import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

// ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'MainPage',
  created() {
    document.title = 'Poisoned Summer';
  },
  data() {
    return {
        dtColumns: [],
        dtRows: [],
        data: null,
        calData: {},
        chartData: {},
        chartOptions: {
            responsive: true
        },
        loaded: false,
    }
  },
  async mounted() {
    let c_data = {};
    this.loaded = false;
    axios
        .get('https://raw.githubusercontent.com/sillypears/ps6-stuff/main/ps6.json')
        .then(response => {
            let tempColumns = Object.keys(response.data[0])
            for (let c in tempColumns) {
                this.dtColumns.push({label: tempColumns[c], field: tempColumns[c]})
            }
            for (let d of response.data) {
                this.dtRows.push(d)
                let lDay = d.day
                if (Object.keys(c_data).indexOf(`${lDay}`) >= 0) {
                    if ( c_data[`${lDay}`]['colorways'].indexOf(d.colorway)) {
                         c_data[`${lDay}`]['colorways'].push(d.colorway)
                    }
                    c_data[`${lDay}`]['sculpts'].push(d);
                } else {
                    c_data[`${lDay}`] = {
                        'colorways': [d.colorway],
                        'sculpts': [d]};
                }
            }

            this.calData = c_data;
            this.data = response.data;
            this.loaded = true;
        })
  },
  computed: {

  },
}
</script>

<style>
html {
    background-color: lightgrey;
}
b-link {
    text-decoration: none;
    color:black;
}

</style>