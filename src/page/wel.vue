<template>
  <div>
    <basic-container>
      <div class="banner-text">
        <span>
          <avue-data-display :option="option"></avue-data-display>
        </span>
        <span>
          <el-collapse v-model="activeNames">
            <el-collapse-item title="功能集合" name="1">
              <div>货物管理</div>
              <div>待设计...</div>
            </el-collapse-item>
          </el-collapse>
        </span>
      </div>
    </basic-container>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';
  import { totalData } from '@/api/my/mygoods'

  export default {
    name: 'wel',
    data() {
      return {
        activeNames: ['1', '2', '3', '4'],
        DATA: [],
        text: '',
        actor: '',
        count: 0,
        isText: false,
        option: {
          span:4,
          data: [
            {
              click: function (item) {
                debugger
                alert(JSON.stringify(item));
              },
              title: '货物数量',
              count: 0,
              icon: 'el-icon-tickets',
              target:'_blank'
            },
            {
              click: function (item) {
                alert(JSON.stringify(item));
              },
              title: '货物总价',
              count: 0,
              icon: 'el-icon-success',
              target:'_blank'
            }
          ]
        }
      }
    },
    created() {
      this.initData()
    },
    computed: {
      ...mapGetters(['website'])
    },
    methods: {
      initData() {
        totalData().then(response => {
          debugger
          console.info(response);
        })
      }
    }
  }
</script>

<style scoped="scoped" lang="scss">
  .wel-contailer {
    position: relative;
  }

  .banner-text {
    position: relative;
    padding: 0 20px;
    font-size: 20px;
    text-align: center;
    color: #333;
  }

  .banner-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.8;
    display: none;
  }

  .actor {
    height: 250px;
    overflow: hidden;
    font-size: 18px;
    color: #333;
  }

  .actor:after {
    content: '';
    width: 3px;
    height: 25px;
    vertical-align: -5px;
    margin-left: 5px;
    background-color: #333;
    display: inline-block;
    animation: blink 0.4s infinite alternate;
  }

  .typeing:after {
    animation: none;
  }

  @keyframes blink {
    to {
      opacity: 0;
    }
  }
</style>
