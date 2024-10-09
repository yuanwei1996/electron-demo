<template>
  <div class="product-list">
    <h2>商品列表</h2>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.name }} - ¥{{ product.price }}
        <button @click="addToCart(product)">加入购物车</button>
        <button @click="goToPurchase(product)">立即购买</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        { id: 1, name: '商品 1', price: 100 },
        { id: 2, name: '商品 2', price: 200 },
        { id: 3, name: '商品 3', price: 300 },
      ]
    }
  },
  methods: {
    addToCart(product) {
      alert(`已将 ${product.name} 加入购物车`);
    },
    goToPurchase(product) {
      // 这里应该将选中的商品信息传递给购买页面
      // 为了简单起见，我们只传递商品ID
      this.$router.push({ path: '/purchase', query: { productId: product.id } });
    }
  }
}
</script>

<style scoped>
.product-list ul {
  list-style-type: none;
  padding: 0;
}
.product-list li {
  margin-bottom: 10px;
}
</style>