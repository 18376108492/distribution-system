<template xmlns:el-col="http://www.w3.org/1999/html">
    <div>
        <el-container class="home-container">
            <el-aside  width="200px" class="home_aside" >
                <div class="home_title">分销系统</div>
                <el-menu
                        @open="handleOpen"
                        @close="handleClose"
                        background-color="#545c64"
                        text-color="#fff"
                        active-text-color="#ffd04b">
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-menu"></i>
                            <span>导航一</span>
                        </template>
                        <el-menu-item-group>
                            <template slot="title">分组一</template>
                            <el-menu-item index="1-1">选项1</el-menu-item>
                            <el-menu-item index="1-2">选项2</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>

                </el-menu>
            </el-aside>

<!--  头部-->
            <el-container>
                <el-header height="110px" class="home_header">
                       <div>


                           <el-row :gutter="8">
                               <el-col :span="1"> <el-icon class="el-icon-s-unfold"></el-icon></el-col>
                               <el-col :span="4"><el-input  style="width: 180px" v-model="inputKeyWord" placeholder="请输入搜索内容"></el-input></el-col>
                               <el-col :span="9"><div style="width: 250px;color: #FFFFFF">a</div></el-col>
                               <el-col :span="6">
                                        <el-button size="mini"  type="primary"><el-icon class="el-icon-arrow-down"></el-icon></el-button>
                                        <el-button size="mini" ><el-icon class="el-icon-edit-outline"></el-icon></el-button>
                                        <el-button size="mini"><el-icon class="el-icon-lock"></el-icon></el-button>
                                        <el-button size="mini"><el-icon class="el-icon-chat-dot-square"></el-icon></el-button>
                                        <el-button size="mini" ><i class="fa fa-arrows-alt"></i></el-button>

                               </el-col>
                               <el-col :span="2">
                                   <el-dropdown class="userInfo" @command="commandHandler">
                                   <span class="el-dropdown-link">
                                   <i><img src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" alt=""></i>{{user.name}}
                                   </span>
                                       <el-dropdown-menu slot="dropdown">
                                           <el-dropdown-item command="userinfo">个人中心</el-dropdown-item>
                                           <el-dropdown-item command="setting">设置</el-dropdown-item>
                                       </el-dropdown-menu>
                                   </el-dropdown>
                               </el-col>
                               <el-col :span="2"  >
                                 <el-button size="mini" type="primary">退出登入</el-button>
                               </el-col>

                           </el-row>

                           <el-row :gutter="8">
                               <el-col :span="22">
                                   <el-menu class="el-menu-demo" mode="horizontal" @select="handleSelect">
                                       <el-menu-item index="1">首页</el-menu-item>
                                       <el-menu-item index="2">处理中心 <el-icon @onclick="closeTag" class="el-icon-close"></el-icon></el-menu-item>
                                   </el-menu>
                               </el-col>
                               <el-col :span="2">
                                   <el-button size="mini" type="primary" icon="el-icon-arrow-down">更多</el-button>
                               </el-col>
                           </el-row>

                       </div>

                </el-header>
