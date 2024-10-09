<template>
  <div class="purchase-page">
    <h2>购买商品</h2>
    <div v-if="selectedProduct">
      <h3>{{ selectedProduct.name }}</h3>
      <p>价格: ¥{{ selectedProduct.price }}</p>
      <button @click="purchase">确认购买</button>
    </div>
    <div v-else>
      <p>请先从商品列表选择一个商品</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedProduct: null
    }
  },
  methods: {
    purchase() {
      if (this.selectedProduct) {
        alert(`您已成功购买 ${this.selectedProduct.name}`);
        this.$router.push('/products');
      }
    }
  },
  created() {
    // 这里应该从路由参数或者 Vuex store 中获取选中的商品
    // 为了演示，我们使用一个模拟的商品
    this.selectedProduct = { id: 1, name: '商品 1', price: 100 };
  }
}
</script>