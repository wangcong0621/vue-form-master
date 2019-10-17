export default {
  formGroupMappingsProcess(mappings) {
    let res = {}
    mappings.forEach(function (item) {
      res[item.name] = item.subNames.map(function (subItem) {
        return {
          item: subItem
        }
      })
    })
    return res
  },
  formEnumsProcess(enums) {
    let res = {}
    enums.forEach(function (item) {
      res[item.enmuName] = item.enumItems.map(function (subItem) {
        return {
          label: subItem.enumLabel,
          value: subItem.enumValue
        }
      })
    })
    return res
  },
  formGroupsProcess(groups) {
    let res = {}
    groups.forEach(function (group) {
      res[group.name] = {
        name: group.name,
        title: group.label,
        executeType: group.executetype,
        formItems: group.items.map(item => {
          return {
            id: item.id,
            type: item.formType,
            label: item.label,
            propertyName: item.propertyName,
            enumName: item.enumName,
            visiable: item.visiable,
            editable: item.editable,
            value: item.value,
            className: item.className,
            event: item.event,
            priority: item.priority
          }
        })
      }
    })
    return res
  },
  formDataProcess(groups) {
    let res = {}
    groups.forEach(function (groupItem) {
      groupItem.items.forEach(function (item) {
        // let val = item.enumName.length === 0 ? item.value : parseInt(item.value)
        let val = item.value
        res[item.id] = val
      })
    })
    return res
  },
  formTemplateProcess(temps) {
    let res = {}
    temps.forEach(function (temp) {
      res[temp.name] = {
        name: temp.name,
        title: temp.label,
        executeType: temp.executetype,
        formItems: temp.items.map(item => {
          return {
            id: item.id,
            type: item.formType,
            label: item.label,
            propertyName: item.propertyName,
            enumName: item.enumName,
            visiable: item.visiable,
            editable: item.editable,
            value: item.value,
            className: item.className,
            event: item.event
          }
        })
      }
    })
    return res
  }
}
