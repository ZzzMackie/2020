const BinaryTree = require('./binaryTree');
// import {BinaryTree} from './binaryTree.js';
// 二叉树
const zhong = ['f', 'c', 'g', 'a', 'd', 'b', 'e'];
const hou = ['f', 'g', 'c', 'd', 'e', 'b', 'a'];
const qian = ['a', 'c', 'f', 'g', 'b', 'd', 'e'];

// 另一颗不一样的二叉树
const zhong1 = ['f', 'c', 'g', 'a', 'd', 'b'];
const hou1 = ['f', 'g', 'c', 'd', 'b', 'a'];
const qian1 = ['a', 'c', 'f', 'g', 'b', 'd'];

// 左右完全互换的二叉树
const zhong2 = ['e', 'b', 'd', 'a', 'g', 'c', 'f'];
const hou2 = [ 'e', 'd', 'b', 'g', 'f', 'c', 'a'];
const qian2 = ['a', 'b', 'e', 'd', 'c', 'g', 'f'];

// 左右互换的二叉树
const zhong3 = ['d', 'b', 'e', 'a', 'f', 'c', 'g'];
const hou3 = ['d', 'e', 'b', 'f', 'g', 'c', 'a'];
const qian3 = ['a', 'b', 'd', 'e', 'c', 'f', 'g'];

const root = new BinaryTree(zhong, hou);
const root1 = new BinaryTree(zhong, hou); // 一样的
const root2 = new BinaryTree(zhong1, hou1);// 不一样的
const root3 = new BinaryTree(zhong2, hou2);// 左右完全子树互换
const root4 = new BinaryTree(zhong3, hou3);// 左右子树互换

console.log(root)
console.log(root.deepSearch(root._rootNode,'c'));//深度优先搜索 true
console.log(root.extentSeach([root._rootNode],'c'))// 广度优先搜索 true
console.log(BinaryTree.compareTree(root._rootNode,root2._rootNode)) // 比较二叉树 不一样 false
console.log(BinaryTree.compareTree(root._rootNode,root1._rootNode)) // 比较二叉树 一样 true
console.log(BinaryTree.compareTree(root._rootNode,root3._rootNode)) // 比较二叉树 不一样 false
console.log(BinaryTree.compareTree(root._rootNode,root3._rootNode, false)) // 比较二叉树 不一样 false
console.log(BinaryTree.compareTree(root._rootNode,root4._rootNode, false)) // 比较二叉树 一样 true