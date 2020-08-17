<template>
<!--  <el-carousel :interval="40000" type="card" width="100px">-->
<!--    <el-carousel-item v-for="item in 6" :key="item">-->
<!--      <h3 class="medium">{{ item }}</h3>-->
      <el-card :body-style="{ padding: '0px' }" style="height: 100%">
<!--        <img src="http://6emm.hxzdhn.com/img/2020/06/28/jausoellbtf.jpg" style class="image">-->
        <ele-gallery :width="220" :height="260"
          :source="getUrl(content[0].media.mediaUrl)"
        ></ele-gallery>
        <div style="padding: 10px;">
          <span>{{content[0].title}}</span>
          <div class="bottom clearfix">
            <time class="time">{{ content[0].description }}</time>
          </div>
          <div v-for="suggestion in content[0].suggestions">
            <div v-if="suggestion.action.urlAction">
            <el-link type="primary" target="_blank"  @click="action(suggestion)">{{suggestion.action.displayText}}</el-link>
            </div>
            <div v-else-if="suggestion.action.dialerAction">
              <el-popover
                placement="top-start"
                width="200"
                trigger="hover"
                :content="suggestion.action.dialerAction.dialPhoneNumber.phoneNumber">
                <el-button type="text"  slot="reference">{{suggestion.action.displayText}}</el-button>
              </el-popover>

            </div>
            <div v-else-if="suggestion.action.mapAction">
              <el-popover
                placement="top"
                width="200"
                trigger="click"
                content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
               >
                <el-amap :vid="amap-Demo"  :center="getCenter(suggestion.action.mapAction.showLocation.location)" :map-manager="amapManager" :zoom="zoom" :events="events" class="amap-demo" style="width: 600px;height: 380px">
                </el-amap>
                <el-button type="text" slot="reference">{{suggestion.action.displayText}}</el-button>
              </el-popover>

            </div>
            </div>
        </div>
      </el-card>

</template>
<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    margin-top: 20px;
    float: left;
  }
  .button2 {
    padding: 0;
    margin-top: 20px;
    margin-left: 60px;
    float: left;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
</style>

<script>
  import {amapManager} from 'vue-amap'

  export default {
    props: ['content'],
    data() {
      return {
        visible: false,
        currentDate: new Date(),
        zoom: 12,
        center: [121.59996, 31.197646],
        amapManager,
        title:'',
        events: {
          init(map) {
            AMapUI.loadUI(['overlay/SimpleMarker'], function(SimpleMarker) {
              const marker = new SimpleMarker({
                iconLabel: 'A',
                iconStyle: 'red',
                map: map,
                position: map.getCenter()
              });
            });
          }
        }
      };
    },
    methods:{
      action(action){
        window.open('http://'+action.action.urlAction.openUrl.url)//相当于target=_blank
        console.log(action)
        // this.$router.push({ path: })
      },
      getCenter(location){
        let center = [location.longitude,location.latitude]
        return center;
      },
      getUrl(url){
        // console.log('http://192.168.30.38:8080/download?fileName='+url)
        return 'http://192.168.30.38:8080/download?fileName='+url;
      }

    }
  }
</script>
