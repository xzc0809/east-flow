<template>
  <div>
    <div v-for="c in content">
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
        <el-input placeholder="" v-model="c.media.mediaUrl" :disabled="true">
          <template slot="prepend">图片</template>
        </el-input>
      </div>
      <div>
        <span style="float: left">标题及描述:</span>
        <el-input placeholder="请输入内容" v-model="c.title">
          <template slot="prepend">标题</template>
        </el-input>
      </div>
      <div>
        <el-input placeholder="请输入内容" v-model="c.description">
          <template slot="prepend">描述</template>
        </el-input>
      </div>
      <el-popover
        placement="bottom"
        width="30px"
        trigger="click">
        <el-table-column>
          <el-button @click="addAction('url')">打开链接</el-button>
        </el-table-column>
        <el-table-column>
          <el-button @click="addAction('dial')">拨打电话</el-button>
        </el-table-column>
        <el-table-column>
          <el-button @click="addAction('map')">查看位置</el-button>
        </el-table-column>
<!--        <el-button slot="reference">+添加按钮</el-button>-->
      </el-popover>
      <!--  可变组件    -->
      <div v-for="s in c.suggestions">
        <div v-if="s.action.urlAction">
          <span>链接：</span>
          <el-input-number v-model="num" @change="handleChange" :min="1" :max="3" label="描述文字"></el-input-number>
          <div>
            <el-input placeholder="请输入内容" v-model="s.action.displayText">
              <template slot="prepend">按钮名</template>
            </el-input>
            <el-input placeholder="请输入内容" v-model="s.action.urlAction.openUrl.url">
              <template slot="prepend">链接</template>
            </el-input>
          </div>
        </div>
        <div v-else-if="s.action.dialerAction">
          <span>电话：</span>
          <div>
            <el-input placeholder="请输入内容" v-model="s.action.displayText">
              <template slot="prepend">按钮名</template>
            </el-input>
            <el-input placeholder="请输入内容" v-model="s.action.dialerAction.dialPhoneNumber.phoneNumber">
              <template slot="prepend">电话</template>
            </el-input>
          </div>
        </div>
        <div v-else-if="s.action.mapAction">
          <span>位置信息：</span>
          <div>
            <el-input placeholder="请输入内容" v-model="s.action.displayText">
              <template slot="prepend">按钮名</template>
            </el-input>
            <el-input placeholder="请输入内容" v-model="s.action.mapAction.showLocation.location.label">
              <template slot="prepend">标题</template>
            </el-input>
            <el-input placeholder="请输入内容" v-model="s.action.mapAction.showLocation.location.longitude">
              <template slot="prepend">经度</template>
            </el-input>
            <el-input placeholder="请输入内容" v-model="s.action.mapAction.showLocation.location.latitude">
              <template slot="prepend">纬度</template>
            </el-input>
          </div>
        </div>
        <!--  可变组件    -->
      </div>
      <el-button type="primary" style="margin-top: 20px" @click="submit">提交信息</el-button>
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
    props: ['imageUrl'],
    data () {
      return {
        imageUrl: '',
        input1: '',
        num: 1,
        num2: 1,
        num3: 1,
        urlAction: {
          action: {
            displayText: '点击前往',
            postback: {
              data: 'url'
            },
            urlAction: {
              openUrl: {
                url: ''
              }
            }
          }
        },
        dialerAction: {
          action: {
            displayText: '打电话',
            postback: {
              data: 'dialer'
            },
            dialerAction: {
              dialPhoneNumber: {
                phoneNumber: ''
              }
            }
          }
        },
        mapAction: {
          action: {
            displayText: '显示位置',
            postback: {
              data: 'map'
            },
            mapAction: {
              showLocation: {
                location: {
                  latitude: 37.4220041,
                  longitude: -122.0862515,
                  label: 'Googleplex'
                }
              }
            }
          }
        },
        content: [
          {
            media: {
              mediaUrl: '',
              mediaContentType: 'video',
              thumbnailUrl: 'https://cdn.server/path/media.png',
              thumbnailContentType: 'image/png',
              height: 'MEDIUM_HEIGHT'
            },
            title: '标题',
            description: '描述',
            suggestions: [
              {
                action: {
                  displayText: '点击前往',
                  postback: {
                    data: 'url'
                  },
                  urlAction: {
                    openUrl: {
                      url: ''
                    }
                  }
                }
              },
              {
                action: {
                  displayText: '打电话',
                  postback: {
                    data: 'dialer'
                  },
                  dialerAction: {
                    dialPhoneNumber: {
                      phoneNumber: ''
                    }
                  }
                }
              },
              {
                action: {
                  displayText: '显示位置',
                  postback: {
                    data: 'map'
                  },
                  mapAction: {
                    showLocation: {
                      location: {
                        latitude: 37.4220041,
                        longitude: -122.0862515,
                        label: 'Googleplex'
                      }
                    }
                  }
                }
              }
            ]
          }
        ]
      }
    },
    methods: {
      addAction (value) {
        switch (value) {
          case 'url': this.content[0].suggestions.push(this.urlAction);break;
          case 'dial':this.content[0].suggestions.push(this.dialerAction);break;
          case 'map':this.content[0].suggestions.push(this.mapAction);break;
        }
      },
      handleAvatarSuccess (res, file) {
        this.imageUrl = URL.createObjectURL(file.raw)
        console.log(res)
        this.content[0].media.mediaUrl=res.data.url;
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
      handleChange (value) {
        // 数组push
        var action = {
          action: {
            displayText: '点击前往',
            postback: {
              data: 'url'
            },
            urlAction: {
              openUrl: {
                url: ''
              }
            }
          }
        }
        //大于则添加，小于则减小
        if (value > this.num2) {
          this.content[0].suggestions.push(action)
          this.num2 = value
        } else if (value < this.num2) {
          this.content[0].suggestions.pop()
          this.num2 = value
        }
        console.log(this.content[0].suggestions)
      },
      submit(){
        this.$emit('saveUploadTemp',JSON.stringify(this.content));
        this.$message.success("提交成功")
      }
    }
  }
</script>
