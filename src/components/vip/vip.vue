<template>
  <div class="VIP">
      <Top></Top>
      <Navs :num="3"></Navs>
      <div class="mian">
      
          <div class="content">
          <dl @click="info(index)"  v-for="item,index in vipInfo" :key="index">
            <dt>
              <img src="../../assets/img/bdfl.jpg" alt="">
            </dt>
            <dd>
              <div class="detail">
                <p>{{item.name[0]}} </p>
                <b>详情</b>
              </div>
              <p>{{item.name[1][2]}} 500万元 </p>
              <span>Supreme courtesy. Watch indispensable like air, top as basic. </span>
              <span>{{item.remark}}</span>
            </dd>
          </dl>
          <!--<dl @click="info()" v-for="item,index in vipInfo" :key="index">-->
            <!--<dt>-->
              <!--<img :src="item.icon_pic" @click="$router.push({name:'vip/detail',params:{key:index}})">-->
            <!--</dt>-->
            <!--<dd>-->
              <!--<div class="detail">-->
                <!--<p>{{item.name}} </p>-->
                <!--<b>详情</b>-->
              <!--</div>-->
              <!--<p>瑞时卡 {{item.money}} </p>-->
              <!--<span>Supreme courtesy. Watch indispensable like air, top as basic. </span>-->
              <!--<span>至高礼遇。腕表如空气，顶配即标配。</span>-->
            <!--</dd>-->
          <!--</dl>-->
        </div>
      </div>
      <Foot></Foot>
  </div>
