<template>
    <div class="filter-wrapper">
        <div class="inputs-wrapper">
            <div class="input-wrapper">
                <label for="ItemDescription" class="label">Наименование товара</label><br>
                <input id="ItemName" placeholder="Введите наименование товара" class="input inputName required" v-model="itemName">
                <span class="error-message message-name">Обязяательное поле</span>
            </div>
            <div class="input-wrapper">
                <label for="ItemDescription" class="textarea-label">Описание товара</label><br>
                <textarea id="ItemDescription" placeholder="Введите описание товара" class="textarea" v-model="itemDescription"/>
            </div>
            <div class="input-wrapper">
                <label for="ItemImageLink" class="label">Ссылка на изображение товара</label><br>
                <input id="ItemImageLink" placeholder="Введите ссылку" class="input inputPic required" v-model="itemPic">
                <span class="error-message message-pic">Обязяательное поле</span>
            </div>
            <div class="input-wrapper">
                <label for="ItemCost" class="label">Цена товара</label><br>
                <input id="ItemCost" placeholder="Введите цену" class="input inputCost required" v-model="itemCost" type="number">
                <span class="error-message message-cost">Обязяательное поле</span>
            </div>
            <button v-bind:class="[{addButton: (this.itemPic.match(/\.(jpeg|jpg|gif|png)$/) && (this.itemName.length > 0) && (this.itemCost > 0))}, {addButtonV2: !(this.itemPic.match(/\.(jpeg|jpg|gif|png)$/) && (this.itemName.length > 0) && (this.itemCost > 0))}]" @click="spentItemInfo" 
                    :disabled="!(this.itemPic.match(/\.(jpeg|jpg|gif|png)$/) && (this.itemName.length > 0) && (this.itemCost > 0))">Добавить товар</button>
        </div>
    </div>
</template>

<script>

export default {
    name: 'ItemAdder',
    data () {
        return {
            itemName: '',
            itemDescription: '',
            itemPic: '',
            itemCost: null,
        }
    },
    watch: {
        itemName () {
            if (this.itemName.length > 0) {
                document.querySelector('.inputName').classList.remove('required')
                document.querySelector('.message-name').classList.add('notShow')
            }else{
                document.querySelector('.inputName').classList.add('required')
                document.querySelector('.message-name').classList.remove('notShow')
            }
        },
        itemPic () {
            if (this.itemPic.match(/\.(jpeg|jpg|gif|png)$/)) {
                document.querySelector('.inputPic').classList.remove('required')
                document.querySelector('.message-pic').classList.add('notShow')
            }else{
                document.querySelector('.inputPic').classList.add('required')
                document.querySelector('.message-pic').classList.remove('notShow')
                document.querySelector('.message-pic').innerHTML = "не правильный url или его отсутствие"
            }
        },
        itemCost () {
            if (this.itemCost > 0) {
                document.querySelector('.inputCost').classList.remove('required')
                document.querySelector('.message-cost').classList.add('notShow')
            }else{
                document.querySelector('.inputCost').classList.add('required')
                document.querySelector('.message-cost').classList.remove('notShow')
            }
        }
    },
    computed: {
        getItems(){
            return this.$store.getters['items/items']
        }
    },
    methods: {
        spentItemInfo () {
            this.itemCost = new Intl.NumberFormat('ru-Ru', {
                style: 'decimal',
            }).format(this.itemCost)
            let data = {
                title: this.itemName,
                description: this.itemDescription,
                picUrl: this.itemPic,
                cost: this.itemCost
            }
            this.itemName = '',
            this.itemDescription = '',
            this.itemPic = '',
            this.itemCost = null
            this.$store.dispatch('items/add', data)
            console.log(this.$store.getters['items/items'], 'this.$store.getters.items')

        }
    }
}
</script>

<style scoped>
.filter-wrapper{
    width: 332px;
    height: 440px;
    background-color: #FFFEFB;
    border-radius: 4px;
    box-shadow: -0.5px 0.5px 1.3px 0.1px rgb(189, 185, 185);
    font-size: 10px;
    font-family: 'SourceSansPro', sans-serif;
    letter-spacing: -0.2px;
    color: #49485E;
}
.inputs-wrapper{
    width: 284px;
    margin: 0 auto;
    padding-top: 24px;
}
.input-wrapper{
    width: 284px;
    margin-bottom: 16px;
}
.inputPic{
    padding-right: 16px;
}
.input-wrapper:nth-child(2){
    width: 284px;
    margin-bottom: 13px;
}
.input-wrapper:nth-child(3){
    width: 284px;
    margin-bottom: 14px;
}
.input{
    box-sizing: border-box;
    width: 284px;
    height: 36px;
    border-radius: 4px;
    box-shadow: -0.5px 0.5px 1.3px 0.1px rgb(189, 185, 185);
    border: none;
    margin-top: 4px;
    font-size: 11px;
    padding-left: 16px;
    display: block;
    background-color: #FFFEFB;
    color: #B4B4B4;
}
.required{
    border: 1px solid #FF8484;
}
.notShow{
    display: none;
}
.addButton{
    width: 100%;
    height: 36px;
    border: none;
    border-radius: 10px;
    background-color: #7BAE73;
    color: #ffffff;
    margin-top: 7px;
    font-family: 'Inter', 'sans-serif';
    font-weight: 600;
    font-size: 11.5px;
}
.addButtonV2{
    width: 100%;
    height: 36px;
    border: none;
    border-radius: 10px;
    background-color:#EEEEEE;
    color: #B4B4B4;
    margin-top: 7px;
    font-family: 'Inter', 'sans-serif';
    font-weight: 600;
    font-size: 11.5px;
}
.label::after{
    width: 4px;
    height: 4px;
    background-color: #FF8484;
    border-radius: 50%;
    content: ' ';
    display: inline-block;
    margin: 0 0  5.35px 0.5px;
}
.textarea{
    height: 108px;
    width: 284px;
    max-height: 108px;
    max-width: 284px;
    border-radius: 4px;
    box-shadow: -0.5px 0.5px 1.3px 0.2px rgb(189, 185, 185);
    border: none;
    margin-top: 4px;
    font-size: 12px;
    padding: 10px 0 0 16px;
    box-sizing: border-box;
    font-family: 'SourceSansPro', sans-serif;
    background-color: #FFFEFB;
    color: #B4B4B4;
    resize: none;
}
.error-message{
    position: absolute;
    margin-top: 1px;
    color: #FF8484;
}
</style>