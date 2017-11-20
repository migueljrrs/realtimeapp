import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-cadastro-pessoa-lista',
  templateUrl: './cadastro-pessoa-lista.component.html',
  styleUrls: ['./cadastro-pessoa-lista.component.css']
})
export class CadastroPessoaListaComponent implements OnInit {

  pessoasRef: AngularFireList<any>;
  pessoas: Observable<any[]>;

  constructor(db: AngularFireDatabase) {
    this.pessoasRef = db.list('pessoas');
    this.pessoas = this.pessoasRef.valueChanges();
  }

  ngOnInit() {
  }

}
