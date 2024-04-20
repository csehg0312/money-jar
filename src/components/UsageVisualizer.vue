<template>
        <div class="container" >  
            <h3>Transactions:</h3>
            <div v-if="transactions.length > 0" class="container">
                <table>
                    <tr>
                        <th>Tároló</th>
                        <th>Pénzmozgás</th>
                    </tr>
                    <tr v-for="(transaction, index) in transactions" :key="index" :class="rowClass(transaction)">
                        <td>{{ transaction.type }}</td>
                        <td>{{ transaction.oldValue }} -> {{ transaction.newValue }}</td>
                    </tr>
                </table>
            </div>
            <p v-else>Nincs mozgás.</p>
        </div>

</template>

<style>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    table {
        margin: 0;
        width: 200%;
    }
    .positive-change {
        padding: 15px;
        border: 1px dotted;
        text-align: center;
        background-color: green;
    }

    .negative-change {
        padding: 15px;
        border: 1px dotted;
        text-align: center;
        background-color: red;
    }
</style>

<script>
    import localStore from '../js/save';
    import { mapState } from 'vuex'

    export default{
        name:"UsageVisualizer",
        computed: {
        ...mapState([
            'inHandMoney',
            'savingAmount', 
        'spendingAmount', 
        'givingAmount',
        ]),
    },
        data() {
            return {
                transactions: [],
                oldInHandMoney: null,
                oldSavingAmount: null,
                oldSpendingAmount: null,
                oldGivingAmount: null,
            }
        },
    watch: {
            inHandMoney(newValue) {
                this.transactions.push({ type: 'Készpénz', oldValue: this.oldInHandMoney, newValue });
                this.oldInHandMoney = newValue;
            },
            savingAmount(newValue) {
                // your function to call when inHandMoney changes
                this.transactions.push({ type: 'Spórolás', oldValue: this.oldSavingAmount, newValue });
                this.oldSavingAmount = newValue;
            },
            spendingAmount(newValue) {
                // your function to call when inHandMoney changes
                this.transactions.push({ type: 'Költekezés', oldValue: this.oldSpendingAmount, newValue });
                this.oldSpendingAmount = newValue;
            },
            givingAmount(newValue) {
                // your function to call when inHandMoney changes
                this.transactions.push({ type: 'Adakozás', oldValue: this.oldGivingAmount, newValue });
                this.oldGivingAmount = newValue;
            },
        },
        methods:{
            rowClass(transaction) {
                const newValue = parseFloat(transaction.newValue);
                // console.log(newValue)
                const oldValue = parseFloat(transaction.oldValue);
                // console.log(oldValue)
                return newValue > oldValue? 'positive-change' : 'negative-change';
            }
        },
        created() {
            this.oldInHandMoney = this.inHandMoney;
            this.oldSavingAmount = this.savingAmount;
            this.oldSpendingAmount = this.spendingAmount;
            this.oldGivingAmount = this.givingAmount;
        },
    localStore
}

</script>