<template>
    <div class="table-wrapper">
        <div class="table-item" v-for="(item, index) of getItems" :key="index" >
            <div class="item-picture"><img :alt="item.title" width="332px" height="200px" :src="item.picUrl" class="pic"><div class="delete-pic-wrapper"><span class="delete-pic" @click="deleteItem($event)"><img class="del" width="16px" height="16px" src="~assets/img/delete 1.svg" alt="delete" :id="index"></span></div></div>
            <div class="item-description-block">
                <p class="item-title">{{ item.title }}</p>
                <p class="item-description">{{ item.description }}</p>
                <p class="item-cost">{{ item.cost }} руб.</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Table',
    methods: {
       deleteItem (e) {
           let deletedItem = e.target.id
           this.$store.dispatch('items/del', deletedItem)
       }
    },
    computed: {
        getItems(){
            return this.$store.getters['items/items']
        }
    }
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
    width: 332px;
    height: 423px;
    background-color: #FFFEFB;
    border: none;
    border-radius: 4px;
    box-shadow: -0.5px 0.5px 1.3px 0.1px rgb(189, 185, 185);
    transition-duration: 0.2s;
    position: relative;
}
.delete-pic{
    width: 32px;
    height: 32px;
    background-color: #FF8484;
    border-radius: 10px;
    content: ' ';
    display: inline-block;
    margin: 0 0  5.35px 0.5px;
    position: absolute;
    top: -8px;
    right: -8px;
    cursor: pointer;
}
.delete-pic-wrapper{
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    opacity: 0;
}
.delete-pic-wrapper:hover{
    opacity: 1;
}
.table-item:hover{
    transform: scale(1.03);
    transition-duration: 0.2s;
}
.del{
    padding: 7px 8px;
}
.pic{
    border-radius: 4px 4px 0 0 ;
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
    color: #3F3F3F;
}
.item-description{
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    height: 80px;
    box-sizing: border-box;
}
.item-cost{
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
    margin-top: 33px;
}
@media (max-width: 1024px) {
    .table-wrapper{
        grid-template-columns: 1fr 1fr;
        width: 670px;
    }
    .table-item{
        width: 325px;
    }
    .page{
        width: 970px;
    }
    .pic{
        width: 325px;
    }
}
</style>