<!-- 主页面-->
                <el-main class="home_main">
                <!--  搜索栏    -->
                    <div >
                    <div>
                        <el-row :gutter="1" style="margin-top: 10px">
                            <el-col :span="10">
                                <el-tag >要车时间</el-tag>
                                <el-date-picker
                                        v-model="searchValue"
                                        type="daterange"
                                        value-format="yyyy-MM-dd"
                                        size="small"
                                        unlink-panels
                                        range-separator="至"
                                        start-placeholder="开始日期"
                                        end-placeholder="结束日期">
                                </el-date-picker>
                            </el-col>

                            <el-col :span="10">
                                <el-tag>编制时间</el-tag>
                                <el-date-picker
                                        v-model="searchValue"
                                        type="daterange"
                                        value-format="yyyy-MM-dd"
                                        size="small"
                                        unlink-panels
                                        range-separator="至"
                                        start-placeholder="开始日期"
                                        end-placeholder="结束日期">
                                </el-date-picker>
                            </el-col>

                            <el-col :span="4">
                                <el-tag>批准计划号</el-tag>
                                <el-input style="width: 100px;" ></el-input>
                            </el-col>
                        </el-row>

                        <el-row :gutter="4" style="margin-top: 10px">
                            <el-col :span="4">
                                <el-tag>到局</el-tag>
                                <el-select v-model="searchValue"  size="small"
                                           style="width: 120px;">
                                    <el-option
                                            v-for="item in politicsstatus"
                                            :key="item.id"
                                            :label="item.name"
                                            :value="item.id">
                                    </el-option>
                                </el-select>
                            </el-col>

                            <el-col :span="5">
                                <el-tag>到站</el-tag>
                                 <el-input style="width: 150px"></el-input>
                            </el-col>

                            <el-col :span="5">
                                <el-tag>专用线</el-tag>
                                <el-select v-model="searchValue"  size="small"
                                           style="width: 150px;">
                                    <el-option
                                            v-for="item in politicsstatus"
                                            :key="item.id"
                                            :label="item.name"
                                            :value="item.id">
                                    </el-option>
                                </el-select>
                            </el-col>

                            <el-col :span="5">
                                <el-tag>销售站</el-tag>
                                <el-select v-model="searchValue"  size="small"
                                           style="width: 150px;">
                                    <el-option
                                            v-for="item in politicsstatus"
                                            :key="item.id"
                                            :label="item.name"
                                            :value="item.id">
                                    </el-option>
                                </el-select>
                            </el-col>

                            <el-col :span="5">
                                <el-tag>货物</el-tag>
                                <el-select v-model="searchValue"  size="small"
                                           style="width: 150px;">
                                    <el-option
                                            v-for="item in politicsstatus"
                                            :key="item.id"
                                            :label="item.name"
                                            :value="item.id">
                                    </el-option>
                                </el-select>
                            </el-col>

                        </el-row>

                        <el-row :gutter="3" style="margin-top: 10px">

                            <el-col :span="5">
                                <el-tag>订货单位</el-tag>
                                <el-input style="width: 120px"></el-input>
                            </el-col>

                            <el-col :span="5">
                                <el-tag>收货单位</el-tag>
                                <el-input style="width: 120px"></el-input>
                            </el-col>

                            <el-col :span="4">
                                <el-tag>状态</el-tag>
                                <el-select v-model="searchValue"  size="small"
                                           style="width: 100px;">
                                    <el-option
                                            v-for="item in politicsstatus"
                                            :key="item.id"
                                            :label="item.name"
                                            :value="item.id">
                                    </el-option>
                                </el-select>
                            </el-col>

                            <el-col :span="5">
                                <el-tag>计划类型</el-tag>
                                <el-select v-model="searchValue"  size="small"
                                           style="width: 130px;">
                                    <el-option
                                            v-for="item in politicsstatus"
                                            :key="item.id"
                                            :label="item.name"
                                            :value="item.id">
                                    </el-option>
                                </el-select>
                            </el-col>


                            <el-col :span="5">
                                <el-tag>单位区分</el-tag>
                                <el-select v-model="searchValue"  size="small"
                                           style="width: 130px;">
                                    <el-option
                                            v-for="item in politicsstatus"
                                            :key="item.id"
                                            :label="item.name"
                                            :value="item.id">
                                    </el-option>
                                </el-select>
                            </el-col>

                        </el-row>
               <!--  按钮  -->
                        <el-row :gutter="0" style="margin-top: 10px">

                            <el-col :span="2">
                                <el-button size="mini" type="primary">查询</el-button>
                            </el-col>

                            <el-col :span="2">
                                <el-button size="mini" type="primary">新增</el-button>
                            </el-col>

                            <el-col :span="2">
                                <el-button size="mini" type="primary">修改</el-button>
                            </el-col>

                            <el-col :span="2">
                                <el-button size="mini" type="primary">删除</el-button>
                            </el-col>

                            <el-col :span="2">
                                <el-button size="mini" type="primary">提报</el-button>
                            </el-col>

                            <el-col :span="2">
                                <el-button size="mini" type="primary">禁用/启用</el-button>
                            </el-col>

                            <el-col :span="2">
                                <el-button size="mini" type="primary">复制</el-button>
                            </el-col>

                            <el-col :span="2">
                                <el-button size="mini" type="primary">录入批量计划号</el-button>
                            </el-col>
                        </el-row>
                    </div>
                <!-- 表格-->
                        <div style="margin-top: 10px">
                            <el-table
                                    v-loading="loading"
                                    element-loading-text="正在载入..."
                                    element-loading-spinner="el-icon-loading"
                                    element-loading-background="rgba(0, 0, 0, 0.8)"
                                    :data="emps"
                                    border
                                    stripe
                                    style="width: 100%">
                                <el-table-column
                                        type="selection"
                                        width="40">
                                </el-table-column>
                                <el-table-column
                                        prop="name"
                                        label="计划类型"
                                        fixed
                                        align="center"
                                        width="100">
                                </el-table-column>
                                <el-table-column
                                        prop="gender"
                                        label="状态"
                                        align="center"
                                        width="70">
                                </el-table-column>
                                <el-table-column
                                        prop="workID"
                                        label="要车时间"
                                        align="center"
                                        width="100">
                                </el-table-column>
                                <el-table-column
                                        prop="gender"
                                        label="批准计划号"
                                        align="center"
                                        width="100">
                                </el-table-column>
                                <el-table-column
                                        prop="workID"
                                        label="到局"
                                        align="center"
                                        width="80">
                                </el-table-column>
                                <el-table-column
                                        prop="gender"
                                        label="到站"
                                        align="center"
                                        width="80">
                                </el-table-column>
                                <el-table-column
                                        prop="workID"
                                        label="专用线"
                                        align="center"
                                        width="100">
                                </el-table-column>
                                <el-table-column
                                        prop="gender"
                                        label="订货单位"
                                        align="center"
                                        width="120">
                                </el-table-column>
                                <el-table-column
                                        prop="workID"
                                        label="收货单位"
                                        align="center"
                                        width="120">
                                </el-table-column>
                                <el-table-column
                                        prop="gender"
                                        label="计划车数"
                                        align="center"
                                        width="80">
                                </el-table-column>
                                <el-table-column
                                        prop="workID"
                                        label="计划吨位"
                                        align="center"
                                        width="80">
                                </el-table-column>
                                <el-table-column
                                        prop="gender"
                                        label="剩余车数"
                                        align="center"
                                        width="80">
                                </el-table-column>
                                <el-table-column
                                        prop="workID"
                                        label="剩余吨数"
                                        align="center"
                                        width="80">
                                </el-table-column>
                                <el-table-column
                                        prop="gender"
                                        label="销售站"
                                        align="center"
                                        width="80">
                                </el-table-column>
                                <el-table-column
                                        prop="workID"
                                        label="货物"
                                        align="center"
                                        width="80">
                                </el-table-column>
                                <el-table-column
                                        prop="gender"
                                        label="单位区分"
                                        align="center"
                                        width="100">
                                </el-table-column>
                                <el-table-column
                                        prop="workID"
                                        label="开票信息"
                                        align="center"
                                        width="100">
                                </el-table-column>
                                <el-table-column
                                        prop="gender"
                                        label="收货信息"
                                        align="center"
                                        width="80">
                                </el-table-column>
                                <el-table-column
                                        prop="workID"
                                        label="备注"
                                        align="center"
                                        width="80">
                                </el-table-column>
                                <el-table-column
                                        prop="workID"
                                        label="编制时间"
                                        align="center"
                                        width="80">
                                </el-table-column>
                            </el-table>

                    </div>
                        <div style="display: flex;justify-content: center">
                            <!-- 分页 -->

                            <el-pagination
                                    background
                                    @size-change="handleSizeChange"
                                    @current-change="handleCurrentChange"
                                    :current-page="page"
                                    layout="total, sizes, prev, pager, next, jumper, ->,total  "
                                    :total="total">
                            </el-pagination>
                        </div>
    </div>
                </el-main>
            </el-container>
        </el-container>

    </div>

