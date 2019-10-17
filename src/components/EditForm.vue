<template>
  <div class="edit-form"
       :id="groups.name">
    <el-form class="form-content"
             ref="form"
             label-width="180px">
      <el-form-item v-for="(item, itemIndex) in groups.formItems"
                    :key="itemIndex"
                    :prop="item.propertyName"
                    :label="item.label"
                    :required="item.required"
                    :rules="item.rules"
                    v-if="item.visiable"
                    v-bind:class="{
                      'bl-def':true,
                      'bl-p0':item.priority==0 && usePriority,
                      'bl-p1':item.priority==1 && usePriority,
                      'bl-p2':item.priority==2
                      }">
        <!-- <el-tag>{{data[item.id]}}</el-tag> -->
        <!-- 基本输入 -->
        <el-input v-if="item.type === 'TEXT'"
                  v-model="data[item.id]"
                  :placeholder="item.placeholder || ''"
                  :label="item.label"
                  :maxLength="item.maxLength"
                  :readonly="!item.editable"
                  :autosize="{ minRows: 2, maxRows: 4}">

        </el-input>
        <!-- 文本域 -->
        <el-input v-if="item.type === 'TEXTAREA'"
                  type="textarea"
                  v-model="data[item.id]"
                  :placeholder="item.placeholder || ''"
                  :label="item.label"
                  :maxLength="item.maxLength"
                  :readonly="!item.editable"
                  :autosize="{ minRows: 2, maxRows: 4}">

        </el-input>
        <!-- 单选 -->
        <el-radio-group v-else-if="item.type==='RADIO'"
                        v-model="data[item.id]">
          <el-radio v-for="(option, radioIndex) in enums[item.enumName]"
                    :key="option.value"
                    :label="option.value">
            {{ option.label }}
          </el-radio>
        </el-radio-group>
        <!-- 选择器 -->
        <el-select v-else-if="item.type === 'SELECT'"
                   v-model="data[item.id]"
                   :placeholder="item.placeholder || '请选择'"
                   :disabled="!item.editable"
                   @change="doEvent(item.event)">
          <el-option v-for="(option, optionsIndex) in enums[item.enumName]"
                     :key="option.value"
                     :label="option.label"
                     :value="option.value">
          </el-option>
        </el-select>
        <!-- date选择 -->
        <el-date-picker v-else-if="item.type === 'DATE'"
                        v-model="data[item.id]"
                        type="date"
                        :placeholder="item.placeholder || '请选择'"
                        :disabled="!item.editable">
        </el-date-picker>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'EditForm',
  props: {
    groups: Object,
    data: Object,
    enums: Object,
    usePriority: Boolean
  }
}
</script>

<style lang="" scoped>

</style>