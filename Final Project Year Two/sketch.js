let bool = true;
let fact;
function setup(){
	let pop=createCanvas(1000, 500);
	background(184, 211, 255);
	let start=createButton("building 1");
	start.mousePressed(facts);
	start.position(1015,360);
	
	let start1=createButton("building 2");
	start1.mousePressed(facts2);
	start1.position(1015,400);
	let start2=createButton("building 3")
	start2.mousePressed(facts3);
	start2.position(1015, 440);
	let start3=createButton("pine tree 1");
	start3.mousePressed(facts4);
	start3.position(1015, 480);
	fact = createP("click a button to learn more");
	// footer = createP("This website was created for This project is for <a href='http://www.smash.org/'>SMASH Berkeley 2018.</a>");
	// footer.addClass('footer');
}

function draw(){
	drawBridge();
	noStroke();
		//sun//
			fill(255,237,105);
			strokeWeight(2);
			stroke(252,226,35);
			ellipse(930,70, 90,90);
			stroke(5);
//background buildings//
strokeWeight(10);
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
	fill(30, 92, 102);
	rect(500,140,115,500);
	//building 6//
	strokeWeight(8);
	fill(186, 204, 197);
	rect(500,240,205,500);
	//building 7//
	fill(47, 97, 62);
	rect(740,150,150,500);
	//building 8//
	fill(67, 85, 115);
	rect(140,500);
	//building 9//
	fill(65,70,110);
	rect(840,300,200,500);


function drawBridge(){
	fill(230,76,16);
	stroke(204,65,10);
	//2 main straight line//
		strokeWeight(20);
		line(5, 100, 5,500);
		line(65, 100,65,500);
	//arcs//
	fill(181,56,7);
		strokeWeight(12);	
    	noFill();
    	line(7, 112, 65, 112);
       	line(7, 162, 65, 162);
       	line(7, 212, 65, 212);
       	line(7, 262, 65, 262);
     	angleMode(DEGREES); 
     	strokeWeight(8);
      	arc(315,95,500,410,90,180);
      	arc(35, 150, 60, 70, -180, -90);
      	arc(35, 150, 60, 70, -90,0);
      	arc(35, 200, 60, 70, -180, -90);
      	arc(35, 200, 60, 70, -90,0);
      	arc(35, 250, 60, 70, -180, -90);
      	arc(35, 250, 60, 70, -90,0);
      	arc(35, 300, 60, 70, -180, -90);
      	arc(35, 300, 60, 70, -90,0);
     //small lines//
     	strokeWeight(7);
     	line(90, 190, 90,330);
		line(110, 211,110,330);
		line(130, 232,130,330);
		line(150, 251,150,330);
		line(170, 262,170,330);
		line(190, 273,190,330);
		line(210, 283,210,330);
		line(225, 290,225,330);
	//X-lines//
		strokeWeight(7);
		line(5, 350, 65, 350);
			line(5, 350, 65, 400);
			line(65, 350, 5, 400);
		line(5, 400, 65, 400);
		line(5, 420, 65, 420);
			line(5, 420, 65, 470);
			line(65, 420, 5, 470);
		line(5, 470, 65, 470);
	//vertical line//
		strokeWeight(35);
		line(2, 320, 400, 320);
	//stone//
		strokeWeight();
		fill(151, 161, 166);
		rect(0, 485, 85, 485);
}

//buildings with lights//
		strokeWeight(3);
		//tree1//
			fill(23,153,40);
			stroke(17,97,10);
			triangle(270, 475, 240, 400, 210, 475);
			triangle(270, 450, 240, 375, 210, 450);
			triangle(270, 425, 240, 350, 210, 425);
			//stump//
			stroke(97,49,10);
			fill(133,100,11);
			rect(230,475,20,40);
			
		//building 1//
			stroke('black');
			fill(20, 16, 38);
			rect(300, 200, 130, 490);
		//building 2//
			fill(60,62,92);
			rect (450,180, 130,590);
		//building 3//
			fill(15,17,48);
			rect(700, 190, 230, 490);	
		//tree2//
			fill(23,153,40);
			stroke(17,97,10);
			triangle(670, 475, 640, 400, 610, 475);
			triangle(670, 450, 640, 375, 610, 450);
			triangle(670, 425, 640, 350, 610, 425);
			//stump//
			fill(133,100,11);
			stroke(97,49,10);
			rect(630,475,20,40);
		//tree 3//
			fill(23,153,40);
			stroke(17,97,10);
			triangle(990, 475, 960, 400, 930, 475);
			triangle(990, 450, 960, 375, 930, 450);
			triangle(990, 425, 960, 350, 930, 425);
			//stump//
			fill(133,100,11);
			stroke(97,49,10);
			rect(950,475,20,40);		
		//windows//
		stroke('black');
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
