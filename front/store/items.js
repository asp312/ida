export const state = () => ({
    items: [
        {
          title: 'Наименование товара',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, in.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, in.',
          cost: '10 000',
          picUrl: 'https://ds-blobs-4.cdn.devapps.ru/15405903.png',
          id: 1
        },
        {
          title: 'Наименование товара',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, in.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, in.',
          cost: '10 000',
          picUrl: 'https://ds-blobs-4.cdn.devapps.ru/15405903.png',
          id: 2
        },
        {
          title: 'Наименование товара',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, in.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, in.',
          cost: '10 000',
          picUrl: 'https://ds-blobs-4.cdn.devapps.ru/15405903.png',
          id: 3
        },
        {
          title: 'Наименование товара',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, in.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, in.',
          cost: '10 000',
          picUrl: 'https://ds-blobs-4.cdn.devapps.ru/15405903.png',
          id: 4
        },
        {
          title: 'Наименование товара',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, in.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, in.',
          cost: '8 000',
          picUrl: 'https://ds-blobs-4.cdn.devapps.ru/15405903.png',
          id: 5
        },
        {
          title: 'Наименование товара',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, in.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, in.',
          cost: '15 000',
          picUrl: 'https://ds-blobs-4.cdn.devapps.ru/15405903.png',
          id: 6
        },
        {
          title: 'Наименование товара',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, in.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, in.',
          cost: '10 000',
          picUrl: 'https://ds-blobs-4.cdn.devapps.ru/15405903.png',
          id: 7
        },
        {
          title: 'Наименование товара',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, in.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, in.',
          cost: '10 000',
          picUrl: 'https://ds-blobs-4.cdn.devapps.ru/15405903.png',
          id: 8
        },
        {
          title: 'Наименование товара',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, in.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, in.',
          cost: '10 000',
          picUrl: 'https://ds-blobs-4.cdn.devapps.ru/15405903.png',
          id: 9
        }
      ]
})
export const mutations = {
    addItem(state, item){
       state.items.unshift(item)
       localStorage.arr = JSON.stringify(state.items)
    },
    delItems(state, id){
        state.items.splice(id, 1) 
        localStorage.arr = JSON.stringify(state.items)
    },
    setItems(state, items){
        state.items = items
    },
    sortInc(state){
        state.items.sort(function(a,b){
        return parseFloat(a.cost) - parseFloat(b.cost)
      })
    },
    sortDec(state){
        state.items.sort(function(a,b){
        return parseFloat(b.cost) - parseFloat(a.cost)
      })
    }
}
export const actions = {
    add({ commit }, item){
        commit('addItem', item)
    },
    del({ commit }, id){
        commit('delItems', id)
    },
    localItems({ commit }, items){
        commit('setItems', items)
    },
    sortInc({ commit }){
        commit('sortInc')
    },
    sortDec({ commit }){
        commit('sortDec')
    }
}
export const getters = {
    items: state => state.items
}
