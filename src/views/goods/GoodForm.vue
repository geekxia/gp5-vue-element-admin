<template>
  <div class="app-container">
    <el-form
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-width="100px"
      class="demo-ruleForm"
      style="width:50%;min-width:500px"
    >
      <el-form-item label="商品名称" prop="name">
        <el-input v-model="ruleForm.name" />
      </el-form-item>

      <el-form-item label="商品描述" prop="desc">
        <el-input
          v-model="ruleForm.desc"
          type="textarea"
          :rows="3"
        />
      </el-form-item>

      <el-form-item label="是否热销" prop="hot">
        <el-switch v-model="ruleForm.hot" />
      </el-form-item>

      <el-form-item label="商品价格" prop="price">
        <el-input v-model.number="ruleForm.price" />
      </el-form-item>

      <el-form-item label="商品品类" prop="cate">
        <GoodCateSelect v-model="ruleForm.cate" />
      </el-form-item>

      <el-form-item label="商品排名" prop="rank">
        <el-input-number v-model="ruleForm.rank" :min="0" />
      </el-form-item>

      <el-form-item label="商品图片" prop="img">
        <el-upload
          action="http://localhost:8002/api/v1/upload/img"
          name="xxx"
          :file-list="fileList"
          list-type="picture"
          class="upload-demo"
        >
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-form-item>

      <el-form-item>
        <el-button
          type="primary"
          @click="submit('ruleForm')"
        >
          立即创建
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { GoodCateSelect } from '@/components'
export default {
  components: {
    GoodCateSelect
  },
  data() {
    return {
      ruleForm: {
        name: '',
        desc: '',
        hot: false,
        price: 0,
        cate: '',
        rank: 0
      },
      fileList: [],
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '商品名字需要3~5个字', trigger: 'blur' }
          // { pattern: /^[a-z]{3,5}/, message:'商品名称只能是小写的英文', trigger:'blur' }
        ],
        desc: [
          { required: true, message: '请填写活动形式', trigger: 'blur' },
          { min: 10, max: 20, message: '商品描述10~20字', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submit() {
      console.log('form', this.ruleForm)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
