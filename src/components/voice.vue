<!-- 测试文件 -->
<template>
    <div class='m-wrap'>
        <div class="_nb_blog_block_ad">
			<div class="sound_container pointer" @click="play">
				<div class='sound' :class="{'play':isPlay}">
                    <svg v-if="isPlay" width="30" height="30" viewBox='0 0 30 30' xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
						<g>
							<path fill='none' stroke-width='2' stroke='rgb(0, 153, 255)' d='M4,12.5  A5,5 0 0 1 4,17.5'>
							</path>
							<path fill='none' stroke-width='2' stroke='rgb(0, 153, 255)' d='M8,10  A10,10 0 0 1 8,20'>
							</path>
							<path fill='none' stroke-width='2' stroke='rgb(0, 153, 255)' d='M13,7  A15,15 0 0 1 13,23'>
							</path>
						</g>
					</svg>
					<svg v-else width="30" height="30" viewBox='0 0 30 30' xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
						<g>
							<path fill='none' stroke-width='2' stroke='rgb(51, 51, 51)' d='M4,12.5  A5,5 0 0 1 4,17.5'>
							</path>
							<path fill='none' stroke-width='2' stroke='rgb(51, 51, 51)' d='M8,10  A10,10 0 0 1 8,20'>
							</path>
							<path fill='none' stroke-width='2' stroke='rgb(51, 51, 51)' d='M13,7  A15,15 0 0 1 13,23'>
							</path>
						</g>
					</svg>
				</div>
                <div class="duration hidden-text">
                    <div class="audio-name hidden-text" :class="{'com-color':isPlay}">
                        {{text}}
                    </div>
                </div>
                <div>
                    <div :class="[isPlay ? 'com-theme':'audio-time']">
                        <span>{{countDown}} /</span> <span>{{duration}}</span>
                    </div>
                    <span @click.stop="deleteAudio" class="del-audio"> × </span>
                </div>
			</div>
		</div> 
    </div>
</template>

<script>

export default {
    name:'colorPicker',
    props:{
        src:{
            type:String,
            default:""
        },
        text:{
            type:String,
            default:"录音文件"
        }
    },
    data() {
        return {
            isPlay:false,
            audio:null,
            animate:false,
            timer2:null,
            duration:null,
            countDown:"00:00",
            isStart:false,
        };
    },
    methods: {
        // 开始播放
        play(){
            window.audioList.forEach(audio=>{//开始前先关闭所有可能正在运行的实例
                audio.pause();
            })
            // if(this.audio.paused){
            //     this.audio.play();         //播放开始
            // }else{
            //     this.audio.pause()         // 播放暂停
            // }
            return this.isPlay ? this.audio.pause() : this.audio.play();
        },
        // 转成成时间
        format(s){
            var t='';
            if(s > -1){
                var min = Math.floor(s/60) % 60;
                var sec = s % 60;

                if(min < 10){t += "0";}
                t += min + ":";
                if(sec < 10){t += "0";}
                // t += sec.toFixed(2);
                t += Math.round(sec);
            }
            // t=t.replace('.','\:')
            return t;
        },
        
        // 计时播放
        countDownT () {
            var time=0;        // 秒
            this.timer2 = setInterval(() => {
                time+=1;
                var minute = parseInt(time/60);
                if (minute < 10) {minute = '0' + minute}
                var second = parseInt(time%60);
                if (second < 10) {second = '0' + second}
                this.countDown=minute+':'+second;
                if (time > Math.round(this.audio.duration)) {
                    this.isPlay = false;
                    this.audio.pause();
                    this.countDown = "00:00";
                    clearInterval(this.timer2);
                }
            },1000);
        },
        // 删除音频文件
        deleteAudio () {
            this.$emit('deleteAudio',this.text);
        }
    },
    created() {

    },
    mounted() {
        this.audio=new Audio();
        this.audio.src=this.src;
        this.audio.addEventListener('canplaythrough',()=>{
            this.duration=this.format(this.audio.duration)
        })
        // 当开始播放
        this.audio.onplay=()=>{
            this.isPlay = true;
            this.countDownT();
        }
        // 暂停播放
        this.audio.onpause=()=>{
            this.isPlay = false;
            this.audio.currentTime = 0;
            this.countDown = "00:00";
            this.timer2 && clearInterval(this.timer2)
        }
        // 播放结束了
        this.audio.onended=()=>{
            this.isPlay = false;
            this.countDown = "00:00";
            this.timer2 && clearInterval(this.timer2)
        }
        window.audioList.push(this.audio)//所有实例加入全局变量
    },
    computed: {},
    watch: {
        
    },
    components: {},
}
</script>

<style lang='scss' scoped>
    .m-wrap {
        display: inline-flex;
        .m-wrap>:not(._nb_blog_block_ad) {
            display: none !important;
            height: inherit;
        }
        .sound_container{
            /*border:1px solid black;*/
            display:inline-block;
            width:400px;
            border-radius:4px;
            background:#fff;
            border:1px solid #d9d9d9;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-right: 5px;
            position: relative;
            line-height: 30px;
            flex-wrap:nowrap;
        }
        .sound{
            margin-left:2px;
            width:30px;
            height:30px;
            /*border:1px solid black;*/
            overflow:hidden;
            transform:scale(.8);
            transform-origin:left center;
            -webkit-transform:scale(.8);
            -webkit-transform-origin:left center;
            /**/
        }
        .duration {
            margin-right: 10px;
            width: 150px;
        }
        .audio-time {
            color: #b2bbcd;
            margin-right: 25px;
        }
        .com-theme {
            margin-right: 25px;
        }
        .del-audio {
            position: absolute;
            top: 0px;
            right: 0px;
            width: 25px;
            text-align: center;
            line-height: 30px;
            display: inline-block;
            color: #b2bbcd;
            font-size: 16px;
            &:hover {
                color: #0099FF;
            }
        }
        .play{
            animation:sound_play 1s steps(3,start) infinite ;
            -webkit-animation:sound_play 1s steps(3,start) infinite ;
        }
        .sound.play svg{
            opacity:.7;
        }
        @keyframes sound_play{
            0%{

                width:2px;
            }
            100%{

                width:17px;
            }
        }
        @-webkit-keyframes sound_play{
            0%{

                width:2px;
            }
            100%{

                width:17px;
            }
        }
    }
    .hidden-text {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .com-color {color: #0099FF}
</style>