<template>
    <div class="container">
        <img class="head" src="https://pp.myapp.com/ma_icon/0/icon_42284557_1517984341/96"/>

        <div class="content">
            <div class="text" v-if="type===1">
                {{content}}
            </div>
            <img class="img" :src="content" v-else-if="type===2" @click="preview(content)"/>
           <div id="allmap" v-else-if="type===3">
                <m-audio :src=content :showDuration="true" :block="true"></m-audio>
           </div>
          <div id="amapDemo" v-else-if="type===4">
            <el-amap vid="amapDemo"  :center="center" :map-manager="amapManager" :zoom="zoom" :events="events" class="amap-demo">
            </el-amap>
          </div>
        </div>

    </div>
</template>
<style>
  .amap-demo {
    height: 300px;
  }
</style>
<!--<script src="https://unpkg.com/vue/dist/vue.js"></script>-->
<!-- 引入组件库 -->
<!--<script src="https://unpkg.com/vue-amap/dist/index.js"></script>-->
<script>
      //点击预览
    // import ImagePreview from "vant/lib/image-preview";
     import voice from "@/components/voice";
     import { amapManager } from 'vue-amap'
      import { lazyAMapApiLoaderInstance } from 'vue-amap';
      //  let amapManager = new VueAMap.AMapManager();
    export default {
        name: "LeftItem",
        comments:{voice},
        data: ()=> {
          return {
            zoom: 12,
            center: [121.59996, 31.197646],
            amapManager,
            events: {
              init(map) {
                loadUI.load(['overlay/SimpleMarker'], function(SimpleMarker) {
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
        props: ['id', 'type', 'content'],
        methods: {

            preview(url){
                ImagePreview([url])
            }
        }
    }
</script>

<style scoped lang="scss">
    .container {
        display: flex;
        padding: 10px 15px;
        margin-right: 60px;

        .head {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            border: 1px solid #eee;
        }

        .content {
            margin-left: 10px;
            margin-top: 10px;

            .text {
                background-color: deepskyblue;
                border-bottom-right-radius: 10px;
                padding: 5px 5px;
                font-size: 14px;
                color: #fff;
            }

            .img {
                width: 100px;
                border-bottom-right-radius: 10px;
                border-top-right-radius: 10px;
                border-bottom-left-radius: 10px;
            }
        }

    }
</style>
