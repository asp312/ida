<template>
  <div class="page">
    <div class="header-wrapper">
      <p class="page-title">Добавление товара</p>
      <div>
      <div class="custom-select" @click="open"><p>По умолчанию</p><img alt="arrow" src='~assets/img/Rectangle 33.svg' width="8px" height="8px" class="pic">
         <ul class="ul">
          <li value="cost" class="custom-select-item" @click="sortInc" name="inc">Возрастание цены</li>
          <li value="name" class="custom-select-item" @click="sortDec" name="dec">Убывание цены</li>
        </ul>
      </div>
      </div>
    </div>
    <div class="help">
      <ItemAdder/>
      <Table/>
    </div>
  </div>
</template>

<script>
import ItemAdder from '@/components/ItemAdder.vue'
import Table from '@/components/Table.vue'

export default {
  components: {
    ItemAdder,
    Table
  },
  mounted () {
    if (localStorage.arr) {
      this.$store.dispatch('items/localItems', JSON.parse(localStorage.arr))
    } else {
      localStorage.setItem('arr', JSON.stringify(this.getItems))
    }
  },
  computed: {
    getItems(){
      return this.$store.getters['items/items']
    }
  },
  methods: {
    open () {
      document.querySelector('.ul').classList.toggle('show')
    },
    sortInc () {
      this.$store.dispatch('items/sortInc')
    },
    sortDec () {
      this.$store.dispatch('items/sortDec')
    }
  },
}
</script>

<style scoped>
p{
  margin: 0;
}
.ul{
  position: absolute;
  z-index: 1;
  margin: 25px 40px 0 0;
  list-style: none;
  overflow: hidden;
  display: none;
}
.show{
  display: block;
}
.page{
  /* background-color: rgba(255, 254, 251, 0.8); */
  max-width: 1370px;
  height: 100%;
  margin: 0 auto;
}
.help{
  display: flex;
  justify-content: space-between;
  margin-top: -16px;
}
.header-wrapper{
  display: flex;
  justify-content: space-between;
  margin-top: 33px;
  margin-bottom: 30px;
}
.pic{
  display: block;
  margin-left: 5px;
  margin-top: 5px;
}
.custom-select{
  box-sizing: border-box;
  width: 121px;
  height: 36px;
  border: none;
  box-shadow: -0.5px 0.5px 1.3px 0.2px rgb(189, 185, 185);
  border-radius: 6px 6px 0  0;
  padding: 10px 16px 11px 16px;
  margin-top: -2px;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  display: flex;
  justify-content: space-around;
}
.custom-select-item{
  box-sizing: border-box;
  height: 36px;
  width: 121px;
  border: none;
  box-shadow: -0.5px 0.5px 1.3px 0.2px rgb(189, 185, 185);
  background-color: #FFFEFB;
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  padding: 10px 0 5px 17px;
}
.custom-select-item:last-child{
  border-radius: 0 0px 6px 6px;
}
.custom-select-item:hover{
  color: #005c89;
  background-color: #e7f5fe;
  cursor: pointer;
}
.page-title{
  font-family: 'SourceSansPro', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 35px;
  margin-block-start: 0;
  margin-block-end: 0;
}
</style>