/*
 * @Descripttion: 
 * @Author: 林舒恒
 * @Date: 2021-09-30 12:04:07
 * @LastEditors: 林舒恒
 * @LastEditTime: 2021-09-30 20:26:56
 */
function Linv({
    template,
    data,
    el
}) {
    let dom = document.querySelector(el)
    Object.entries(data).forEach(item => {
        template = template.replace(`\{${item[0]}\}`, item[1])
    })
    dom.innerHTML = template
}
window.Linv = Linv
module.export = Linv
export default Linv

/* usage:
    new Lin({
        template: ``,
        el: '#app'
    })
*/