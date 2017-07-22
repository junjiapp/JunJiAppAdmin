
// 方法接口：立即执行函数 (function(){})()，为了不让变量污染全局
var JS = (() => {
    // 对外接口存储对象
    let Fn = window.Fn || {};

    Fn.inArr = {
        isPwd: (arr, val, pwd) => {
            for (var i = 0; i < arr.length; i++) {
                if (arr[i].phone == val && arr[i].pwd == pwd) {
                    return true;
                }
            }
            return false;
        }
    };

    return {
        Fn: Fn
    }
})();

//输出接口
export { JS }
