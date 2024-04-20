<!-- MoneyJars.vue -->
<template>
  <div id="money-jar">
    <h2> {{ game_name }} </h2>
    <br>
    <div class="container-controls">
        <input type="button" value="Következő nap ===>" @click="handleNextDay()">
    </div>
    <div class="container-controls">
    <!-- <p>{{ components_info }}</p> -->
        <div class="text">Pénz szorzó: {{ dayMultiplier }}x</div>
        <div class="text">Készpénzed jelenleg: {{ inHandMoney }}</div>
    </div>
    <div class="container">
    <!-- <div @click="handleJarClick('saving')">Saving Jar: {{ savingAmount }}</div> -->
    <div class="jar">
        <h3>{{ component_saving.name }}</h3>
        <p class="info" @click="showInfo(0)">több</p>
        <svg @click="handleClick('saving')" width="200" height="200" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill="#32cd32" d="M15.93 7.75a1.25 1.25 0 0 0-.3-.51.83.83 0 0 0-.394-.238c.074.117.141.252.191.396q.085.221.103.467a1.8 1.8 0 0 1 0 .424 1 1 0 0 0-.142-.292 1.2 1.2 0 0 0-.48-.383.94.94 0 0 0-1.195.382q-.075.123-.12.266c-1.182-1.968-3.309-3.271-5.741-3.271q-.186 0-.369.01a8.2 8.2 0 0 0-2.231.313C5.19 4.88 4.62 4 2 4l.8 2.51a5.2 5.2 0 0 0-1.247 1.465L0 8s-.17 4 1 4h.54a5.3 5.3 0 0 0 1.445 1.589L3 16h1.08C5.39 16 6 16 6 15.25v-.39a8.3 8.3 0 0 0 3.051-.008L9 15.25c0 .75.62.75 1.94.75H12v-2.39a4.8 4.8 0 0 0 1.903-2.717c.057-.027.114-.024.172-.024s.115-.003.172-.01c.251-.046.48-.144.679-.283a1.65 1.65 0 0 0 .591-.765q.042-.14.063-.292l.001-.01c.221-.262.372-.59.419-.951q.018-.127.019-.259-.001-.296-.091-.563zm-12.42 0a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5M5.88 7a.5.5 0 0 1-.599-.247.39.39 0 0 1 .296-.503 8 8 0 0 1 2.009-.22l.101-.001q1.01.002 1.949.232c.126.024.262.182.262.372a.4.4 0 0 1-.019.119.48.48 0 0 1-.346.247H9.38a7.2 7.2 0 0 0-1.706-.2h-.089c-.605 0-1.193.073-1.756.211zm8.7 2.93a1.2 1.2 0 0 1-.453.199L14 10.13v-.44c.165.125.374.2.6.2h.021zm.08-.68a.44.44 0 0 1-.459-.248.6.6 0 0 1 .001-.566.33.33 0 0 1 .43-.096.48.48 0 0 1 .308.448v.001a1.5 1.5 0 0 1-.001.418 1.3 1.3 0 0 1-.282.022z"/><text x="6.60" y="2.9" font-size="2" font-family="Calibri" font-weight="bold" fill="#1a1a1a">{{ savingAmount }}</text><path fill="#32cd32" d="M7.5.75a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 7.5.75m0-.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5"/></svg>
        <br>
        <label for="takeAmount">Mennyit szeretnél kivenni?</label><br><input id="takeAmount" type="number" v-model="takeAmount" placeholder="Összeg" pattern="^(0|[1-9]\d*)$">
        <br>
        <br>
        <div>
          <button @click="handleOfTaking()" value="Take" style="margin-bottom: 0.5em; color: #f9f9f9; background-color: #1a1a1a;">Kivenni</button>
          <br>
          <span>Feltöltés</span>
          <br>
          <button @click="handleMoneyTransfer('saving', 5)" value="Put" style="margin: 0.5em 0em 0em 0.5em ; background-color: greenyellow; color: green">5 érme</button>
          <button @click="handleMoneyTransfer('saving', 10)" value="Put" style="margin: 0.5em 0 0 0.5em; background-color: greenyellow; color: green">10 érme</button>
        </div>
    </div>
    <!-- <div @click="handleJarClick('spending')">Spending Jar: {{ spendingAmount }}</div> -->
    <div class="jar">
        <h3>{{ component_spending.name }}</h3>
        <p class="info" @click="showInfo(1)">több</p>
        <svg width="200" height="200" viewBox="0 0 25 25" style="enable-background:new 0 0 504.135 504.135;" xml:space="preserve">
    <path d="M3 9L4.16427 17.9261C4.3674 19.4834 5.49056 20.7641 7.0081 21.1688V21.1688C10.2789 22.041 13.7211 22.041 16.9919 21.1688V21.1688C18.5094 20.7641 19.6326 19.4834 19.8357 17.9261L21 9" stroke="#000" fill="#1a1a1a" stroke-width="0.4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.03541 7.26646C3.76335 7.66067 3 8.16484 3 8.71428C3 9.97665 7.02944 11 12 11C16.9706 11 21 9.97665 21 8.71428C21 8.16468 20.2362 7.66038 18.9635 7.26611" stroke="#000" fill="#1a1a1a" stroke-width="0.4" stroke-linecap="round" stroke-linejoin="round"/>
  <text x="10" y="10.5" font-family="Verdana" font-size="3" fill="#fff">{{ spendingAmount }}</text>
