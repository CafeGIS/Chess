var TourBlancheGauche, TourBlancheDroite,
    CavalierBlancGauche, CavalierBlancDroit,
    FouBlancGauche, FouBlancDroit,
    DameBlanche, RoiBlanc,
    PionBlancA, PionBlancB, PionBlancC, PionBlancD, 
    PionBlancE, PionBlancF, PionBlancG, PionBlancH;


var TourNoireGauche, TourNoireDroite,
    CavalierNoirGauche, CavalierNoirDroit,
    FouNoirGauche, FouNoirDroit,
    DameNoire, RoiNoir,
    PionNoirA, PionNoirB, PionNoirC, PionNoirD, 
    PionNoirE, PionNoirF, PionNoirG, PionNoirH;

/* Droite et gauche consideres du point de vue du joueur
** Pour les pions, correspond a la colonne de depart 
*/

var EnsembleDesPieces;


function positionInitiale()
{
    creerPieces();

    EnsembleDesPieces = new Array(TourBlancheGauche, TourBlancheDroite,
				  CavalierBlancGauche, CavalierBlancDroit,
				  FouBlancGauche, FouBlancDroit,
				  DameBlanche, RoiBlanc,
				  PionBlancA, PionBlancB, PionBlancC, PionBlancD, 
				  PionBlancE, PionBlancF, PionBlancG, PionBlancH,
				  TourNoireGauche, TourNoireDroite,
				  CavalierNoirGauche, CavalierNoirDroit,
				  FouNoirGauche, FouNoirDroit,
				  DameNoire, RoiNoir,
				  PionNoirA, PionNoirB, PionNoirC, PionNoirD, 
				  PionNoirE, PionNoirF, PionNoirG, PionNoirH);

    poserPieces();
}
// D1 : dame blanche


function creerPieces()
{
    /* BLANC */
    TourBlancheGauche = new Piece("./Images/TourBlanche.png", "BLANC", "A1", "TBG");
    TourBlancheDroite = new Piece("./Images/TourBlanche.png", "BLANC", "H1", "TBD");
    CavalierBlancGauche = new Piece("./Images/CavalierBlanc.png", "BLANC", "B1", "CBG");
    CavalierBlancDroit = new Piece("./Images/CavalierBlanc.png", "BLANC", "G1", "CBD");
    FouBlancGauche = new Piece("./Images/FouBlanc.png", "BLANC", "C1", "FBG");
    FouBlancDroit = new Piece("./Images/FouBlanc.png", "BLANC", "F1", "FBD");
    DameBlanche = new Piece("./Images/DameBlanche.png", "BLANC", "D1", "DB");
    RoiBlanc = new Piece("./Images/RoiBlanc.png", "BLANC", "E1", "RB");
    
    PionBlancA = new Piece("./Images/PionBlanc.png", "BLANC", "A2", "PBA");
    PionBlancB = new Piece("./Images/PionBlanc.png", "BLANC", "B2", "PBB");
    PionBlancC = new Piece("./Images/PionBlanc.png", "BLANC", "C2", "PBC");
    PionBlancD = new Piece("./Images/PionBlanc.png", "BLANC", "D2", "PBD");
    PionBlancE = new Piece("./Images/PionBlanc.png", "BLANC", "E2", "PBE");
    PionBlancF = new Piece("./Images/PionBlanc.png", "BLANC", "F2", "PBF");
    PionBlancG = new Piece("./Images/PionBlanc.png", "BLANC", "G2", "PBG");
    PionBlancH = new Piece("./Images/PionBlanc.png", "BLANC", "H2", "PBH");

    /* NOIR */
    TourNoireGauche = new Piece("./Images/TourNoire.png", "NOIR", "H8", "TNG");
    TourNoireDroite = new Piece("./Images/TourNoire.png", "NOIR", "A8", "TND");
    CavalierNoirGauche = new Piece("./Images/CavalierNoir.png", "NOIR", "G8", "CNG");
    CavalierNoirDroit = new Piece("./Images/CavalierNoir.png", "NOIR", "B8", "CND");
    FouNoirGauche = new Piece("./Images/FouNoir.png", "NOIR", "F8", "FNG");
    FouNoirDroit = new Piece("./Images/FouNoir.png", "NOIR", "C8", "FND");
    DameNoire = new Piece("./Images/DameNoire.png", "NOIR", "D8", "DN");
    RoiNoir = new Piece("./Images/RoiNoir.png", "NOIR", "E8", "RN");
    
    PionNoirA = new Piece("./Images/PionNoir.png", "NOIR", "A7", "PNA");
    PionNoirB = new Piece("./Images/PionNoir.png", "NOIR", "B7", "PNB");
    PionNoirC = new Piece("./Images/PionNoir.png", "NOIR", "C7", "PNC");
    PionNoirD = new Piece("./Images/PionNoir.png", "NOIR", "D7", "PND");
    PionNoirE = new Piece("./Images/PionNoir.png", "NOIR", "E7", "PNE");
    PionNoirF = new Piece("./Images/PionNoir.png", "NOIR", "F7", "PNF");
    PionNoirG = new Piece("./Images/PionNoir.png", "NOIR", "G7", "PNG");
    PionNoirH = new Piece("./Images/PionNoir.png", "NOIR", "H7", "PNH");
}



function poserPiece(p)
{
    pos = p.position;
    img = document.createElement('img');
    img.style.height = img.style.width = '100%';
    img.src = p.source;
    img.id = p.idImage;

    img.draggable = "true";
    
	/*** Comportements drag&drop ***/
	ondragstartAttr = document.createAttribute("ondragstart");
	ondragstartAttr.value = "comportementDragStart(event)";
	img.setAttributeNode(ondragstartAttr);

	ondragendAttr = document.createAttribute("ondragend");
	ondragendAttr.value = "comportementDragEnd(event)";
	img.setAttributeNode(ondragendAttr);

	ondragAttr = document.createAttribute("ondrag");
	ondragAttr.value = "comportementDrag(event)";
	img.setAttributeNode(ondragAttr);
	/**********************************************************/

    document.getElementById(pos).appendChild(img);
}


function poserPieces()
{
    for (i in EnsembleDesPieces)
	poserPiece(EnsembleDesPieces[i]);	    
}











