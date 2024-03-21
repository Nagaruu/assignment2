const app = Vue.createApp({
    data() {
        return {
            name: '',
            name2: ''
        }
    },
    methods: {
        showAlert() {
            alert('Wellcome!')
        },
        onKeyChange(event) {
            console.log(event);
            this.name = event.target.value;
        },

        onKeyChange2(event) {
            console.log(event);
            this.name2 = event.target.value;
        }
    }
});
app.mount('#assignment');