</template>
<script>
 import Top from '@/components/top'
 import Navs from '@/components/nav'
 import Foot from '@/components/foot'
  export default {
   data(){
     return{
       vipInfo:[
           {
                "code": "lev1",
                "description": "<p>入會成功後，會員可任意使用、換戴該等級範圍內任一手表，不限次數和單次佩戴時長。</p><p><strong>1.1免費腕表保養服務</strong></p><p>每一年度，瑞時薈為有效會員提供價值不等的自有腕表保養券（價值￥3000元），</p><p>該券可累積消費，不設找贖，不得兌換其它服務，僅限用于自有手表保養服務。</p><p>（手表保養費用標準參考《手表保養清單》）</p><p><strong>1.2免費腕表鑒定服務</strong></p><p>每一年度，瑞時薈為會員提供免費第三方國際權威機構腕表鑒定服務（含鑒定證書）， 價值￥1000/次（2次）。</p><p>（費用標準參考《手表保養清單》）。</p><p><strong>1.3 免費腕表寄售服務 </strong></p><p>瑞時薈為會員提供免費平台腕表寄售，不收取手續費。</p><p><strong>1.4免費腕表換表帶服務</strong></p><p>瑞時薈為會員提供表帶免費更換服務（2條），</p><p>該服務僅限于會員在本會更換配帶手表時使用。（手表保養費用標準參考《手表保養清單》）。</p><p><strong>2.&nbsp;附屬權益</strong></p><p><strong>2.1主要機場VIP廳</strong></p><p>成為瑞時薈會員，即可享(北京、上海、廣州、深圳）機場貴賓休息廳服務。<strong style=\"color: rgb(192, 0, 0);\">不限次數。</strong></p><p><strong>2.2瑞時會高端私人俱樂部場地使用</strong></p><p>瑞時薈旗下高端私人俱樂部供Swiss Time VIP會員優先使用，全球俱樂部均實行預約制，供會員進行休閑娛樂、貴賓招待及私人派對...等各類型活動。</p><p><strong>2.3免費雪茄及紅酒享用</strong></p><p>瑞時薈旗下高端私人俱樂部為會員免費供應紅酒及雪茄，與好友共享美好時光。</p><p><strong>2.4免費全國高爾夫場地使用</strong></p><p>瑞時薈為會員免費提供全國高爾夫場地的使用服務（預約制、限會員本人使用，2場/年）。</p><p><strong>2.5日內瓦鐘表展私人定制遊</strong></p><p>瑞時薈與世界頂級腕表品牌建立友好合作關系，瑞時薈會員年消費200萬及以上，即可受邀參加瑞士頂級腕表品牌表廠鑒賞之旅，感受瑞士頂級腕表風采。</p><p><strong>2.6免費參與瑞時會定期舉辦高端城市派對</strong></p><p>瑞時薈定期舉辦私人高端派對，鍾表品鑒會，會員可攜朋友參加（人數需提前預約）。</p><p><strong>2.7尊享全國7*24小時私人腕表管家服務</strong></p><p>瑞時薈全球高端腕錶俱樂部為會員免費提供7*24小時腕表管家式服務，</p><p><strong>2.8生日神秘禮物</strong></p><p>會員生日當天購買腕表，均享受生日特殊折扣，並送上會員專屬定制禮物。</p><p><strong>以上會員權益均由您的私人腕表管家為您預約及管理，</strong></p><p><strong>讓您365天隨時隨刻，盡享高端生活。</strong></p><p><strong>3.年費相关</strong></p><p><strong>3.1 根據會員等級不同收取相應年費</strong></p><p>年費標準如下：</p><p>￥12888元（價值：保養￥3000元+鑒定：￥1000*2+&nbsp;表帶：2 + 寄售：3%服務費+高爾夫：2（￥5000元），</p><p>年費所包含的會員權益不定期增加中，增加項將不另計費用。</p><p class=\"ql-align-justify\"><strong>瑞時薈，給您至新至尊的頂級生活方式體驗。</strong></p>",
                "icon_fid": "6aa22d5993ad85b2f11a216e7558183da706a79e",
                "icon_pic": "https://api.swisstimevip.com/user/v1/vip/5bbe8ec8cfab0c7a62e95cb47c47ad73381b9339.jpg?source=1",
                "is_goods_name": "加入",
                "is_member_auth": 0,
                "is_member_name": "未加入",
                "join_time": 0,
                "lang": "zh-cn",
                "logo_fid": "",
                "logo_pic": "",
                "money": "￥200000.00",
                "name": "Classic card 经典卡",
                "remark": "顶级腕表发烧友。戴名表，遇繁华"
            },
            {
                "code": "lev2",
                "description": "<p>入會成功後，會員可任意使用、換戴該等級範圍內任一手表，不限次數和單次佩戴時長。</p><p><strong>1.1免費腕表保養服務</strong></p><p>每一年度，瑞時薈為有效會員提供價值不等的自有腕表保養券（價值￥5000元)，</p><p>該券可累積消費，不設找贖，不得兌換其它服務，僅限用于自有手表保養服務。</p><p>（手表保養費用標準參考《手表保養清單》）。</p><p><strong>1.2免費腕表鑒定服務</strong></p><p>每一年度，瑞時薈為會員提供免費第三方國際權威機構腕表鑒定服務（含鑒定證書）， 價值￥1000/次（3次)。</p><p>（費用標準參考《手表保養清單》）。</p><p><strong>1.3 免費腕表寄售服務 </strong></p><p>瑞時薈為會員提供免費平台腕表寄售，不收取手續費。</p><p><strong>1.4 免費腕表換表帶服務</strong></p><p>瑞時薈為會員提供表帶免費更換服務（3條)，</p><p>該服務僅限于會員在本會更換配帶手表時使用。（手表保養費用標準參考《手表保養清單》）。</p><p><strong>2.&nbsp;附屬權益</strong></p><p><strong>2.1主要機場VIP廳</strong></p><p>成為瑞時薈會員，即可享(北京、上海、廣州、深圳）機場貴賓休息廳服務。<strong style=\"color: rgb(192, 0, 0);\">不限次數。</strong></p><p><strong>2.2瑞時會高端私人俱樂部場地使用</strong></p><p>瑞時薈旗下高端私人俱樂部供Swiss Time VIP會員優先使用，全球俱樂部均實行預約制，供會員進行休閑娛樂、貴賓招待及私人派對...等各類型活動。</p><p><strong>2.3免費雪茄及紅酒享用</strong></p><p>瑞時薈旗下高端私人俱樂部為會員免費供應紅酒及雪茄，與好友共享美好時光。</p><p><strong>2.4免費全國高爾夫場地使用</strong></p><p>瑞時薈為會員免費提供全國高爾夫場地的使用服務（預約制、限會員本人使用，3場/年）。</p><p><strong>2.5日內瓦鐘表展私人定制遊</strong></p><p>瑞時薈與世界頂級腕表品牌建立友好合作關系，瑞時薈會員年消費200萬及以上，即可受邀參加瑞士頂級腕表品牌表廠鑒賞之旅，感受瑞士頂級腕表風采。</p><p><strong>2.6免費參與瑞時會定期舉辦高端城市派對</strong></p><p>瑞時薈定期舉辦私人高端派對，鍾表品鑒會，會員可攜朋友參加（人數需提前預約）。</p><p><strong>2.7尊享全國7*24小時私人腕表管家服務</strong></p><p>瑞時薈全球高端腕錶俱樂部為會員免費提供7*24小時腕表管家式服務，</p><p><strong>2.8生日神秘禮物</strong></p><p>會員生日當天購買腕表，均享受生日特殊折扣，並送上會員專屬定制禮物。</p><p><strong>以上會員權益均由您的私人腕表管家為您預約及管理，</strong></p><p><strong>讓您365天隨時隨刻，盡享高端生活。</strong></p><p><strong>3.年費相关</strong></p><p><strong>3.1 根據會員等級不同收取相應年費</strong></p><p>年費標準如下：</p><p>￥18888元（價值：保養￥5000元+鑒定：￥1000*3+&nbsp;表帶：3&nbsp;+ 寄售：3%服務費+高爾夫：3（￥7500元）。</p><p><strong>瑞時薈，給您至新至尊的頂級生活方式體驗。</strong></p>",
                "icon_fid": "7f62fa842abea22e51725e23c144f04c745a41f8",
                "icon_pic": "https://api.swisstimevip.com/user/v1/vip/2643456265ebaaa113ddbbaff37fed3203f6b2e3.jpg?source=1",
                "is_goods_name": "加入",
                "is_member_auth": 0,
                "is_member_name": "未加入",
                "join_time": 0,
                "lang": "zh-cn",
                "logo_fid": "",
                "logo_pic": "",
                "money": "￥300000.00",
                "name": "Exquisite card 精湛卡",
                "remark": "入门级腕表藏家。藏阅时光之精湛"
            },
            {
                "code": "lev3",
                "description": "<p>入會成功後，會員可任意使用、換戴該等級範圍內任一手表，不限次數和單次佩戴時長。</p><p><strong>1.1免費腕表保養服務</strong></p><p>每一年度，瑞時薈為有效會員提供價值不等的自有腕表保養券(價值￥8000元），</p><p>該券可累積消費，不設找贖，不得兌換其它服務，僅限用于自有手表保養服務。</p><p>（手表保養費用標準參考《手表保養清單》）</p><p><strong>1.2免費腕表鑒定服務</strong></p><p>每一年度，瑞時薈為會員提供免費第三方國際權威機構腕表鑒定服務（含鑒定證書）， 價值￥1000/次 (5次）。</p><p>（費用標準參考《手表保養清單》）</p><p><strong>1.3免費腕表寄售服務 </strong></p><p>瑞時薈為會員提供免費平台腕表寄售，不收取手續費。</p><p><strong>1.4 免費腕表換表帶服務</strong></p><p>瑞時薈為會員提供表帶免費更換服務 (5條），</p><p>該服務僅限于會員在本會更換配帶手表時使用。（手表保養費用標準參考《手表保養清單》）。</p><p><strong>2.&nbsp;附屬權益</strong></p><p><strong>2.1主要機場VIP廳</strong></p><p>成為瑞時薈會員，即可享(北京、上海、廣州、深圳）機場貴賓休息廳服務。<strong style=\"color: rgb(192, 0, 0);\">不限次數。</strong></p><p><strong>2.2瑞時會高端私人俱樂部場地使用</strong></p><p>瑞時薈旗下高端私人俱樂部供Swiss Time VIP會員優先使用，全球俱樂部均實行預約制，供會員進行休閑娛樂、貴賓招待及私人派對...等各類型活動。</p><p><strong>2.3免費雪茄及紅酒享用</strong></p><p>瑞時薈旗下高端私人俱樂部為會員免費供應紅酒及雪茄，與好友共享美好時光。</p><p><strong>2.4免費全國高爾夫場地使用</strong></p><p>瑞時薈為會員免費提供全國高爾夫場地的使用服務（預約制、限會員本人使用）。</p><p>經典卡：2場/年，精湛卡：3場/年，卓越卡：5場/年，</p><p>大師卡：10場/年，巔峰卡：20場/年，瑞時卡：50場/年）</p><p><strong>2.5日內瓦鐘表展私人定制遊</strong></p><p>瑞時薈與世界頂級腕表品牌建立友好合作關系，瑞時薈會員年消費200萬及以上，即可受邀參加瑞士頂級腕表品牌表廠鑒賞之旅，感受瑞士頂級腕表風采。</p><p><strong>2.6免費參與瑞時會定期舉辦高端城市派對</strong></p><p>瑞時薈定期舉辦私人高端派對，鍾表品鑒會，會員可攜朋友參加（人數需提前預約）。</p><p><strong>2.7尊享全國7*24小時私人腕表管家服務</strong></p><p>瑞時薈全球高端腕錶俱樂部為會員免費提供7*24小時腕表管家式服務，</p><p><strong>2.8生日神秘禮物</strong></p><p>會員生日當天購買腕表，均享受生日特殊折扣，並送上會員專屬定制禮物。</p><p><strong>以上會員權益均由您的私人腕表管家為您預約及管理，</strong></p><p><strong>讓您365天隨時隨刻，盡享高端生活。</strong></p><p><strong>3.年費相关</strong></p><p><strong>3.1 根據會員等級不同收取相應年費</strong></p><p>年費標準如下：</p><p>￥28888元（價值：保養￥8000元+鑒定：￥1000*5+&nbsp;表帶：5 + 寄售：3%服務費+高爾夫：5（￥12500元），</p><p>年費所包含的會員權益不定期增加中，增加項將不另計費用。</p><p><strong>瑞時薈，給您至新至尊的頂級生活方式體驗。</strong></p>",
                "icon_fid": "5c341ecc3f514add38163a154efe60a7262bdba1",
                "icon_pic": "https://api.swisstimevip.com/user/v1/vip/508ab7b7b09ac6d9650fb7f4fb945a47dc8059f4.jpg?source=1",
                "is_goods_name": "加入",
                "is_member_auth": 0,
                "is_member_name": "未加入",
                "join_time": 0,
                "lang": "zh-cn",
                "logo_fid": "",
                "logo_pic": "",
                "money": "￥500000.00",
                "name": "Prominent card 卓越卡",
                "remark": "资深级腕表藏家。鉴表，品年华"
            },
            {
                "code": "lev4",
                "description": "<p>入會成功後，會員可任意使用、換戴該等級範圍內任一手表，不限次數和單次佩戴時長。</p><p><strong>1.1免費腕表保養服務</strong></p><p>每一年度，瑞時薈為有效會員提供價值不等的自有腕表保養券（價值￥10000元），</p><p>該券可累積消費，不設找贖，不得兌換其它服務，僅限用于自有手表保養服務。</p><p>（手表保養費用標準參考《手表保養清單》）</p><p><strong>1.2免費腕表鑒定服務</strong></p><p>每一年度，瑞時薈為會員提供免費第三方國際權威機構腕表鑒定服務（含鑒定證書）， 價值￥1000/次（6次），</p><p>（費用標準參考《手表保養清單》）。</p><p><strong>1.3 免費腕表寄售服務 </strong></p><p>瑞時薈為會員提供免費平台腕表寄售，不收取手續費。</p><p><strong>1.4 免費腕表換表帶服務</strong></p><p>瑞時薈為會員提供表帶免費更換服務（6條），</p><p>該服務僅限于會員在本會更換配帶手表時使用。（手表保養費用標準參考《手表保養清單》）</p><p><strong>2.&nbsp;附屬權益</strong></p><p><strong>2.1主要機場VIP廳</strong></p><p>成為瑞時薈會員，即可享(北京、上海、廣州、深圳）機場貴賓休息廳服務。<strong style=\"color: rgb(192, 0, 0);\">不限次數。</strong></p><p><strong>2.2瑞時會高端私人俱樂部場地使用</strong></p><p>瑞時薈旗下高端私人俱樂部供Swiss Time VIP會員優先使用，全球俱樂部均實行預約制，供會員進行休閑娛樂、貴賓招待及私人派對...等各類型活動。</p><p><strong>2.3免費雪茄及紅酒享用</strong></p><p>瑞時薈旗下高端私人俱樂部為會員免費供應紅酒及雪茄，與好友共享美好時光。</p><p><strong>2.4免費全國高爾夫場地使用</strong></p><p>瑞時薈為會員免費提供全國高爾夫場地的使用服務（預約制、限會員本人使用，10場/年）。</p><p><strong>2.5日內瓦鐘表展私人定制遊</strong></p><p>瑞時薈與世界頂級腕表品牌建立友好合作關系，瑞時薈會員年消費200萬及以上，即可受邀參加瑞士頂級腕表品牌表廠鑒賞之旅，感受瑞士頂級腕表風采。</p><p><strong>2.6免費參與瑞時會定期舉辦高端城市派對</strong></p><p>瑞時薈定期舉辦私人高端派對，鍾表品鑒會，會員可攜朋友參加（人數需提前預約）。</p><p><strong>2.7尊享全國7*24小時私人腕表管家服務</strong></p><p>瑞時薈全球高端腕錶俱樂部為會員免費提供7*24小時腕表管家式服務，</p><p><strong>2.8生日神秘禮物</strong></p><p>會員生日當天購買腕表，均享受生日特殊折扣，並送上會員專屬定制禮物。</p><p><strong>以上會員權益均由您的私人腕表管家為您預約及管理，</strong></p><p><strong>讓您365天隨時隨刻，盡享高端生活。</strong></p><p><strong>3.年費相关</strong></p><p><strong>3.1 根據會員等級不同收取相應年費</strong></p><p>年費標準如下：</p><p>￥38888元（價值：保養￥10000元+鑒定：￥1000*5+&nbsp;表帶：6&nbsp;+寄售：3%服務費+高爾夫：10（￥25000元）</p><p>年費所包含的會員權益不定期增加中，增加項將不另計費用。</p><p><strong>瑞時薈，給您至新至尊的頂級生活方式體驗。</strong></p>",
                "icon_fid": "ad84d10ddc0ee2e375be5ceb9f04f4c2c439c2fe",
                "icon_pic": "https://api.swisstimevip.com/user/v1/vip/d278e01f2baa67405ec19155c59c59075c9c74d9.jpg?source=1",
                "is_goods_name": "加入",
                "is_member_auth": 0,
                "is_member_name": "未加入",
                "join_time": 0,
                "lang": "zh-cn",
                "logo_fid": "",
                "logo_pic": "",
                "money": "￥1000000.00",
                "name": "Master card 大师卡",
                "remark": "顶级腕表饕客。阅表无数，领袖意见"
            },
            {
                "code": "lev5",
                "description": "<p>入會成功後，會員可任意使用、換戴該等級範圍內任一手表，不限次數和單次佩戴時長。</p><p><strong>1.1免費腕表保養服務</strong></p><p>每一年度，瑞時薈為有效會員提供價值不等的自有腕表保養券（價值￥20000元），</p><p>該券可累積消費，不設找贖，不得兌換其它服務，僅限用于自有手表保養服務。</p><p>（手表保養費用標準參考《手表保養清單》）。</p><p><strong>1.2免費腕表鑒定服務</strong></p><p>每一年度，瑞時薈為會員提供免費第三方國際權威機構腕表鑒定服務（含鑒定證書）， 價值￥1000/次（8次），</p><p>（費用標準參考《手表保養清單》）。</p><p><strong>1.3 免費腕表寄售服務 </strong></p><p>瑞時薈為會員提供免費平台腕表寄售，不收取手續費。</p><p><strong>1.4 免費腕表換表帶服務</strong></p><p>瑞時薈為會員提供表帶免費更換服務（8條），</p><p>該服務僅限于會員在本會更換配帶手表時使用。（手表保養費用標準參考《手表保養清單》）</p><p><strong>2.&nbsp;附屬權益</strong></p><p><strong>2.1主要機場VIP廳</strong></p><p>成為瑞時薈會員，即可享(北京、上海、廣州、深圳）機場貴賓休息廳服務。<strong style=\"color: rgb(192, 0, 0);\">不限次數。</strong></p><p><strong>2.2瑞時會高端私人俱樂部場地使用</strong></p><p>瑞時薈旗下高端私人俱樂部供Swiss Time VIP會員優先使用，全球俱樂部均實行預約制，供會員進行休閑娛樂、貴賓招待及私人派對...等各類型活動。</p><p><strong>2.3免費雪茄及紅酒享用</strong></p><p>瑞時薈旗下高端私人俱樂部為會員免費供應紅酒及雪茄，與好友共享美好時光。</p><p><strong>2.4免費全國高爾夫場地使用</strong></p><p>瑞時薈為會員免費提供全國高爾夫場地的使用服務（預約制、限會員本人使用，20場/年）。</p><p><strong>2.5日內瓦鐘表展私人定制遊</strong></p><p>瑞時薈與世界頂級腕表品牌建立友好合作關系，瑞時薈會員年消費200萬及以上，即可受邀參加瑞士頂級腕表品牌表廠鑒賞之旅，感受瑞士頂級腕表風采。</p><p><strong>2.6免費參與瑞時會定期舉辦高端城市派對</strong></p><p>瑞時薈定期舉辦私人高端派對，鍾表品鑒會，會員可攜朋友參加（人數需提前預約）。</p><p><strong>2.7尊享全國7*24小時私人腕表管家服務</strong></p><p>瑞時薈全球高端腕錶俱樂部為會員免費提供7*24小時腕表管家式服務，</p><p><strong>2.8生日神秘禮物</strong></p><p>會員生日當天購買腕表，均享受生日特殊折扣，並送上會員專屬定制禮物。</p><p><strong>以上會員權益均由您的私人腕表管家為您預約及管理，</strong></p><p><strong>讓您365天隨時隨刻，盡享高端生活。</strong></p><p><strong>3.年費相关</strong></p><p><strong>3.1 根據會員等級不同收取相應年費</strong></p><p>年費標準如下：</p><p>￥58888元（價值：保養￥20000元+鑒定：￥1000*5+&nbsp;表帶：8&nbsp;+寄售：3%服務費+高爾夫：20（￥50000元），</p><p>年費所包含的會員權益不定期增加中，增加項將不另計費用。</p><p><strong>瑞時薈，給您至新至尊的頂級生活方式體驗。</strong></p>",
                "icon_fid": "0b2a647a7921bbf69a73a5eb22b40057be70c052",
                "icon_pic": "https://api.swisstimevip.com/user/v1/vip/f4a1744de2dbfc36e28deb1d88c3fbe2552bf568.jpg?source=1",
                "is_goods_name": "加入",
                "is_member_auth": 0,
                "is_member_name": "未加入",
                "join_time": 0,
                "lang": "zh-cn",
                "logo_fid": "",
                "logo_pic": "",
                "money": "￥2000000.00",
                "name": "Peakedness card 巅峰卡",
                "remark": "百变表王。腕表即风格"
            },
            {
                "code": "lev6",
                "description": "<p>入會成功後，會員可任意使用、換戴該等級範圍內任一手表，不限次數和單次佩戴時長。</p><p><strong>1.1免費腕表保養服務</strong></p><p>每一年度，瑞時薈為有效會員提供價值不等的自有腕表保養券（價值￥50000元），</p><p>該券可累積消費，不設找贖，不得兌換其它服務，僅限用于自有手表保養服務。</p><p>（手表保養費用標準參考《手表保養清單》）</p><p><strong>1.2免費腕表鑒定服務</strong></p><p>每一年度，瑞時薈為會員提供免費第三方國際權威機構腕表鑒定服務（含鑒定證書）， 價值￥1000/次（10次）。</p><p>（費用標準參考《手表保養清單》）</p><p><strong>1.3 免費腕表寄售服務 </strong></p><p>瑞時薈為會員提供免費平台腕表寄售，不收取手續費。</p><p><strong>1.4 免費腕表換表帶服務</strong></p><p>瑞時薈為會員提供表帶免費更換服務（10條），</p><p>該服務僅限于會員在本會更換配帶手表時使用。（手表保養費用標準參考《手表保養清單》）</p><p><strong>2.&nbsp;附屬權益</strong></p><p><strong>2.1主要機場VIP廳</strong></p><p>成為瑞時薈會員，即可享(北京、上海、廣州、深圳）機場貴賓休息廳服務。<strong style=\"color: rgb(192, 0, 0);\">不限次數。</strong></p><p><strong>2.2瑞時會高端私人俱樂部場地使用</strong></p><p>瑞時薈旗下高端私人俱樂部供Swiss Time VIP會員優先使用，全球俱樂部均實行預約制，供會員進行休閑娛樂、貴賓招待及私人派對...等各類型活動。</p><p><strong>2.3免費雪茄及紅酒享用</strong></p><p>瑞時薈旗下高端私人俱樂部為會員免費供應紅酒及雪茄，與好友共享美好時光。</p><p><strong>2.4免費全國高爾夫場地使用</strong></p><p>瑞時薈為會員免費提供全國高爾夫場地的使用服務（預約制、限會員本人使用，50場/年）。</p><p><strong>2.5日內瓦鐘表展私人定制遊</strong></p><p>瑞時薈與世界頂級腕表品牌建立友好合作關系，瑞時薈會員年消費200萬及以上，即可受邀參加瑞士頂級腕表品牌表廠鑒賞之旅，感受瑞士頂級腕表風采。</p><p><strong>2.6免費參與瑞時會定期舉辦高端城市派對</strong></p><p>瑞時薈定期舉辦私人高端派對，鍾表品鑒會，會員可攜朋友參加（人數需提前預約）。</p><p><strong>2.7尊享全國7*24小時私人腕表管家服務</strong></p><p>瑞時薈全球高端腕錶俱樂部為會員免費提供7*24小時腕表管家式服務，</p><p><strong>2.8生日神秘禮物</strong></p><p>會員生日當天購買腕表，均享受生日特殊折扣，並送上會員專屬定制禮物。</p><p><strong>以上會員權益均由您的私人腕表管家為您預約及管理，</strong></p><p><strong>讓您365天隨時隨刻，盡享高端生活。</strong></p><p><strong>3.年費相关</strong></p><p><strong>3.1 根據會員等級不同收取相應年費</strong></p><p>年費標準如下：</p><p>￥88888元（價值：保養￥50000元+鑒定：￥1000*5+&nbsp;表帶：8&nbsp;+寄售：3%服務費+高爾夫：30（￥75000元）</p><p>年費所包含的會員權益不定期增加中，增加項將不另計費用。</p><p><strong>瑞時薈，給您至新至尊的頂級生活方式體驗。</strong></p>",
                "icon_fid": "d0e54e7cdd7af6316f5f0e6a6a20531a997ef530",
                "icon_pic": "https://api.swisstimevip.com/user/v1/vip/51eb5e510fbc24585199b44cedb18043efa09232.png?source=1",
                "is_goods_name": "加入",
                "is_member_auth": 0,
                "is_member_name": "未加入",
                "join_time": 0,
                "lang": "zh-cn",
                "logo_fid": "",
                "logo_pic": "",
                "money": "￥5000000.00",
                "name": "Swiss Time VIP瑞时卡",
                "remark": "百变表王。腕表即风格"
            }
        ],
     }
   },
   methods:{
     info(resut){
      console.log(resut)
       this.$router.push({
           path:'/vip/detail',
           query:{
              dataObj:resut
           }
       })
     },
   },
    mounted(){
     setTimeout(()=>{
       /**
        * vip列表
        */
//       self.$http.get(`${process.env.API.VIP}/vip/memlevel`).then(res=>{
//         if(res.data.errcode=='0'){
////           self.vipInfo = res.data.data.data
//           console.log(res.data.data.data)
//         }
//       }).catch(err=>{
//         console.log(err)
//       })
     },500)
     let str;
     let str1;
     let arr=[];
     for(let i=0;i<this.vipInfo.length;i++){
      str=this.vipInfo[i].name.split(" ")
        str1=str[0]+str[1];
        arr[i]=[str1,str]
        this.vipInfo[i].name=arr[i];
      }
    },
    components: {
      Top,  //头部
      Navs, //导航
      Foot  //公共底部
    },
  }
