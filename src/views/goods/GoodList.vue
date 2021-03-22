<template>
  <div class="app-container">
    <!-- 第一部分：各种filter -->
    <div class="filter-container">
      <!-- 根据商品名称进行搜索 -->
      <el-input
        v-model="filter.name"
        placeholder="商品名称"
        style="width: 200px;"
        class="filter-item"
        clearable
        @keyup.enter.native="handleFilter"
      />
      <!-- 根据品类进行搜索 -->
      <el-select
        v-model="filter.cate"
        placeholder="品类筛选"
        clearable
        style="width: 145px"
        class="filter-item"
      >
        <el-option
          v-for="item in cateArr"
          :key="item._id"
          :label="item.cate_zh"
          :value="item.cate"
        />
      </el-select>
      <!-- 根据时间段进行搜索 -->
      <el-date-picker
        v-model="filter.date"
        type="daterange"
        range-separator="至"
        class="filter-item"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
      />

    </div>
    <!-- 表格 -->
    <div class="qf-gl-table">
      <el-table
        :data="tableData"
        style="width: 100%"
      >
        <!-- 第一列 -->
        <el-table-column
          prop="name"
          label="商品"
          align="center"
        />
        <el-table-column
          prop="cate"
          align="center"
          label="品类"
        />
        <el-table-column
          prop="desc"
          align="center"
          label="描述"
        />
        <el-table-column
          prop="price"
          align="center"
          label="价格"
        />
        <el-table-column
          prop="create_time"
          align="center"
          label="上架时间"
        />
        <el-table-column
          prop="hot"
          align="center"
          label="是否热销"
        />
        <el-table-column
          prop="star"
          align="center"
          label="人气值"
        />
      </el-table>
    </div>

    <!-- 分页 -->
    <pagination
      v-show="total>0"
      :total="total"
      :page.sync="filter.page"
      :limit.sync="filter.size"
      :page-sizes="[2,4,6,8]"
      @pagination="getList"
    />

  </div>
</template>

<script>
import { Pagination } from '@/components'
export default {
  name: 'GoodList',
  components: {
    Pagination
  },
  data() {
    return {
      filter: {
        page: 1,
        size: 2,
        name: '',
        date: ''
      },
      total: 32,
      cateArr: [
        { _id: 1, cate: 'office', cate_zh: '办公用品' },
        { _id: 2, cate: 'car', cate_zh: '汽车生活' },
        { _id: 3, cate: 'book', cate_zh: '图书影像' }
      ],
      tableData: []
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.$api.fetchGoodList(this.filter).then(res => {
        console.log('商品列表', res)
        if (res.err === 0) {
          const { list, total } = res.data
          this.tableData = list
          this.total = total
        }
      })
    },
    handleFilter() {
      // this.getList()
      console.log('触发搜索filter', this.filter)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
