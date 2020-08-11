<template>
    <div class="container">
        <img class="head" src="https://pp.myapp.com/ma_icon/0/icon_42284557_1517984341/96"/>

        <div class="content">
            <div class="text" v-if="type===1">
                {{content}}
            </div>
          <ele-gallery
            :source="content" v-else-if="type===2"
          ></ele-gallery>
<!--            <img class="img" :src="content" style="width: 50%" v-else-if="type===2" @click="preview(content)"/>-->
           <div id="allmap" v-else-if="type===3">
                <m-audio :src=content :showDuration="true" :block="true"></m-audio>
           </div>
          <div id="amapDemo" v-else-if="type===5">
            <el-amap vid="amapDemo"  :center="center" :map-manager="amapManager" :zoom="zoom" :events="events" class="amap-demo">
            </el-amap>
          </div>
          <div id="video" v-else-if="type===4">
            <ele-gallery
              source="https://vod-dpy.bhbcdn.com/cv-vod_b323de_1554893977654.mp4"
              type="video"
            ></ele-gallery>
<!--            <move-video-->
<!--              :itemid=content-->
<!--              class = "video-playback"-->
<!--              icon-width = "48px"-->
<!--              icon-height = "51px"-->
<!--              videoWidth = "281px"-->
<!--              videoHeight = "100%"-->
<!--              :full-screen = "false"-->
<!--              :init-icon = "initIcon"-->
<!--              :controls = "false"-->
<!--              :load-icon = "loadIcon"-->
<!--              video-url = "https://vod-dpy.bhbcdn.com/cv-vod_b323de_1554893977654.mp4"-->
<!--              image-url = "https://img-dpy.bhbcdn.com/cv-img_b1d731_1554894122628.jpg"-->
<!--            />-->
          </div>

<!--          <el-amap vid="amapDemo"  :center="center" :map-manager="amapManager" :zoom="zoom" :events="events" class="amap-demo" style="height: 280px;width: 600px">-->
<!--          </el-amap>-->
        </div>

    </div>
</template>
<style>
  .amap-demo {
    height: 300px;
  }
  video{
    width: 60%;
  }
  /*.el-dialog__body{*/
  /*  width: 100%;*/
  /*}*/
</style>
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
        props: ['id', 'type', 'content'],
        methods: {
            initIcon(res){
              console.log(res)
            },
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
