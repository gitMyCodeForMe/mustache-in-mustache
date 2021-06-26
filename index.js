console.log('nihao')
//import mustAche from './js/mustache.js'
import Scanner from './js/Scanner.js'
window.SSG_TempleteEngine={
     render(templateStr,data){
        console.log('我被执行了')
        var scaner=new Scanner(templateStr)
       // console.log(scaner)
    }
}