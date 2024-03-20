const app = Vue.createApp({
    data() {
        return {
            name: ''
        }
    },
    methods: {
        showAlert() {
            alert('Wellcome!')
        },
        onKeyChange(e) {
            console.log(e);
            this.name = e.target.value;
        }
    }
});
app.mount('#assignment');