let bool = true;
let fact;
function setup(){
	createCanvas(1000, 500);
	background(199,223,240);
	let start=createButton("building 1");
	start.mousePressed(facts);
	start.position(1060,160);
	let start1=createButton("building 2");
	start1.mousePressed(facts2);
	start1.position(1060,200);
	let start2=createButton("building 3")
	start2.mousePressed(facts3);
	start2.position(1060, 240);
	let start3=createButton("pine tree 1");
	start3.mousePressed(facts4);
	start3.position(1060, 280);
	fact = createP("click a button to learn more");
}

function draw(){ 
	drawBridge();
	noStroke();
		//sun//
			fill(255,248,31);
			ellipse(76,60, 95, 95);
	stroke(5);
//background buildings//
	//building 1//
	fill(55,79,110);
	rect(240,100,200,500);
	//building 3//
	fill(90,97,89);
	rect(440,90,120,500);
	//building 2//
	fill(74,50,97);
	rect(350,50,100,500);
	//building 5//
	fill(95,114,135);
	rect(600,90,150,500);
	//building 4//
	fill(162,166,171);
	rect(500,140,115,500);
	//building 6//

//buildings with lights//
		//tree1//
			fill(23,153,40);
			triangle(170, 475, 140, 400, 110, 475);
			triangle(170, 450, 140, 375, 110, 450);
			triangle(170, 425, 140, 350, 110, 425);
			//stump//
			fill(133,100,11);
			rect(130,475,20,40);
			
		//building 1//
			fill(2,3,23);
			rect(300, 200, 130, 490);
		//building 2//
			fill(60,62,92);
			rect (450,180, 130,590);
		//building 3//
			fill(15,17,48);
			rect(700, 190, 230, 490);	
		//tree//
			fill(23,153,40);
			triangle(670, 475, 640, 400, 610, 475);
			triangle(670, 450, 640, 375, 610, 450);
			triangle(670, 425, 640, 350, 610, 425);
			//stump//
			fill(133,100,11);
			rect(630,475,20,40);
			
		//windows//
			fill(255, 221, 110);

			ventanas2(310,215,30,81);
			ventanas2(310,290,30,81);
			ventanas2(310,365,30,81);
			ventanas2(310,440,30,81);

			ventanas3(460, 200,50,40);
			ventanas3(460,300,50,40);
			ventanas3(460,400,50,40);
			
			ventanas4(710,210,50,60);
			ventanas4(710,310,50,60);
			ventanas4(710,410,50,60);
			
}

function drawBridge(){
}

function ventanas2(x,y,vSpace,hSpace){
 //building 1 windows//
 	square(x, y,30);
 	square(x,y+vSpace,30);
//right windows//
	square(x+hSpace,y,30);
	square(x+hSpace,y+vSpace,30);
}

 function ventanas3(x,y,vSpace,hSpace){
 //building 2//
	//first windows//
		 square(x, y,30);
		 square(x,y+vSpace,30);
	//middle windows//
			square(x+hSpace,y,30);
			square(x+hSpace,y+vSpace,30);
	//last windows//
		 square(x+hSpace*2,y,30);
		 square(x+hSpace*2,y+vSpace,30);
 }

 function ventanas4(x,y,vSpace,hSpace){
 	//3rd building windows//
		//first windows//
			 square(x, y,30);
			 square(x,y+vSpace,30);
		//2nd windows//
			square(x+hSpace,y,30);
			square(x+hSpace,y+vSpace,30);
		//3rd windows//
			 square(x+hSpace*2,y,30);
			 square(x+hSpace*2,y+vSpace,30);
		//4th windows//
			 square(x+hSpace*3,y,30);
			 square(x+hSpace*3,y+vSpace,30);
 }
 function facts() {
 	fact.remove();

 	fact = createP("In recent years San Francisco has been a leader in lowering CO2 emissions. In 2018, the mayor of San Franciso announced plans to reduce the carbon footprint of the city to 0 by 2050, which is a very ambitious goal." );
 	//
 	
 // 	if (bool === true){
	// 	noLoop();ss
	// 	bool = false;
	// }
	// else {
	// 	loop();
	
	// }
 }
function facts2() {
	fact.remove();
	fact = createP("In past years the city has also been actively making reductions and restrictions in order to help the environment. For example, in 2014 the city took measures in order to reduce plastic. The city banned the distribution and sale of plastic disposable water bottles on city property and increased the accessibility to water fountains in the area");
	
 }

 function facts3() {
 	fact.remove();
fact = createP("In 2017 another proposal was introduced called the Electric Vehicle Readiness ordinance. This was aimed to help electric vehicle conductors and to promote electic cars. This ordinance stated that each new building in San Francisco must have a charging statoin for electric cars.");
 }

 function facts4() {
	fact.remove();
fact = createP("According to the website: marinij.com, in some urban cores like Oakland, where emissions from transportation are low, meat consumption contributes roughly an equivalent amount as vehicles, the researchers found, because livestock farming produces large amounts of greenhouse gases.");
 }