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
      label: '主键',
      prop: 'id'
    },
	  {
      label: '一级分类代码',
      prop: 'typeOneCode'
    },
	  {
      label: '一级分类名称',
      prop: 'typeOneName'
    },
	  {
      label: '二级分类代码',
      prop: 'typeTwoCode'
    },
	  {
      label: '二级分类名称',
      prop: 'typeTwoName'
    },
	  {
      label: '编号',
      prop: 'goodsCode'
    },
	  {
      label: '商品名称',
      prop: 'goodsName'
    },
	  {
      label: '价格',
      prop: 'price'
    },
	  {
      label: '货号',
      prop: 'goodsNum'
    },
	  {
      label: '排序',
      prop: 'orders'
    },
	  {
      label: '库存',
      prop: 'goodsStock'
    },
	  {
      label: '销量',
      prop: 'salesVolume'
    },
	  {
      label: '审核状态',
      prop: 'auditStatus'
    },
	  {
      label: '审核状态名称',
      prop: 'auditStatusName'
    },
	  {
      label: '创建时间',
      prop: 'createTime'
    },
	  {
      label: '创建人id',
      prop: 'createUserId'
    },
	  {
      label: '创建人名称',
      prop: 'createUserName'
    },
	  {
      label: '修改时间',
      prop: 'updateTime'
    },
	  {
      label: '修改人id',
      prop: 'updateUserId'
    },
	  {
      label: '修改人名称',
      prop: 'updateUserName'
    },
	  {
      label: '删除状态（0:否;1:是）',
      prop: 'deleted'
    },
  ]
}
