<template>
    <div>
        <div>{{num}}</div>
        <Row class='row_1'>
            <Col span='18' offset='3'>
                <Button type="primary" long @click='addClick(100)'>+++</Button>
            </Col>
        </Row>
        <Row class='row_1'>
            <Col span='18' offset='3'>
                <Button long @click='subClick(100)'>---</Button>
            </Col>
        </Row>
        <br><br><br><br><br><br>
        <router-link to='login'>登录</router-link>
        <br><br><br><br><br><br>
        <div>蛋蛋看这里</div>
        <div :class="[box, egg ? hide : '']">这是超级厉害的组件显示隐藏</div>
        <button @click='clickTap'>这是超级厉害的组件按钮,快点快点！！</button>
    </div>
</template>

<script type='text/ecmascript-6'>
    import {
        mapGetters,
        mapMutations
    } from 'vuex'
    export default {
        computed: {
            ...mapGetters([
                'num'
            ])
        },
        data() {
            return {
                // 蛋蛋快看
                egg: true,
                box: 'box',
                hide: 'hide'
            }
        },
        created() {
            console.log(this.num)
        },
        methods: {
            ...mapMutations({
                addClick: 'ADD_ITEM',
                subClick: 'SUB_ITEM'
            }),
            // 蛋蛋专刊
            clickTap(){
                 this.egg = this.egg ? false : true;
            }

        }
    }
</script>

<style scoped>
.row_1{
    margin-bottom: 1rem;
}

/*-----蛋蛋专刊----*/
.hide{
    display:none;
}
.box{
    width: 200px;
    height:200px;
    border: 10px solid #f5f5f5;
    margin: auto;
}
</style>