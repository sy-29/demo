const findEle = (parent, type) => { 
  return parent.tagName.toLowerCase() === type ? parent : parent.querySelector(type)
}
const trigger = (el, type) => {  // 给元素绑定事件
  const e = document.createEvent('HTMLEvents')
  e.initEvent(type, true, true)
  el.dispatchEvent(e)
}

const emoji = {
 mounted(el){
   //指令第一次绑定到元素时调用
   //判断是否是emoji图标
   const isEmoji = char =>{
     //表情都是2个字符
     return char.length > 1
   }
   const clearEmoji = str =>{
     //emoji图标都替换成空字符串''
     return Array.from(str).filter(c => !isEmoji(c)).join('')
   }
   const eleInput = findEle(el, 'input') || findEle(el, 'textarea')
   //判断绑定元素是否是input输入或富文本输入框
   el.$inp = eleInput
   eleInput.handle = function(){
     const val = eleInput.value
     eleInput.value = clearEmoji(val)
     //监听输入框的emoji图标转换成空字符串
     trigger(eleInput, 'input')
   }
   eleInput.addEventListener('keyup', eleInput.handle)
   //el添加键盘监听事件keyup
   eleInput.addEventListener('blur', eleInput.handle)
   eleInput.addEventListener('change', eleInput.handle)
 }  
}
export default emoji