</script>
<style type="text/less" lang="less" scoped>
  .VIP{
    .mian{
      max-width: 1200px;
      min-width: 1000px;
      padding: 0 10px;
      padding-top: 50px;
      box-sizing: border-box;
      margin: 0 auto;
      background: #fff;
      .content{
        padding-top:160px;
        height: auto;
        margin: 0 auto;
        background: url("../../assets/img/vip/back.png");
        background-size: 100%;
        text-agin:center;
        dl{
          width: 555px;
          padding-bottom: 70px;
          margin: 0 auto;
          dt{
            img{
              border-radius: 5px;
              width: 100%;
              height: 352px;
              cursor: pointer;
              box-shadow: 1px 5px 18px #000;
            }
          }
          dd{
            .detail{
              position: relative;
              text-align: center;
              margin: 0 auto;
              display: flex;
              justify-content: center;
              p{
                font-size: 32px;
                padding-top: 30px;

              }
            }
            b{
              font-weight: normal;
              margin-top: 38px;
              border-radius: 3px;
              width: 72px;
              height: 23px;
              background-color: #000000;
              text-align: center;
              line-height: 23px;
              color: #fff;
              font-size: 14px;
              display: inline-block;
              margin-left: 38px;
            }
            p{
              text-align: center;
              font-size: 20px;
              line-height: 36px;
            }
            span{
              display: block;
              text-align: center;
              padding-top: 16px;
              color: #606060;
              &:first-child{
                padding-top: 25px;
              }
            }
          }
        }
      }
    }
  }
</style>
