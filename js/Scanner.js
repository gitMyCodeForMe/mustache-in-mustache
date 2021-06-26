export default class Scanner{
	constructor(templateStr,data){
		console.log('render函数被调用')
		var chulishuju=xiaodianzhiling(templateStr);
		console.log(jiegoufenxiY(chulishuju) )
		var templateStrDataA = jiegoufenxiY(chulishuju)
		
		var templateStrDataB=jiegoufenxiZ(chulishuju)
		for(let a in templateStrDataB){
			templateStrDataA[templateStrDataB[a].dataX]=templateStrDataB[a]
		}
		console.log(templateStrDataA)
		var dataOne=[]
		dataOne=shujuqiantao(templateStrDataA,0,templateStrDataA.length,0,dataOne)
		console.log(dataOne)
		
		function xiaodianzhiling(templateStr){
		//var templateStr1=templateStr
		var dijigediandian=0
		var danshudiandianweizhi=0
		templateStr.replace(/'/g,function(a,b,c){
		dijigediandian++;
		if(dijigediandian%2){
			danshudiandianweizhi=b
		}else{
			var linshizifuchuan=''
			for(var i=danshudiandianweizhi;i<=b;i++){
				
				linshizifuchuan+='*'
			}
			
			templateStr=templateStr.substr(0, danshudiandianweizhi-1)+linshizifuchuan+templateStr.substr(b+1,templateStr.length)
			//console.log(templateStr)
		}	

		}	)
		return templateStr
	}
	function jiegoufenxi(templateStr){
		var huazong=[] 
		templateStr.replace(/}}/g,function(a,b,c){
			var a=templateStr.lastIndexOf('{{',b)
			var linshi=''
			if(a==-1){throw new Error("字符不匹配"); return 0}
			//huazong[huazong.length]={}
			//huazong[huazong.length-1].newO=a
			huazong[a]={}
			huazong[a].dataX=a
			huazong[a].dataY=b
			huazong[a].isLT='{{}}'
			for(var i=a;i<=b;i++)linshi+='*'
			templateStr=templateStr.substr(0,a)+linshi+templateStr.substr(b+1,templateStr.length)

		})
		return huazong
	}
	function jiegoufenxiY(templateStr){
		var huazong=[] 
		var huaIndex=-1
		var huafan=templateStr.length
		huaIndex=templateStr.lastIndexOf('{{',huafan)
		while(huaIndex!=-1){
			var a=templateStr.indexOf('}}',huaIndex)
		if(a==-1){throw new Error("字符不匹配"); return 0}

			var linshi=''
			//huazong[huazong.length]={}
			//huazong[huazong.length-1].newO=cc
			huazong[huaIndex]={}
			huazong[huaIndex].dataX=huaIndex
			huazong[huaIndex].dataY=a
			huazong[huaIndex].isLT='{{}}'
			for(var i=huaIndex-1;i<=a;i++)linshi+='*'
			templateStr=templateStr.substr(0,huaIndex)+linshi+templateStr.substr(a+2,templateStr.length)
			console.log(templateStr)
			huafan=huaIndex-2
			if(huafan<0)huafan=0
	
				huaIndex=templateStr.lastIndexOf('{{',huafan)
	}
	return huazong
}
function jiegoufenxiZ(templateStr){
		var huazong=[] 
		var huaIndex=-1
		var huafan=templateStr.length
		huaIndex=templateStr.lastIndexOf('[[',huafan)
		while(huaIndex!=-1){
			var a=templateStr.indexOf(']]',huaIndex)
		if(a==-1){throw new Error("字符不匹配"); return 0}

			var linshi=''
			//huazong[huazong.length]={}
			//huazong[huazong.length-1].newO=huaIndex
			huazong[huaIndex]={}
			huazong[huaIndex].dataX=huaIndex
			huazong[huaIndex].dataY=a
			huazong[huaIndex].isLT='[[]]'
			for(var i=huaIndex-1;i<=a;i++)linshi+='*'
			templateStr=templateStr.substr(0,huaIndex)+linshi+templateStr.substr(a+2,templateStr.length)
			console.log(templateStr)
			huafan=huaIndex-2
			if(huafan<0)huafan=0
	
				huaIndex=templateStr.lastIndexOf('[[',huafan)
	}
	return huazong
}

function shujuqiantao(templateStrData,Bg,Ed,i,dataOne){
	var k=0
	for(let a=Bg;a<Ed;a++ ){
			if(templateStrDataA[a]){
				dataOne[k]={}
				dataOne[k].level=i
				dataOne[k].data={}
				dataOne[k].data.dataX=templateStrDataA[a].dataX
				dataOne[k].data.dataY=templateStrDataA[a].dataY
				dataOne[k].children=[]
				//console.log(templateStrData.slice(templateStrDataA[a].dataX+1,templateStrDataA[a].dataY-1))
				dataOne[k].children=shujuqiantao(templateStrData,templateStrDataA[a].dataX+1,templateStrDataA[a].dataY,i+1,dataOne[k].children)
				k++
				a=templateStrDataA[a].dataY+1
				//console.log(a)
				
			}
		}
		return dataOne
}


}}
