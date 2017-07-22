<template>
    <div>
        <Page :total="page.dataCount" :page-size='page.pageSize' :current='page.pageNo' size='small' show-elevator show-sizer></Page>
        <Table border :columns='line_1' :data='data_1' :stripe='showStripe'></Table>
    </div>
</template>

<script type='text/ecmascript-6'>
    export default {
        data() {
            return {
                page:{
                    dataCount: 11, 
                    hasNextPage: false,
                    hasPrevPage: false,
                    pageCount: 0,
                    pageNo: 1,
                    pageSize: 10
                },
                line_1: [{
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        type: 'index',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: '产品编号',
                        key: 'id',
                        sortable: true
                    },
                    {
                        title: '产品名称',
                        key: 'name'
                    },
                    {
                        title: '品牌名称',
                        key: 'brand'
                    },
                    {
                        title: '地址',
                        key: 'address'
                    },
                    {
                        title: '生产时间',
                        key: 'date',
                        sortable: true
                    }
                ],
                data_1: [{
                        id: 20170718001,
                        name: '空调',
                        brand: '格力',
                        address: '广州',
                        date: '2017/07/18 15:05:00'
                    },
                    {
                        id: 20170718002,
                        name: '空调',
                        brand: '格力',
                        address: '广州',
                        date: '2017/07/18 15:05:00'
                    },
                    {
                        id: 20170718003,
                        name: '空调',
                        brand: '格力',
                        address: '广州',
                        date: '2017/07/18 15:05:00'
                    },
                    {
                        id: 20170718004,
                        name: '空调',
                        brand: '格力',
                        address: '广州',
                        date: '2017/07/18 15:05:00'
                    },
                    {
                        id: 20170718005,
                        name: '空调',
                        brand: '格力',
                        address: '广州',
                        date: '2017/07/18 15:05:00'
                    },
                    {
                        id: 20170718006,
                        name: '空调',
                        brand: '格力',
                        address: '广州',
                        date: '2017/07/18 15:05:00'
                    },
                    {
                        id: 20170718007,
                        name: '空调',
                        brand: '格力',
                        address: '广州',
                        date: '2017/07/18 15:05:00'
                    },
                     {
                        id: 20170718008,
                        name: '空调',
                        brand: '格力',
                        address: '广州',
                        date: '2017/07/18 15:05:00'
                    },
                     {
                        id: 20170718009,
                        name: '空调',
                        brand: '格力',
                        address: '广州',
                        date: '2017/07/18 15:05:00'
                    },
                     {
                        id: 20170718010,
                        name: '空调',
                        brand: '格力',
                        address: '广州',
                        date: '2017/07/18 15:05:00'
                    },
                    {
                        id: 20170718011,
                        name: '空调',
                        brand: '格力',
                        address: '广州',
                        date: '2017/07/18 15:05:00'
                    }
                ],
                showStripe: true
            }
        },
        computed:{
            
        }
    }
</script>

<style scoped>
    .ivu-page{
        text-align: right;
        margin-bottom: 10px;
    }
</style>