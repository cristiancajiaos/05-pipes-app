import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Card } from '../../components/card/card';
import { AsyncPipe, I18nPluralPipe, I18nSelectPipe, JsonPipe, KeyValuePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { interval, map, tap } from 'rxjs';


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
  imports: [Card, I18nSelectPipe, I18nPluralPipe, SlicePipe, JsonPipe, UpperCasePipe, KeyValuePipe, TitleCasePipe, AsyncPipe],
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

  // KeyValuePipe
  profile = {
    name: 'Fernando',
    age: 36,
    address: 'Ottawa, Canada'
  }

  //AsyncPipe
  promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa');
      console.log('Promesa finalizada');
    }, 3500)
  });

  // AsyncPipe con observables
  myObservableTimer = interval(2000).pipe(
    map((value) => value + 1),
    tap((value) => console.log('tap:', value))
  );
}
