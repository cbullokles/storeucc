import Vue from 'vue'
import Vuetify from 'vuetify'
import router from '@/router.js'

import { mount } from '@vue/test-utils'
import SmallCard from '@/components/SmallCard.vue'
const productValue = require(__dirname + '/replies/findById.1.json');

beforeEach(() =>{
  Vue.use(router);
  Vue.use(Vuetify);
});

describe('Component SmallCard.vue', () => {
  it('Check Favorite product', async () => {
    const wrapper = mount(SmallCard, {
      router,
      propsData: {
        product: productValue,
        isFavorite: true
      }
    });
    let productCard = wrapper.find({'ref':'productCard'});
    expect(productCard.exists()).toBe(true)
    expect(productCard.classes()).toContain('favorite')
//    expect(productCard.classes('favorite')).toBe(true)
  })
})