import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';
import { Router } from '@angular/router';

declare let paypal: any;

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  public payPalConfig?: IPayPalConfig;

  constructor(private router: Router) { }

  addScript: boolean = false;
  paypalLoad: boolean = true;

  finalAmount: number = 1;

  paypalConfig = {
    env: 'sandbox',
    client: {
      sandbox: 'ARg_I9TkfMZfkfxuOFQcimGfMUMXzZevPcmcQ4WwUw611UZt80i05MRWj-S71mQgTk-6BF-JhRuMpfO3',
      production: '<your-production-key here>'
    },
    commit: true,
    payment: (data, actions) => {
      return actions.payment.create({
        payment: {
          transactions: [
            { amount: { total: this.finalAmount, currency: 'SGD' } }
          ]
        }
      });
    },
    onAuthorize: (data, actions) => {
      return actions.payment.execute().then((payment) => {
        console.log(payment)
        alert("Payment Successful")
        this.router.navigateByUrl('/event');
      })
    },

    onApprove: (data, actions) => {
      actions.order.get().then(details => {
        console.log('onApprove - you can get full order details inside onApprove: ', details);
      });
    },

    onClientAuthorization: (data) => {
      console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
      // this.showSuccess = true;
    },

    onCancel: (data, actions) => {
      console.log('OnCancel', data, actions);
    },
    onError: err => {
      console.log('OnError', err);
    },
  };

  ngAfterViewChecked(): void {
    if (!this.addScript) {
      this.addPaypalScript().then(() => {
        paypal.Button.render(this.paypalConfig, '#paypal-checkout-btn');
        this.paypalLoad = false;
      })
    }
  }

  addPaypalScript() {
    this.addScript = true;
    return new Promise((resolve, reject) => {
      let scripttagElement = document.createElement('script');
      scripttagElement.src = 'https://www.paypalobjects.com/api/checkout.js';
      scripttagElement.onload = resolve;
      document.body.appendChild(scripttagElement);
    })
  }


  ngOnInit(): void {
    // this.initConfig();
  }

  // private initConfig(): void {
  //   this.payPalConfig = {
  //   currency: 'SGD',
  //   clientId: 'ARg_I9TkfMZfkfxuOFQcimGfMUMXzZevPcmcQ4WwUw611UZt80i05MRWj-S71mQgTk-6BF-JhRuMpfO3',
  //   createOrderOnClient: (data) => <ICreateOrderRequest>{
  //     intent: 'CAPTURE',
  //     purchase_units: [
  //       {
  //         amount: {
  //           currency_code: 'SGD',
  //           value: '9.99',
  //           breakdown: {
  //             item_total: {
  //               currency_code: 'SGD',
  //               value: '9.99'
  //             }
  //           }
  //         },
  //         items: [
  //           {
  //             name: 'Enterprise Subscription',
  //             quantity: '1',
  //             category: 'DIGITAL_GOODS',
  //             unit_amount: {
  //               currency_code: 'SGD',
  //               value: '9.99',
  //             },
  //           }
  //         ]
  //       }
  //     ]
  //   },
  //   advanced: {
  //     commit: 'true'
  //   },
  //   style: {
  //     label: 'paypal',
  //     layout: 'vertical'
  //   },
  //   onApprove: (data, actions) => {
  //     console.log('onApprove - transaction was approved, but not authorized', data, actions);
  //     actions.order.get().then(details => {
  //       console.log('onApprove - you can get full order details inside onApprove: ', details);
  //     });
  //   },
  //   onClientAuthorization: (data) => {
  //     console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
  //     // this.showSuccess = true;
  //   },
  //   onCancel: (data, actions) => {
  //     console.log('OnCancel', data, actions);
  //   },
  //   onError: err => {
  //     console.log('OnError', err);
  //   },
  //   onClick: (data, actions) => {
  //     console.log('onClick', data, actions);
  //   },
  // };
  // }

  paypal() {


  }

}
