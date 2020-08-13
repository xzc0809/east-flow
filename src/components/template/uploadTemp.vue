<template>
  <div>
  <el-upload
    class="avatar-uploader"
    action="/upload/one"
    :show-file-list="false"
    :on-success="handleAvatarSuccess"
    :before-upload="beforeAvatarUpload">
    <img v-if="imageUrl" :src="imageUrl" class="avatar">
    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
  </el-upload>
   <div>
      <el-input placeholder="请输入内容" v-model="mediaUrl">
        <template slot="prepend">图片地址</template>
      </el-input>
   </div>
  <div>
    <span style="float: left">标题及描述:</span>
    <el-input placeholder="请输入内容" v-model="title">
      <template slot="prepend">标题</template>
    </el-input>
  </div>
   <div>
      <el-input placeholder="请输入内容" v-model="description">
        <template slot="prepend">描述</template>
      </el-input>
    </div>
    <span>链接：</span>
    <el-input-number v-model="num" @change="handleChange()" :min="1" :max="3" label="描述文字"></el-input-number>
    <div v-for="n in num">
      <el-input placeholder="请输入内容" v-model="displayText">
        <template slot="prepend">按钮名</template>
      </el-input>
      <el-input placeholder="请输入内容" v-model="url">
        <template slot="prepend">链接</template>
      </el-input>
    </div>
    <span>电话：</span>
<!--    <el-input-number v-model="num2" @change="handleChange()" :min="1" :max="2" label="描述文字"></el-input-number>-->
    <div v-for="n in num2">
      <el-input placeholder="请输入内容" v-model="displayText2">
        <template slot="prepend">按钮名</template>
      </el-input>
    <el-input placeholder="请输入内容" v-model="phoneNumber">
      <template slot="prepend">电话</template>
    </el-input>
    </div>
    <span>位置信息：</span>
<!--    <el-input-number v-model="num3" @change="handleChange()" :min="1" :max="2" label="描述文字"></el-input-number>-->
    <div v-for="n in num3">
      <el-input placeholder="请输入内容" v-model="displayText3">
        <template slot="prepend">按钮名</template>
      </el-input>
      <el-input placeholder="请输入内容" v-model="label">
        <template slot="prepend">标题</template>
      </el-input>
    <el-input placeholder="请输入内容" v-model="longitude">
      <template slot="prepend">经度</template>
    </el-input>
      <el-input placeholder="请输入内容" v-model="latitude">
        <template slot="prepend">纬度</template>
      </el-input>
    </div>

    </div>
</template>
<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }

  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }

  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>

<script>
  export default {
    props:['imageUrl'],
    data () {
      return {
        imageUrl: '',
        input1:'',
        num:1,
        num2:1,
        num3:1,
        content:[{

        }]
      }
    },
    methods: {
      handleAvatarSuccess (res, file) {
        this.imageUrl = URL.createObjectURL(file.raw)
      },
      beforeAvatarUpload (file) {
        const isJPG = file.type === 'image/jpeg'
        const isLt2M = file.size / 1024 / 1024 < 2

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!')
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!')
        }
        return isJPG && isLt2M
      },
      handleChange(num) {
      }
    }
  }
</script>
