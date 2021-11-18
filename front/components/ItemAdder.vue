<template>
    <div class="filter-wrapper">
        <div class="inputs-wrapper">
            <div class="input-wrapper">
                <label for="ItemDescription" class="label">Наименование товара</label><br>
                <input id="ItemName" placeholder="Введите наименование товара" class="input">
            </div>
            <div class="input-wrapper">
                <label for="ItemDescription" class="textarea-label">Описание товара</label><br>
                <textarea id="ItemDescription" placeholder="Введите описание товара" class="textarea" />
            </div>
            <div class="input-wrapper">
                <label for="ItemImageLink" class="label">Ссылка на изображение товара</label><br>
                <input id="ItemImageLink" placeholder="Введите ссылку" class="input">
            </div>
            <div class="input-wrapper">
                <label for="ItemCost" class="label">Цена товара</label><br>
                <input id="ItemCost" placeholder="Введите цену" class="input">
            </div>
            <button class="add-button">Добавить товар</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ItemAdder'
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
.add-button{
    width: 100%;
    height: 36px;
    border: none;
    border-radius: 10px;
    background-color: #EEEEEE;
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
}
</style>