

//節點
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// 二叉樹
class BinaryTree {
    constructor(mList, list, flag = true){
        this._rootNode = null;
        this.init(mList, list, flag)
    }
    init(mList, list, flag) {
        if(flag) {// 中後續
            this._rootNode = this.resetMiddlePush(mList, list);
        } else{ //中前序
            this._rootNode = this.resetMiddleShift(mList, list);
        }
    }
    // 中后序还原一颗2叉树
    resetMiddlePush (zhon, hou) {
        if(zhon.length !== hou.length || zhon.length === 0 || hou.length === 0) return null;
        var root = new Node(hou[hou.length - 1]);
        var {zhonLeft,zhonRight, index} = this._getMiddle(zhon,root);
        var houLeft = hou.slice(0, index);
        var houRight = hou.slice(index, hou.length - 1);
        root.left = this.resetMiddlePush(zhonLeft, houLeft)
        root.right = this.resetMiddlePush(zhonRight, houRight)
        return root;
    }
    // 中前序还原一颗2叉树
    resetMiddleShift (zhon, qian) {
        if(zhon.length !== qian.length || zhon.length === 0 || qian.length === 0) return null;
        var root = new Node(qian[0]);
        var {zhonLeft,zhonRight, index} = this._getMiddle(zhon,root);
        var qianLeft = qian.slice(1, index + 1);
        var qianRight = qian.slice(index + 1, qian.length);
        root.left = this.resetMiddleShift(zhonLeft, qianLeft)
        root.right = this.resetMiddleShift(zhonRight, qianRight)
        return root;
    }
    _getMiddle(arr, root) {
        var index = arr.indexOf(root.value);
        var zhonLeft = arr.slice(0, index);
        var zhonRight = arr.slice(index + 1, arr.length);
        return{
            zhonLeft,
            zhonRight,
            index
        }
     }
     //深度优先 更适合探索未知
    //深度优先搜索
     deepSearch(root, target) {
        if(!root) return false;
        const left = this.deepSearch(root.left, target);
        const right = this.deepSearch(root.right, target);
        return root.value === target || left || right;
   
    }
    //廣度优先 更适合探索未知
    //廣度优先搜索
    extentSeach(rootList, target) {
        if(!rootList || !rootList.length) return false;
        const childrenList = [];
        for(let i = 0; i < rootList.length; i ++) {
            if(rootList[i] && rootList[i].value === target) {
                return true;
            } else{
               if(rootList[i]) childrenList.push(rootList[i].left);
               if(rootList[i]) childrenList.push(rootList[i].right);
            }
        }
        return this.extentSeach(childrenList, target);
    }
}
/**
 *
 *比较二叉树  
 * @param {Object} tree1
 * @param {Object} tree2
 * @param {boolean} [flag=true] true：不算上左右子树互换位置的情况 false：算上左右子树互换位置的情况
 * @returns {boolean}
 */
BinaryTree.compareTree = (tree1, tree2, flag = true) => {
    if(tree1 === tree2) return true;
    if(tree1 === null || tree2 === null) return false;
    if(tree1.value !== tree2.value) return false;
    if (flag) {
        var leftFlag = BinaryTree.compareTree(tree1.left, tree2.left);
        var rightFlag = BinaryTree.compareTree(tree1.right, tree2.right);
        return leftFlag && rightFlag;
    } else {
        var leftFlag = BinaryTree.compareTree(tree1.left, tree2.left);
        var rightFlag = BinaryTree.compareTree(tree1.right, tree2.right);
        var leftFlag1 = BinaryTree.compareTree(tree1.left, tree2.right);
        var rightFlag1 = BinaryTree.compareTree(tree1.right, tree2.left);
        return (leftFlag && rightFlag) || (leftFlag1 && rightFlag1);
    }
    
}

// console.log(root3._rootNode)
// console.log(createNode(['a','b','c','d','e','f','g']))
module.exports = BinaryTree;
// export {
//     BinaryTree
// }