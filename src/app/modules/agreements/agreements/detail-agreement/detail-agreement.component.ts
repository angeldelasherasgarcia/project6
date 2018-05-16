import { Component, OnInit } from "@angular/core";
import { ConveniosService } from "./../../../../services/convenios.service";
import { GlobalVariableService } from "./../../../../services/global-variable.service";
@Component({
  selector: "app-detail-agreement",
  templateUrl: "./detail-agreement.component.html",
  styleUrls: ["./detail-agreement.component.css"]
})
export class DetailAgreementComponent implements OnInit {
  public titulos = [];
  public isSelected;
  public selected_agreement: any[];
  public details_agreement: any[];
  public list_details_agreement:any[];
  public list_related:any[];
  private modal: any;
  constructor(
    public conveniosService: ConveniosService,
    public globalService: GlobalVariableService
  ) {}

  ngOnInit() {
    this.callService();
    this.titulos = ["Encomiendas", "Archivos", "Relacionados"];
    this.isSelected = this.titulos[0];
  }
  public getResultModal(event): void {
    var separador = "++";
    var resultOfModal = event.split(separador);
    if (resultOfModal[1] !== "cerrar") {
      this.conveniosService.getFile().subscribe(result => {
        if (resultOfModal[1] === "guardar") {
          this.globalService.downLoadCurrentFile(result, resultOfModal[0]);
        } else {
          this.globalService.showCurrentFile(result);
        }
      });
    }
  }
  public getOptionSelected(event): void {
    this.isSelected = event;
  }
  public callService() {
    this.conveniosService.getDetailAgreement(this.selected_agreement).subscribe(
      result => {
        this.details_agreement = result.detalle_convenios
      },
      error => {
        this.showModal()
      }
    )
    this.conveniosService.getListDetailAgreement().subscribe(
      result =>{
         this.list_details_agreement=result
      },
      error =>{
        this.showModal()
      }
    )
    this.conveniosService.getListRealted().subscribe(
      result =>{
        this.list_related = result
      },
      error =>{
        this.showModal();
      }
    )
  }
  public showModal() {
    //Poner modal
    /**    this.modal = this.modalService.open(ErrorComponent);
    this.modal.componentInstance.data = "Oops..... 404 error";
    this.modal.componentInstance.title_modal = "Error"
    this.modal.result.then((result) => {
    })
     */

  }
}
