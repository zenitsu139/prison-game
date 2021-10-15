//tests




const field = document.querySelector('.field')
const reset = document.querySelector('.reset')
const pointDOM = document.querySelector('.pointsNum')
const coinDOM = document.querySelector('.coinsNum')
//const scoreDOM = document.querySelector('.scoreNum')

//audio
const wood_breakk = document.querySelector('.wood-sound')
const mario_coin = document.querySelector('.mario-coin-sound')
const mario_rip = document.querySelector('.mario-rip-sound')
const stone_breakk = document.querySelector('.stone-sound')

let blockstate = 'wood';

//console.error('hi')


let point = 0;
let coin = 0;
let score = 0;
let tool = 'hand'
let block = 100;
let breakkThing = 10;
let testScore = 0;

let breakk = breakkThing;





function mainOne(){
		let div = document.createElement('div')
		field.appendChild(div)
		div.classList.add('divv')
		const divv = document.querySelectorAll('.divv')
		div.style.backgroundSize = 'cover'
		div.style.backgroundPosition = 'center'

		//wood

		
		if (blockstate == 'wood') {
			div.style.background = 'url(images/log.png)'
			div.style.backgroundSize = 'cover'
			div.style.backgroundPosition = 'center'

			if (tool == 'hand') {
				breakkThing = 15;
			}

			let randomnumm = Math.floor(Math.random() *5)
			if (randomnumm == 3) {
				div.style.background = 'url(images/log_j.png)'
				div.style.backgroundSize = 'cover'
				div.style.backgroundPosition = 'center'
			}
			if (randomnumm == 4) {
				div.style.background = 'url(images/log_b.png)'
				div.style.backgroundSize = 'cover'
				div.style.backgroundPosition = 'center'
			}
		}

		//stone

		if (blockstate == 'stone') {
		div.style.background = 'url(images/stone.png)'
		div.style.backgroundSize = 'cover'
		div.style.backgroundPosition = 'center'

		if (tool == 'hand') {
			breakkThing = 40;
		}


		let randomNum = Math.floor(Math.random() *6);
		if (randomNum == 4) {
			div.style.background = 'url(images/iron_ore.png)'
			div.style.backgroundSize = 'cover'
			div.style.backgroundPosition = 'center'
		}
		if (randomNum == 5) {
			div.style.background = 'url(images/gold_ore.png)'
			div.style.backgroundSize = 'cover'
			div.style.backgroundPosition = 'center'
		}
		}

		//diamonds
		if (blockstate == 'diamond') {
			div.style.background = 'url(images/diamond.png)'
			div.style.backgroundSize = 'cover'
			div.style.backgroundPosition = 'center'

			if (tool == 'hand') {
				breakkThing = 70;
			}


			let randommD = Math.floor(Math.random() * 4)
			if (randommD == 2) {
				div.style.background = 'url(images/emerald.png)'
				div.style.backgroundSize = 'cover'
				div.style.backgroundPosition = 'center'
			}
			if (randommD == 3) {
				div.style.background = 'url(images/gold.jpeg)'
				div.style.backgroundSize = 'cover'
				div.style.backgroundPosition = 'center'
			}

		}
		
div.addEventListener("mousedown", function(){
  let breaking = setInterval(() => {
        if (div.style.background !== 'none') {
			console.log(breakk)
			console.log('click')
			breakk --;





			if (blockstate == 'wood') {
				if (breakk == 0) {
					wood_breakk.play()
					point ++;
					score ++;
					score ++;
					score ++;
				}	
			}
			if(blockstate == 'stone'){
			if (breakk == 0) {	
					stone_breakk.play()
					point ++;
					point ++;
					point ++;
					score ++;
					score ++;
					score ++;
					score ++;
				}
			}
			if (blockstate == 'diamond') {
					if (breakk == 0) {
						stone_breakk.play()
						point ++;
						point ++;
						point ++;
						point ++;
						point ++;
						point ++;
						point ++;
						point ++;
						point ++;
						point ++;

						score = score+ 5;
						
					let randomDEATH = Math.floor(Math.random() * 14 + 1)
					if (randomDEATH == 5 || randomDEATH == 8) {
						mario_rip.play()
						coin = coin - 5000;
						alert('u died and lost 2000 coins')
						coinDOM.innerHTML = coin;
					}
					}	
				}
			if (breakk == 0) {
				console.warn(block)
				div.style.background = ('none');
				breakk = breakkThing;
				block --;
				pointDOM.innerHTML = (point)
			}
		}





   }, 250);



div.addEventListener('mouseup', function () {
    window.clearInterval(breaking)
})})

}




	
for(let i = 0;i<100;i++){
	mainOne()
}



