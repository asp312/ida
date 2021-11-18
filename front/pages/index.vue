<template>
  <div class="page">
    <p class="page-title">Добавление товара</p>
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
          cost: '10 000 руб.',
          id: 5
        },
        {
          title: 'Наименование товара',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, in.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, in.',
          cost: '10 000 руб.',
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
}
.help{
  display: flex;
  justify-content: space-around;
}
.page-title{
  font-family: 'SourceSansPro', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 35px;
}
</style>