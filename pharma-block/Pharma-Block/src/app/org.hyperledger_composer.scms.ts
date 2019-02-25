import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace org.hyperledger_composer.scms{
   export class Product extends Asset {
      certificateOfOrigin: string;
      batchNumber: string;
      lotSize: string;
      expirationDate: string;
      shipmentDate: string;
      trackingNumber: string;
      freightTemperature: string;
      receivedDate: string;
      pickDate: string;
      customsTemperature: string;
      orderNumber: string;
      serialNumber: string;
      orderDate: string;
      invoiceNumber: string;
      retailerTemperature: string;
      owner: Participant;
      issuer: Participant;
   }
   export class Manufacturer extends Participant {
      companyName: string;
      email: string;
      username: string;
      password: string;
   }
   export class FreightandTransport extends Participant {
      companyName: string;
      email: string;
      username: string;
      password: string;
   }
   export class Customs extends Participant {
      companyName: string;
      email: string;
      username: string;
      password: string;
   }
   export class Distributor extends Participant {
      companyName: string;
      email: string;
      username: string;
      password: string;
   }
   export class Retailer extends Participant {
      companyName: string;
      email: string;
      username: string;
      password: string;
   }
   export class MoveProduct extends Transaction {
      product: Product;
      issuer: Participant;
      newOwner: Participant;
   }
// }
