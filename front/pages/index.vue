<template>
  <div class="page">
    <div class="header-wrapper">
      <p class="page-title">Добавление товара</p>
      <div class="custom-select">По умолчанию</div>
        <ul style="display: none;">
          <li value="cost" class="custom-select-item">Цена</li>
          <li value="name" class="custom-select-item">Название</li>
        </ul>
    </div>
    <div class="help">
      <ItemAdder/>
      <Table :items="arr"/>
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
  data () {
    return {
      arr: [
        {
          title: 'Наименование товара',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, in.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, in.',
          cost: '10 000 руб.',
          id: 1
        },
        {
          title: 'Наименование товара',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, in.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, in.',
          cost: '10 000 руб.',
          id: 2
        },
        {
          title: 'Наименование товара',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, in.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, in.',
          cost: '10 000 руб.',
          id: 3
        },
        {
          title: 'Наименование товара',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, in.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, in.',
          cost: '10 000 руб.',
          id: 4
        },
        {
          title: 'Наименование товара',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, in.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, in.',
          cost: '8 000 руб.',
          id: 5
        },
        {
          title: 'Наименование товара',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, in.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, in.',
          cost: '15 000 руб.',
          id: 6
        },
        {
          title: 'Наименование товара',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, in.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, in.',
          cost: '10 000 руб.',
          id: 7
        },
        {
          title: 'Наименование товара',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, in.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, in.',
          cost: '10 000 руб.',
          id: 8
        },
        {
          title: 'Наименование товара',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, in.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, in.',
          cost: '10 000 руб.',
          id: 9
        }
      ]
    }
  }
}
</script>

<style scoped>
.page{
  /* background-color: rgba(255, 254, 251, 0.8); */
  width: 1376px;
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
.custom-select{
  border: none;
  box-shadow: -0.5px 0.5px 1.3px 0.2px rgb(189, 185, 185);
  border-radius: 6px;
  padding: 10px 27px 11px 16px;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 15px;
}
.custom-select-item{
  height: 36px;
  width: 121px;
  border: none;
  box-shadow: -0.5px 0.5px 1.3px 0.2px rgb(189, 185, 185);
  border-radius: 6px;
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
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