setInterval(()=>{
if (block == 0) {
	reset.onclick = ()=>{
	block = 100;
	for(let i=0;i<100;i++){
	field.innerHTML = ''
	setTimeout(()=>{
	for(let i = 0; i< 100; i++){
		mainOne()
	}
},100);
}
}
}
},1)




//tools
const buyBtn = document.querySelectorAll('.buy');
let toolImg = document.querySelector('.toolImgg')
const toolText = document.querySelector('.tool1')


let WAP = '100'
let SAP = '300'
let IAP = '600'
let DAP = '900'
let NAP = '1300'

let WPP = '200'
let SPP = '500'
let IPP = '800'
let DPP = '1200'
let NPP = '1700'



function toolmain(){
	buyBtn[0].onclick = ()=>{
		if (coin >= WAP) {
			tool = 'wooden_axe'
			console.log(tool)
			let coinB = coin - WAP;
			coinDOM.innerHTML = coinB;
			if (blockstate == 'wood') {
				breakkThing = 9;
			}
			if (blockstate == 'stone') {
				breakkThing = 40;
			}
			if (blockstate == 'diamond') {
				breakkThing = 70;
			}
			
			coin = coinB;
			breakk = breakkThing

			toolImg.src = 'images/wood_axe.png'
			toolText.innerHTML = (tool)
		}}
		buyBtn[1].onclick = ()=>{
		if (coin >= SAP) {
			tool = 'stone_axe'
			console.log(tool)
			let coinB = coin - SAP;
			coinDOM.innerHTML = coinB;
			if (blockstate == 'wood') {
				breakkThing = 7;
			}
			if (blockstate == 'stone') {
				breakkThing = 40;
			}
			if (blockstate == 'diamond') {
				breakkThing = 70;
			}
			coin = coinB;

			breakk = breakkThing
			toolImg.src = 'images/stone_axe.png'
			toolText.innerHTML = (tool)
		}}
		buyBtn[2].onclick = ()=>{
			if (coin >= IAP) {
			tool = 'iron_axe'
			console.log(tool)
			let coinB = coin - IAP;
			coinDOM.innerHTML = coinB;
			if (blockstate == 'wood') {
				breakkThing = 5;
			}
			if (blockstate == 'stone') {
				breakkThing = 40;
			}
			if (blockstate == 'diamond') {
				breakkThing = 70;
			}
			coin = coinB;
			breakk = breakkThing

			toolImg.src = 'images/iron_axe.png'
			toolText.innerHTML = (tool)
		}
		}
		buyBtn[3].onclick = ()=>{
			if (coin >= DAP) {
			tool = 'diamond_axe'
			console.log(tool)
			let coinB = coin - DAP;
			coinDOM.innerHTML = coinB;
			if (blockstate == 'wood') {
				breakkThing = 3;
			}
			if (blockstate == 'stone') {
				breakkThing = 40;
			}
			if (blockstate == 'diamond') {
				breakkThing = 70;
			}
			coin = coinB;

			breakk = breakkThing
			toolImg.src = 'images/diamond_axe.png'
			toolText.innerHTML = (tool)
		}
		}
		buyBtn[4].onclick = ()=>{
			if (coin >= NAP) {
			tool = 'netherite_axe'
			console.log(tool)
			let coinB = coin - NAP;
			coinDOM.innerHTML = coinB;
			if (blockstate == 'wood') {
				breakkThing = 2;
			}
			if (blockstate == 'stone') {
				breakkThing = 40;
			}
			if (blockstate == 'diamond') {
				breakkThing = 70;
			}
			coin = coinB;

			breakk = breakkThing
			toolImg.src = 'images/netherite_axe.png'
			toolText.innerHTML = (tool)
		}
		}
		buyBtn[5].onclick = ()=>{
			if (coin >= WPP) {
			tool = 'wooden_pickaxe'
			console.log(tool)
			let coinB = coin - WPP;
			coinDOM.innerHTML = coinB;
			if (blockstate == 'wood') {
				breakkThing = 10;
			}
			if (blockstate == 'stone') {
				breakkThing = 30;
			}
			if (blockstate == 'diamond') {
				breakkThing = 60;
			}
			coin = coinB;

			breakk = breakkThing
			toolImg.src = 'images/wooden_pickaxe.png'
			toolText.innerHTML = (tool)
		}
		}
		buyBtn[6].onclick = ()=>{
			if (coin >= SPP) {
			tool = 'stone_pickaxe'
			console.log(tool)
			let coinB = coin - SPP;
			coinDOM.innerHTML = coinB;
			if (blockstate == 'wood') {
				breakkThing = 10;
			}
			if (blockstate == 'stone') {
				breakkThing = 25;
			}
			if (blockstate == 'diamond') {
				breakkThing = 50;
			}
			coin = coinB;

			breakk = breakkThing
			toolImg.src = 'images/stone_pickaxe.png'
			toolText.innerHTML = (tool)		
		}
		}
		buyBtn[7].onclick = ()=>{
			if (coin >= IPP) {
			tool = 'iron_pickaxe'
			console.log(tool)
			let coinB = coin - IPP;
			coinDOM.innerHTML = coinB;
			if (blockstate == 'wood') {
				breakkThing = 10;
			}
			if (blockstate == 'stone') {
				breakkThing = 20;
			}
			if (blockstate == 'diamond') {
				breakkThing = 40;
			}
			coin = coinB;
			breakk = breakkThing

			toolImg.src = 'images/iron_pickaxe.png'
			toolText.innerHTML = (tool)
		}
		}
		buyBtn[8].onclick = ()=>{
			if (coin >= DPP) {
			tool = 'diamond_pickaxe'
			console.log(tool)
			let coinB = coin - DPP;
			coinDOM.innerHTML = coinB;
			if (blockstate == 'wood') {
				breakkThing = 10;
			}
			if (blockstate == 'stone') {
				breakkThing = 12;
			}
			if (blockstate == 'diamond') {
				breakkThing = 25;
			}
			coin = coinB;

			breakk = breakkThing
			toolImg.src = 'images/diamond_pickaxe.png'
			toolText.innerHTML = (tool)
		}
		}
		buyBtn[9].onclick = ()=>{
			if (coin >= NPP) {
			tool = 'netherite_pickaxe'
			console.log(tool)
			let coinB = coin - NPP;
			coinDOM.innerHTML = coinB;
			if (blockstate == 'wood') {
				breakkThing = 10;
			}
			if (blockstate == 'stone') {
				breakkThing = 6;
			}
			if (blockstate == 'diamond') {
				breakkThing = 15;
			}
			coin = coinB;

			breakk = breakkThing
			toolImg.src = 'images/netherite_pickaxe.png'
			toolText.innerHTML = (tool)
		}
		}
	

}


