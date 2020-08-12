<template>
    <div id="home">
        <div id="home-container">
            <span class="text-3xl font-bold">Dashboard</span>
            <div class="grid-container">
                <div class="Large-Top shadow-xl rounded-lg">
                    <span class="text-4xl font-bold">{{this.greet}}, </span><span class="text-4xl font-medium">{{this.getUser.displayName}}</span>
                    <div class="mt-6">
                        <div class="red shadow-md p-3">
                            <div class="divLeft  bg-cover h-20 w-20" style="background-image: url('https://eal-website.s3.amazonaws.com/cms/hierarchy/small/warehousemanagement.png');"></div>
                            <div class="divRight text-left">
                                <span class="text-lg font-bold">Add a product</span>
                                <br>
                                <button class="blue-button shadow-md hover:bg-red-500 text-white font-bold py-2 mt-2 px-8 rounded float-right">
                                        Go!
                                </button>
                            </div>
                        </div>
                        <div class="red shadow-md p-3 ml-3">
                            <div class="divLeft bg-cover h-20 w-20" style="background-image: url('https://eal-website.s3.amazonaws.com/cms/hierarchy/small/ecommerce.png');"></div>
                            <div class="divRight text-left">
                                <span class="text-lg font-bold">View my orders</span>
                                <br>
                                <button class="blue-button shadow-md hover:bg-red-500 text-white font-bold py-2 mt-2 px-8 rounded float-right">
                                        Go!
                                </button>
                            </div>
                        </div>
                        <div class="red shadow-md p-3 ml-3">
                            <div class="divLeft bg-cover h-20 w-20" style="background-image: url('https://img.icons8.com/cotton/2x/lifebuoy.png');"></div>
                            <div class="divRight text-left">
                                <span class="text-lg font-bold">Contact Support</span>
                                <br>
                                <button class="blue-button shadow-md hover:bg-red-500 text-white font-bold py-2 mt-2 px-8 rounded float-right">
                                        Go!
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="Small-Top shadow-xl rounded-lg">
                    <span class="text-2xl font-bold">News + Offers</span>
                    <div id="profile" class="mt-3">
                        <div id="first" class="rounded-lg bg-cover" style="background-image: url('https://www.iconbunny.com/icons/media/catalog/product/2/1/2123.7-announcement-icon-iconbunny.jpg');"></div>
                        <div id="second">
                            <span class="font-bold text-lg">Despatch Tech Upgrades</span>
                        </div>
                        <div id="third">
                        </div>
                    </div>

                    <div id="profile" class="mt-3">
                        <div id="first" class="rounded-lg bg-cover" style="background-image: url('https://cdn3.vectorstock.com/i/1000x1000/20/97/discount-icon-vector-10472097.jpg');"></div>
                        <div id="second">
                            <span class="font-bold text-lg">2% Off Fulfilment</span>
                        </div>
                        <div id="third">
                        </div>
                    </div>
                </div>
                <div class="Middle-1 shadow-xl rounded-lg">
                    <div class="divLeft blue-button h-32 w-32 p-12 rounded-full flex" style="margin-top: 10px; padding: 32px; padding-left: 25px;" id="large-icon">
                        <font-awesome-icon class="text-6xl text-white" icon="shopping-cart" />
                     </div> 
                     <div class="divRight text-right">
                         <span class="font-bold" style="font-size: 4.25rem;">103</span>
                         <br>
                         <span class="font-medium text-2xl">Orders Today</span>
                     </div>
                </div>
                <div class="Middle-2 shadow-xl rounded-lg inline-block">
                    <div class="divLeft fc-orange h-32 w-32 p-12 rounded-full flex" style="margin-top: 10px; padding: 32px;" id="large-icon">
                        <font-awesome-icon class="text-6xl text-white" icon="box" />
                     </div>
                    <div class="divRight text-right">
                         <span class="font-regular" style="font-size: 4.25rem;">9/</span><span class="font-bold" style="font-size: 4.25rem;">103</span>
                         <br>
                         <span class="font-medium text-2xl">Shipped</span>
                     </div>
                </div>
                <div class="Middle-3 shadow-xl rounded-lg">
                    <div class="divLeft fc-green h-32 w-32 p-12 rounded-full flex" style="margin-top: 10px; padding: 32px; padding-left: 43px;" id="large-icon">
                        <font-awesome-icon class="text-6xl text-white" icon="pound-sign" />
                     </div>
                    <div class="divRight text-right">
                        <span class="font-bold" style="font-size: 4.25rem;">£4678</span>
                        <br>
                        <span class="font-medium text-2xl">Processed</span>
                    </div>
                </div>
                <div class="Bottom-Large shadow-xl rounded-lg">
                    <canvas id="myChart"></canvas>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    name: 'home',
    computed: {
      ...mapGetters(['getUser'])
    },
    data() {
        return {
            greet: ""
        }
    },
    methods: {
        chart() {
            var ctx = document.getElementById('myChart').getContext('2d');
            ctx.height = 210;
            var myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['10am', '12pm', '2pm', '4pm', '6pm', '8pm'],
                    datasets: [{
                        label: 'Customers',
                        data: [12, 19, 3, 5, 2, 3],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.4)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                        ],
                        borderWidth: 1
                    },
                    ]
                },
                options: {
                    maintainAspectRatio: false,
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });
        }
    },
    mounted () {
        document.getElementById("navclose").style.display = "none";
        
        if (window.innerWidth < 600) {
            document.getElementById("navbar").style.display = "none";
        }

        this.chart();

        var myDate = new Date();
        var hrs = myDate.getHours();

        if (hrs < 12)
            this.greet = 'Good Morning';
        else if (hrs >= 12 && hrs <= 17)
            this.greet = 'Good Afternoon';
        else if (hrs >= 17 && hrs <= 24)
            this.greet = 'Good Evening';
        }
        
};
</script>

