/*
 * @Descripttion: 
 * @Author: 林舒恒
 * @Date: 2021-09-30 12:04:07
 * @LastEditors: 林舒恒
 * @LastEditTime: 2021-09-30 13:41:16
 */
function Lin({
    template,
    el
}) {
    let dom = document.querySelector(el)
    dom.innerHTML = template
}

export default Lin

/* usage:
    new Lin({
        template: ``,
        el: '#app'
    })
*/