toolmain()









//shop transition thing
const shopBtn = document.querySelector('.shopBtn')
const shopMenu = document.querySelector('.shop-menu')
const shopCloseBtn = document.querySelector('.close1')
const pointToCoin = document.querySelector('.transfer')

pointToCoin.onclick = ()=>{
	if(point !== 0){
		mario_coin.play()
		coin = coin + point;
		coinDOM.innerHTML = coin;
		pointDOM.innerHTML = 0;
		point = 0;
		console.log(coin)
}
}
setInterval(()=>{
if (coin < 0) {
	coinDOM.style.color = 'red'
} 
if(coin > 0){
	coinDOM.style.color = 'yellow'
}
if (coin == 0) {
	coinDOM.style.color = 'gray'
}
},1)


shopBtn.addEventListener('click', open);
shopCloseBtn.addEventListener('click', close)


function open() {
	shopMenu.style.display = 'block'
	shopMenu.style.opacity = '0'
	shopMenu.classList.add('open')
	setTimeout(()=>{
		shopMenu.style.opacity = '1'
		shopMenu.style.display = 'block'
		shopMenu.classList.remove('open')
	}, 900)
}
function close() {
	shopMenu.classList.add('close')
	setTimeout(()=>{
		shopMenu.style.display = 'none'
		shopMenu.style.opacity = '0'
		shopMenu.classList.remove('close')
	},900)
}





//fields menu
const closeBtn = document.querySelector('.closee')
const fieldsMenu = document.querySelector('.fields-menu')
const fieldsOpenBtn = document.querySelector('.fieldBtn')
const buyBtn1 = document.querySelectorAll('.buyy')
const price = document.querySelectorAll('.pricee')

fieldsOpenBtn.addEventListener('click', open1)
closeBtn.addEventListener('click', close1)


