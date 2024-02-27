const batterylevel = document.querySelector('.batterylevel')
const batterycharging = document.querySelector('.batterycharging')
const batterychargingtime = document.querySelector('.batterychargingtime')
const dischargingtime = document.querySelector('.dischargingtime')


const battery = () => {
    // console.log("battery");
    if ('getBattery' in navigator) {
        navigator.getBattery().then((battery) => {

            function updateallbatterydetails() {
                updatecharginginfo();
                updatelevel();
                dischargingtimelevel();
                updatechargingtime();
            }
            updateallbatterydetails();
           console.log(battery);

            //batterylevel
            battery.addEventListener('chargingchange', () => {
                updatecharginginfo();
            });
            function updatecharginginfo() {
                const ischarging = battery.charging ? "Yes" : "No"
                batterycharging.innerHTML = ischarging;
            }


            // chargingtime
            battery.addEventListener('chargingtimechange', () => {
                updatechargingtime();
            });
            function updatechargingtime() {
                const chargingtime = battery.chargingTime;
                batterychargingtime.innerHTML = chargingtime;
            }

            //dichargingtimre
            battery.addEventListener('dischargingtimechange', () => {
                dischargingtimelevel();
            });
            function dischargingtimelevel() {
                const discharging = battery.dischargingTime;
                dischargingtime.innerHTML = discharging+"  Seconds";
            }
            

            //batterylevel
            battery.addEventListener('levelchange', () => {
                updatelevel();
            })
            function updatelevel() {
                const level = battery.level * 100 + "%"
                batterylevel.innerHTML = level;
            }
        });
    };
};

battery();