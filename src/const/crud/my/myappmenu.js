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
  editBtn: false,
  delBtn: false,
  addBtn: false,
  column: [
	  {
      label: '编号',
      prop: 'id'
    },
	  {
      label: '类型',
      prop: 'type'
    },
	  {
      label: '菜单名称',
      prop: 'name'
    },
	  {
      label: '图标地址',
      prop: 'icon'
    },
	  {
      label: '备注',
      prop: 'remark'
    },
	  {
      label: '菜单链接',
      prop: 'url'
    },
	  {
      label: '创建者',
      prop: 'createBy'
    },
	  {
      label: '创建时间',
      prop: 'createTime'
    },
	  {
      label: '更新人',
      prop: 'updateBy'
    },
	  {
      label: '更新时间',
      prop: 'updateTime'
    },
	  {
      label: '删除标记',
      prop: 'delFlag'
    },
  ]
}
