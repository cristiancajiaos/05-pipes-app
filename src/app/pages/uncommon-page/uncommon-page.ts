import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Card } from '../../components/card/card';
import { I18nPluralPipe, I18nSelectPipe, SlicePipe } from '@angular/common';


const client1 = {
  name: 'John',
  gender: 'male',
  age:40,
  address: 'San Francisco, EEUU'
};

const client2 = {
  name: 'Carla',
  gender: 'female',
  age:42,
  address: 'Santiago, Chile'
};
@Component({
  selector: 'app-uncommon-page',
  imports: [Card, I18nSelectPipe, I18nPluralPipe, SlicePipe],
  templateUrl: './uncommon-page.html',
  changeDetection: ChangeDetectionStrategy.Eager,
})
export default class UncommonPage {

  //i18n Select
  client = signal(client1);

  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  changeClient() {
    if (this.client() === client1) {
      this.client.set(client2);
      return;
    }

    this.client.set(client1);
  }

  //i18n Plural
  clients = signal(['Maria', 'Pedro', 'Fernando', 'Melissa', 'Natalia', 'Andres', 'Juan', 'Carlos']);

  clientsMap = signal({
    '=0': 'No tenemos ningún cliente esperando',
    '=1': 'Tenemos un cliente esperando',
    '=2': 'Tenemos 2 clientes esperando',
    'other': 'Tenemos # clientes esperando'
  });

  deleteClient() {
    this.clients.update(
      prev => prev.slice(1)
    )
  }
}
