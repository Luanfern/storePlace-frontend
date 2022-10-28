import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalServiceService } from '../modal-service.service';
@Component({
  selector: 'app-modal-component',
  templateUrl: './modal-component.component.html',
  styleUrls: ['./modal-component.component.scss']
})
export class ModalComponentComponent implements OnInit/*, OnDestroy*/ {

  contentMessageModal: {text: string, color: string} = {text: '123', color: 'white'}; 
  subscriptionContentModal!: Subscription
  title: string = 'teste'

  constructor(private modalController: ModalServiceService) {}

  ngOnInit(): void {
    this.subscriptionContentModal = this.modalController.contentModal.subscribe(
      m => {
        console.log(m)
        this.title = this.modalController.title
        this.contentMessageModal = m

      }
    )
  }

  close(){
    this.modalController.closeModal()
  }

 /* 
  ngOnDestroy(): void {
    this.subscriptionContentModal.unsubscribe()
  }
 */

}