</template>

<script>
// @ is an alias to /src
import router from "../router";

export default {
  name: 'Home',
    data(){
        return{
            user:{
                name:"admin",
                searchValue:{},
                total: 0,
                page: 1,
                size: 10,
            },
            inputKeyWord:'',
        }
    },
    methods:{
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }
        ,
        closeTag(){

        },
        commandHandler(cmd){

        },
        handleCurrentChange(val) {
            // console.log(`当前页: ${val}`);
            this.page = val;
            this.initEmps();
        },
        handleSizeChange(val) {
            //  console.log(`每页 ${val} 条`);
            this.size = val;
            this.initEmps();
        },

        },



  components: {

  }
}


</script>

<style scoped>
     .home-container{
         background-color: #DCDFE6;
         height: 650px;
     }

     .home_aside{
         background-color:#545c64;
         height: 100%;
         box-shadow: 0 0 20px #cac6c6;
     }

     .home_header{
         background-color: #FFFFFF;
         color: #606266;
         line-height: 40px;
         border: 1px solid #FFFFFF;
         border-radius: 5px;
         margin-left: 8px;
         box-shadow: 0 0 20px #cac6c6;
         align-items: center;

     }

     .home_main{
         background-color:#FFFFFF ;
         color: #606266;
         border:1px solid #FFFFFF ;
         border-radius: 5px;
         box-shadow: 0 0 20px #cac6c6;
         margin-left: 8px;
         margin-top: 10px;
         width: 100%;
         height: 100%;
     }

    .home_title{
        height: 60px;
        font-size: 25px;
        align-items: center;
        text-align: center;
        line-height: 60px;
        font-family: 方正粗黑宋简体;
        color: white;
    }

     .el-dropdown-link img {
         width: 35px;
         height: 35px;
         border-radius: 24px;
         margin-left: 2px;
     }

     .el-dropdown-link {
         display: flex;
         align-items: center;
     }

    .el-menu-demo{
        height: 0px;
        margin-top: 3px;
        padding: 0px 10px;
    }

     >>> .el-input__inner{
         height: 32px;
     }
    >>> .el-main{
        padding: 6px;
    }




</style>