<path d="M9 4L6 4.50926C4.15875 4.87548 3 5.40767 3 6C3 7.10457 7.02944 8 12 8C16.9706 8 21 7.10457 21 6C21 5.40767 19.8412 4.87548 18 4.50926L15 4" stroke="#000" fill="#FFD700" stroke-width="0.4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 4V4C15 2.89543 14.1046 2 13 2H11C9.89543 2 9 2.89543 9 4V4" stroke="#1a1a1a" fill="#FFD700" stroke-width="0.4" stroke-linecap="round" stroke-linejoin="round"/>
    <!-- The second SVG -->
    <path d="M170 96c0 40.9-33.1 74-74 74s-74-33.1-74-74 33.1-74 74-74 74 33.1 74 74zM96 75.2c-11.5 0-20.8 9.3-20.8 20.8s9.3 20.8 20.8 20.8 20.8-9.3 20.8-20.8-9.3-20.8-20.8-20.8zm0-23.1c-17.9 0-32.4 14.5-32.4 32.4s14.5 32.4 32.4 32.4 32.4-14.5 32.4-32.4S113.9 52.1 96 52.1zm5.5-1.5c-24.3 0-43.9 19.7-43.9 43.9s19.7 43.9 43.9 43.9 43.9-19.7 43.9-43.9-19.7-43.9-43.9-43.9zM94 48.7c-33.5 0-60.6 27.2-60.6 60.6S60.5 170 94 170s60.6-27.2 60.6-60.6S127.5 48.7 94 48.7z" style="fill:#FFD700;stroke:#000;stroke-width:12;stroke-miterlimit:10" transform="scale(0.05) translate(138, 232)"/>
</svg>
        
    </div>
    <!-- <div @click="handleJarClick('giving')">Giving Jar: {{ givingAmount }}</div> -->
    <div class="jar">
        <h3>{{ component_giving.name }}</h3>
        <p class="info" @click="showInfo(2)">több</p>
        <svg @click="handleClick('giving')" width="200" height="200" viewBox="0 0 25 25" style="enable-background:new 0 0 504.135 504.135;" xml:space="preserve">
    <path d="M3 9L4.16427 17.9261C4.3674 19.4834 5.49056 20.7641 7.0081 21.1688V21.1688C10.2789 22.041 13.7211 22.041 16.9919 21.1688V21.1688C18.5094 20.7641 19.6326 19.4834 19.8357 17.9261L21 9" stroke="#D3D3D3" fill=" #BCE27F" stroke-width="0.4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.03541 7.26646C3.76335 7.66067 3 8.16484 3 8.71428C3 9.97665 7.02944 11 12 11C16.9706 11 21 9.97665 21 8.71428C21 8.16468 20.2362 7.66038 18.9635 7.26611" stroke="#D3D3D3" fill="#ADD8E6" stroke-width="0.4" stroke-linecap="round" stroke-linejoin="round"/>
  <text x="10" y="10.5" font-family="Verdana" font-size="3" fill="#1a1a1a">{{ givingAmount }}</text>
<path d="M9 4L6 4.50926C4.15875 4.87548 3 5.40767 3 6C3 7.10457 7.02944 8 12 8C16.9706 8 21 7.10457 21 6C21 5.40767 19.8412 4.87548 18 4.50926L15 4" stroke="#D3D3D3" fill="#FFD700" stroke-width="0.4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 4V4C15 2.89543 14.1046 2 13 2H11C9.89543 2 9 2.89543 9 4V4" stroke="#D3D3D3" fill="#FFD700" stroke-width="0.4" stroke-linecap="round" stroke-linejoin="round"/>
    <!-- The second SVG -->
