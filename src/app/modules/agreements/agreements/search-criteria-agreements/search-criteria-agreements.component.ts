import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, FormGroup, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { RegistroConvenios } from "./../../../../models/convenios.model";
import { ConveniosService } from "./../../../../services/convenios.service";
@Component({
  selector: 'app-search-criteria-agreements',
  templateUrl: './search-criteria-agreements.component.html',
  styleUrls: ['./search-criteria-agreements.component.css']
})
export class SearchCriteriaAgreementsComponent implements OnInit {
  formpro: FormGroup;
  public convenio: RegistroConvenios;
  public organoRespnsable: any = [];
  public tipoEntidad: any = [];
  public tipoConvenio: any = [];
  public materia: any = [];
  public hiddenOrgano: boolean = false;
  private modal: any;
  public isValidateDate: boolean = true;
  //si es numerico iniciarlo como null
  constructor(
    private convenioForm: FormBuilder,
    public router: Router,
    public conveniosService: ConveniosService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.initObject();
    this.callServices();
  }

  searchCriteria() {
    this.conveniosService.searchConvenio(this.convenio);
    this.router.navigate(["list_agreements"]);
  }
  hiddenDefaultOption() {
    this.hiddenOrgano = true;
  }
  initObject() {
    this.convenio = {
      titulo: "",
      organo_responsable: "",
      desde_description_organo: "",
      hasta_description_organo: "",
      num_convenio_1: "",
      num_convenio_2: "",
      num_convenio_3: "",
      num_convenio_4: "",
      desde_importe_gastos: "",
      hasta_importe_gastos: "",
      desde_importe_ingresos: "",
      hasta_importe_ingresos: "",
      organos_firmantes: "",
      entidades_firmantes: "",
      tipo_entidades: "",
      tipo_convenio: "",
      materia: ""
    };
  }
  callServices() {
    this.conveniosService.getCargaSelect().subscribe(
      result => {
        this.tipoConvenio = result.tipoConvenio;
        this.tipoEntidad = result.tipoEntidad;
        this.organoRespnsable = result.responsibe;
        this.materia = result.materia;
      },
      error => {
        /**
        this.modal = this.modalService.open(ErrorComponent);
        this.modal.componentInstance.data = "Oops..... 404 error";
        this.modal.componentInstance.title_modal = "Error";
        this.modal.result.then(result => {});
        */
      }
    );
  }
  public validateDate(): void {
    if (this.convenio.hasta_description_organo) {
      if (this.convenio.desde_description_organo > this.convenio.hasta_description_organo) {
        this.isValidateDate = false;
      } else {
        this.isValidateDate = true;
      }
    }
  }

}
