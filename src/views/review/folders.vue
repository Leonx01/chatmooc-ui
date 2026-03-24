<template>
  <div>
  <PageHeader>
    <template #title>
      我的卡组
    </template>
    <template #content>
      依据自由间隔重复调度算法(FSRS)，根据学生的学习情况，推荐适合的卡片
    </template>
  </PageHeader>
    <PageMain>
      <template #title>
       <div>
         <el-tooltip content="新建卡组" placement="top">
           <el-button  circle :icon="Plus" @click="addFolderVisible=true"></el-button>
         </el-tooltip>
          <el-tooltip content="设置" placement="top">
            <el-button  circle :icon="Setting" @click="settingVisible=true"></el-button>
          </el-tooltip>
       </div>

      </template>
      <template #default>
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            prop="fid"
            label="ID"
            width="80">
          </el-table-column>
          <el-table-column
            prop="name"
            label="卡组名称">
          </el-table-column>
          <el-table-column
            prop="statistics.0"
            label=未学习
            width="80">
            <template #default="{row}">
              <el-text  type="danger">
                <strong>
                   {{ row.statistics[0] }}
                </strong>
               </el-text>
            </template>
          </el-table-column>
          <el-table-column
            prop="statistics.1"
            label=学习中
            width="80">
            <template #default="{row}">
              <el-text type="success">
                 <strong>
                   {{ row.statistics[1] }}
                </strong>
              </el-text>
            </template>
          </el-table-column>
          <el-table-column
            prop="statistics.2"
            label=待复习
            width="80">
            <template #default="{row}">
              <el-text type="primary">
                 <strong>
                   {{ row.statistics[2] }}
                </strong>
              </el-text>
            </template>
          </el-table-column>
          <el-table-column
            prop="section.name"
            label="关联章节">
            <template #default="{row}">
              <el-tag  type="primary">{{ row.section.name }}</el-tag>
            </template>
          </el-table-column>
          <el-table-column
            sortable
            prop="createtime"
            label="创建时间"
            width="200">
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
          >
            <template #default="{row}">
              <el-button link @click="()=>{this.$router.push({path:'/review/flash/'+row.fid})}"
              :icon="View"
              />
               <el-button link @click="handleDeleteFolder(row)"
              :icon="Delete"
              />
               <el-button link @click="()=>{this.$router.push({path:'/review/flash/'+row.fid})}"
              :icon="Edit"
              />
            </template>
          </el-table-column>
        </el-table>
      </template>
    </PageMain>
    <el-drawer v-model="addFolderVisible"
    title="新建卡组"
    >
      <el-form :model="newFolder">
        <el-form-item label="卡组名称">
          <el-input v-model="newFolder.name"></el-input>
        </el-form-item>
        <el-form-item label="关联章节">
          <el-select v-model="newFolder.sid" placeholder="请选择">
            <el-option
              v-for="item in sections"
              :key="item.sid"
              :label="item.name"
              :value="item.sid">
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
       <template #footer>
      <div style="flex: auto">
        <el-button size="large" @click="handleCloseNewFolderDialog">取消</el-button>
        <el-button type="primary" size="large" >确定</el-button>
      </div>
    </template>
<!--      <template #footer>-->

<!--      </template>-->
    </el-drawer>
    <el-drawer v-model="settingVisible"
    title="卡组设置"
    >
      <el-form :model="CardSetting">
        <el-form-item label="每日新学卡片的上限">
          <el-input-number v-model="CardSetting.newLimit" controls-position="right" >
             <template #append>张/天</template>
          </el-input-number>
        <el-tooltip
         content = "重置">
         <el-button circle link :icon="Refresh" @click="CardSetting.newLimit=20"/>
       </el-tooltip>
        </el-form-item>
        <el-form-item label="每日复习卡片的上限">
          <el-input-number v-model="CardSetting.reviewLimit"  controls-position="right">
            <template #append>张/天</template>
          </el-input-number>
       <el-tooltip
         content = "重置">
         <el-button circle link :icon="Refresh" @click="CardSetting.reviewLimit=200"/>
       </el-tooltip>
        </el-form-item>
      </el-form>
       <template #footer>
      <div style="flex: auto">
        <el-button @click="settingVisible = false" size="large">取消</el-button>
        <el-button type="primary" size="large" @click="settingVisible=false">应用</el-button>
      </div>
    </template>
<!--      <template #footer>-->

<!--      </template>-->
    </el-drawer>
  </div>
</template>
<script setup lang="ts">
import {Setting, Plus, View, Delete, Edit, Refresh} from '@element-plus/icons-vue'
</script>
<script lang="ts">
import {ElDialog, ElMessage, ElPopconfirm} from "element-plus";

export default {
  data(){
    return{
      CardSetting:{
        //每日新学上限
        // newLimit:10,
        // //每日复习上限
        // reviewLimit:20,

      },
      settingVisible:false,
      addFolderVisible:false,
      newFolder:{
      },
      sections:[
        {
          sid:1,
          name:"人工智能"
        },
        {
          sid:2,
          name:"大数据"
        }
      ],
      tableData:[
        {
          fid:1,
          name:"计算机网络",
          statistics:{
            0:10,
            1:20,
            2:30
          },
          createtime:"2021-09-01",
          section:{
            sid:1,
            name:"人工智能",
          }
        },
        {
          fid:2,
          name:"操作系统",
          statistics:{
            0:10,
            1:20,
            2:30
          },
          createtime:"2021-09-01",
          section:{
            sid:1,
            name:"人工智能",
          }
        },
        {
          fid:3,
          name:"数据结构",
          statistics:{
            0:10,
            1:20,
            2:30
          },
          createtime:"2021-09-01",
          section:{
            sid:1,
            name:"人工智能",
          }
        }
      ]

    }
  },
    methods: {
      test() {
        this.$router.push({
          path: '/review/flash/1'
        })
      },
      handleCloseNewFolderDialog() {
        this.addFolderVisible = false
        this.newFolder = {}
      },
      handleDeleteFolder(row: any) {
        //confirm
        // console.log('delete')
        this.$confirm("此操作将删除卡组["+row.name+"],是否继续？", '删除卡组', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          //删除
          ElMessage({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          ElMessage({
            type: 'info',
            message: '已取消删除'
          });
        });
      }
    }
}
</script>
