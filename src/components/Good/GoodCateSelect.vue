<template>

  <!-- 第一种写法 -->
  <!-- <div class="qf-good-cate-select">
  <el-select
    :value='value'
    placeholder="品类筛选"
    clearable
    style="width: 145px"
    class="filter-item"
    @change='$emit("input", $event)'
  >
    <el-option
      v-for="item in cateArr"
      :key="item._id"
      :label="item.cate_zh"
      :value="item.cate"
    />
  </el-select>
</div> -->

  <!-- 第二种写法 -->
  <div class="qf-good-cate-select">
    <el-select
      v-model="cate"
      placeholder="品类筛选"
      clearable
      style="width: 145px"
      class="filter-item"
    >
      <el-option
        v-for="item in cates"
        :key="item._id"
        :label="item.cate_zh"
        :value="item.cate"
      />
    </el-select>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    value: { type: String, default: '' }
  },
  data() {
    return {
      cate: this.value
    }
  },
  computed: {
    ...mapGetters(['cates'])
  },
  watch: {
    cate() {
      // 当cate变化时，把最新结果回传给父组件
      this.$emit('input', this.cate)
      this.$emit('change')
    }
  },
  created() {
    this.$store.dispatch('good/getAllCates')
    // this.getAllCates()
  }
  // methods: {
  //   ...mapActions('good', ['getAllCates'])
  // }
}
</script>

<style lang="scss" scoped>
.qf-good-cate-select {
  display: inline-block;
}
</style>
