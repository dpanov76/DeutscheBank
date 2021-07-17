import { Component, OnInit } from '@angular/core';
import { Region } from './models/region';
import { Store, select } from '@ngrx/store';
import { RegionsState, IRegionsState } from './store/state/regions.state';
import { selectRegion } from './store/actions/regions.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'country region selection';
  // region$ = this.store.pipe(select(state => state.regions));
  region$ = this.store.state$.pipe(
    map(state => state.regions),
  );
  //countries$ = this.store.pipe(select(state => state.countries));
  region = '';
  constructor(private store: Store<IRegionsState>) {

  }

  ngOnInit(){
    console.log(this.region$);
    this.store.setState({regions: ['1','2']});
  }
};
