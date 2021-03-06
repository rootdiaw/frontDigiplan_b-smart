import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { element } from 'protractor';
import { Plateforme } from 'src/app/models/plateforme.model';
import { OptionService } from 'src/app/services/option.service';
import { PlateformeService } from 'src/app/services/plateforme.service';

@Component({
  selector: 'app-plateform',
  templateUrl: './plateform.component.html',
  styleUrls: ['./plateform.component.scss']
})
export class PlateformComponent implements OnInit {

  var_objectifmacrom1!:any
  tab:Array<String>=[];
  filteredArray:Array<String>=[];
  displayedColumns: string[] =[ 'reseau', 'heurepost', 'format'];
  dataSource!:MatTableDataSource<Plateforme>;
  tabreseauSocial?:any;


  @ViewChild(MatPaginator) paginator!: MatPaginator ;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private plateformeService: PlateformeService,private optionService: OptionService,
    @Inject(MAT_DIALOG_DATA) public data: {var_objectifmacrom: String}) 
  {
    this.var_objectifmacrom1=data.var_objectifmacrom;
   }

  ngOnInit(): void {
    let a="Facebook";
    let b="Youtube";
    let c="Pinterest";
    let d="Tik Tok";
    let e="Twitter";
    let f="Instagram";
    let g="Snap";
    let h="Linkedin";
     this.var_objectifmacrom1.forEach((element: any) =>{
      

       for(let elt of element.plateformes){
          this.tab.push(elt.nom)
       }

            
    }) 
    this.filteredArray = this.tab.filter( (ele,pos)=>this.tab.indexOf(ele) == pos);
     this.getPlateforme();
  }

  getPlateforme(){
    this.plateformeService.getAllPlateformebyArray(this.filteredArray).subscribe(
      data=>{
        this.dataSource = new MatTableDataSource(data) ;
      }
    )
   
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
    
  rowClicked(row: any): void 
  {
     console.log(row);  
  }

}

/* export interface PeriodicElement {
  reseau: String;
  heure_post: String;
  format: String;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { reseau: 'Facebook', 
  heure_post: "En semaine entre 7h et 10h. Le week entre de 9h ?? 11h.",
   format: 'Photo de profil : 180??180 pixels. ?? noter : la photo est en format cercle. Afin que votre image s???affiche correctement, pensez ?? bien la centrer ! Photo de couverture : 851??315 pixels. Photo ou vid??o post??e dans le fil d???actualit?? : au moins 1200 pixels de large. Vous ??tes libre du format : portrait, paysage ou carr??, ?? vous de voir selon votre cr??ativit?? et vos besoins ! Image d???un lien web : 600??315 pixels. Stories (photo ou vid??o) : 1080??1920 pixels. Photo de couverture d???un ??v??nement : 1920 x 1080 pixels. Photos de carrousel : 1080??1080 pixels.'},
  { reseau: 'Twitter',
   heure_post: "En semaine Tweeter ?? 17h",
    format: 'Photo de profil : 400??400 pixels. Photo de couverture : 1500??500 pixels. Photo publi??e dans le fil d???actualit?? : 1024??512 pixels si vous voulez qu???elle apparaisse correctement. Le cas ??ch??ant, elle sera tronqu??e et vous risquez de perdre en visibilit??. Vid??o publi?? dans le fil d???actualit?? : format 16 :9 ou carr??, les deux s???affichent parfaitement dans la timeline Twitter.'},
  { reseau: 'Instagram',
   heure_post: "Chaque jour entre 13h et 17h. Un contenu vid??o sur Instagram est entre 21h et 8h",
    format: 'Photo de profil : 320??320 pixels. Photo dans le fil d???actualit?? : si la taille carr??e est recommand??e (1080??1080 pixels), vous pouvez aussi publier des images au format paysage (1080??566 pixels) ou portrait (1080??1350 pixels). Stories (photo ou vid??o) : 1080??1920 pixels.'},
  { reseau: 'Linkedin',
   heure_post: "Du mardi au jeudi  publi?? entre 9h et 11h.", 
   format: 'Logo d???une page LinkedIn : 300??300 pixels. Photo de couverture : 1536??768 pixels. Photo d???un lien web : 1200??627 pixels. Image d???un contenu : 1200??627 pixels.'},
  { reseau: 'TikTok', 
  heure_post: "Chaque jour de 6h ?? 9h, le soir . Les lundis et mercredis de 22h ?? 23h ,  le matin de 7h ?? 11h et le soir de 16h ?? 20h.Le week  le matin de 7h ?? 11h et le soir de 16h ?? 20h.",
   format: 'Photo de profil : 200??200 pixels. La vid??o en format vertical est pr??f??rable, mais vous pouvez aussi publier en paysage : Vid??o portrait : 1080??1920 pixels Vid??o paysage : 1280??720 pixels'},
  { reseau: 'Snap',
   heure_post: "Chaque jour , au moins 2 ?? 3 fois par jour Ciblez les utilisateurs ?? l???heure o?? ils vont se coucher, de 21h ?? 23h",
    format: 'Publication, story, geofilter, publicit????? Toutes vos publications Snapchat doivent ??tre au format 1080??1920 pixels.'},
  { reseau: 'Pinterest',
   heure_post: "Entre 20h et 23h et entre 2h et 4h du matin. Si la majeure partie de votre audience travaille de 9h ?? 17h, faut poster avant/apr??s les heures de travail et le d??jeuner.",
   format: 'Photo de profil : 600??600 pixels.??pingle classique : 600??900 pixels.Grande ??pingle : 600??1260 pixels.??pingle carr??e : 600??600 pixels. Couverture d???un tableau : 600??600 pixels.'},
  { reseau: 'Youtube',
   heure_post: "Jeudi ou vendredi. Entre 14h et 16h et entre 19h et 22h. le week-end, entre  10het 11h",
    format: 'Photo de profil de la cha??ne : 800??800 pixels.Photo de couverture : 2560??1440 pixels.Vignette de vid??o : 1280 x 720 pixels'}
];

 */