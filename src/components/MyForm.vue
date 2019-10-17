<template>
  <el-main v-loading.fullscreen.lock="fullscreenLoading">
    <el-tabs style="margin-top:20x">
      <el-tab-pane label="公共数据">
        <el-row>
          <h4 class="form-title">U2000信息</h4>
          <edit-form :groups="formGroups['u2000']"
                     :data="formData"
                     :enums="formEnums"
                     :usePriority="usePriority"
                     v-if="formGroups['u2000']!=undefined && formData!=undefined"></edit-form>
        </el-row>
        <el-row>
          <h4 class="form-title">MME信息</h4>
          <div class="basic-info ct-form"
               v-for="config in formGroupMappings['mme']"
               v-if="formGroupMappings['mme']!=undefined && formData!=undefined"
               :key="config.item">
            <h4>{{formGroups[config.item].title}}</h4>
            <edit-form :groups="formGroups[config.item]"
                       :data="formData"
                       :enums="formEnums"
                       :usePriority="usePriority"
                       v-if="formGroups[config.item]!=undefined && formData!=undefined">
            </edit-form>
          </div>
        </el-row>
        <el-row>
          <h4 class="form-title">NTP客户端参数</h4>
          <edit-form :groups="formGroups['ntp']"
                     :data="formData"
                     :enums="formEnums"
                     :usePriority="usePriority"
                     v-if="formGroups['ntp']!=undefined && formData!=undefined"></edit-form>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="基站传输数据">
        <el-row>
          <h4 class="form-title">eNodeB信息</h4>
          <edit-form :groups="formGroups['eNodeB信息']"
                     :data="formData"
                     :enums="formEnums"
                     :usePriority="usePriority"
                     v-if="formGroups['eNodeB信息']!=undefined && formData!=undefined"></edit-form>
        </el-row>
        <el-row>
          <h4 class="form-title">以太网端口</h4>
          <edit-form :groups="formGroups['以太网端口']"
                     :data="formData"
                     :enums="formEnums"
                     :usePriority="usePriority"
                     v-if="formGroups['以太网端口']!=undefined && formData!=undefined"></edit-form>
        </el-row>
        <el-row>
          <h4 class="form-title">基站传输IP和VLAN信息-业务通道</h4>
          <edit-form :groups="formGroups['基站传输IP和VLAN信息-业务通道']"
                     :data="formData"
                     :enums="formEnums"
                     :usePriority="usePriority"
                     v-if="formGroups['基站传输IP和VLAN信息-业务通道']!=undefined && formData!=undefined"></edit-form>
        </el-row>
        <el-row>
          <h4 class="form-title">基站传输IP和VLAN信息-维护信道</h4>
          <edit-form :groups="formGroups['基站传输IP和VLAN信息-维护信道']"
                     :data="formData"
                     :enums="formEnums"
                     :usePriority="usePriority"
                     v-if="formGroups['基站传输IP和VLAN信息-维护信道']!=undefined && formData!=undefined"></edit-form>
        </el-row>
        <el-row>
          <h4 class="form-title">GPS</h4>
          <edit-form :groups="formGroups['GPS']"
                     :data="formData"
                     :enums="formEnums"
                     :usePriority="usePriority"
                     v-if="formGroups['GPS']!=undefined && formData!=undefined"></edit-form>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="LTE小区数据">
        <el-row>
          <h4 class="form-title">eNodeB信息</h4>
          <edit-form :groups="formGroups['enodeb']"
                     :data="formData"
                     :enums="formEnums"
                     :usePriority="usePriority"
                     v-if="formGroups['enodeb']!=undefined && formData!=undefined"></edit-form>
        </el-row>
        <el-row>
          <h4 class="form-title">小区信息</h4>
          <el-tabs tab-position="top"
                   v-if="formGroupMappings['cell']!=undefined">
            <el-tab-pane v-for="config in formGroupMappings['cell']"
                         :key="config.item"
                         :label="formGroups[config.item].title">
              <edit-form :groups="formGroups[config.item]"
                         :data="formData"
                         :enums="formEnums"
                         :usePriority="usePriority"
                         v-if="formGroups[config.item]!=undefined && formData!=undefined">
              </edit-form>

            </el-tab-pane>
          </el-tabs>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="小区扇区设备">
        <el-row>
          <h4 class="form-title">eNodeB信息</h4>
          <edit-form :groups="formGroups['enodeb']"
                     :data="formData"
                     :enums="formEnums"
                     :usePriority="usePriority"
                     v-if="formGroups['enodeb']!=undefined && formData!=undefined"></edit-form>
        </el-row>
        <el-row>
          <h4 class="form-title">扇区信息</h4>
          <el-tabs tab-position="top"
                   v-if="formGroupMappings['sectorEquipment']!=undefined">
            <el-tab-pane v-for="config in formGroupMappings['sectorEquipment']"
                         :key="config.item"
                         :label="formGroups[config.item].title">
              <edit-form :groups="formGroups[config.item]"
                         :data="formData"
                         :enums="formEnums"
                         :usePriority="usePriority"
                         v-if="formGroups[config.item]!=undefined && formData!=undefined">
              </edit-form>
            </el-tab-pane>
          </el-tabs>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="即插即用数据">
        <el-row>
          <h4 class="form-title">即插即用数据</h4>
          <el-tabs tab-position="top"
                   v-if="formGroupMappings['plug']!=undefined">
            <el-tab-pane v-for="config in formGroupMappings['plug']"
                         :key="config.item"
                         :label="formGroups[config.item].title">
              <edit-form :groups="formGroups[config.item]"
                         :data="formData"
                         :enums="formEnums"
                         :usePriority="usePriority"
                         v-if="formGroups[config.item]!=undefined && formData!=undefined">
              </edit-form>
            </el-tab-pane>
          </el-tabs>
        </el-row>
      </el-tab-pane>
    </el-tabs>

    <el-row style="margin:50px">
      <el-col :span="24"
              style=" text-align:center;">
        <el-button type="primary"
                   @click="updateForm()">保存</el-button>
      </el-col>
    </el-row>
  </el-main>
</template>

<script> 
import EditForm from './EditForm'
import FormUtils from '../utils/formUtils'
import MockData from '../../static/mock'
export default {
  name: 'MyForm',
  components: { EditForm },
  data () {
    return {
      fullscreenLoading: false,
      formGroups: {},
      formGroupMappings: {},
      formEnums: {},
      formData: {},
      usePriority: true
    }
  },
  methods: {
    updateForm () {
      console.log('formData after save:', this.formData)
    }
  },
  created () {
    console.log('mockdata:', MockData)
    this.formGroupMappings = FormUtils.formGroupMappingsProcess(MockData.mappings)
    this.formEnums = Object.freeze(FormUtils.formEnumsProcess(MockData.enums))
    this.formGroups = FormUtils.formGroupsProcess(MockData.groups)
    this.formData = FormUtils.formDataProcess(MockData.groups)
    this.formTemplates = FormUtils.formTemplateProcess(MockData.templates)
    console.log('formData before save:', this.formData)
  }
}
</script>

<style lang="" scoped>
</style>