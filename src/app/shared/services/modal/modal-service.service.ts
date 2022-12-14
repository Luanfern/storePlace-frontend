import { ElementRef, Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { ModalComponentComponent } from './modal-component/modal-component.component';

@Injectable({
  providedIn: 'root'
})
export class ModalServiceService {

  public contentModal = new Subject<string>();
  modal!: NgbModal
  title: string = ''

  constructor(
    private ngModal: NgbModal,
  ) {
    this.modal = this.ngModal
  }

  changeModal(title: string ,initialMessage: string){
    this.title = title
    this.modal.open(ModalComponentComponent, { centered: true });
    setTimeout(() => {
      this.contentModal.next(initialMessage)
    }, 0)
    console.log(initialMessage)
  }

  closeModal(){
    this.modal.dismissAll()
  }

  changeContentModal(message: string){
    this.contentModal.next(message)
  }
}
