/*
 *    Copyright (c) 2018-2025, lengleng All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice,
 * this list of conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright
 * notice, this list of conditions and the following disclaimer in the
 * documentation and/or other materials provided with the distribution.
 * Neither the name of the pig4cloud.com developer nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 * Author: lengleng (wangiegie@gmail.com)
 */

export const tableOption = {
  border: true,
  index: true,
  indexLabel: '序号',
  stripe: true,
  menuAlign: 'center',
  align: 'center',
  defaultSort:{
    prop: 'buyTime',
    order: 'descending'
  },
  editBtn: false,
  delBtn: false,
  addBtn: false,
  column: [
	  {
      label: '类型',
      prop: 'type',
      type: 'select',
      dicUrl: '/admin/dict/type/goodsType',
      search: true
    },
	  {
      width: 170,
      label: '货物名称',
      prop: 'name',
      search: true
    },
	  {
      label: '价格',
      prop: 'price'
    },
    {
      width: 170,
      label: '购买日期',
      type: 'date',
      valueFormat: 'yyyy-MM-dd hh:mm:ss ',
      format: 'yyyy-MM-dd',
      prop: 'buyTime'
    },
	  {
      width: 150,
      label: '备注',
      prop: 'remark',
      span: 24
    },
    {
      label: '删除标记',
      prop: 'delFlag',
      type: 'select',
      dicUrl: '/admin/dict/type/boolean',
      valueDefault: '0'
    },
	  {
      label: '创建者',
      editVisdiplay: false,
      addVisdiplay: false,
      prop: 'createBy'
    },
	  {
      width: 170,
      label: '创建时间',
      editVisdiplay: false,
      addVisdiplay: false,
      prop: 'createTime'
    },
	  {
      label: '更新人',
      editVisdiplay: false,
      addVisdiplay: false,
      prop: 'updateBy'
    },
	  {
      width: 170,
      label: '更新时间',
      editVisdiplay: false,
      addVisdiplay: false,
      prop: 'updateTime'
    }
  ]
}
