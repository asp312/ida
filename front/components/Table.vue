<template>
    <div class="table-wrapper">
        <div class="table-item" v-for="item of items" :key="item.id">
            <div class="item-picture"><img :alt="item.title" width="323px" height="200px" src="https://ds-blobs-4.cdn.devapps.ru/15405903.png"></div>
            <div class="item-description-block">
                <p class="item-title">{{ item.title }}</p>
                <p class="item-description">{{ item.description }}</p>
                <p class="item-cost">{{ item.cost }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Table',
    props: ['items']
}
</script>

<style scoped>
.table-wrapper{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 16px;
    font-family: 'SourceSansPro', sans-serif;
    width: 1028px;
}
.table-item{
    width: 323px;
    height: 423px;
    background-color: #FFFEFB;
    border: none;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: -0.5px 0.5px 1.3px 0.1px rgb(189, 185, 185);
}
.item-picture{
    height: 200px;
}
.item-title{
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    margin-block-start: 0;
    margin-block-end: 0;
}
.item-description-block{
    margin-top: 16px;
    padding-left: 16px;
}
.item-description{
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
}
.item-cost{
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
}
</style>