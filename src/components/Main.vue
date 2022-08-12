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
                v-for="(day, key) in calData" 
                :key="'day' + key"
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
                    >
                        Day {{ key }}
                    </b-card-header>
                    <b-card-body>
                        <div class="text-left">
                            Entry:
                        </div>
                        <div class="text-right" v-if="day[0].entry_time < 12">
                            {{ day[0].entry_time }}AM PST
                        </div>
                        <div class="text-right" v-else>
                            {{ day[0].entry_time - 12}}PM PST
                        </div>
                        <div class="text-right" >
                            {{ day[0].entry_window}} {{day[0].entry_unit}}<span v-if="day[0].entry_window != 1">s</span>
                        </div>
                        <div class="text-left">
                            Colorway:
                        </div>
                        <div class="text-right">
                            {{ day[0].colorway }}
                        </div>
                        <div class="text-left">
                            Sculpts:
                        </div>
                        <div v-for="s in day" :key="s.sculpt+s.day">
                            <div class="text-right">
                                {{ s.sculpt }} - {{ s.quantity }}
                            </div>
                        </div>
                    </b-card-body>
                    <b-card-footer >
                        <b-row>
                            <b-col class="col-md-2">
                                <img v-if="day[0].goldbag" src="../assets/goldbag.png" height="24px" />
                            </b-col>
                            <b-col class="col-md-10 text-right">
                                <a class="" :href="day[0].link" target="_blank"><img src="../assets/ig.png" height="24px"></a>
                            </b-col>
                        </b-row>
                    </b-card-footer>
                </b-card>
            </b-card-group>
            </b-col>
        </b-row>
        <Bar
            :chart-options="chartOptions"
            :chart-data="chartData"
            :chart-id="chartId"
            :dataset-id-key="datasetIdKey"
            :plugins="plugins"
            :css-classes="cssClasses"
            :styles="styles"
            :width="width"
            :height="height"
            v-if="loaded"
        />
    </b-container>
</template>

<script>
import axios from 'axios'; 
import { Bar } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'MainPage',
  props: {
    msg: String,
    chartId: {
        type: String,
        default: 'bar-chart'
    },
    datasetIdKey: {
      type: String,
      default: 'label'
    },
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 400
    },
    cssClasses: {
      default: '',
      type: String
    },
    styles: {
      type: Object,
      default: () => {}
    },
    plugins: {
      type: Object,
      default: () => {}
    }
  },
  components: { Bar },
  created() {
    document.title = 'Poisoned Summer 6';
  },
  data() {
    return {
        data: null,
        calData: {},
        chartData: {},
        chartOptions: {
            responsive: true
        },
        loaded: false,
    }
  },
  mounted() {
    let c_data = {};
    let s_data = {};
    this.loaded = false;
    axios
        .get('https://raw.githubusercontent.com/sillypears/ps6-stuff/main/ps6.json')
        .then(response => {
            for (let d of response.data) {
                if (Object.keys(c_data).indexOf(`${d.day}`) >= 0) {
                    c_data[`${d.day}`].push(d);
                } else {
                    c_data[`${d.day}`] = [d];
                }
            }
            for (let d in c_data) {
                if (Object.keys(s_data).indexOf(`${c_data[d][0].entry_time}`) >= 0) {
                    s_data[`${c_data[d][0].entry_time}`] += 1;
                } else {
                    s_data[`${c_data[d][0].entry_time}`] = 1;
                } 
                
            }
            this.calData = c_data;
            this.chartData.labels = []
            this.chartData.datasets = {data:[]};
            for (let d in s_data) {
                this.chartData.labels.push(d)
                this.chartData.datasets.data.push(s_data[d]);
            }
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