<path d="M437.45,195.957c-0.732,0-1.456,0.032-2.176,0.078v-73.628c0-18.588-15.123-33.711-33.712-33.711
	c-6.945,0-13.406,2.113-18.776,5.727c-1.353-2.169-2.957-4.202-4.81-6.051c-6.364-6.364-14.831-9.869-23.841-9.869
	c-8.12,0-15.73,2.841-21.702,7.889c-28.693-21.373-68.612-20.942-96.848,1.302c-13.995-11.056-31.181-17.055-49.289-17.055
	c-17.387,0-33.922,5.536-47.6,15.764c-5.971-5.016-13.59-7.9-21.672-7.9c-9.01,0-17.477,3.505-23.841,9.869
	c-1.851,1.851-3.452,3.885-4.804,6.054c-5.371-3.616-11.833-5.73-18.78-5.73c-18.589,0-33.712,15.123-33.712,33.711v73.628
	c-0.72-0.046-1.444-0.078-2.176-0.078C15.123,195.957,0,211.08,0,229.668v69.352c0,21.166,11.226,41.159,29.297,52.178
	c12.157,7.413,19.709,20.863,19.709,35.102v4.223c0,5.523,4.477,10,10,10s10-4.477,10-10V386.3
	c0-21.165-11.226-41.159-29.297-52.178C27.552,326.709,20,313.259,20,299.02v-69.352c0-7.561,6.151-13.711,13.711-13.711
	s13.712,6.151,13.712,13.711v44.219c0,5.523,4.477,10,10,10s10-4.477,10-10v-44.219c0-10.103-4.473-19.175-11.536-25.358v-81.903
	c0-7.561,6.151-13.711,13.712-13.711c7.561,0,13.711,6.151,13.711,13.711v98.93c0,5.523,4.477,10,10,10
	c5.505,0,9.968-4.448,9.997-9.946c0.001-0.02,0.007-0.038,0.007-0.058v-109.12c0-3.668,1.424-7.112,4.011-9.699
	c2.586-2.587,6.031-4.011,9.699-4.011c2.555,0,4.998,0.707,7.102,1.98c-25.108,31.265-23.177,77.216,5.815,106.208l0.793,0.793
	v13.849c0,5.523,4.477,10,10,10c3.751,0,7.015-2.068,8.726-5.123l75.984,75.984c-1.342,19.397-12.349,37.039-29.403,46.71
	c-3.132,1.776-5.067,5.099-5.067,8.699v27.79c0,5.523,4.477,10,10,10s10-4.477,10-10v-22.227
	c10.304-6.932,18.677-16.15,24.609-26.747c5.931,10.597,14.301,19.815,24.602,26.747v22.227c0,5.523,4.477,10,10,10s10-4.477,10-10
	v-27.79c0-3.6-1.936-6.923-5.067-8.699c-17.05-9.669-28.054-27.315-29.393-46.719l75.975-75.974
	c1.711,3.054,4.975,5.122,8.725,5.122c5.523,0,10-4.477,10-10v-13.847l0.795-0.795c28.993-28.993,30.923-74.945,5.814-106.21
	c2.1-1.275,4.537-1.978,7.101-1.978c3.668,0,7.112,1.424,9.708,4.02c2.587,2.582,4.013,6.023,4.013,9.69v10.021
	c0,0.058-0.004,0.115-0.004,0.173v98.93c0,5.523,4.477,10,10,10c5.502,0,9.963-4.444,9.997-9.938
	c0.001-0.022,0.008-0.043,0.008-0.066V122.32c0.047-7.52,6.176-13.625,13.707-13.625c7.561,0,13.712,6.151,13.712,13.711v81.903
	c-7.063,6.184-11.536,15.256-11.536,25.358v44.219c0,5.523,4.477,10,10,10s10-4.477,10-10v-44.219
	c0-7.561,6.151-13.711,13.712-13.711c7.561,0,13.711,6.151,13.711,13.711v69.352c0,14.239-7.552,27.689-19.709,35.102
	c-18.071,11.019-29.297,31.012-29.297,52.178v4.223c0,5.523,4.477,10,10,10s10-4.477,10-10V386.3
	c0-14.239,7.552-27.689,19.709-35.102c18.071-11.019,29.297-31.012,29.297-52.178v-69.352
	C471.162,211.08,456.039,195.957,437.45,195.957z M327.077,192.549l-91.497,91.497l-91.496-91.496
	c-23.276-23.276-23.276-61.149,0-84.425c11.275-11.276,26.267-17.485,42.212-17.485s30.938,6.209,42.212,17.485
	c1.875,1.875,4.419,2.929,7.072,2.929c2.652,0,5.196-1.054,7.071-2.929c11.275-11.275,26.267-17.485,42.212-17.485
	s30.937,6.209,42.212,17.485C350.354,131.4,350.354,169.273,327.077,192.549z" stroke="#fff" fill="#FFFFCC" transform="scale(0.02) translate(362, 580)"/>