<style scoped>
#home {
  padding-top: 4.5rem;
  margin-left: 255px;
  height: 70vh;
}

#home-container {
    padding: 25px;
    padding-top: 15px !important;
}

.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 0.5fr 1fr;
  gap: 15px 15px;
  width: 100%;
  grid-template-areas: "Large-Top Large-Top Large-Top Large-Top Small-Top Small-Top" "Middle-1 Middle-1 Middle-2 Middle-2 Middle-3 Middle-3" "Bottom-Large Bottom-Large Bottom-Large Bottom-Large Bottom-Large Bottom-Large";
}

.red{
    height: 110px;
    width: 32.3%;
    flex-grow: 0;
    display:inline-block;
    border-radius: 10px;
    border: lightgray 3px solid;
}

.Large-Top { 
    grid-area: Large-Top; 
    height: 225px;
    background-color: white;
    padding: 20px;
}

.divLeft {
    display:block;
    float: left;
}
.divRight {
    display:block;
    float: right;
}

.fc-orange {
    background-color: #FF8F00;
}

.fc-green {
    background-color: #8BC34A;
}

.Small-Top { 
    grid-area: Small-Top; 
    height: 225px;
    background-color: white;
    padding: 20px;
}

.Middle-1 { 
    grid-area: Middle-1; 
    height: 190px;
    background-color: white;
    padding: 20px;
}

.Middle-2 { 
    grid-area: Middle-2; 
    height: 190px;
    background-color: white;
    padding: 20px;
}

.Middle-3 { 
    grid-area: Middle-3;
    height: 190px;
    background-color: white; 
    padding: 20px;
}

.Bottom-Large { 
    grid-area: Bottom-Large;
    height: 225px;
    background-color: white; 
    padding: 20px;
}

@media screen and (max-width: 600px) {
  #home {
      margin-left: 0px;
  }
}
</style>