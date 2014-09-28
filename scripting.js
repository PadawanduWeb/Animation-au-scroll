$(document).ready(function(){
	
	/*
		Création d'un tableau de données.
		- l'image est placée dans le dossier "img". Si le dossier se nomme autrement, il suffit de changer la variable "dossier".
		- L'attribut "devant" du tableau, indique si l'objet se place devant le cube animé ou derrière.
		- Le type de transition est indiqué dans "transition", trois types sont déjà créé de base. Il est possible d'en créé d'autres en ajoutant une condition dans le "switch"
			de la fonction "animation()".
		- initX et initY sont les positions auxquelles l'animation commencera.
		- midX et mixY sont les positions lorsque nous sommes au centre de la page.
		- endX et endY sont les positions de fin de l'animation.
		- "aniScale" est l'échelle de l'animation, la vitesse.
	*/
	var dossier = "img";
	var tab = [
	//   0      1               2                        3             4       5       6       7       8      9       10      11      12      13
	//	 page	nom ID			fichier				 devant    transition   width  height   initX   initY    midX    midY    endX    endY  aniScale
		[0,		"titreBel",	    "titreBelgique.png",     0,  "ease-fade",    947,    485,      0,      0,   -373,   -242,   -673,   -100,      1],
		[0,		"belgPays",	    "belgiquePays.png",	     0, "ease-scale",    710,    581,      0,      0,   -416,   -232,      0,      0,      2],
		[0,		"belgTxt",	    "txtBelgique.png",		 1,       "ease",    304,    104,      0,      0,   -352,   -118,   -352,   -700,      1],
		
		[1,		"gdChoco",	    "gdChoco.png",		     0, "ease-scale",    785,    784,      0,      0,   -392,   -392,      0,      0,    1.5],
		[1,		"myChoco",	    "myChoco.png",		     0, "ease-scale",    684,    684,      0,      0,   -342,   -342,      0,      0,    2.0],
		[1,		"ptChoco",	    "ptChoco.png",		     0, "ease-scale",    504,    505,      0,      0,   -252,   -252,      0,      0,    2.5],
		[1,		"titreChoco",	"titreChoco.png",	     0,  "ease-fade",   1241,    265,   -750,     20,   -620,   -132,   -490,   -284,    1.3],
		[1,		"chocoCentre",	"chocoCentre.png",		 0,  "ease-fade",    639,    682,     -4,   -584,   -304,   -384,   -604,   -184,      1],
		[1,		"elemGauChoco",	"elemGauChoco.png",		 0,  "ease-fade",    352,    471,   -600,    100,   -324,   -160,   -600,   -400,      1],
		[1,		"textChoco2", 	"textChoco2.png",	     1,       "ease",    243,     51,    120,    120,    184,    186,   1000,    252,      1],
		[1,		"elemDrCh", 	"elemDroitChoco.png",	 1,       "ease",    293,    167,     50,    110,    -46,     60,    600,     10,    1.5],
		[1,		"textChoco1", 	"textChoco1.png",	     1,       "ease",    325,     97,   -900,    200,   -500,     -4,   -900,   -200,      1],
		
		[2,		"grandCirc",	"circGdFr.png",		     0, "ease-scale",    694,    694,      0,      0,   -347,   -347,      0,      0,    1.5],
		[2,		"moyenCirc",	"circMoyFr.png",	     0, "ease-scale",    658,    658,      0,      0,   -329,   -329,      0,      0,    2.0],
		[2,		"petitCirc",	"circPtFr.png",		     0, "ease-scale",    451,    451,      0,      0,   -225,   -225,      0,      0,    2.5],
		[2,		"imgArriere",	"titreArriere.png",		 0,  "ease-fade",   1249,    485,    -24,   -100,   -624,   -200,  -1224,   -300,      1],
		[2,		"frite1",		"frite1.png",			 0,       "ease",    227,    172,   -780,   -420,   -379,   -296,   -650,   -600,      1],
		[2,		"frite2",		"frite2.png",			 0,  "ease-fade",    201,    164,    700,    300,    208,    158,    120,    400,      2],
		[2,		"frite5",		"frite5.png",			 0,       "ease",    124,    758,    -82,    600,    -82,   -368,    -82,   -900,      1],
		[2,		"frite4",		"frite4.png",			 0,       "ease",    205,    528,   -400,    150,   -235,   -280,   -500,   -700,      1],
		[2,		"frite3",		"frite3.png",			 0,       "ease",    459,    368,   -600,   -189,   -378,    -89,   -100,     20,    1.7],
		[2,		"tache1",		"tache1.png",			 0, "ease-scale",    544,    594,      0,      0,   -352,   -392,      0,      0,    2.5],
		[2,		"tache2",		"tache2.png",			 0, "ease-scale",    450,    550,      0,      0,    -71,   -220,      0,      0,    1.5],
		[2,		"friteCroix",	"fritesCroix.png",		 1,       "ease",    112,    149,    200,    272,     90,     72,    900,   -300,      1],
		[2,		"fritTxt2",	    "prodFrit.png",		     1,       "ease",    207,     49,    400,    272,    189,    116,    700,   -100,      1],
		[2,		"fritTxt1",	    "friterieTxt.png",		 1,       "ease",    256,     79,   -600,   -300,   -375,   -129,   -700,    -65,    1.5],
		[2,		"fritTxt3",	    "fritBelge.png",	     1,       "ease",    256,     84,   -650,    250,   -358,     46,   -900,   -120,      1],
		
		[3,		"titreBiere", 	"titreBiere.png",	     0,  "ease-fade",   1107,    557,   -700,      0,   -396,   -238,      0,      0,      1],
		[3,		"gdBiere", 	    "gdBiere.png",		     0, "ease-scale",    797,    687,      0,      0,   -367,   -417,      0,      0,    1.5],
		[3,		"myBiere", 	    "myBiere.png",		     0, "ease-scale",    652,    624,      0,      0,   -367,   -337,      0,      0,    1.9],
		[3,		"ptBiere", 	    "ptBiere.png",		     0, "ease-scale",    491,    523,      0,      0,   -145,   -247,      0,      0,    2.5],
		[3,		"tacheBiere", 	"tacheBiere.png",	     0,  "ease-fade",    220,    212,      0,      0,   -388,    135,      0,      0,      1],
		[3,		"ombreBiere", 	"ombreBiere.png",	     0,  "ease-fade",    188,    460,   -250,    -80,   -186,   -135,      0,      0,    2.0],
		[3,		"ombreBiere2", 	"ombreBiere2.png",		 0,  "ease-fade",     91,    223,      0,      0,   -471,   -148,      0,      0,    1.3],
		[3,		"ombreBiere3", 	"ombreBiere3.png",		 0,  "ease-fade",     61,    145,      0,      0,   -498,    -54,      0,      0,    1.5],
		[3,		"bullesBiere", 	"bullesBiere.png",		 0,  "ease-fade",     76,     97,      0,   -100,   -486,   -154,      0,      0,    2.0],
		[3,		"planteBiere", 	"planteBiere.png",		 0,  "ease-fade",    457,    468,      0,      0,   -101,   -352,      0,      0,      1],
		[3,		"vagueBiere", 	"vagueBiere.png",	     0,  "ease-fade",    180,     61,   -300,    216,    105,    216,      0,      0,      2],
		[3,		"biere", 	    "biere.png",	         0,       "ease",    418,    796,    500,   -323,   -429,   -323,      0,      0,      1],
		[3,		"gouteBiere", 	"gouteBiere.png",	     0,  "ease-fade",     26,     42,   -395,   -700,   -395,   -315,      0,      0,      3],
		[3,		"gouteBiere2", 	"gouteBiere2.png",		 0,  "ease-fade",     26,     42,   -356,   -700,   -356,   -315,      0,      0,      4],
		[3,		"gouteBiere3", 	"gouteBiere3.png",		 0,  "ease-fade",     26,     42,   -322,   -700,   -322,   -315,      0,      0,      5],
		[3,		"volBiere", 	"volBiere.png",		     0,       "ease",    263,    285,   -150,   -100,    253,   -439,      0,      0,      3],
		[3,		"textBiere2", 	"textBiere2.png",	     0,  "ease-fade",    225,     45,    -50,      0,     25,    151,      0,      0,      1],
		[3,		"textBiere", 	"textBiere.png",	     1,       "ease",    209,     98,   -500,    200,   -256,     48,      0,      0,    1.3]
	];
	
	var hauteurBloc = 1200; //hauteur des pages
	var maxBloc = 4; //Nombre des pages
	var centre = 0; //Variable pour le calcul du centre
	var sequence = 35; //Nombre de séquence que comporte l'animation du cube
	var hauteurCube = 300;

	construct();
	function construct(){
		$('.page').append('<div class="background"><div class="centre"></div></div>'); //Ajout du background pour chaque page
		$('#module').append('<img src="'+dossier+'/fleches.gif" alt="Scroll" id="fleche" />'); //Ajout des flèches animées
		$('#fleche').css({'position':'absolute','left':'175px','top':'200px','cursor':'pointer'}).click(function(){ //Placement de la flèche et attribution d'une fonction
			$(window).scrollTo({top:1*hauteurBloc+(hauteurBloc/2)-centre,left:0},3000);
			$(window).scrollTo({top:2*hauteurBloc+(hauteurBloc/2)-centre,left:0},3000);
			$(window).scrollTo({top:3*hauteurBloc+(hauteurBloc/2)-centre,left:0},3000);
		});
		resizeWindow();
		//Attribution des paramètres CSS aux images depuis le tableau de données
		for(i=0;i<tab.length;i++){
			$("#page"+tab[i][0]+" .centre").append('<img id="'+tab[i][1]+'" src="'+dossier+'/'+tab[i][2]+'" alt="" />'); //Placement des images dans la page
			$("#"+tab[i][1]).css({
				"width"		:	tab[i][5],
				"height"	:	tab[i][6],
				"left"		:	tab[i][9],
				"top"		:	tab[i][10],
				"z-index"	:	(tab[i][3]*500+i)
			});
		}
	}
	
	//Fonction lorsqu'on scroll la page
	$(window).scroll(function(){
		positionRefresh();
	});
	//Fonction lorsqu'on redimensionne la page
	$(window).resize(resizeWindow);
	
	/*	
		A chaque scroll de la page, la fonction va replacer les éléments au centre
		Si la position du scroll divisée par 200 est plus petite ou égale à 0 on affiche la flèche, sinon on la cache.
	*/
	function positionRefresh(){
		$('.page').each(function(){
			var id=$(this).attr('id').replace('page','');
			$(this).css({'top':-$(window).scrollTop()+(hauteurBloc*id)+hauteurBloc/2+'px'});
			$(this).find('.centre').css({'top':(($(window).scrollTop()-(hauteurBloc*id))+centre)+'px'});
		});
		var posModule = Math.floor(($(window).scrollTop()-1)/(($('#content').height()-$(window).height())/sequence))*hauteurCube;
		$('#module').css({'background-position':'center -'+posModule+'px'});
		(1-$(window).scrollTop()/200<=0)? $('#fleche').hide() : $('#fleche').show().css({'opacity':1-$(window).scrollTop()/200});
		$('.background').css({'background-position':'center '+$(window).scrollTop()+'px'});
		animation();
	}
	
	/*
		Fonction animation
		Pour chaque élément, lors du scroll, nous animons en fonction du type d'animation dans le tableau.
		Il s'agit d'une modification css
	*/
	
	function animation(){
		var pourcent = 0;
		var refX = 0;
		var refY = 0;
		for(i=0;i<tab.length;i++){
			/*
				Le pourcent correspond à la position dans chaque page.
				Nous commençons à -100%, au centre de la page nous sommes à 0% et à la fin de la page à 100% et nous refaisons le processus 4 fois pour 4 pages.
			*/
			pourcent = (($(window).scrollTop()+centre)-(tab[i][0]*hauteurBloc+hauteurBloc/2))/hauteurBloc*tab[i][13];
			if(pourcent>=1){pourcent=1};
			if(pourcent<=-1){pourcent=-1};
			pourcent = Math.pow(pourcent,3);
			(pourcent>=0)? refX = tab[i][11] : refX = tab[i][7];
			(pourcent>=0)? refY = tab[i][12] : refY = tab[i][8];
			if(tab[i][0]==0 && pourcent<=0){pourcent=0;} // Si nous sommes à la page 0, le pourcentage commence à 0 pour qu'il n'y ait pas d'animation de début
			switch(tab[i][4]){
				case "ease-fade":
					$("#"+tab[i][1]).css({
						"left"		:	tab[i][9]-(tab[i][9]-refX)*Math.abs(pourcent),
						"top"		:	tab[i][10]+(tab[i][10]-refY)*(-Math.abs(pourcent)),
						'opacity'	:	1-Math.abs(pourcent)
					});
				break;
				case "ease-scale":
					$("#"+tab[i][1]).css({
						"left"		:	tab[i][9]-(tab[i][9]-refX)*Math.abs(pourcent),
						"top"		:	tab[i][10]+(tab[i][10]-refY)*(-Math.abs(pourcent)),
						"width"		:	tab[i][5]*(1-Math.abs(pourcent))+"px",
						"height"	:	tab[i][6]*(1-Math.abs(pourcent))+"px"
					});
				break;
				case "ease":
					$("#"+tab[i][1]).css({
						"left"		:	tab[i][9]-(tab[i][9]-refX)*Math.abs(pourcent),
						"top"		:	tab[i][10]+(tab[i][10]-refY)*(-Math.abs(pourcent))
					});
			}
		}
	}
	
	/* 
		Lorsque la page est redimensionnée, les éléments se placent au centre.
		Cette fonction sert à placer les éléments au centre pour tout type d'écran
	*/
	function resizeWindow(){
		centre = Math.round($(window).height()/2);
		$('#content').css({'height':((maxBloc-1)*hauteurBloc+hauteurBloc/2+centre)+'px'});
		positionRefresh();
	}
});