</svg>
    </div>
    </div>
  </div>
</template>
  
<style scoped>

  .container, .container-controls {
      /* background-color: white; */
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
  }
  .container-controls {
    width: 100%;
    margin: 0 auto;
  }
  
  .jars {
    padding: 10px;
    text-align: center;
  }
  .container-controls > input {
      background-color: #393e46;
      /* color: #A0EADE; */
      grid-column: 3/3;
      height: 2em;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      margin: 4px 2px;
      cursor: pointer;
      border-radius: 25px;
      transition: background-color 0.3s;
      
  }
  
  .jar > .info {
    margin: 0;
    font-size: 1em;
    text-decoration-line: underline;
    text-decoration-style: dotted;
    text-decoration-thickness: auto ;
    cursor: pointer;
  
  }
  
  .jar > input {
    background-color: #393e46;
    border: none;
    font-size: 16px;
    display: inline-block;
    cursor: pointer;
    text-align: center;
    margin: 4px 2px;
  
  }
  .jar > button {
      background-color: #013220;
  }
  
  .container-controls > #text {
      grid-column: 3/3;
  }
  @media (max-width: 768px) {
    .container, .container-controls {
      grid-template-columns: 1fr;
    }
  
    .container-controls > input {
      grid-column: 1/2;
    }
  
    .jar > input {
      width: 100%;
    }
  }
  </style>
    
  <script>
  import imported from "../data/info.json";
  import { mapState, mapMutations } from "vuex";
  import localStore from '../js/save';

  export default {

    setup () {
      localStore.commit({
          type: 'takeTransfer',
          amount: 0
        })
    },
    data() {
        
      return {
        takeAmount:0,
        dayMultiplier: 1,
        game_name: imported.game.name,
        game: imported,
        component_saving: imported.game.components[0],
        component_spending: imported.game.components[1],
        component_giving: imported.game.components[2],
      };
    },

    computed: {
      ...mapState([
        'inHandMoney',
        'savingAmount', 
      'spendingAmount', 
      'givingAmount',
    ]),
      canTakeFromSaving() {
        return this.takeAmount <= this.savingAmount;
      },

      isNumberPositive() {
        var regex = /^(0|[1-9]\d*)$/;

        return regex.test(this.takeAmount);
      },

    },
    methods: {

      ...mapMutations([
        'handleJarClick',
        'updateInHand',
        'takeTransfer',
      ]),

      handleMoneyTransfer(jar, amount) {
        if (typeof amount === 'number' && amount >= 0) {
          if (this.inHandMoney >= amount) {
            localStore.commit({
              type:'handleJarClick',
              jar:jar,
              amount: amount
            })
            localStore.commit({
              type:'updateInHand',
              amount:amount * -1,
              isSale:false
            })
          } else {
            this.notifyUser("Még gyűjtened kell hozzá!", "warning")
          }
        } else {
          this.notifyUser("Invalid amount", "error")
        }
      },

      handleClick(jar){
        localStore.commit({
          type:'handleJarClick',
          jar: jar,
          amount:this.inHandMoney
        }),
        localStore.commit({
          type: 'takeTransfer',
          amount: 0,
        })
      },

      handleOfTaking(){
        
        if (this.canTakeFromSaving && this.isNumberPositive) {
          localStore.commit({
            type: 'updateInHand',
            amount: this.takeAmount,
            isSale:false
          }),
          localStore.commit({
            type:'handleOfJarTaking',
            amount:this.takeAmount
        })
        this.takeAmount = 0
        }else{
          this.notifyUser("Nem tudsz többet kivenni mint amennyit spóroltál!", "warning");
        }
      },

      multiplierCalculate() {
          this.dailyMultiplier = Math.floor((Math.random()*5)+1);
      },
      handleNextDay() {
      //   this.dailyMultiplier = 0;
        this.multiplierCalculate();
        // console.log(this.dailyMultiplier)
        localStore.commit({
          type: 'updateInHand',
          amount: this.dailyMultiplier,
          isSale:false
        })
        this.notifyUser(`Kaptál ${this.dailyMultiplier} pénzt.`, "info");

      },

      notifyUser(message, iconParameter) {
        // icon = ["info", "success", "warning"];
        this.$swal({
          title: 'Hello,',
          text: message,
          showCloseButton: true,
          showCancelButton: true,
          focusConfirm: false,
          icon: iconParameter
        })
      },

      showInfo(id){
        let name = this.game.game.components[id].name;
        let message = this.game.game.components[id].description;
        this.infoMessage(name, message);
      },

      infoMessage(name, message) {
        this.$swal({
          title: name,
          text: message,
          focusConfirm: false,
          icon: "info"
        })
      },
    },
    localStore,
  };
</script>
    