function open1() {
	fieldsMenu.style.display = 'block'
	fieldsMenu.style.opacity = '0'
	fieldsMenu.classList.add('open')
	setTimeout(()=>{
		fieldsMenu.style.opacity = '1'
		fieldsMenu.style.display = 'block'
		fieldsMenu.classList.remove('open')
	}, 900)
}
function close1() {
	fieldsMenu.classList.add('close')
	setTimeout(()=>{
		fieldsMenu.style.display = 'none'
		fieldsMenu.style.opacity = '0'
		fieldsMenu.classList.remove('close')
	},900)
}

let stonePrice = 2000;
let diamondPrice = 5000;


let woodOwned = true
let stoneOwned = false
let diamondOwned = false



function buyLand() {
	buyBtn1[0].onclick = ()=>{
		if (tool == 'hand') {
				breakkThing = 70;
			}
		blockstate = 'wood'
		field.innerHTML = ''
  			for(let i = 0; i < 100; i++){
  			mainOne()
  		}
	}
	buyBtn1[1].onclick = ()=>{
		if (coin >= stonePrice) {
			if (tool == 'hand') {
				breakkThing = 40;
			}
			coin = coin - stonePrice;
			coinDOM.innerHTML = coin;
			blockstate = 'stone'
  			price[1].innerHTML = 'owned'
  			field.innerHTML = ''
  			for(let i = 0; i < 100; i++){
  			mainOne()
  		}
			buyBtn1[1].innerHTML = 'go'
		}
	}
	buyBtn1[2].onclick = ()=>{
		if (coin >= diamondPrice) {
			if (tool == 'hand') {
				breakkThing = 70;
			}
			coin = coin - diamondPrice;
			coinDOM.innerHTML = coin;
			price[2].innerHTML = 'owned'
			blockstate = 'diamond'
			field.innerHTML = ''
  			for(let i = 0; i < 100; i++){
  			mainOne()
  		}
			buyBtn1[2].innerHTML = 'go'
			if (diamondOwned == false) {
			setTimeout(()=>{
				alert('this mine is very good but there is a chance of dying while mining and losing 5000 coins.')
			},150)
			diamondOwned = true
		}
		}
	}
}
buyLand()







//starter

const starter = document.querySelector('.starter')
const nameInput = document.querySelector('.nameInput')
const startBtn = document.querySelector('.startBtn')
const containerMain = document.querySelector('.container')

startBtn.onclick = ()=>{

/*	starter.style.display = 'none'
    containerMain.style.display = 'block'
    localStorage.setItem('name', `${nameInput.value}`)*/
    
	if (nameInput.value.trim() == '') {
		alert('u need to have a name first')
	}
	else if(nameInput.value.trim() !== '') {
      	starter.style.display = 'none'
      	containerMain.style.display = 'block'
      	localStorage.setItem('name', `${nameInput.value}`)
      	/*setTimeout(()=>{
      		alert(`hello ${localStorage.getItem('name')}`)
      	},50)*/
	}
	
}
if (localStorage.getItem('name') !== '') {
		starter.style.display = 'none'
      	containerMain.style.display = 'block'
	}


//secret
const codeDiv = document.querySelector('.secret-code')
const codeInput = document.querySelector('.secret')
const submitCode = document.querySelector('.submit-code')
const ExitCode = document.querySelector('.exit-code')

coinDOM.onclick = ()=>{
	containerMain.style.display = 'none'
	codeDiv.style.display = 'block'

	submitCode.onclick = ()=>{
		if(codeInput.value == 'amogus'){
			alert('u earned 500 coins')
			coin = 500;
			coinDOM.innerHTML = coin;
			codeInput.value = ''
		}
		else if(codeInput.value == 'sus'){
			alert('u earned 500 coins')
			coin = 500;
			coinDOM.innerHTML = coin;
			codeInput.value = ''
		}
		else if(codeInput.value.trim() !== ''){
			let link = document.createElement('a')
			link.innerHTML = ('<a target="_blank" href="https://youtu.be/dQw4w9WgXcQ">get ur coins</a>')
			codeDiv.appendChild(link)
			link.onclick = ()=>{
				link.remove()
				setTimeout(()=>{
					alert('jk its amogus')
				},1000)
			}
		}
	}


	ExitCode.onclick = ()=>{
	containerMain.style.display = 'block'
	codeDiv.style.display = 'none'
	}
}






//local storage thing
//localStorage.setItem('name',  '')
